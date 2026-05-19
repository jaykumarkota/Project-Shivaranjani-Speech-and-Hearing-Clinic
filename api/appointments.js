/* global process */

function normalizePayload(body) {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}


export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
    });
  }

  const webAppURL =
    process.env.GOOGLE_SHEETS_WEB_APP_URL || process.env.VITE_GOOGLE_SHEETS_URL;

  if (!webAppURL) {
    console.error("[appointments] No Google Sheets URL configured");
    return res.status(500).json({
      status: "error",
      message: "Google Sheets web app URL is not configured",
    });
  }

  try {
    const payload = normalizePayload(req.body);
    const bodyString = JSON.stringify(payload);

    console.log("[appointments] Sending to Apps Script:", webAppURL);
    console.log("[appointments] Payload keys:", Object.keys(payload).join(", "));

    // ── Send request to Google Apps Script ──────────────────────
    // Use redirect: "follow" (default) — Google Apps Script always
    // redirects, and the final response contains the script output.
    const upstreamResponse = await fetch(webAppURL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: bodyString,
      redirect: "follow",
    });

    const responseText = await upstreamResponse.text();
    console.log("[appointments] Upstream status:", upstreamResponse.status);
    console.log("[appointments] Upstream response:", responseText.slice(0, 500));

    // ── Parse the response ─────────────────────────────────────
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      console.error("[appointments] Non-JSON response from Apps Script");
      return res.status(502).json({
        status: "error",
        message:
          "Google Sheets did not return valid JSON. Check the Apps Script deployment URL and access settings.",
        details: {
          statusCode: upstreamResponse.status,
          preview: responseText.slice(0, 300),
        },
      });
    }

    console.log("[appointments] Parsed response:", JSON.stringify(responseData));

    // ── Check for upstream errors ──────────────────────────────
    if (
      !upstreamResponse.ok ||
      !responseData ||
      typeof responseData !== "object" ||
      responseData.status === "error"
    ) {
      console.error("[appointments] Upstream error:", responseData);
      return res.status(502).json({
        status: "error",
        message:
          responseData.message || "Google Sheets rejected the submission",
        details: {
          statusCode: upstreamResponse.status,
          upstream: responseData,
        },
      });
    }

    // ── Success ────────────────────────────────────────────────
    console.log("[appointments] Success!");
    return res.status(200).json({
      status: "success",
      message: responseData.message || "Appointment booked successfully",
    });
  } catch (error) {
    console.error("[appointments] Fatal error:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to submit appointment",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}

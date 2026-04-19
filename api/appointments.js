/* global process */

function normalizePayload(body) {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
}

function toFormBody(payload) {
  const params = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    params.append(key, value == null ? "" : String(value));
  });

  return params.toString();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
    });
  }

  const webAppURL =
    process.env.GOOGLE_SHEETS_WEB_APP_URL || process.env.VITE_GOOGLE_SHEETS_URL;

  if (!webAppURL) {
    return res.status(500).json({
      status: "error",
      message: "Google Sheets web app URL is not configured",
    });
  }

  try {
    const payload = normalizePayload(req.body);

    const upstreamResponse = await fetch(webAppURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: toFormBody(payload),
    });

    const responseText = await upstreamResponse.text();

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = {
        status: upstreamResponse.ok ? "success" : "error",
        message: responseText || "Unexpected response from Google Sheets",
      };
    }

    if (!upstreamResponse.ok || responseData.status === "error") {
      return res.status(502).json({
        status: "error",
        message: responseData.message || "Google Sheets rejected the submission",
        details: responseData,
      });
    }

    return res.status(200).json({
      status: "success",
      message: responseData.message || "Appointment booked successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to submit appointment",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}

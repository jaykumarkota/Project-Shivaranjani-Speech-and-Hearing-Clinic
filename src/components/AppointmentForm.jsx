import { useState } from "react";
import {
  FaUserLarge,
  FaVenusMars,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClipboardList, FaTools } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import "../styles/components/AppointmentForm.css";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    age: "",
    gender: "",
    serviceType: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Date setup
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const max = maxDate.toISOString().split("T")[0];

  // Service options
  const serviceOptions = {
    hearing: [
      { value: "hearing_aids", label: "Hearing Aids" },
      { value: "hearing_therapy", label: "Hearing Therapy" },
      { value: "hearing_assessment", label: "Hearing Assessment" },
    ],
    speech: [
      { value: "articulation_therapy", label: "Articulation Therapy" },
      { value: "language_therapy", label: "Language Therapy" },
      { value: "voice_therapy", label: "Voice Therapy" },
    ],
  };

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear subservice when main type changes
    if (name === "serviceType") {
      setFormData((prev) => ({ ...prev, serviceType: value, service: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const webAppURL = "https://script.google.com/macros/s/AKfycbxhLpSOObf7EzxciLobQ6Kai1Nzdd1cIZW3n_sKGyxmc4I6yd_mWMYiSWdINZjvKsdb/exec"; // replace with your deployed script URL

      // For localhost testing: use no-cors (cannot read response)
      const isLocalhost = window.location.hostname === "localhost";

      const response = await fetch(webAppURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: isLocalhost ? "no-cors" : "cors",
        mode: "no-cors" // ✅ localhost uses no-cors, production uses cors
      });

      if (!isLocalhost) {
        // Only check response for production (CORS allowed)
        const result = await response.json();
        if (result.status !== "success") {
          throw new Error(result.message || "Submission failed");
        }
      }

      setStatus("✅ Submitted successfully!");
      setFormData({
        name: "",
        number: "",
        email: "",
        age: "",
        gender: "",
        serviceType: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("❌ Submission failed. Please try again.");
    }
  };

  // Dynamically load subservice options
  const currentSubOptions =
    formData.serviceType === "hearing"
      ? serviceOptions.hearing
      : formData.serviceType === "speech"
        ? serviceOptions.speech
        : [];

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="input-box name-box">
        <FaUserLarge className="input-icon" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          pattern="^[A-Za-z ]{2,50}$"
          title="Name should be 2–50 letters only"
          aria-label="name"
          required
        />
      </div>

      {/* Phone */}
      <div className="input-box tel-box">
        <BsFillTelephoneFill className="input-icon" />
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your Number"
          pattern="^[0-9]{10}$"
          title="Enter a 10-digit phone number"
          aria-label="number"
          required
        />
      </div>

      {/* Email */}
      <div className="input-box email-box">
        <MdEmail className="input-icon" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          aria-label="email"
          required
        />
      </div>

      {/* Age */}
      <div className="input-box age-box">
        <GiAges className="input-icon" />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your Age"
          min="1"
          max="100"
          aria-label="age"
          required
        />
      </div>

      {/* Gender */}
      <div className="input-box gender-box">
        <FaVenusMars className="input-icon" />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          aria-label="gender"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Service Type */}
      <div className="input-box service-type-box">
        <FaUserDoctor className="input-icon" />
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-label="service type"
          required
        >
          <option value="">Select Service Type</option>
          <option value="hearing">Hearing Service</option>
          <option value="speech">Speech Service</option>
        </select>
      </div>

      {/* Sub Service */}
      <div className="input-box service-sub-box">
        <FaClipboardList className="input-icon" />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-label="service"
          required
          disabled={!formData.serviceType}
        >
          <option value="">
            {formData.serviceType
              ? "Select Service"
              : "Select Service Type first"}
          </option>
          {currentSubOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div className="input-box date-box">
        <FaCalendarDays className="input-icon" />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={today}
          max={max}
          aria-label="appointment date"
          required
        />
      </div>

      {/* Time */}
      <div className="input-box time-box">
        <FaClock className="input-icon" />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          min="10:00"
          max="20:00"
          step="900"
          aria-label="appointment time"
          required
        />
      </div>

      {/* Message */}
      <div className="input-box msg-box">
        <FaStickyNote className="input-icon msg-icon" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          rows="3"
          minLength="5"
          maxLength="300"
          aria-label="message"
        ></textarea>
      </div>

      {/* Submit */}
      <div className="submit-box">
        <button
          type="submit"
          className="submit-btn btn"
          disabled={status === "Submitting..."}
        >
          {status === "Submitting..." ? "Submitting..." : "Submit"}
        </button>
        {status && <p className="submit-confirm-msg">{status}</p>}
      </div>
    </form>
  );
}

export default AppointmentForm;

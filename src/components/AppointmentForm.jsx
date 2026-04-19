import { useState } from "react";
import { useLocation } from "react-router-dom";
import { serviceOptions } from "../assets/assets.js";
import {
  FaUserLarge,
  FaVenusMars,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import "../styles/components/AppointmentForm.css";

function getServiceOptions(serviceType, selectedService) {
  const baseOptions =
    serviceType === "hearing"
      ? serviceOptions.hearing
      : serviceType === "speech"
        ? serviceOptions.speech
        : serviceType === "implant"
          ? serviceOptions.implant
          : [];

  if (!selectedService || baseOptions.some((option) => option.value === selectedService)) {
    return baseOptions;
  }

  return [
    { value: selectedService, label: selectedService },
    ...baseOptions,
  ];
}

function AppointmentForm() {
  const location = useLocation();
  const initialServiceType = location.state?.serviceType || "";
  const initialService = location.state?.service || "";

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    age: "",
    gender: "",
    serviceType: initialServiceType,
    service: initialService,
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const max = maxDate.toISOString().split("T")[0];

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 20 && minute > 0) {
          break;
        }

        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const currentSubOptions = getServiceOptions(formData.serviceType, formData.service);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (!/^[A-Za-z ]{2,50}$/.test(value)) {
          error = "Name should be 2-50 letters only";
        }
        break;

      case "number":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(value)) {
          error = "Enter a valid 10-digit phone number";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;

      case "age": {
        const ageNum = parseInt(value, 10);
        if (!value) {
          error = "Age is required";
        } else if (Number.isNaN(ageNum) || ageNum < 1 || ageNum > 100) {
          error = "Age must be between 1 and 100";
        }
        break;
      }

      case "gender":
        if (!value) {
          error = "Please select a gender";
        }
        break;

      case "serviceType":
        if (!value) {
          error = "Please select a service type";
        }
        break;

      case "service":
        if (!value && formData.serviceType !== "video_consultancy") {
          error = "Please select a service";
        }
        break;

      case "date":
        if (!value) {
          error = "Please select an appointment date";
        } else if (value < today || value > max) {
          error = "Date must be within the next 30 days";
        }
        break;

      case "time":
        if (!value) {
          error = "Please select an appointment time";
        }
        break;

      case "message":
        if (value && (value.length < 5 || value.length > 300)) {
          error = "Message should be between 5 and 300 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "serviceType") {
      setFormData((prev) => ({ ...prev, serviceType: value, service: "" }));
      setErrors((prev) => ({ ...prev, serviceType: "", service: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== "message") {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      } else if (formData[key]) {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) {
      setStatus("Please fix the errors before submitting.");
      return;
    }

    setStatus("Submitting...");

    try {
      const payload = {
        ...formData,
        service:
          formData.serviceType === "video_consultancy"
            ? formData.service || "Video Consultancy"
            : formData.service,
      };

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.status !== "success") {
        throw new Error(result.message || "Appointment submission failed");
      }

      setStatus("Appointment request submitted successfully.");
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
      setErrors({});

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus(
        error instanceof Error
          ? error.message
          : "Submission failed. Please check the booking setup and try again."
      );
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate>
      <div className="input-box name-box">
        <FaUserLarge className="input-icon" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          aria-label="name"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="input-box tel-box">
        <BsFillTelephoneFill className="input-icon" />
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your Number"
          aria-label="number"
          className={errors.number ? "input-error" : ""}
        />
        {errors.number && <span className="error-message">{errors.number}</span>}
      </div>

      <div className="input-box email-box">
        <div className="input-wrapper">
          <MdEmail className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            aria-label="email"
            className={errors.email ? "input-error" : ""}
          />
        </div>
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

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
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>

      <div className="input-box gender-box">
        <FaVenusMars className="input-icon" />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          aria-label="gender"
          className={errors.gender ? "input-error" : ""}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error-message">{errors.gender}</span>}
      </div>

      <div className="input-box service-type-box">
        <FaUserDoctor className="input-icon" />
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-label="service type"
          className={errors.serviceType ? "input-error" : ""}
        >
          <option value="">Select Service Type</option>
          <option value="hearing">Hearing Service</option>
          <option value="speech">Speech Service</option>
          <option value="implant">Implant Service</option>
          <option value="video_consultancy">Video Consultancy</option>
        </select>
        {errors.serviceType && (
          <span className="error-message">{errors.serviceType}</span>
        )}
      </div>

      <div className="input-box service-sub-box">
        <FaClipboardList className="input-icon" />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-label="service"
          disabled={!formData.serviceType || formData.serviceType === "video_consultancy"}
          className={errors.service ? "input-error" : ""}
        >
          <option value="">
            {formData.serviceType && formData.serviceType !== "video_consultancy"
              ? "Select Service"
              : "Select Service Type first"}
          </option>
          {currentSubOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && <span className="error-message">{errors.service}</span>}
      </div>

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
          className={errors.date ? "input-error" : ""}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}
      </div>

      <div className="input-box time-box">
        <FaClock className="input-icon" />
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          aria-label="appointment time"
          className={errors.time ? "input-error" : ""}
        >
          <option value="">Select Time</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time && <span className="error-message">{errors.time}</span>}
      </div>

      <div className="input-box msg-box">
        <FaStickyNote className="input-icon msg-icon" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message (Optional)"
          rows="3"
          aria-label="message"
          className={errors.message ? "input-error" : ""}
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

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

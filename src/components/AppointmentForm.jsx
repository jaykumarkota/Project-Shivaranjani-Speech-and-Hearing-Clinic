import { useState } from "react";
import {
  FaUserLarge, FaVenusMars, FaCalendarDays, FaClock,
} from "react-icons/fa6";
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
    date: "",
    time: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const max = maxDate.toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzJcEZ8GwVzH05fNLUSOtIzshE71mrXknoqvSm2AjB9tP3h8V90JnKxb93B7uwz--qz/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });

      setStatus("✅ Submitted successfully!");
      setFormData({
        name: "",
        number: "",
        email: "",
        age: "",
        gender: "",
        date: "",
        time: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Submission failed. Try again.");
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
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

      <div className="input-box email-box">
        <MdEmail className="input-icon" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          aria-label="email address"
          required
        />
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
          required
        />
      </div>

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

      <div className="submit-box">
        <button type="submit" className="submit-btn btn">
          Submit
        </button>
        {status && <p className="submit-confirm-msg">{status}</p>}
      </div>
    </form>
  );
}

export default AppointmentForm;

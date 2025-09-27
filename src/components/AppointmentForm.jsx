import { FaUserLarge } from "react-icons/fa6";
import { FaVenusMars } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import "../styles/components/AppointmentForm.css";

function AppointmentForm() {
  const today = new Date().toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const max = maxDate.toISOString().split("T")[0];

  return (
    <form className="appointment-form">
      <div className="input-box name-box">
        <FaUserLarge className="input-icon" />
        <input
          type="text"
          name="name"
          className="input-name"
          placeholder="Your Name"
          pattern="[A-Za-z ]{2,50}"
          title="Name should be 2–50 letters only"
          required
        />
      </div>

      <div className="input-box tel-box">
        <BsFillTelephoneFill className="input-icon" />
        <input
          type="tel"
          name="number"
          className="input-number"
          placeholder="Your Number"
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          required
        />
      </div>

      <div className="input-box email-box">
        <MdEmail className="input-icon" />
        <input
          type="email"
          name="email"
          className="input-email"
          placeholder="Your Email"
          required
        />
      </div>

      <div className="input-box age-box">
        <GiAges className="input-icon" />
        <input
          type="number"
          name="age"
          className="input-age"
          placeholder="Your Age"
          min="1"
          max="100"
          required
        />
      </div>

      <div className="input-box gender-box">
        <FaVenusMars className="input-icon" />
        <select name="gender" className="user-gender-select" required>
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
          className="input-date"
          min={today}
          max={max}
          required
        />
      </div>

      <div className="input-box time-box">
        <FaClock className="input-icon" />
        <input
          type="time"
          name="time"
          className="input-time"
          min="10:00"
          max="20:00"
          step="900"
          required
        />
      </div>

      <div className="input-box msg-box">
        <FaStickyNote className="input-icon msg-icon" />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          rows="3"
          minLength="5"
          maxLength="300"
        ></textarea>
      </div>

      <div className="submit-box">
        <button type="submit" className="submit-btn btn">
          Submit
        </button>
        <p className="submit-confirm-msg">submited succuesfully</p>
      </div>
    </form>
  );
}
export default AppointmentForm;

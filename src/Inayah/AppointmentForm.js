import React, { useState } from "react";
import "./AppointmentForm.css";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    shift: "",
    emergencyName: "",
    emergencyPhone: "",
    notes: "",
    doctor : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side check
    const required = [
      "fullName",
      "email",
      "phone",
      "service",
      "date",
      "shift",
      "emergencyName",
      "emergencyPhone",
      "doctor",
    ];
    const missing = required.filter((k) => !form[k]?.trim());
    if (missing.length) {
      alert("Please fill in all required fields.");
      return;
    }
    // You can replace this with your API call
    console.log("Form submitted:", form);
    alert("Thanks! We’ll confirm your appointment within 24 hours.");
    // setForm({...}) // optionally reset
  };

  return (
    <main className="appt-root">
      <section className="appt-card">
        <header className="appt-header">
          <h1 className="appt-title">Appointment Booking Form</h1>
          <p className="appt-note">
            When you submit this form, it will not automatically collect your
            details like name and email address unless you provide it yourself.
          </p>
        </header>

        <div className="appt-required">* Required</div>

        <h2 className="appt-section">Booking details</h2>
        <p className="appt-subnote">
          By submitting this form, you agree to be contacted regarding your
          appointment. We will confirm your appointment within 24 hours. If you
          do not receive confirmation, please contact us directly.
        </p>

        <form className="appt-form" onSubmit={handleSubmit} noValidate>
          {/* 1. Full Name */}
          <div className="field">
            <label className="label" htmlFor="fullName">
              <span className="num">1.</span> Full Name{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="input"
              placeholder="Enter your answer"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* 2. Email */}
          <div className="field">
            <label className="label" htmlFor="email">
              <span className="num">2.</span> Email Address{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              placeholder="Enter your answer"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 3. Contact Number */}
          <div className="field">
            <label className="label" htmlFor="phone">
              <span className="num">3.</span> Contact Number{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="input"
              placeholder="Enter your answer"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* 4. Service (radios) */}
          <fieldset className="field">
            <legend className="label">
              <span className="num">4.</span> Service{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </legend>

            <div className="radios">
              <label className="radio">
                <input
                  type="radio"
                  name="service"
                  value="GP Consultation"
                  checked={form.service === "GP Consultation"}
                  onChange={handleChange}
                  required
                />
                <span>GP Consultation</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="service"
                  value="Vaccination"
                  checked={form.service === "Vaccination"}
                  onChange={handleChange}
                  required
                />
                <span>Vaccination</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="service"
                  value="Medical checkup"
                  checked={form.service === "Medical checkup"}
                  onChange={handleChange}
                  required
                />
                <span>Medical checkup</span>
              </label>
            </div>
          </fieldset>

          {/* 5. Appointment Date */}
          <div className="field">
            <label className="label" htmlFor="date">
              <span className="num">5.</span> Appointment Date{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="input"
              placeholder="Please input date (M/d/yyyy)"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* 6. Preferred shift (radios) */}
          <fieldset className="field">
            <legend className="label">
              <span className="num">6.</span> Preferred Time slot{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </legend>

            <div className="radios">
              <label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="8-9"
                  checked={form.shift === "8-9"}
                  onChange={handleChange}
                  required
                />
                <span>8am -9am</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="9-10"
                  checked={form.shift === "9-10"}
                  onChange={handleChange}
                  required
                />
                <span>9am -10am</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="10-11"
                  checked={form.shift === "10-11"}
                  onChange={handleChange}
                  required
                />
                <span>10am -11am</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="11-12"
                  checked={form.shift === "11-12"}
                  onChange={handleChange}
                  required
                />
                <span>11am -12pm</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="2-3"
                  checked={form.shift === "2-3"}
                  onChange={handleChange}
                  required
                />
                <span>2pm - 3pm</span>
              </label>

<label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="3-4"
                  checked={form.shift === "3-4"}
                  onChange={handleChange}
                  required
                />
                <span>3pm - 4pm</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="shift"
                  value="4-5"
                  checked={form.shift === "4-5"}
                  onChange={handleChange}
                  required
                />
                <span>4pm - 5pm</span>
              </label>

            </div>
          </fieldset>

          {/* 7. Emergency Contact Name */}
          <div className="field">
            <label className="label" htmlFor="emergencyName">
              <span className="num">7.</span> Emergency Contact Name{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </label>
            <input
              id="emergencyName"
              name="emergencyName"
              type="text"
              className="input"
              placeholder="Enter your answer"
              value={form.emergencyName}
              onChange={handleChange}
              required
            />
          </div>

          {/* 8. Emergency Contact Number */}
          <div className="field">
            <label className="label" htmlFor="emergencyPhone">
              <span className="num">8.</span> Emergency Contact Number{" "}
              <span aria-hidden="true" className="req">
                *
              </span>
            </label>
            <input
              id="emergencyPhone"
              name="emergencyPhone"
              type="tel"
              className="input"
              placeholder="Enter your answer"
              value={form.emergencyPhone}
              onChange={handleChange}
              required
            />
          </div>

          {/* 9. Additional Information */}
          <div className="field">
            <label className="label" htmlFor="notes">
              <span className="num">9.</span> Additional Information
            </label>
            <textarea
              id="notes"
              name="notes"
              className="textarea"
              placeholder="Enter your answer"
              rows={4}
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="submit-row">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

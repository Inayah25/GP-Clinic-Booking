import React from "react";
import "./ProfileScreen.css";

export default function ProfileScreen() {
  const user = {
    fullName: "John Doe",
    email: "john@example.com",
    dob: "March 25, 1980",
    address1: "456 Ehn Street",
    address2: "City, State 07890",
    appointment: "Tomorrow at 10.00 AM",
  };

  return (
    <main className="profile-root">
      <div className="wrap">
        <h1 className="title">My Profile</h1>
        <p className="subtitle">Welcome back, {user.fullName}</p>

        <section className="card" aria-label="Profile card">
          <h2 className="name">{user.fullName}</h2>
          <hr className="divider" />

          <div className="fields">
            <div className="row">
              <div className="label">Email:</div>
              <div className="value" data-wrap>{user.email}</div>
            </div>

            <div className="row">
              <div className="label">Date of Birth:</div>
              <div className="value">{user.dob}</div>
            </div>

            <div className="row">
              <div className="label">Address:</div>
              <div className="value">
                <div>{user.address1}</div>
                <div>{user.address2}</div>
              </div>
            </div>

            <div className="row">
              <div className="label">Appointments:</div>
              <div className="value">{user.appointment}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

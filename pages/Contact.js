// pages/contact.js
import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Contact Page</h1>
        <div className="contact-container" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2>Contact Our Team Members</h2>
          <div className="team-member" style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Nirmal Avhad</h3>
            <p style={{ fontSize: "16px" }}>Email: avhadnirmal072@gmail.com</p>
          </div>
          <div className="team-member" style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Anup Muttha</h3>
            <p style={{ fontSize: "16px" }}>Email: anupmuttha666@gmail.com</p>
          </div>
          <div className="team-member" style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Arshdeep Singh Mathadu</h3>
            <p style={{ fontSize: "16px" }}>Email: arshdeepsinghmathadu707@gmail.com</p>
          </div>
          <div className="team-member" style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Sanjay Prajapati</h3>
            <p style={{ fontSize: "16px" }}>Email: sanjayprajapati82@proton.me</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

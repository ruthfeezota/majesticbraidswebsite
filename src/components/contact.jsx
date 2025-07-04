import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_c1pdnqt";
const TEMPLATE_ID = "template_eypahnq";
const PUBLIC_KEY = "U80LPRuWqwjMEgMAa";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const db = getFirestore(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(false);

    const templateParams = { name, email, message };

    try {
      // 1. Add to Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      console.log("Firestore doc ID:", docRef.id);

      // 2. Send via EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // 3. Reset form and show success
      setState(initialState);
      setSubmissionSuccess(true);

      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmissionError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-neutral-50 relative">
      {/* Modal Confirmation */}
      {submissionSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-md shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Message Received!</h2>
            <p className="text-gray-700 mb-2">
              Thanks for contacting <strong>Majestic Braids</strong>. We'll get back to you as soon as possible.
            </p>
            <p className="text-sm text-gray-500">We typically respond within a few hours.</p>
            <button
              onClick={() => setSubmissionSuccess(false)}
              className="mt-4 inline-block bg-[#73C2F4] hover:bg-[#73C2F4] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-6xl font-semibold text-white mb-4">
                Have a special question or need consultation? Contact Us!
              </h2>
              <p className="text-[14px] text-white leading-relaxed">
                Please fill out the form below to send us an email, and we will get back to you as soon as possible.
              </p>
            </div>

            {submissionError && (
              <div className="mb-6 p-4 rounded-md bg-red-100 border border-red-300 text-red-800 text-sm">
                ❌ {submissionError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-white rounded-md focus:ring-[#73C2F4] focus:border-[#73C2F4] text-black"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                  value={name}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-white rounded-md focus:ring-[#73C2F4] focus:border-[#73C2F4] text-black"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-4 py-3 border border-white text-black rounded-md focus:ring-[#73C2F4] focus:border-[#73C2F4]"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={message}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`inline-block bg-[#73C2F4] hover:bg-[#73C2F4] text-white font-semibold py-3 px-8 rounded-full transition duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-white" />
                  <p className="text-white">{props.data?.address || "Loading Address..."}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-white" />
                  <p className="text-white">{props.data?.phone || "Loading Phone..."}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-white" />
                  <p className="text-white">{props.data?.email || "Loading Email..."}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-12">
              <h3 className="text-xl font-semibold text-white mb-1">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href={props.data?.instagram || "/"}
                  className="text-white hover:text-[#73C2F4] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-10 w-10" />
                </a>
                <a
                  href={props.data?.pinterest || "/"}
                  className="text-white hover:text-[#73C2F4] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest className="h-10 w-10" />
                </a>
                <a
                  href={props.data?.facebook || "/"}
                  className="text-white hover:text-[#73C2F4] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-white text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 Majestic Braids</p>
        </div>
      </div>
    </div>
  );
};

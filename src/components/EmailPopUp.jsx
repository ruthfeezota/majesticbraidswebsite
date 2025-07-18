import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { db, collection, addDoc } from "../firebase";
import popupImage from "../components/assets/PopImage.jpg";

const SERVICE_ID = "service_c1pdnqt";
const TEMPLATE_ID = "template_lv9xhis";
const PUBLIC_KEY = "U80LPRuWqwjMEgMAa";

export default function MajesticBraidsPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const lastShown = localStorage.getItem("majesticBraidsPopupDate");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("majesticBraidsPopupDate", today);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(formRef.current);
      const name = formData.get("name");
      const email = formData.get("email");

      await addDoc(collection(db, "MajesticBraidsSignups"), {
        name,
        email,
        timestamp: new Date(),
      });

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 overflow-auto">
      <div className="relative bg-white w-full max-w-5xl flex flex-col md:flex-row rounded-lg overflow-hidden shadow-xl h-[500px]">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 text-black text-3xl hover:text-red-500 z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={popupImage}
            alt="Braiding model"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 leading-snug">
            ✨ Get 15% Off Your First Braiding Appointment!
          </h2>

          <div className="text-gray-700 text-md sm:text-md mb-4">
            Join the Majestic Braids insider list and receive:
            <ul className="mt-2 space-y-1">
              <li>💇‍♀ 15% OFF your first appointment</li>
              <li>📬 Monthly hair care tips & exclusive coupons</li>
              <li>🎁 Early access to new styles and deals</li>
            </ul>
          </div>

          {submitted ? (
            <p className="text-green-600 mt-4 font-medium">
              🎉 You're in! Check your email for your 15% off code.
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-md sm:text-md"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-md sm:text-md"
              />
              <button
                type="submit"
                className="bg-black text-white py-3 rounded hover:bg-gray-800 transition text-md sm:text-md font-semibold"
              >
                Claim My 15% Off Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

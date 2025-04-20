import { useState } from "react";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase"; // Assuming your Firebase config is in firebaseConfig.js

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const db = getFirestore(app); // Initialize Firestore

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionSuccess(false);

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      clearState();
      setSubmissionSuccess(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmissionSuccess(false);
      // Optionally show an error message to the user using another state variable
    } finally {
      setIsSubmitting(false);
      // Optionally reset the success message after a few seconds
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 3000);
    }
  };

  return (
    <div id="contact" className="py-16 bg-neutral-50 relative">
      {/* Success Modal */}
      {submissionSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-md shadow-lg p-8 text-center">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700 mb-4">Your message has been sent successfully.</p>
            <button
              onClick={() => setSubmissionSuccess(false)}
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
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
              <h2 className="text-6xl font-semibold text-gray-800 mb-4">
                Get InTouch: Contact Us
                for Your Braiding Needs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Please fill out the form below to send us an email, and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-md focus:ring-teal-500 focus:border-teal-500"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/3">
            {/* Contact Info and Follow Us sections remain the same */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <p className="text-gray-600">
                    {props.data ? props.data.address : "Loading Address..."}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-500" />
                  <p className="text-gray-600">
                    {props.data ? props.data.phone : "Loading Phone..."}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-500" />
                  <p className="text-gray-600">
                    {props.data ? props.data.email : "Loading Email..."}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-1">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href={props.data ? props.data.instagram : "/"}
                  className="text-gray-500 hover:text-teal-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-10 w-10" />
                </a>
                <a
                  href={props.data ? props.data.pinterest : "/"}
                  className="text-gray-500 hover:text-teal-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <a
                  href={props.data ? props.data.facebook : "/"}
                  className="text-gray-500 hover:text-teal-500 transition duration-300"
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
      <div id="" className="py-6 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 Majestic Braids</p>
        </div>
      </div>
    </div>
  );
};
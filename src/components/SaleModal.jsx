import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import SaleImage from '../components/assets/April Sale.png';

function SaleModal() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrollTime, setScrollTime] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    let scrollTimer;
    let interval;

    const startTracking = () => {
      if (!interval) {
        interval = setInterval(() => {
          setScrollTime((prev) => prev + 1);
        }, 1000);
      }
    };

    const stopTracking = () => {
      clearInterval(interval);
      interval = null;
    };

    const handleScroll = () => {
      startTracking();
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        stopTracking();
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (scrollTime >= 15 && !hasTriggered && !hasVisited) {
      setShowModal(true);
      setHasTriggered(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, [scrollTime, hasTriggered]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      await addDoc(collection(db, 'saleEmails'), {
        email,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-[90%] max-w-3xl bg-white overflow-hidden rounded-md shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black z-50"
          onClick={() => setShowModal(false)}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Vertical layout with image on top */}
        <div className="flex flex-col">
          {/* Top Image */}
          <img
            src={SaleImage}
            alt="Sale"
            className="w-full h-48 object-cover md:h-72"
          />

          {/* Content */}
          <div className="px-6 py-8 sm:px-12 sm:py-10">
            <h3 className="mb-2 text-2xl font-extrabold md:text-5xl text-[#73C2F4] text-center">
              15% Off All Services For All New Customers
            </h3>
            <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
              Get 15 percent off all services for new clients. Enter your email to receive your code.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex items-center relative mb-4 max-w-full rounded-md border border-black px-1 focus-within:outline focus-within:outline-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-9 w-full px-3 py-6 text-sm text-black placeholder:text-black focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
                <input
                  type="submit"
                  value="Get Sale Now"
                  className="w-auto cursor-pointer rounded-md bg-[#73C2F4] px-6 py-2 font-semibold text-white"
                />
              </form>
            ) : (
              <p className="text-green-600 font-medium">Success! Check your inbox for your discount code.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleModal;

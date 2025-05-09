import React, { useState } from "react";
import ChatWidget from "./components/ChatWidget";
import { useEffect, useRef } from "react";

function App() {
  const menuRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



  const [isDark, setIsDark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);
  const toggleMenu = () => setShowMenu(!showMenu);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

        const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted! We’ll get back to you shortly.");
        console.log("Form Submitted", formData);
      };


  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all">

        {/* Hero Section */}
       <section className="bg-blue-500 text-white py-10 px-6 text-center relative">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between">
    {/* Left Spacer */}
    <div className="w-1/3 hidden sm:block"></div>

    {/* Centered Title */}
    <div className="w-full sm:w-1/3 text-center">
      <h1 className="text-4xl font-bold">SoftSell</h1>
    </div>

    {/* Right Menu */}
    <div ref={menuRef} className="w-1/3 flex justify-end relative z-50">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-3xl focus:outline-none"
      >
        &#9776;
      </button>

      {showMenu && (
        <div
          className="absolute right-0 top-12 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => {
              toggleDarkMode();
              setShowMenu(false);
            }}
            className="flex items-center justify-center gap-2 px-4 py-2 w-full text-black dark:text-white text-sm"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </div>
  </div>

  <p className="mt-6 text-xl">
    Sell your software licenses quickly and securely.
  </p>
  <button
    className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600"
    onClick={() => alert("Thanks for choosing to sell your license!")}
  >
    Sell My Licenses
  </button>
</section>


        {/* How It Works */}
        <section id="how-it-works" className="bg-gray-50 dark:bg-gray-800 py-16 transition-all">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Upload License",
                "Get Valuation",
                "Review Offer",
                "Get Paid",
                "Transfer Ownership",
                "Track Your Sale",
              ].map((title, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">{`Step ${index + 1}: ${title}`}</h3>
                  <p className="text-black dark:text-gray-300">
                    {[
                      "Securely provide details of your software license.",
                      "We analyze the license and offer a fair price.",
                      "Check the deal and terms before approval.",
                      "Receive payment via your preferred method.",
                      "We handle the secure license transfer process for you.",
                      "Monitor progress and get updates directly from our dashboard.",
                    ][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-16 px-4 text-center bg-white dark:bg-gray-900 transition-all">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fast Payments",
              "Trusted Partners",
              "Simple Process",
              "Security",
              "Customer Support",
              "Transparency",
            ].map((reason, index) => (
              <div
                key={index}
                className="p-6 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg"
              >
                <h3 className="font-semibold text-xl">{reason}</h3>
                <p className="mt-2">
                  {[
                    "We ensure prompt payment once the deal is finalized.",
                    "We collaborate with top companies for secure transactions.",
                    "Our easy 3-step process makes selling your software simple.",
                    "Your data and transactions are handled with the highest security.",
                    "We offer 24/7 customer support to guide you through the process.",
                    "We provide clear and transparent valuation without hidden fees.",
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-all">
          <h2 className="text-3xl font-semibold text-center mb-8">Customer Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                text: `"The process was simple and fast! I received my payment within days of uploading my license. Highly recommend!"`,
                name: "John Doe",
                role: "Software Engineer, ABC Corp",
              },
              {
                text: `"SoftSell made selling my software licenses a breeze! The whole process was smooth and professional."`,
                name: "Jane Smith",
                role: "IT Manager, XYZ Inc",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white dark:bg-gray-700 text-black dark:text-white shadow-lg rounded-lg"
              >
                <p className="italic dark:text-gray-300">{testimonial.text}</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-all">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg"
          >
            {[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" },
              { name: "company", type: "text", placeholder: "Your Company" },
            ].map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600"
              />
            ))}

            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600"
            >
              <option value="">Software License Type</option>
              <option value="microsoft">Microsoft</option>
              <option value="adobe">Adobe</option>
              <option value="autodesk">Autodesk</option>
              <option value="intuit">Intuit</option>
              <option value="corel">Corel</option>
              <option value="vmware">VMware</option>
              <option value="oracle">Oracle</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-600 w-full"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;

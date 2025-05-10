import React, { useState, useEffect, useRef } from "react";
import ChatWidget from "./components/ChatWidget";
import { Package } from "lucide-react";

function App() {
  const menuRef = useRef();
  const [showContactModal, setShowContactModal] = useState(false);
  const [submittedLicenseType, setSubmittedLicenseType] = useState("");

  const [isDark, setIsDark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [showFormAlert, setShowFormAlert] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDarkMode = () => setIsDark(!isDark);
  const toggleMenu = () => setShowMenu(!showMenu);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setShowFormAlert(true);
    } else {
      setShowFormAlert(false);
      setSubmittedLicenseType(formData.licenseType);
      setShowContactModal(true);
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
    <div
      className={`min-h-screen transition-colors duration-300
        ${isDark
          ? "bg-gray-900 text-white"
          : "bg-[blue-500] text-black"}`}
    >
        {/* Hero Section */}
      <section
          className={`relative py-10 px-6 transition-all duration-300 
            ${isDark ? "bg-blue-500 text-white" : "bg-blue-500 text-white"}`}
        >
          {/* Hamburger (always visible) */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={toggleMenu}
              aria-label="Open menu"
              className="text-3xl text-white focus:outline-none"
            >
              &#9776;
            </button>
            {showMenu && (
             <div
  className="absolute top-full right-1 mt-2 w-28 text-xs bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg z-50"
  onClick={(e) => e.stopPropagation()}
>
  <button
    onClick={() => {
      toggleDarkMode();
      setShowMenu(false);
    }}
    className="w-full text-left px-3 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>
</div>



            )}
          </div>

          <div className="max-w-screen-xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
            {/* Left spacer on desktop */}
            <div className="w-1/3 hidden sm:block" />

            {/* Logo & Title */}
            <div className="flex items-center gap-3 justify-center w-full sm:w-1/3 mt-6 sm:mt-0 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-current" />
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
                SoftSell
              </h1>
            </div>

            {/* Right spacer on desktop */}
            <div className="w-1/3 hidden sm:block" />
          </div>

          <div className="mt-6 flex flex-col items-center text-center">
            <p className="text-sm sm:text-lg lg:text-xl mb-4 max-w-md">
              Sell your software licenses quickly and securely.
            </p>
            <button
              onClick={() => setShowSuccessModal(true)}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all"
            >
              Sell My Licenses
            </button>
          </div>
        </section>


        {/* Sell‑license modal */}
{showSuccessModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
    <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transform transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4">Success</h2>
      <p className="mb-4">Your license has been successfully sold!</p>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
        onClick={() => setShowSuccessModal(false)}
      >
        Close
      </button>
    </div>
  </div>
)}

{/* Contact‑submit modal */}
{showContactModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
    <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transform transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
      <p className="mb-2">Your message has been submitted. We’ll be in touch soon.</p>
      <p className="mb-4">
        <span className="font-semibold">Selected License Type:</span>{" "}
        {submittedLicenseType}
      </p>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
        onClick={() => setShowContactModal(false)}
      >
        Close
      </button>
    </div>
  </div>
)}


        {/* How It Works */}
        <section id="how-it-works" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-300">
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
              ].map((title, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{`Step ${i + 1}: ${title}`}</h3>
                  <p className="text-black dark:text-gray-300">
                    {[
                      "Securely provide details of your software license.",
                      "We analyze the license and offer a fair price.",
                      "Check the deal and terms before approval.",
                      "Receive payment via your preferred method.",
                      "We handle the secure license transfer process for you.",
                      "Monitor progress and get updates directly from our dashboard.",
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-16 px-4 text-center bg-white dark:bg-gray-900 transition-colors duration-300">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fast Payments",
              "Trusted Partners",
              "Simple Process",
              "Security",
              "Customer Support",
              "Transparency",
            ].map((reason, i) => (
              <div
                key={i}
                className="p-6 bg-blue-50 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
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
            ].map((t, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white dark:bg-gray-700 text-black dark:text-white shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <p className="italic dark:text-gray-300">{t.text}</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

       {/* Contact Section */}
<section
  id="contact"
  className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
>
  <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>

  <form
    onSubmit={handleSubmit}
    className="max-w-lg mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transition-all duration-300"
  >
    {[
      { name: "name", type: "text", placeholder: "Your Name" },
      { name: "email", type: "email", placeholder: "Your Email" },
      { name: "company", type: "text", placeholder: "Your Company" },
    ].map((field, idx) => (
      <div key={idx}>
        <label
          htmlFor={field.name}
          className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
        >
          {field.placeholder}
        </label>
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          aria-required="true"
        />
      </div>
    ))}
    
      {/* License Type Dropdown */}
<div>
  <label htmlFor="licenseType" className="block text-sm font-medium mb-1">
    Software License Type
  </label>
  <select
    id="licenseType"
    name="licenseType"
    value={formData.licenseType}
    onChange={handleChange}
    className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white dark:bg-black border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
    aria-required="true"
  >
    <option value="">Select a type</option>
    <option value="microsoft">Microsoft</option>
    <option value="adobe">Adobe</option>
    <option value="autodesk">Autodesk</option>
    <option value="intuit">Intuit</option>
    <option value="corel">Corel</option>
    <option value="vmware">VMware</option>
    <option value="oracle">Oracle</option>
  </select>
</div>


    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        aria-required="true"
      />
    </div>

    {showFormAlert && (
      <p className="text-red-500 text-sm text-center" role="alert">
        Please fill in all fields!
      </p>
    )}

    <button
      type="submit"
      className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full transition-all duration-300 transform hover:scale-105"
      aria-label="Submit contact form"
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

import React, { useState, useEffect, useRef } from "react";
import ChatWidget from "./components/ChatWidget";

function App() {
  const menuRef = useRef();
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
      setShowSuccessModal(true);
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
    <div
      className={`min-h-screen transition-colors duration-300
        ${isDark
          ? "bg-gray-900 text-white"
          : "bg-[antiquewhite] text-black"}`}
    >
        {/* Hero Section */}
        <section  className={`py-10 px-6 text-center relative transition-all duration-300
    ${isDark
      ? "bg-blue-500 text-white"
      : "bg-[skyblue] text-black"}`}
        >
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="w-1/3 hidden sm:block"></div>
            <h1 className="text-4xl font-bold w-full md:w-1/3 text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              SoftSell
            </h1>
            <div ref={menuRef} className="w-1/3 flex justify-end relative z-50">
              <button
                onClick={toggleMenu}
                className="text-3xl transition-colors duration-300 hover:text-yellow-400"
              >
                &#9776;
              </button>
              {showMenu && (
                <div
                  className="absolute right-0 top-12 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg opacity-100 transition-opacity duration-300 ease-in-out"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 w-full text-left text-black dark:text-white text-sm transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="mt-6 text-xl transition-opacity duration-300">Sell your software licenses quickly and securely.</p>
          <button
            className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowSuccessModal(true)}
          >
            Sell My Licenses
          </button>
        </section>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transform transition-transform duration-300 ease-in-out scale-100">
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

        {/* Contact */}
        <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg transition-all duration-300"
          >
            {[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" },
              { name: "company", type: "text", placeholder: "Your Company" },
            ].map((f, i) => (
              <input
                key={i}
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                value={formData[f.name]}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600 transition-all duration-300"
              />
            ))}

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-600 transition-all duration-300"
            />

            <button
              type="submit"
              className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 w-full"
            >
              Submit
            </button>
            {showFormAlert && <p className="text-red-500 text-center">Please fill in all fields!</p>}
          </form>
        </section>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;

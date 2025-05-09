import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can handle the form submission here (e.g., sending data to backend)
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white p-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to SoftSell</h1>
        <p className="mt-4 text-xl">Sell your software licenses quickly and securely.</p>
        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600">
          Sell My Licenses
        </button>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold mb-2">Step 1: Upload License</h3>
        <p className="text-gray-600">Securely provide details of your software license.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold mb-2">Step 2: Get Valuation</h3>
        <p className="text-gray-600">We analyze the license and offer a fair price.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold mb-2">Step 3: Review Offer</h3>
        <p className="text-gray-600">Check the deal and terms before approval.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold mb-2">Step 4: Get Paid</h3>
        <p className="text-gray-600">Receive payment via your preferred method.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">Step 5: Transfer Ownership</h3>
      <p className="text-gray-600">We handle the secure license transfer process for you.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">Step 6: Track Your Sale</h3>
      <p className="text-gray-600">Monitor progress and get updates directly from our dashboard.</p>
    </div>

    </div>
  </div>
</section>




      {/* Why Choose Us */}
     <section id="why-choose-us" className="py-16 px-4 text-center bg-white">
  <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">Fast Payments</h3>
      <p className="mt-2">We ensure prompt payment once the deal is finalized.</p>
    </div>
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">Trusted Partners</h3>
      <p className="mt-2">We collaborate with top companies for secure transactions.</p>
    </div>
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">Simple Process</h3>
      <p className="mt-2">Our easy 3-step process makes selling your software simple.</p>
    </div>
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">Security</h3>
      <p className="mt-2">Your data and transactions are handled with the highest security.</p>
    </div>
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">Customer Support</h3>
      <p className="mt-2">We offer 24/7 customer support to guide you through the process.</p>
    </div>
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">Transparency</h3>
      <p className="mt-2">We provide clear and transparent valuation without hidden fees.</p>
    </div>
  </div>
</section>


      {/* Customer Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-gray-100">
  <h2 className="text-3xl font-semibold text-center mb-8">Customer Testimonials</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
      <p className="italic text-gray-600">"The process was simple and fast! I received my payment within days of uploading my license. Highly recommend!"</p>
      <div className="mt-4">
        <p className="font-semibold">John Doe</p>
        <p className="text-gray-500">Software Engineer, ABC Corp</p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
      <p className="italic text-gray-600">"SoftSell made selling my software licenses a breeze! The whole process was smooth and professional."</p>
      <div className="mt-4">
        <p className="font-semibold">Jane Smith</p>
        <p className="text-gray-500">IT Manager, XYZ Inc</p>
      </div>
    </div>
  </div>
</section>


      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-8 shadow-lg rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black bg-white border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black bg-white border border-gray-300"
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black bg-white border border-gray-300"
          />
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black bg-white border border-gray-300"
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
            className="w-full p-4 rounded-lg text-black bg-white border border-gray-300"
          ></textarea>
          <button type="submit" className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-600 w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;

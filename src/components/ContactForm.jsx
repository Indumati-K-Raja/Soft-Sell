// src/components/ContactForm.jsx
export default function ContactForm() {
  return (
   <section className="container mx-auto px-4 py-20">
  <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
   <form className="mt-8 space-y-4">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full p-4 rounded-lg text-black bg-white"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full p-4 rounded-lg text-black bg-white"
  />
  <input
    type="text"
    placeholder="Your Company"
    className="w-full p-4 rounded-lg text-black bg-white"
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
    placeholder="Message"
    className="w-full p-4 rounded-lg text-black bg-white"
  ></textarea>
  <button className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600">
    Submit
  </button>
</form>

  </div>
</section>

  );
}

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
  <select className="w-full p-4 rounded-lg text-black bg-white">
    <option>Software License Type</option>
    <option>Microsoft</option>
    <option>Adobe</option>
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

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Sell Your Software Licenses Today</h1>
          <p className="text-lg mt-4">Get the best valuation and earn fast payouts.</p>
          <button className="mt-6 bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600">
            Sell My License
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">1. Upload License</h3>
              <p className="mt-2">Submit your software license details through our form.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">2. Get Valuation</h3>
              <p className="mt-2">Our team will review your license and give a fair price.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">3. Get Paid</h3>
              <p className="mt-2">Once you accept, we’ll process the payment to your account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">Fast Process</h3>
              <p className="mt-2">Get quick evaluations and fast payouts.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">Trusted Platform</h3>
              <p className="mt-2">We have a track record of helping thousands of clients.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">Safe Transactions</h3>
              <p className="mt-2">Your personal and payment information is safe with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Customer Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="italic">“Selling my software license was so easy and fast! I got paid within days!”</p>
              <p className="mt-4 font-semibold">Jane Doe, CEO at SoftWare Co.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="italic">“The platform was simple to use, and the team was really helpful.”</p>
              <p className="mt-4 font-semibold">John Smith, Founder at LicenseHut</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg" />
            <input type="text" placeholder="Your Company" className="w-full p-4 rounded-lg" />
            <select className="w-full p-4 rounded-lg">
              <option>Software License Type</option>
              <option>Microsoft</option>
              <option>Adobe</option>
            </select>
            <textarea placeholder="Message" className="w-full p-4 rounded-lg"></textarea>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600">Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App


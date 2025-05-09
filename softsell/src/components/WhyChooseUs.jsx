import { ShieldCheck, Users, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [ /*…*/ ];

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reasons.map((r,i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-lg hover:shadow-lg transition">
            <div className="text-indigo-600 mb-4">{r.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
            <p className="text-gray-600">{r.desc}</p>
          </div>
        ))}
      </div>
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
  <div className="bg-white p-8 shadow-lg rounded-lg">
    <h3 className="font-semibold text-xl">24/7 Support</h3>
    <p className="mt-2">Our team is available round the clock to assist you.</p>
  </div>
</div>

    </section>
  );
}

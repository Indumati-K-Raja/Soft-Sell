// src/components/Testimonials.jsx
export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah M.',
      role: 'IT Manager, TechCore',
      text: 'SoftSell made offloading extra licenses so easy—got paid in 24 hours!',
    },
    {
      name: 'Jake L.',
      role: 'Procurement Head, CloudWave',
      text: 'Excellent service and support. Highly recommend!',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {reviews.map((r,i)=>(
      <div key={i} className="p-6 bg-white rounded-lg shadow">
        <p className="italic mb-4">“{r.text}”</p>
        <p className="font-semibold">{r.name}</p>
        <p className="text-sm text-gray-500">{r.role}</p>
      </div>
    ))}
  </div>
</section>

  );
}

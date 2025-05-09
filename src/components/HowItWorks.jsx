// src/components/HowItWorks.jsx
import { UploadCloud, BadgeDollarSign, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="w-12 h-12 text-indigo-600" />,
    title: 'Upload License',
    description: 'Securely submit your unused software licenses.',
  },
  {
    icon: <BadgeDollarSign className="w-12 h-12 text-indigo-600" />,
    title: 'Get Valuation',
    description: 'Instant best‑market valuation.',
  },
  {
    icon: <Wallet className="w-12 h-12 text-indigo-600" />,
    title: 'Get Paid',
    description: 'Fast payout once sold.',
  },
];

export default function HowItWorks() {
  return (
   <section className="container mx-auto px-4 py-20">
  <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
  <div className="space-y-16">
    {steps.map((step,i)=>(
      <div key={i} className={`md:flex items-center gap-8 ${i%2?'md:flex-row-reverse':''}`}>
        <div className="md:w-1/2 p-4">
          {step.icon}
          <h3 className="text-2xl font-semibold my-4">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
        <div className="md:w-1/2 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">[Illustration]</span>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

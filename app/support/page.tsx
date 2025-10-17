'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';
import faqData from '@/data/faqs.json';
import FAQSection from '@/components/faq-section';

export default function SupportPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [deviceBrand, setDeviceBrand] = useState('');
  const [message, setMessage] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const categories = [
    'eSIM',
    'Data Package',
    'Troubleshooting',
    'Payments, Billings, and Refunds',
    'Personal Data Management',
    'Personal Data Enquiry',
    'Product Change',
    'Agree Termination',
  ];

  const faqSections = faqData.faqSections;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, category, message });
  };


  return (
    <div className="min-h-screen bg-white w-full">
      <main className="w-full">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f9f7f6] p-8 md:p-8" style={{ borderRadius: '0 4rem 0 4rem' }}>
              <h1 className="text-4xl md:text-5xl font-black text-center mb-8 text-gray-900">
                Contact Us
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-[750px] mx-auto">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-[#2833e4]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-[#2833e4]"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="category" className="block text-sm font-medium mb-2 text-gray-900">
                    Category
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    className="w-full h-12 px-4 rounded-full border border-gray-300 bg-white text-left flex items-center justify-between hover:border-[#2833e4] focus:border-[#2833e4] focus:ring-0 focus:outline-none transition-colors"
                  >
                    <span className={category ? 'text-gray-900' : 'text-gray-400'}>
                      {category || 'Please select a category'}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-900 transition-transform duration-300 ${
                        showCategoryDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {showCategoryDropdown && (
                    <div className="absolute z-10 w-full mt-2 bg-white rounded-3xl shadow-xl overflow-hidden py-2">
                      {categories.map((cat, index) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setCategory(cat);
                            setShowCategoryDropdown(false);
                          }}
                          className="w-full cursor-pointer px-6 py-3 text-left hover:bg-gray-50 text-gray-900 text-sm transition-colors"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-900">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-[#2833e4]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="orderNumber" className="block text-sm font-medium mb-2 text-gray-900">
                    Order number (optional)
                  </label>
                  <Input
                    id="orderNumber"
                    type="text"
                    placeholder="Order number (optional)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-[#2833e4]"
                  />
                </div>

                <div>
                  <label htmlFor="deviceBrand" className="block text-sm font-medium mb-2 text-gray-900">
                    Device brand and model (optional)
                  </label>
                  <Input
                    id="deviceBrand"
                    type="text"
                    placeholder="Device brand and model (optional)"
                    value={deviceBrand}
                    onChange={(e) => setDeviceBrand(e.target.value)}
                    className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-[#2833e4]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900">
                    Description
                  </label>
                  <textarea
                    id="message"
                    placeholder="Description..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-42 placeholder-gray-300 text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2833e4] bg-white resize-none file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed"
                    required
                  />
                </div>

                <p className="text-xs text-gray-600">
                  Your personal data will be processed in accordance with Lebara Travel eSIM's{' '}
                  <a href="#" className="text-[#242fe3] underline">Terms & Conditions</a>,{' '}
                  <a href="#" className="text-[#242fe3] underline">Privacy</a> and{' '}
                  <a href="#" className="text-[#242fe3] underline">Cookie Policy</a>
                </p>

                <p className="text-xs text-gray-600">
                  By clicking submit you confirm that you have read, understood and accepted our policies.
                </p>

                <div className='flex justify-center items-center pt-3'>
                  <Button
                  type="submit"
                  className="w-[320px] cursor-pointer bg-[#C5F82A] hover:bg-[#b5e820] text-black font-bold text-base h-12 rounded-full border-2 border-black shadow-sm hover:shadow-md transition-all"
                >
                  Submit Request
                </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <FAQSection sections={faqSections} />
      </main>
    </div>
  );
}

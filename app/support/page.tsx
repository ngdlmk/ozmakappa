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
  const [emailError, setEmailError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [nameError, setNameError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;
    
    if (!name.trim()) {
      setNameError('Name is required');
      hasError = true;
    } else {
      setNameError('');
    }
    
    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    } else {
      setEmailError('');
    }
    
    if (!category) {
      setCategoryError('Please select a category');
      hasError = true;
    } else {
      setCategoryError('');
    }
    
    if (!subject.trim()) {
      setSubjectError('Subject is required');
      hasError = true;
    } else {
      setSubjectError('');
    }
    
    if (!message.trim()) {
      setMessageError('Description is required');
      hasError = true;
    } else {
      setMessageError('');
    }
    
    if (hasError) {
      return;
    }

  };

  return (
    <div className="min-h-screen bg-background w-full">
      <main className="w-full">
        <section className="py-15 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted p-8 md:p-8" style={{ borderRadius: '0 4rem 0 4rem' }}>
              <h1 className="contact-us-title text-4xl md:text-5xl font-black text-center mb-8 text-foreground">
                Contact Us
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-[750px] mx-auto">
                <div>
                  <label htmlFor="name" className="form-label block font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError('');
                    }}
                    className={`form-input ${nameError ? 'border-red-500' : ''}`}
                    required
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label block font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`form-input ${emailError ? 'border-red-500' : ''}`}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="category" className="form-label block font-medium mb-2 text-foreground">
                    Category
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCategoryDropdown(!showCategoryDropdown);
                      setCategoryError('');
                    }}
                    className={`form-input bg-white dark:bg-white text-left flex items-center justify-between focus:ring-0 ${categoryError ? 'border-red-500' : ''}`}
                  >
                    <span className={category ? 'text-gray-900' : 'text-gray-500'}>
                      {category || 'Please select a category'}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-900 transition-transform duration-300 ${
                        showCategoryDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {showCategoryDropdown && (
                    <div className="absolute z-10 w-full mt-2 bg-white dark:bg-white rounded-3xl shadow-xl overflow-hidden py-2 border border-border">
                      {categories.map((cat, index) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setCategory(cat);
                            setShowCategoryDropdown(false);
                          }}
                          className="w-full cursor-pointer px-6 py-3 text-left hover:bg-gray-100 text-gray-900 text-sm transition-colors"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                  {categoryError && (
                    <p className="text-red-500 text-sm mt-1">{categoryError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="form-label block font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (subjectError) setSubjectError('');
                    }}
                    className={`form-input ${subjectError ? 'border-red-500' : ''}`}
                    required
                  />
                  {subjectError && (
                    <p className="text-red-500 text-sm mt-1">{subjectError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="orderNumber" className="form-label block font-medium mb-2 text-foreground">
                    Order number (optional)
                  </label>
                  <Input
                    id="orderNumber"
                    type="text"
                    placeholder="Order number (optional)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="deviceBrand" className="form-label block font-medium mb-2 text-foreground">
                    Device brand and model (optional)
                  </label>
                  <Input
                    id="deviceBrand"
                    type="text"
                    placeholder="Device brand and model (optional)"
                    value={deviceBrand}
                    onChange={(e) => setDeviceBrand(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label block font-medium mb-2 text-foreground">
                    Description
                  </label>
                  <textarea
                    id="message"
                    placeholder="Description..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (messageError) setMessageError('');
                    }}
                    className={`form-textarea h-42 placeholder-gray-500 text-gray-900 bg-white dark:bg-white file:text-foreground placeholder:text-gray-500 ${messageError ? 'border-red-500' : ''}`}
                    required
                  />
                  {messageError && (
                    <p className="text-red-500 text-sm mt-1">{messageError}</p>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">
                  Your personal data will be processed in accordance with Lebara Travel eSIM's{' '}
                  <a href="/terms" className="text-[#242fe3] underline">Terms & Conditions</a>,{' '}
                  <a href="/privacy" className="text-[#242fe3] underline">Privacy</a> and{' '}
                  <a href="/cookie-policy" className="text-[#242fe3] underline">Cookie Policy</a>
                </p>

                <p className="text-xs text-muted-foreground">
                  By clicking submit you confirm that you have read, understood and accepted our policies.
                </p>

                <div className='flex justify-center items-center pt-3'>
                  <Button
                  type="submit"
                  className="hero-button-link !bg-[#C5FF64] w-[320px] cursor-pointer hover:!bg-[#b0e850] !text-black font-bold h-12 rounded-full border-2 border-black shadow-sm hover:shadow-md transition-all"
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

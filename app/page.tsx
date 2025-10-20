'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Star, Zap, ShoppingCart, Download, Wifi } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import AppleIcon from '@/assets/icons/AppleIcon';

export default function Home() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmEmailError, setConfirmEmailError] = useState('');

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
    if (confirmEmail && confirmEmail !== value) {
      setConfirmEmailError('Emails do not match');
    } else if (confirmEmail === value) {
      setConfirmEmailError('');
    }
  };

  const handleConfirmEmailChange = (value: string) => {
    setConfirmEmail(value);
    if (value && value !== email) {
      setConfirmEmailError('Emails do not match');
    } else {
      setConfirmEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    if (email !== confirmEmail) {
      setConfirmEmailError('Emails do not match');
      return;
    }
    
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Confirm Email:', confirmEmail);
  };

  return (
    <div className="min-h-screen bg-background w-full">
      <main className="pt-0 md:pt-15 w-full">
        <section className="relative min-h-[90vh] flex items-center overflow-visible w-full">
          <div className="relative w-full max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row items-center">
              <div className="relative z-20 w-full lg:max-w-4xl space-y-8 py-4 text-center lg:text-left">
                <div className="space-y-6">
                  <p className="text-[#242fe3] leading-[1.9] font-medium text-sm">
                    Part of the trusted Lebara family, keeping people <br className="md:hidden" />connected since 2001.
                  </p>

                  <div className="hero-massive-badge text-[18px] md:text-[20px] lg:text-[20px] bg-[#fcccf9] rounded-full text-black border-0 px-5 py-3 lg:py-2 md:py-2 font-bold inline-block">
                    🎉 MASSIVE 80% OFF LAUNCH SALE!
                  </div>

                  <h1 className="hero-lebara-title text-[50px] mt-6 md:text-[64px] lg:text-[96px] font-black leading-[1.1]">
                    Introducing Lebara Travel eSIM
                  </h1>

                  <p className="text-[20px] text-[#0D1167] max-w-lg leading-relaxed font-[500] mx-auto lg:mx-0 dark:text-[#242fe3]">
                    We're excited to invite you to try our revolutionary<br className="hidden md:block" /> new Global<br className="md:hidden" /> eSIM covering 180+ countries.
                  </p>
                </div>

                <Button
                  className="hero-button bg-[#C5F82A] cursor-pointer hover:bg-[#b5e820] text-black px-12 py-[25px] lg:py-4.5 rounded-full border-2 border-black shadow-sm hover:shadow-md transition-all w-full max-w-[370px] mx-auto lg:mx-0"
                  onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Early Access
                </Button>
              </div>

              <div className="relative w-full lg:absolute lg:left-[59%] lg:w-[45%] lg:z-10 lg:mt-0">
                <div className="relative w-full aspect-square mx-auto lg:max-w-none">
                  <Image
                    src="/3.png"
                    alt="Travel eSIM Hero"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="early-access" className="pt-20 pb-10 bg-background">
          <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
            <div className="bg-[#f4f5fe] p-6 md:p-12 rounded-[0_2rem_0_2rem] md:rounded-[0_6rem_0_6rem]">
              <div className="text-center space-y-6 mb-12">
                <h2 className="early-access-discount-text text-[40px] md:text-[48px] font-black text-[#242fe3] leading-tight">
                  <span className="md:hidden">80% OFF<br />Launch Special<br />You're Invited<br />First!</span>
                  <span className="hidden md:inline">80% Off Launch Special<br />You're Invited First!</span>
                </h2>

                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-900 dark:text-gray-900 text-center font-[500]">
                    <span className="early-access-unprecedented font-bold">🎁 UNPRECEDENTED 80% DISCOUNT!</span> This is our biggest launch offer ever. As an invited trial user, you'll lock in this massive savings while helping us perfect our travel solution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-8 mb-12 max-w-2xl mx-auto md:px-12">
                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="early-access-heading font-bold mb-1 text-gray-900 dark:text-gray-900">Early Access</h3>
                      <p className="early-access-subtitle text-gray-700 dark:text-gray-700">Be first to try new features</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="early-access-heading font-bold mb-1 text-gray-900 dark:text-gray-900">Shape the future</h3>
                      <p className="early-access-subtitle text-gray-700 dark:text-gray-700">Your feedback matters</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="early-access-heading font-bold mb-1 text-gray-900 dark:text-gray-900">Lebara Trusted</h3>
                      <p className="early-access-subtitle text-gray-700 dark:text-gray-700">Backed by proven network</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="early-access-heading font-bold mb-1 text-gray-900 dark:text-gray-900">Instant Activation</h3>
                      <p className="early-access-subtitle text-gray-700 dark:text-gray-700">Ready in minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="sm:hidden text-center space-y-6">
                  <h3 className="text-[40px] font-[1000] leading-[1.5] text-gray-900 dark:text-gray-900">
                    Get the Lebara<br />Travel eSIM app
                  </h3>

                  <div className="px-1">
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <div className="bg-black rounded-[10px] border-[2px] border-gray-300 px-2 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors">
                        <AppleIcon className="w-20 h-20 text-white flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-[22px] leading-[0.7] font-bold text-white">Download on the</div>
                          <div className="text-[40px] leading-[0.9] font-[600] text-white">App Store</div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <p className="text-[22px] text-gray-900 dark:text-gray-100 font-medium pb-14">
                    Install once. Travel anywhere.
                  </p>
                </div>

                <div className="hidden sm:block">
                  <h3 className="get-access-now text-3xl md:text-4xl text-center mb-3 text-gray-900 dark:text-gray-900">Get Access Now</h3>
                  <p className="text-center form-text mb-8 max-w-xl mx-auto text-sm md:text-base px-4 text-gray-700 dark:text-gray-700">
                    Enter your email to receive a secure download link for our MVP app. Be among the first to explore, test, and enjoy exclusive launch benefits.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                    <div>
                      <label htmlFor="email" className="form-label block font-medium mb-2 text-gray-900 dark:text-gray-900">
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

                    <div>
                      <label htmlFor="confirmEmail" className="form-label block font-medium mb-2 text-gray-900 dark:text-gray-900">
                        Confirm Email
                      </label>
                      <Input
                        id="confirmEmail"
                        type="email"
                        placeholder="Email"
                        value={confirmEmail}
                        onChange={(e) => handleConfirmEmailChange(e.target.value)}
                        className={`form-input ${confirmEmailError ? 'border-red-500' : ''}`}
                        required
                      />
                      {confirmEmailError && (
                        <p className="text-red-500 text-sm mt-1">{confirmEmailError}</p>
                      )}
                    </div>

                    <div className='flex justify-center pt-2'>
                      <Button
                        type="submit"
                        className="hero-button-link !bg-[#C5FF64] w-[320px] cursor-pointer hover:!bg-[#b0e850] !text-black font-bold h-12 rounded-full border-2 border-black shadow-sm hover:shadow-md transition-all"
                      >
                        Send Download Link
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="how-it-works-title font-black text-center mb-12 text-foreground hidden md:block">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16 mx-0 md:mx-0 lg:mx-24 hidden md:grid">
              <div className="bg-gray p-8 text-center" style={{ borderRadius: '0 2rem 0 2rem' }}>
                <div className="w-16 h-16 bg-[#242fe3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="how-it-works-item-title font-bold mb-3 text-foreground">Buy Plan</h3>
                <p className="how-it-works-item-subtitle text-muted-foreground">Purchase your lifetime eSIM for your device.</p>
              </div>

              <div className="bg-gray p-8 text-center" style={{ borderRadius: '0 2rem 0 2rem' }}>
                <div className="w-16 h-16 bg-[#242fe3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="how-it-works-item-title font-bold mb-3 text-foreground">Install eSIM</h3>
                <p className="how-it-works-item-subtitle text-muted-foreground">Download the app and install eSIM in seconds</p>
              </div>

              <div className="bg-gray p-8 text-center" style={{ borderRadius: '0 2rem 0 2rem' }}>
                <div className="w-16 h-16 bg-[#242fe3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="how-it-works-item-title font-bold mb-3 text-foreground">Enjoy Data</h3>
                <p className="how-it-works-item-subtitle text-muted-foreground">Enjoy global connectivity with ease.</p>
              </div>
            </div>

            <div className="relative mb-14 md:mb-24 md:mt-44 lg:mb-24 flex justify-center px-4 md:px-0">
              <Image
                src="/phone.png"
                alt="Mobile App Screenshots"
                width={1200}
                height={800}
                className="w-full md:w-auto h-auto md:max-h-[800px] max-w-[1200px]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

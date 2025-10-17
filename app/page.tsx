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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === confirmEmail) {
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <main className="pt-0 md:pt-15 w-full">
        <section className="relative min-h-[90vh] flex items-center overflow-visible w-full">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row items-center">
              <div className="relative z-20 w-full lg:max-w-2xl space-y-8 py-4 text-center lg:text-left">
                <div className="space-y-4">
                  <p className="text-[#242fe3] font-medium text-sm">
                    Part of the trusted Lebara family, keeping people <br className="md:hidden" />connected since 2001.
                  </p>

                  <div className="bg-[#fcccf9] rounded-full text-black border-0 px-5 py-2.5 text-md font-bold inline-block">
                    🎉 MASSIVE 80% OFF LAUNCH SALE!
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-black text-[#242fe3] leading-[1.1]">
                    Introducing Lebara Travel eSIM
                  </h1>

                  <p className="text-lg text-gray-900 max-w-lg leading-relaxed font-normal mx-auto lg:mx-0">
                    We're excited to invite you to try our revolutionary<br />new Global eSIM covering 180+ countries.
                  </p>
                </div>

                <Button
                  className="bg-[#C5F82A] cursor-pointer hover:bg-[#b5e820] text-black font-bold text-base px-12 py-5.5 rounded-full border-2 border-black shadow-sm hover:shadow-md transition-all w-full max-w-xs mx-auto lg:mx-0"
                  onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Early Access
                </Button>
              </div>

              <div className="relative w-full lg:absolute lg:left-[45%] lg:w-[50%] lg:z-10 lg:mt-0">
                <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
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

        <section id="early-access" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f4f5fe] p-8 md:p-16" style={{ borderRadius: '0 4rem 0 4rem' }}>
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-[#242fe3] leading-tight">
                  80% Off Launch Special<br />
                  You're Invited First!
                </h2>

                <div className="max-w-2xl mx-auto">
                  <p className="text-sm md:text-base text-gray-800 text-center">
                    <span className="font-bold text-gray-900">🎁 UNPRECEDENTED 80% DISCOUNT!</span> This is our biggest launch offer ever. As an invited trial user, you'll lock in this massive savings while helping us perfect our travel solution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-8 mb-12 max-w-2xl mx-auto px-12">
                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Early Access</h3>
                      <p className="text-gray-600 text-sm">Be first to try new features</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Shape the future</h3>
                      <p className="text-gray-600 text-sm">Your feedback matters</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Lebara Trusted</h3>
                      <p className="text-gray-600 text-sm">Backed by proven network</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#242fe3] rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Instant Activation</h3>
                      <p className="text-gray-600 text-sm">Ready in minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="sm:hidden text-center space-y-6">
                  <h3 className="text-3xl font-[1000] leading-[1.5] text-gray-900">
                    Get the Lebara<br />Travel eSIM app
                  </h3>

                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="bg-black rounded-[10px] border-[2px] border-gray-300 px-3 py-2 inline-flex items-center gap-3 hover:bg-gray-800 transition-colors">
                      <AppleIcon className="w-14 h-14 text-white" />
                      <div className="text-left pb-3">
                        <div className="text-md font-bold text-white/80">Download on the</div>
                        <div className="text-[32px] leading-[0.7] font-[600] text-white">App Store</div>
                      </div>
                    </div>
                  </a>

                  <p className="text-md text-gray-900 font-medium pb-4">
                    Install once. Travel anywhere.
                  </p>
                </div>

                <div className="hidden sm:block">
                  <h3 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900">Get Access Now</h3>
                  <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto text-sm md:text-base px-4">
                    Enter your email to receive a secure download link for our MVP app. Be among the first to explore, test, and enjoy exclusive launch benefits.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
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
                        className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmEmail" className="block text-sm font-medium mb-2 text-gray-900">
                        Confirm Email
                      </label>
                      <Input
                        id="confirmEmail"
                        type="email"
                        placeholder="Email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        className="w-full h-12 px-4 rounded-full border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                        required
                      />
                    </div>

                    <div className='flex justify-center pt-2'>
                      <Button
                        type="submit"
                        className="w-[320px] cursor-pointer bg-[#C5F82A] hover:bg-[#b5e820] text-black font-bold text-base h-12 rounded-full border-2 border-black shadow-sm hover:shadow-md transition-all"
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

        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-[#f9f7f6] p-8 text-center" style={{ borderRadius: '0 2rem 0 2rem' }}>
                <div className="w-16 h-16 bg-[#242fe3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Buy Plan</h3>
                <p className="text-gray-600 text-sm">Purchase your lifetime eSIM for your device.</p>
              </div>

              <div className="bg-[#f9f7f6] p-8 text-center" style={{ borderRadius: '0 2rem 0 2rem' }}>
                <div className="w-16 h-16 bg-[#242fe3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Install eSIM</h3>
                <p className="text-gray-600 text-sm">Download the app and install eSIM in seconds</p>
              </div>

              <div className="bg-[#f9f7f6] p-8 text-center" style={{ borderRadius: '0 2rem 0 2rem' }}>
                <div className="w-16 h-16 bg-[#242fe3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Enjoy Data</h3>
                <p className="text-gray-600 text-sm">Enjoy global connectivity with ease.</p>
              </div>
            </div>

            <div className="relative mb-24 mt-[230px] flex justify-center">
              <Image
                src="/phone.png"
                alt="Mobile App Screenshots"
                width={1200}
                height={800}
                className="w-auto h-auto max-w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

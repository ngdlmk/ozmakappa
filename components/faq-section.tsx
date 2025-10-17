'use client';

import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  questions: Question[];
}

interface FAQSectionProps {
  sections: FAQSection[];
}

export default function FAQSection({ sections }: FAQSectionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  return (
    <section className="bg-white mb-20">
      <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full cursor-pointer px-0 py-4 flex items-center justify-between bg-white transition-colors mb-4"
              >
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-900 transition-transform duration-300 ${
                    openSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openSection === section.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="space-y-4">
                  {section.questions.map((q) => (
                    <div 
                      key={q.id} 
                      className="border-2 border-gray-900 overflow-hidden rounded-3xl"
                    >
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="w-full cursor-pointer px-3 py-2 flex items-center justify-between bg-white"
                      >
                        <span className="text-base font-medium text-gray-900 text-left">{q.question}</span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border-[2px] border-gray-900 bg-[#C5F82A] flex items-center justify-center ml-4">
                          <Plus
                            className={`w-5 h-5 text-black transition-transform duration-300 ${
                              openQuestions.has(q.id) ? 'rotate-45' : ''
                            }`}
                          />
                        </div>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out grid ${
                          openQuestions.has(q.id) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden rounded-3xl">
                          <div className="px-6 pb-6 pt-2">
                            <p className="text-base text-gray-700 leading-relaxed">{q.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

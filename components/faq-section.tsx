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
    <section className="bg-background mb-20">
      <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="faq-main-title text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full cursor-pointer px-0 flex items-center justify-between bg-background transition-colors mb-4"
              >
                <h3 className="faq-getting-started font-bold text-foreground">{section.title}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-foreground transition-transform duration-300 ${
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
                      className="border-2 border-foreground overflow-hidden rounded-3xl bg-background dark:bg-muted"
                    >
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="w-full cursor-pointer px-2 py-1.5 flex items-center justify-between"
                      >
                        <span className="text-base faq-question text-foreground text-left pl-1.5 ">{q.question}</span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border-[2px] border-black bg-[#C5F82A] flex items-center justify-center ml-4">
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
                            <p className="text-base faq-answer text-muted-foreground leading-relaxed">{q.answer}</p>
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

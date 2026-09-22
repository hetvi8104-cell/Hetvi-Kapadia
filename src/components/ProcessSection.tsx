import React, { useState } from 'react';
import { Scissors, Ruler, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessSectionProps {
  isDarkTheme: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ isDarkTheme }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex] || PROCESS_STEPS[0];

  return (
    <section
      id="process"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#1D0611] text-[#FAF4EF] border-[#6E1A29]/40'
          : 'bg-[#F9F6F0] text-[#221B1C] border-[#D4C5B0]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
            <span className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
              05 • ATELIER METHODOLOGY
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-[#FAF6F0]"
          >
            Couture Atelier Methodology
          </h2>
          <p className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase opacity-75">
            4-Stage Systematic Workflow: Draping, CAD Origami, Ancestral Craft & Exoskeleton Tailoring
          </p>
        </div>

        {/* 4 Steps Horizontal Progress Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              id={`process-step-tab-${step.number}`}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'border-[#6E1A29] dark:border-[#D48B96] ring-2 ring-[#6E1A29]/20 bg-[#6E1A29]/5 dark:bg-[#D48B96]/5 shadow-md'
                  : 'border-current/10 hover:border-current/30'
              } ${isDarkTheme ? 'bg-[#220814]' : 'bg-[#FAF6F0]'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif-luxury font-bold text-[#6E1A29] dark:text-[#D48B96]">
                  {step.number}
                </span>
                {activeStepIndex === idx && (
                  <span className="w-2 h-2 rounded-full bg-[#6E1A29] dark:bg-[#D48B96] animate-pulse" />
                )}
              </div>
              <div>
                <h4 className="text-xs font-serif-luxury font-bold truncate">
                  {step.title}
                </h4>
                <p className="text-[10px] font-mono opacity-60 truncate mt-0.5">
                  {step.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Detailed Dossier Card */}
        <div
          id="active-process-dossier"
          className={`p-8 sm:p-12 rounded-3xl border shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all ${
            isDarkTheme ? 'bg-[#220814] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
          }`}
        >
          {/* Left: Step Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-current/10 bg-stone-900 shadow-md">
            <img
              src={currentStep.image}
              alt={currentStep.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[9px] font-mono text-white font-bold uppercase">
              PHASE {currentStep.number} // ATELIER EXECUTION
            </div>
          </div>

          {/* Right: Technical Explanation & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                {currentStep.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#221B1C] dark:text-white">
                {currentStep.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm font-sans-modern leading-relaxed opacity-85">
              {currentStep.description}
            </p>

            {/* Milestones Checklist */}
            <div className="space-y-2 pt-2 border-t border-current/10">
              <span className="text-[10px] font-mono uppercase opacity-60 tracking-wider font-bold">
                PHASE QUALITY MILESTONES:
              </span>
              <div className="space-y-2">
                {currentStep.milestones.map((ms, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-2.5 text-xs font-sans-modern"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#6E1A29] dark:text-[#D48B96] flex-shrink-0 mt-0.5" />
                    <span className="opacity-90">{ms}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Atelier Tools / Materials Used */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase opacity-60 tracking-wider font-bold block mb-2">
                PRIMARY EQUIPMENT & MEDIA:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentStep.materials.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-current/15 bg-current/5"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

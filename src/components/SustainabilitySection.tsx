import React, { useState } from 'react';
import { Recycle, ArrowRight, CheckCircle, Shield, Leaf, BarChart3 } from 'lucide-react';
import { SUSTAINABILITY_STAGES } from '../data/portfolioData';

interface SustainabilitySectionProps {
  isDarkTheme: boolean;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ isDarkTheme }) => {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage =
    SUSTAINABILITY_STAGES.find((s) => s.id === activeStageId) || SUSTAINABILITY_STAGES[0];

  return (
    <section
      id="sustainability"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#0A1612] text-[#FAF2EE] border-[#2D7D68]/30'
          : 'bg-[#F4F9F6] text-[#122B22] border-[#CDE3D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1.5px] bg-[#3FA383]" />
            <span id="sustainability-badge-tag" className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#3FA383]">
              04 • SUSTAINABILITY PROJECT
            </span>
          </div>
          <h2
            id="sustainability-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#16382D] dark:text-[#FAF6F0]"
          >
            "From Waste to Worth"
          </h2>
          <p
            id="sustainability-subheading"
            className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase opacity-75"
          >
            Designing a Circular Textile Resource Network for Fashion Education and Community Development
          </p>
        </div>

        {/* Global Key Impact Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkTheme ? 'bg-[#10241D]/60 border-[#2D7D68]/30 shadow-[0_4px_20px_rgba(45,125,104,0.1)]' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <span id="sustainability-metric-label-collected" className="text-[9px] font-mono tracking-wider uppercase opacity-60">
              TOTAL WASTE FABRIC COLLECTED
            </span>
            <p id="sustainability-metric-fabric-yield" className="text-2xl sm:text-3xl font-serif-luxury font-bold mt-1 text-[#3FA383]">
              7-8 kg
            </p>
            <p id="sustainability-metric-subtext-universities" className="text-[10px] font-sans-modern opacity-70 mt-1">[ from 2 universities ]</p>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkTheme ? 'bg-[#10241D]/60 border-[#2D7D68]/30 shadow-[0_4px_20px_rgba(45,125,104,0.1)]' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <span id="sustainability-metric-label-uni-1" className="text-[9px] font-mono tracking-wider uppercase opacity-60">
              UNIVERSITY 1
            </span>
            <p id="sustainability-metric-uni-1-weight" className="text-2xl sm:text-3xl font-serif-luxury font-bold mt-1 text-[#3FA383]">
              5-6 kgs approx
            </p>
            <p id="sustainability-metric-uni-1-subtext" className="text-[10px] font-sans-modern opacity-70 mt-1">Physical audit and measurement</p>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkTheme ? 'bg-[#10241D]/60 border-[#2D7D68]/30 shadow-[0_4px_20px_rgba(45,125,104,0.1)]' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <span id="sustainability-metric-label-uni-2" className="text-[9px] font-mono tracking-wider uppercase opacity-60">
              UNIVERSITY 2
            </span>
            <p id="sustainability-metric-uni-2-weight" className="text-2xl sm:text-3xl font-serif-luxury font-bold mt-1 text-[#3FA383]">
              2-3 kgs approx
            </p>
            <p id="sustainability-metric-uni-2-subtext" className="text-[10px] font-sans-modern opacity-70 mt-1">Approximate data</p>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkTheme ? 'bg-[#10241D]/60 border-[#2D7D68]/30 shadow-[0_4px_20px_rgba(45,125,104,0.1)]' : 'bg-[#FAF6F0] border-[#D4C5B0]'
            }`}
          >
            <span id="sustainability-metric-label-audit-scope" className="text-[9px] font-mono tracking-wider uppercase opacity-60">
              TOTAL AUDIT SCOPE
            </span>
            <p id="sustainability-metric-audit-scope-value" className="text-2xl sm:text-3xl font-serif-luxury font-bold mt-1 text-[#3FA383]">
              2
            </p>
            <p id="sustainability-metric-audit-scope-subtext" className="text-[10px] font-sans-modern opacity-70 mt-1">Universities</p>
          </div>
        </div>

        {/* 5-Step Stage Navigation Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-current/10">
          {SUSTAINABILITY_STAGES.map((st) => (
            <button
              key={st.id}
              id={`sustainability-stage-btn-${st.id}`}
              onClick={() => setActiveStageId(st.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center space-x-2 flex-shrink-0 cursor-pointer ${
                activeStageId === st.id
                  ? 'bg-[#3FA383] text-[#0A1612] font-bold shadow-[0_2px_15px_rgba(63,163,131,0.35)]'
                  : isDarkTheme
                  ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                  : 'bg-[#EFE8DE] hover:bg-[#E2D8CC] text-[#221B1C]'
              }`}
            >
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
                {st.id}
              </span>
              <span id={`sustainability-stage-title-${st.id}`} className="truncate max-w-[160px] sm:max-w-none">{st.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div
          id="active-sustainability-stage"
          className={`p-8 sm:p-10 rounded-3xl border shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all ${
            isDarkTheme ? 'bg-[#0E2019] border-[#2D7D68]/35' : 'bg-[#FAF6F0] border-[#D4C5B0]'
          }`}
        >
          {/* Left: Stage Visual */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-current/10 bg-stone-900 shadow-md">
            <img
              src={activeStage.image}
              alt={activeStage.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[9px] font-mono text-white font-bold uppercase">
              STAGE 0{activeStage.id} OF 05
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-xs text-white flex justify-between items-center text-xs font-mono">
              <span className="opacity-80">{activeStage.metric.label}:</span>
              <span className="font-bold text-[#E0B069]">{activeStage.metric.value}</span>
            </div>
          </div>

          {/* Right: Methodology & Material Stream */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span id="active-stage-research-tag" className="px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#3FA383]/15 text-[#3FA383] border border-[#3FA383]/30 font-bold inline-block">
                SUSTAINABILITY RESEARCH PROJECT
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#16382D] dark:text-white">
                {activeStage.title}
              </h3>
              <p id="active-stage-subtitle" className="text-xs font-mono tracking-wider uppercase font-semibold text-[#E0B069]">
                {activeStage.subtitle}
              </p>
            </div>

            <p id="active-stage-description" className="text-xs sm:text-sm font-sans-modern leading-relaxed opacity-85">
              {activeStage.description}
            </p>

            {/* Harvested Materials */}
            <div className="space-y-2 pt-2 border-t border-current/10">
              <span className="text-[10px] font-mono uppercase opacity-60 tracking-wider font-bold">
                MATERIAL RECOVERY STREAM:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeStage.materials.map((m, i) => (
                  <span
                    key={i}
                    id={`active-stage-material-${i + 1}`}
                    className="px-3 py-1 rounded-lg text-xs font-mono border border-[#3FA383]/30 bg-[#3FA383]/10 text-[#3FA383] dark:text-[#58B69A]"
                  >
                    ✓ {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress to Next Stage Button */}
            <div className="pt-2 flex items-center space-x-4">
              <button
                id="next-stage-btn"
                onClick={() =>
                  setActiveStageId((prev) => (prev % SUSTAINABILITY_STAGES.length) + 1)
                }
                className="px-6 py-2.5 rounded-full bg-[#6E1A29] hover:bg-[#852033] text-white text-[10px] font-mono tracking-widest uppercase font-bold flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>Advance to Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

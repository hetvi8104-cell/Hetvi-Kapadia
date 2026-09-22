import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Sparkles, RefreshCw, ZoomIn, Eye } from 'lucide-react';
import { TEXTILE_SAMPLES } from '../data/portfolioData';
import { TextileSample } from '../types';

interface TextileSectionProps {
  isDarkTheme: boolean;
}

export const TextileSection: React.FC<TextileSectionProps> = ({ isDarkTheme }) => {
  const [selectedSample, setSelectedSample] = useState<TextileSample>(TEXTILE_SAMPLES[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Interactive Simulation Controls
  const [tension, setTension] = useState<number>(55);
  const [fluidity, setFluidity] = useState<number>(75);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const filteredSamples = TEXTILE_SAMPLES.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  // Canvas Fabric Physics Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const render = () => {
      time += 0.02 * (fluidity / 50);
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background subtle gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isDarkTheme) {
        bgGrad.addColorStop(0, '#1a050f');
        bgGrad.addColorStop(1, '#2d0a1a');
      } else {
        bgGrad.addColorStop(0, '#f9f6f0');
        bgGrad.addColorStop(1, '#ede5d8');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render woven / draped curved strands
      const cols = 16;
      const rows = 12;
      const colStep = width / (cols + 1);
      const rowStep = height / (rows + 1);

      const tensionMultiplier = (100 - tension) / 40;

      ctx.lineWidth = 1.8;
      ctx.strokeStyle = isDarkTheme ? 'rgba(212, 139, 150, 0.45)' : 'rgba(110, 26, 41, 0.35)';

      // Draw horizontal warp lines with fluid wave
      for (let r = 1; r <= rows; r++) {
        ctx.beginPath();
        for (let c = 1; c <= cols; c++) {
          const x = c * colStep;
          const baseY = r * rowStep;
          const wave =
            Math.sin(time + c * 0.4 + r * 0.3) * (8 * tensionMultiplier) +
            Math.cos(time * 0.7 + r * 0.5) * (4 * tensionMultiplier);
          const y = baseY + wave;

          if (c === 1) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw vertical weft lines
      ctx.strokeStyle = isDarkTheme ? 'rgba(255, 255, 255, 0.15)' : 'rgba(34, 27, 28, 0.15)';
      for (let c = 1; c <= cols; c++) {
        ctx.beginPath();
        for (let r = 1; r <= rows; r++) {
          const baseY = r * rowStep;
          const wave =
            Math.sin(time + c * 0.4 + r * 0.3) * (8 * tensionMultiplier) +
            Math.cos(time * 0.7 + r * 0.5) * (4 * tensionMultiplier);
          const y = baseY + wave;
          const x = c * colStep + Math.cos(time + r * 0.2) * (3 * tensionMultiplier);

          if (r === 1) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw nodes / beads at intersections
      ctx.fillStyle = isDarkTheme ? '#D48B96' : '#6E1A29';
      for (let r = 1; r <= rows; r += 2) {
        for (let c = 1; c <= cols; c += 2) {
          const x = c * colStep + Math.cos(time + r * 0.2) * (3 * tensionMultiplier);
          const wave =
            Math.sin(time + c * 0.4 + r * 0.3) * (8 * tensionMultiplier) +
            Math.cos(time * 0.7 + r * 0.5) * (4 * tensionMultiplier);
          const y = r * rowStep + wave;

          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (isSimulating) {
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [tension, fluidity, isSimulating, isDarkTheme]);

  return (
    <section
      id="textile"
      className={`relative w-full py-28 px-6 md:px-12 lg:px-20 border-b select-none transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#1a050f] text-[#FAF4EF] border-[#6E1A29]/40'
          : 'bg-[#F9F6F0] text-[#221B1C] border-[#D4C5B0]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#6E1A29] dark:bg-[#D48B96]" />
            <span className="text-[10px] font-sans-modern tracking-[0.35em] uppercase font-bold text-[#6E1A29] dark:text-[#D48B96]">
              03 • MATERIAL SPECIMEN ARCHIVE
            </span>
          </div>
          <h2
            id="textile-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-[#221B1C] dark:text-[#FAF6F0]"
          >
            Textile Science & Tactile Prototyping
          </h2>
          <p className="text-xs sm:text-sm font-sans-modern tracking-[0.2em] uppercase opacity-75">
            Fabric Manipulation, Raised Silk Cording, Canadian Smocking & Zero-Waste Re-Weft Weaves
          </p>
        </div>

        {/* Top: Interactive Fabric Simulation Laboratory */}
        <div
          id="textile-physics-lab"
          className={`p-6 sm:p-8 rounded-3xl border shadow-xl flex flex-col lg:flex-row gap-8 items-center justify-between transition-all ${
            isDarkTheme ? 'bg-[#220814] border-white/10' : 'bg-[#FAF6F0] border-[#D4C5B0]'
          }`}
        >
          {/* Canvas Viewport */}
          <div className="relative w-full lg:w-7/12 aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-current/10 shadow-inner">
            <canvas
              ref={canvasRef}
              width={600}
              height={320}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE CLOTH TENSION SIMULATOR • CALIBRATED ON ATELIER WARP</span>
            </div>
          </div>

          {/* Physics Parameters Control */}
          <div className="w-full lg:w-5/12 space-y-5">
            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-widest uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                PHYSICAL ATTRIBUTES OF DRAPERY
              </span>
              <h3 className="text-xl font-serif-luxury font-bold">
                Dynamic Fiber Mechanics
              </h3>
              <p className="text-xs font-sans-modern opacity-75 leading-relaxed">
                Adjust grain tension and bias fluidity to observe real-time structural drape behavior simulated on a 16x12 mesh grid.
              </p>
            </div>

            {/* Slider 1: Tension */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="opacity-70">GRAINLINE TENSION:</span>
                <span className="font-bold text-[#6E1A29] dark:text-[#D48B96]">{tension}%</span>
              </div>
              <input
                id="tension-slider"
                type="range"
                min={10}
                max={90}
                value={tension}
                onChange={(e) => setTension(Number(e.target.value))}
                className="w-full accent-[#6E1A29] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-mono opacity-50">
                <span>Loose Muslin Bias</span>
                <span>Stiff Horsehair Canvas</span>
              </div>
            </div>

            {/* Slider 2: Fluidity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="opacity-70">DRAPE FLUIDITY:</span>
                <span className="font-bold text-[#6E1A29] dark:text-[#D48B96]">{fluidity}%</span>
              </div>
              <input
                id="fluidity-slider"
                type="range"
                min={20}
                max={100}
                value={fluidity}
                onChange={(e) => setFluidity(Number(e.target.value))}
                className="w-full accent-[#6E1A29] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-mono opacity-50">
                <span>Heavy Velvet Pile</span>
                <span>Mulberry Silk Chiffon</span>
              </div>
            </div>

            {/* Simulation Toggle */}
            <div className="flex items-center justify-between pt-2">
              <button
                id="toggle-simulation-btn"
                onClick={() => setIsSimulating(!isSimulating)}
                className="px-4 py-2 rounded-full border border-current/20 text-[10px] font-mono tracking-widest uppercase hover:bg-current/10 transition-all cursor-pointer flex items-center space-x-2"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>{isSimulating ? 'Pause Motion' : 'Resume Motion'}</span>
              </button>
              <span className="text-[9px] font-mono opacity-60 uppercase">
                Grid: 192 Micro-Nodes
              </span>
            </div>

          </div>
        </div>

        {/* Category Selector for Specimens */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-b border-current/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E1A29] dark:text-[#D48B96] font-bold">
            SPECIMEN CLASSIFICATION:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'ALL PROTOTYPES (06)' },
              { id: 'manipulation', label: 'MANIPULATION' },
              { id: 'ornamentation', label: 'ORNAMENTATION' },
              { id: 'sustainable', label: 'SUSTAINABLE' },
              { id: 'structure', label: 'STRUCTURE' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`textile-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#6E1A29] text-white font-bold shadow-xs'
                    : isDarkTheme
                    ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                    : 'bg-[#EFE8DE] hover:bg-[#E2D8CC] text-[#221B1C]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Material Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              id={`textile-sample-card-${sample.id}`}
              onClick={() => setSelectedSample(sample)}
              className={`group p-6 rounded-3xl border flex flex-col justify-between space-y-4 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl ${
                selectedSample.id === sample.id
                  ? 'border-[#6E1A29] dark:border-[#D48B96] ring-2 ring-[#6E1A29]/30'
                  : 'border-current/10 hover:border-current/30'
              } ${isDarkTheme ? 'bg-[#1D0611]' : 'bg-[#FAF6F0]'}`}
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-current/10">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/60 text-white backdrop-blur-xs font-bold">
                    {sample.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-wider uppercase text-[#6E1A29] dark:text-[#D48B96] font-bold">
                    {sample.technique}
                  </span>
                  <h4 className="text-base font-serif-luxury font-bold text-[#221B1C] dark:text-white group-hover:text-[#6E1A29] dark:group-hover:text-[#D48B96] transition-colors">
                    {sample.title}
                  </h4>
                  <p className="text-xs font-sans-modern leading-relaxed opacity-75 line-clamp-2">
                    {sample.description}
                  </p>
                </div>
              </div>

              {/* Material Composition & Bullet Specs */}
              <div className="pt-3 border-t border-current/10 space-y-2">
                <p className="text-[10px] font-mono opacity-60 uppercase truncate">
                  FABRIC: {sample.materials}
                </p>
                <div className="flex flex-wrap gap-1">
                  {sample.detailNotes.map((note, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-current/5 border border-current/10"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

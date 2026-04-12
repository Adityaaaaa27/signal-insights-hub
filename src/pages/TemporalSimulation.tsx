import { useState } from "react";

const TemporalSimulation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState("1.0x");

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="px-3 py-1 bg-secondary-container text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full inline-block mb-2">
            Active Simulation
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-on-surface">Temporal Replay: Rush Hour Alpha</h1>
          <p className="text-on-surface/60 max-w-2xl mt-2">
            Synthesizing merchant load signals and predictive kitchen times against historical rider dispatch logs for peak Friday evening surge.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-lowest rounded-full px-4 py-2 text-center">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface/40">Reliability Index</p>
            <p className="text-xl font-extrabold text-on-surface">98.4%</p>
          </div>
          <div className="bg-surface-container-lowest rounded-full px-4 py-2 text-center">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface/40">Bias Deviation</p>
            <p className="text-xl font-extrabold text-secondary">-1.2m</p>
          </div>
        </div>
      </div>

      {/* Main Simulation View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map / Event Stream */}
        <div className="lg:col-span-2 bg-on-surface rounded-2xl relative overflow-hidden" style={{ minHeight: 420 }}>
          <div className="absolute top-4 left-4 z-10">
            <p className="text-[10px] uppercase tracking-widest font-bold text-secondary-container">Real-Time Event Stream</p>
          </div>
          <div className="absolute top-4 right-4 z-10 flex gap-3 text-[10px]">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-container"></span><span className="text-surface-container-highest">Order Intake</span></div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary-container"></span><span className="text-surface-container-highest">KPT Predicted</span></div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary-container"></span><span className="text-surface-container-highest">Optimized Dispatch</span></div>
          </div>

          {/* Simulated map with grid */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <svg viewBox="0 0 400 300" className="w-full h-full opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 15} x2="400" y2={i * 15} stroke="#E6E1E4" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 27 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 15} y1="0" x2={i * 15} y2="300" stroke="#E6E1E4" strokeWidth="0.5" />
              ))}
              {/* Concentric circles */}
              <circle cx="200" cy="150" r="40" fill="none" stroke="#E6E1E4" strokeWidth="0.5" />
              <circle cx="200" cy="150" r="80" fill="none" stroke="#E6E1E4" strokeWidth="0.5" />
              <circle cx="200" cy="150" r="120" fill="none" stroke="#E6E1E4" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Event Annotations */}
          <div className="absolute top-1/3 left-1/4 bg-surface-container-lowest/90 backdrop-blur rounded-lg p-3 shadow-lg">
            <p className="text-[10px] uppercase tracking-widest font-bold text-tertiary mb-1">Rider Assignment #429</p>
            <p className="text-sm font-bold text-on-surface flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span> Optimized Match Found
            </p>
            <p className="text-xs text-on-surface/50">Prediction: 12m | Actual: 11.5m</p>
          </div>

          <div className="absolute top-1/4 right-1/4 bg-surface-container-lowest/90 backdrop-blur rounded-lg px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">flag</span>
              <span className="text-xs font-bold text-on-surface">Signal Drop: Central</span>
            </div>
          </div>

          <div className="absolute top-[35%] right-[20%] bg-tertiary-container/90 backdrop-blur rounded-lg px-3 py-1.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-sm">bolt</span>
              <span className="text-xs font-bold text-on-surface">Rush Surge +22%</span>
            </div>
          </div>

          {/* Bottom legend */}
          <div className="absolute bottom-4 left-4 flex gap-4 text-[10px]">
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-tertiary-container/60"></span><span className="text-surface-container-highest">Predicted Path</span></div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-secondary-container/60"></span><span className="text-surface-container-highest">Historical Delay</span></div>
          </div>

          {/* Signal Variance Line */}
          <div className="absolute bottom-16 left-4 right-4">
            <p className="text-[10px] uppercase tracking-widest text-surface-container-highest/40 mb-2">Signal Variance Intensity</p>
            <svg className="w-full h-12" viewBox="0 0 400 50">
              <path d="M0,35 Q50,30 100,25 T200,20 T300,22 T400,18" fill="none" stroke="#DCCCEC" strokeWidth="2" />
              <path d="M0,38 Q50,35 100,30 T200,28 T300,32 T400,25" fill="none" stroke="#FFCCE2" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>
            <div className="flex gap-6 text-[10px] mt-1">
              <div className="flex items-center gap-1"><span className="w-4 h-0.5 bg-primary-container"></span><span className="text-surface-container-highest/60">Rolling Load Signal</span></div>
              <div className="flex items-center gap-1"><span className="w-4 h-0.5 bg-secondary-container"></span><span className="text-surface-container-highest/60">External Load Index</span></div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Prediction vs Actual */}
          <div className="bg-surface-container-lowest rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-on-surface">Prediction vs Actual (KPT)</h3>
              <span className="material-symbols-outlined text-on-surface/30 text-base">more_vert</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[
                { t: "18:00", actual: 65, predicted: 55 },
                { t: "18:15", actual: 70, predicted: 60 },
                { t: "18:30", actual: 45, predicted: 55 },
                { t: "18:45", actual: 75, predicted: 65 },
                { t: "19:00", actual: 60, predicted: 50 },
              ].map((d) => (
                <div key={d.t} className="flex flex-col items-center gap-1">
                  <div className="w-full flex gap-0.5" style={{ height: 60 }}>
                    <div className="flex-1 flex flex-col justify-end">
                      <div className="bg-primary-container rounded-t" style={{ height: `${d.predicted}%` }}></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                      <div className="bg-secondary-container rounded-t" style={{ height: `${d.actual}%` }}></div>
                    </div>
                  </div>
                  <span className="text-[9px] text-on-surface/40">{d.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Signal Reliability Event */}
          <div className="bg-tertiary-container rounded-2xl p-6">
            <h3 className="text-sm font-bold text-on-surface mb-1">Signal Reliability Event</h3>
            <p className="text-xs text-on-surface/50 mb-4">High-confidence sync at 18:24:12</p>
            <p className="text-4xl font-extrabold text-on-surface mb-3">99.2%</p>
            <button className="px-3 py-1 bg-surface-container-lowest text-on-surface text-xs font-semibold rounded-lg">VIEW LOG</button>
          </div>

          {/* Live Drift Analysis */}
          <div className="bg-surface-container-lowest rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-on-surface/50">Live Drift Analysis</h3>
              <span className="bg-tertiary-container text-tertiary text-[10px] font-bold px-2 py-0.5 rounded">99.2% Sync</span>
            </div>
            <div className="flex gap-1 h-16 items-end">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex-1 flex gap-0.5 items-end">
                  <div className={`flex-1 rounded-t ${i % 2 === 0 ? "bg-primary-container" : "bg-secondary-container"}`} style={{ height: `${30 + Math.random() * 50}%` }}></div>
                  <div className={`flex-1 rounded-t ${i % 2 === 0 ? "bg-secondary-container" : "bg-primary-container"}`} style={{ height: `${20 + Math.random() * 60}%` }}></div>
                </div>
              ))}
            </div>
            <div className="w-full h-1.5 bg-primary rounded-full mt-4"></div>
            <p className="text-xs text-on-surface/50 mt-3">
              Currently processing peak surge signals from 12 active kitchens. Bias deviation holding stable.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Scrubber */}
      <div className="bg-surface-container-lowest rounded-2xl p-6">
        {/* Scrubber Track */}
        <div className="relative w-full h-3 bg-surface-container rounded-full mb-3">
          <div className="absolute h-full bg-tertiary-container rounded-full" style={{ width: "45%" }}></div>
          <div className="absolute w-5 h-5 bg-surface-container-lowest border-2 border-primary rounded-full -top-1" style={{ left: "45%" }}></div>
          {/* Flag markers */}
          <div className="absolute w-2 h-4 bg-secondary -top-0.5" style={{ left: "20%" }}></div>
          <div className="absolute w-2 h-4 bg-secondary -top-0.5" style={{ left: "75%" }}></div>
        </div>
        <div className="flex justify-between text-xs text-on-surface/40 mb-6">
          <span>18:00</span><span>18:30</span><span>19:00</span><span>19:30</span><span>20:00</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-on-surface/40 hover:text-primary">
              <span className="material-symbols-outlined">skip_previous</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-2xl">{isPlaying ? "pause" : "play_arrow"}</span>
            </button>
            <button className="text-on-surface/40 hover:text-primary">
              <span className="material-symbols-outlined">skip_next</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-on-surface/50 bg-surface-container px-2 py-1 rounded">SPEED</span>
            {["0.5x", "1.0x", "2.0x", "5.0x"].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`text-xs font-medium px-2 py-1 rounded ${speed === s ? "text-primary font-bold" : "text-on-surface/40"}`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface/40 text-base">schedule</span>
              <span className="text-sm font-bold text-on-surface">18:34:22</span>
              <span className="text-xs text-on-surface/40">/ 20:00:00</span>
            </div>
            <button className="text-on-surface/40 hover:text-primary">
              <span className="material-symbols-outlined">download</span>
            </button>
            <button className="text-on-surface/40 hover:text-primary">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemporalSimulation;

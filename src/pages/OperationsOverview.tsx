import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const kptData = [
  { time: "00:00", actual: 12, predicted: 13 },
  { time: "06:00", actual: 11, predicted: 12 },
  { time: "12:00", actual: 14, predicted: 13 },
  { time: "18:00", actual: 16, predicted: 15 },
  { time: "23:59", actual: 18, predicted: 17 },
];

const errorOrders = [
  { id: "#ORD-94212", restaurant: "The Golden Truffle", predicted: "12:30", actual: "18:45", error: "+50%", tag: "Kitchen Overload" },
  { id: "#ORD-94208", restaurant: "Sakura Sushi Central", predicted: "08:00", actual: "11:15", error: "+39%", tag: "Rider Detour" },
  { id: "#ORD-94195", restaurant: "Pasta & Beyond", predicted: "15:00", actual: "21:30", error: "+43%", tag: "Merchant Delay" },
  { id: "#ORD-94182", restaurant: "Burger Republic", predicted: "10:00", actual: "13:45", error: "+37%", tag: "Signal Loss" },
];

const OperationsOverview = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
        <div className="max-w-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">
            Executive Review
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
            Operations Overview
          </h2>
          <p className="text-lg text-on-surface/60 max-w-lg leading-relaxed">
            Real-time surveillance of predicted versus actual kitchen performance and rider behavior across all high-volume corridors.
          </p>
        </div>
        {/* Signal Health */}
        <div className="bg-tertiary-container rounded-2xl p-6 min-w-[280px]">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-full border-4 border-tertiary flex items-center justify-center">
              <span className="text-xl font-bold text-tertiary">92%</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface">Signal Health</h3>
              <p className="text-xs text-on-surface/60 max-w-[180px]">
                FOR signals estimated as reliable vs biased.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="text-xs font-semibold text-on-surface/70 uppercase tracking-wider">Optimal Quality</span>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15">
          <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-3">Avg Rider Wait Time</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-on-surface">4.2m</span>
            <span className="text-sm font-semibold text-tertiary">↓12%</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15">
          <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-3">ETA Error (P50/P90)</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-on-surface">1.8s /</span>
            <span className="text-2xl font-bold text-on-surface">4s</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-semibold text-secondary">↗ 3%</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-on-surface/50">Stable Variance</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15">
          <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-3">Order Delay Rate</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-on-surface">5.4%</span>
            <span className="text-sm font-semibold text-tertiary">↓0.8%</span>
          </div>
        </div>
        <div className="bg-tertiary-container/40 rounded-2xl p-6">
          <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-3">Rider Idle Time</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-on-surface">8.1m</span>
            <span className="text-sm font-semibold text-on-surface/40">— 0%</span>
          </div>
          <p className="text-xs text-on-surface/50 mt-2 uppercase tracking-wider font-medium">Efficiency: 82%</p>
        </div>
      </section>

      {/* Chart + Model Drift */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Predicted vs Actual KPT</h3>
              <p className="text-sm text-on-surface/50">Performance over the last 24 hours (minutes)</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-on-surface/60"></span>
                <span className="text-on-surface/60">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                <span className="text-on-surface/60">Predicted</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={kptData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(273 10% 82% / 0.3)" />
              <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#7a757d" }} />
              <YAxis tick={{ fontSize: 11, fill: "#7a757d" }} />
              <Tooltip />
              <Area type="monotone" dataKey="predicted" stroke="#DCCCEC" fill="#DCCCEC" fillOpacity={0.3} strokeWidth={2} />
              <Area type="monotone" dataKey="actual" stroke="#655974" fill="#655974" fillOpacity={0.15} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-secondary-container rounded-2xl p-6">
          <h3 className="text-xl font-bold text-on-surface mb-6">Model Drift</h3>
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-on-surface/60">System Confidence</span>
                <span className="text-2xl font-extrabold text-tertiary">98.4%</span>
              </div>
              <div className="w-full h-2 bg-on-surface/10 rounded-full">
                <div className="h-full bg-tertiary rounded-full" style={{ width: "98.4%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-on-surface/60">Mean Absolute Error</span>
                <span className="text-2xl font-extrabold text-on-surface">1.2m</span>
              </div>
              <div className="w-full h-2 bg-on-surface/10 rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
          <p className="text-sm italic text-on-surface/70 mb-6">
            "Current variance is within threshold. Model v2.4 remains authoritative for dinner peak."
          </p>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Generate Report <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Error Orders Table */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-on-surface">Recent High-Error Orders</h3>
          <button className="text-sm font-semibold text-primary underline">View All Exceptions</button>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-semibold text-on-surface/50">Order ID</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-semibold text-on-surface/50">Restaurant</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-semibold text-on-surface/50">Predicted KPT</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-semibold text-on-surface/50">Actual KPT</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-semibold text-on-surface/50">Error %</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-semibold text-on-surface/50">Cause Tag</th>
              </tr>
            </thead>
            <tbody>
              {errorOrders.map((order) => (
                <tr key={order.id} className="border-t border-outline-variant/15">
                  <td className="px-6 py-5 text-sm font-semibold text-primary">{order.id}</td>
                  <td className="px-6 py-5 text-sm text-on-surface">{order.restaurant}</td>
                  <td className="px-6 py-5 text-sm text-on-surface">{order.predicted}</td>
                  <td className="px-6 py-5 text-sm text-on-surface">{order.actual}</td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-secondary">{order.error}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 text-xs font-medium bg-surface-container-highest rounded-full text-on-surface">
                      {order.tag}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OperationsOverview;

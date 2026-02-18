import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, LabelList
} from "recharts";

const data = [
  { year: "2020", ai: 44,  other: 291, total: 335 },
  { year: "2021", ai: 140, other: 687, total: 827 },
  { year: "2022", ai: 53,  other: 310, total: 363 },
  { year: "2023", ai: 35,  other: 110, total: 145 },
  { year: "2024", ai: 61,  other: 117, total: 178 },
  { year: "2025", ai: 109, other: 135, total: 244 },
];

const pctData = data.map(d => ({
  year: d.year,
  ai: Math.round((d.ai / d.total) * 100),
  other: Math.round(((d.total - d.ai) / d.total) * 100),
  aiCount: d.ai,
  total: d.total,
}));

const theme = {
  bg: "#F1F4F8",
  card: "#FFFFFF",
  cardBorder: "1px solid rgba(0,0,0,0.06)",
  textPrimary: "#0F172A",
  textSec: "#475569",
  textMuted: "#94A3B8",
  grid: "rgba(0,0,0,0.06)",
  border: "rgba(0,0,0,0.08)",
};

const AI_COLOR = "#3362e3";
const OTHER_COLOR = "#CBD5E1";
const NAVY = "#001234";

const LabelWhite = (props) => {
  const { x, y, width, height, value } = props;
  if (height < 18 || value < 8) return null;
  return (
    <text x={x + width / 2} y={y + height / 2 + 5} textAnchor="middle"
      fill="#FFFFFF" fontSize={11} fontWeight={700} fontFamily="'Source Sans 3', system-ui">
      {value}%
    </text>
  );
};

const LabelDark = (props) => {
  const { x, y, width, height, value } = props;
  if (height < 18 || value < 8) return null;
  return (
    <text x={x + width / 2} y={y + height / 2 + 5} textAnchor="middle"
      fill="#001234" fontSize={11} fontWeight={700} fontFamily="'Source Sans 3', system-ui">
      {value}%
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const d = pctData.find(x => x.year === label);
  return (
    <div style={{
      background: "rgba(255,255,255,0.98)",
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: 8, padding: "10px 14px", fontSize: 12,
      fontFamily: "'Source Sans 3', system-ui",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)", minWidth: 130,
    }}>
      <div style={{ fontWeight: 700, fontSize: 13, color: NAVY, marginBottom: 6 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
        <span style={{ width: 8, height: 8, borderRadius: 2, background: AI_COLOR, display: "inline-block" }} />
        <span style={{ color: "#475569" }}>New AI Unicorns:</span>
        <span style={{ fontWeight: 700, color: NAVY, marginLeft: "auto" }}>{d?.ai}% <span style={{ fontWeight: 400, color: "#94A3B8" }}>({d?.aiCount})</span></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 2, background: OTHER_COLOR, display: "inline-block" }} />
        <span style={{ color: "#475569" }}>Other:</span>
        <span style={{ fontWeight: 700, color: NAVY, marginLeft: "auto" }}>{d?.other}%</span>
      </div>
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginTop: 6, paddingTop: 6, color: "#475569" }}>
        Total: <strong style={{ color: NAVY }}>{d?.total} unicorns</strong>
      </div>
    </div>
  );
};

const DealroomLogo = ({ color = "#001234", size = 88 }) => {
  const h = size * (132.85 / 553.93);
  return (
    <svg width={size} height={h} viewBox="0 0 553.93 132.85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M502.4,68.63c1.06,0,2.1.24,3.03.74.87.43,1.62,1.08,2.18,1.87l6.98-7.33c-1.6-1.66-3.61-2.89-5.82-3.56-2.07-.65-4.22-1-6.38-1.02-2.54-.02-5.06.41-7.44,1.27-2.24.79-4.3,2.02-6.06,3.62-1.73,1.59-3.11,3.52-4.05,5.67-1.02,2.33-1.53,4.85-1.5,7.39-.03,2.54.48,5.06,1.5,7.39.94,2.15,2.32,4.08,4.05,5.67,1.76,1.6,3.82,2.84,6.06,3.63,2.39.85,4.91,1.28,7.44,1.27,2.17-.02,4.32-.37,6.38-1.03,2.21-.67,4.22-1.89,5.82-3.56l-6.98-7.32c-.63.72-1.37,1.34-2.18,1.83-.92.53-1.97.8-3.03.77-2.33.14-4.6-.74-6.23-2.39-1.53-1.72-2.33-3.96-2.23-6.26-.1-2.3.7-4.54,2.23-6.26,1.63-1.66,3.91-2.53,6.23-2.39Z" fill={color}/>
        <path d="M394.42,64.22c-1.76-1.6-3.82-2.83-6.07-3.62-2.39-.85-4.91-1.28-7.44-1.27-2.54-.01-5.06.41-7.45,1.27-2.24.79-4.31,2.03-6.07,3.62-1.73,1.59-3.11,3.52-4.05,5.67-1.02,2.33-1.53,4.85-1.5,7.39-.03,2.54.48,5.06,1.5,7.39.95,2.15,2.32,4.08,4.05,5.67,1.76,1.6,3.82,2.84,6.07,3.63h0c2.39.85,4.91,1.28,7.45,1.27,2.54.01,5.05-.41,7.44-1.27,2.25-.79,4.31-2.03,6.07-3.63,1.73-1.59,3.11-3.52,4.06-5.67,1.02-2.33,1.53-4.85,1.5-7.39.03-2.54-.48-5.06-1.5-7.39-.95-2.15-2.33-4.08-4.06-5.67ZM387.17,83.55c-1.65,1.66-3.93,2.53-6.26,2.39-2.33.14-4.61-.73-6.26-2.39-1.53-1.72-2.33-3.96-2.23-6.26-.1-2.3.7-4.54,2.23-6.26h.01c1.64-1.66,3.92-2.53,6.25-2.39,2.33-.14,4.61.73,6.26,2.39,1.53,1.72,2.33,3.96,2.23,6.26.1,2.3-.7,4.54-2.23,6.26Z" fill={color}/>
        <path d="M352.73,64.22c-1.76-1.6-3.83-2.83-6.07-3.62-2.39-.85-4.91-1.28-7.45-1.27-2.54-.02-5.06.41-7.44,1.27-2.24.79-4.31,2.03-6.07,3.62-1.73,1.59-3.11,3.52-4.06,5.67-1.01,2.33-1.52,4.85-1.48,7.39-.04,2.54.46,5.06,1.48,7.39.95,2.15,2.33,4.08,4.06,5.67,1.76,1.6,3.82,2.84,6.07,3.63h0c2.39.85,4.9,1.28,7.43,1.27,2.54.01,5.06-.41,7.45-1.27,2.24-.79,4.31-2.03,6.07-3.63,1.73-1.59,3.11-3.52,4.06-5.67,1.01-2.33,1.52-4.85,1.48-7.39.04-2.54-.46-5.06-1.48-7.39-.95-2.15-2.33-4.08-4.06-5.67ZM345.47,83.55c-1.65,1.66-3.93,2.53-6.26,2.39-2.33.14-4.61-.74-6.25-2.39-1.53-1.72-2.33-3.96-2.23-6.26-.1-2.3.7-4.54,2.23-6.26h0c1.64-1.66,3.92-2.53,6.24-2.39,2.33-.14,4.62.73,6.26,2.39,1.53,1.71,2.33,3.96,2.23,6.26.1,2.3-.7,4.54-2.23,6.26Z" fill={color}/>
        <path d="M184.87,63.85h-.14c-1.17-1.61-2.81-2.83-4.69-3.49-1.98-.7-4.08-1.04-6.18-1.02-2.28-.04-4.53.48-6.56,1.51-1.9.98-3.58,2.36-4.9,4.04-1.37,1.74-2.42,3.7-3.1,5.81-.73,2.21-1.1,4.53-1.09,6.86-.03,2.42.38,4.83,1.2,7.11.74,2.08,1.91,3.98,3.42,5.6,1.49,1.59,3.31,2.83,5.32,3.66h.01c2.19.9,4.54,1.35,6.91,1.31,1.16,0,2.31-.17,3.42-.5,1.06-.31,2.07-.74,3.03-1.27.87-.48,1.67-1.06,2.4-1.72.62-.56,1.17-1.19,1.66-1.86h.13v4.51h9.72v-53.23h-10.58v22.68ZM183.48,83.54c-1.64,1.66-3.91,2.53-6.23,2.39-2.33.13-4.6-.74-6.23-2.39-1.52-1.72-2.32-3.96-2.22-6.26-.1-2.3.69-4.54,2.22-6.27h0c1.64-1.65,3.9-2.52,6.22-2.39,2.32-.14,4.6.73,6.23,2.39,1.53,1.72,2.32,3.97,2.22,6.27.1,2.3-.69,4.54-2.22,6.26Z" fill={color}/>
        <path d="M552.43,69.89c-.95-2.15-2.33-4.08-4.06-5.67-1.76-1.6-3.83-2.83-6.07-3.62-2.39-.85-4.91-1.28-7.44-1.27-2.54-.02-5.06.41-7.45,1.27-2.24.79-4.31,2.03-6.07,3.62-1.73,1.59-3.11,3.52-4.06,5.67-1.01,2.33-1.51,4.85-1.48,7.39-.04,2.54.47,5.06,1.48,7.39.95,2.15,2.33,4.08,4.06,5.67,1.76,1.6,3.82,2.84,6.07,3.63,2.39.85,4.91,1.28,7.45,1.27,2.54.01,5.05-.41,7.44-1.27,2.24-.79,4.31-2.03,6.07-3.63,1.73-1.59,3.11-3.52,4.06-5.67,1.02-2.33,1.53-4.85,1.5-7.39.03-2.54-.48-5.06-1.5-7.39ZM541.12,83.55c-1.65,1.66-3.93,2.53-6.26,2.39-2.33.14-4.61-.74-6.26-2.39-1.53-1.72-2.33-3.96-2.23-6.26-.1-2.3.7-4.54,2.23-6.26h0c1.64-1.66,3.93-2.53,6.26-2.39,2.33-.14,4.61.73,6.26,2.39,1.53,1.72,2.32,3.96,2.22,6.26.1,2.3-.69,4.54-2.22,6.26Z" fill={color}/>
        <path d="M232.31,64.23c-1.4-1.58-3.14-2.82-5.09-3.62-2.11-.87-4.38-1.3-6.67-1.27-2.53-.02-5.05.41-7.44,1.27-2.24.79-4.31,2.02-6.07,3.62-1.73,1.59-3.11,3.52-4.06,5.67-1.01,2.33-1.51,4.85-1.48,7.39-.04,2.54.47,5.06,1.48,7.39.95,2.15,2.33,4.08,4.06,5.67,1.76,1.6,3.82,2.84,6.07,3.63h0c2.38.84,4.89,1.27,7.42,1.25,2.78,0,5.52-.6,8.04-1.76,2.52-1.11,4.72-2.82,6.43-4.99l-7.41-5.42c-.85,1.18-1.92,2.2-3.14,2.99-1.33.81-2.86,1.22-4.42,1.16-1.9.07-3.76-.57-5.22-1.79-1.44-1.25-2.41-2.95-2.74-4.82h24.55v-3.3c.03-2.51-.35-5.01-1.13-7.39-.69-2.08-1.78-4.01-3.21-5.67ZM212.1,73.41c.05-.84.25-1.67.6-2.43.35-.77.85-1.46,1.48-2.04.67-.61,1.45-1.11,2.29-1.45h0c.98-.39,2.03-.58,3.08-.56,1.78-.07,3.5.62,4.74,1.9,1.2,1.21,1.84,2.87,1.77,4.58h-13.96Z" fill={color}/>
        <path d="M269.78,63.93c-1.26-1.54-2.92-2.72-4.79-3.41-2.46-.85-5.05-1.24-7.65-1.16-2.79,0-5.55.46-8.19,1.38-2.57.87-4.92,2.28-6.91,4.12l5.65,5.77c1.08-1.23,2.38-2.25,3.84-2.99,1.48-.74,3.11-1.11,4.76-1.09,1.73-.03,3.42.55,4.77,1.65,1.33,1.09,2.08,2.75,2.01,4.47-1.45,0-3.04.02-4.76.07-1.72.05-3.44.19-5.14.42-1.68.23-3.35.6-4.97,1.1-1.53.46-2.97,1.16-4.27,2.07-1.24.88-2.25,2.04-2.96,3.38-.77,1.55-1.15,3.26-1.09,4.99-.03,1.58.31,3.15,1,4.58.63,1.29,1.55,2.42,2.68,3.31,1.16.91,2.49,1.59,3.91,1.99h0c1.49.46,3.04.69,4.6.69,2.12,0,4.22-.4,6.18-1.2,1.94-.79,3.58-2.17,4.69-3.94h.14v4.3h9.72v-17.39c.03-2.54-.21-5.08-.71-7.57-.39-2.01-1.25-3.9-2.49-5.53ZM263.26,81.65c.03.98-.2,1.95-.67,2.81-.43.79-1.05,1.47-1.8,1.97-.79.54-1.65.94-2.57,1.19-.97.28-1.98.43-2.99.42-1.19,0-2.36-.32-3.38-.91-1.04-.55-1.67-1.65-1.62-2.82-.05-1.04.37-2.05,1.16-2.74.83-.68,1.79-1.19,2.82-1.48,1.12-.33,2.28-.53,3.45-.6h0c1.2-.07,2.2-.11,2.98-.09h2.61v2.25Z" fill={color}/>
        <path d="M476.17,83.73c-.6-.59-1.3-1.05-2.08-1.37-.81-.33-1.67-.5-2.54-.5-.87,0-1.74.17-2.55.5-.78.31-1.48.78-2.07,1.37-.59.6-1.06,1.3-1.38,2.08-.33.8-.5,1.66-.5,2.53,0,.87.17,1.73.5,2.54.32.77.79,1.48,1.38,2.07.59.59,1.3,1.06,2.07,1.37h.01c.8.33,1.66.5,2.53.5.87,0,1.73-.17,2.54-.5.78-.31,1.49-.78,2.08-1.37.59-.59,1.06-1.3,1.38-2.07.33-.81.5-1.67.5-2.54,0-.87-.17-1.73-.5-2.53-.31-.78-.78-1.49-1.38-2.08Z" fill={color}/>
        <rect x="278.44" y="41.17" width="10.58" height="53.23" fill={color}/>
        <path d="M456.1,63.68c-.95-1.36-2.24-2.45-3.74-3.17-1.83-.83-3.82-1.23-5.82-1.16-2.22-.07-4.43.41-6.42,1.41-1.9,1.11-3.45,2.75-4.44,4.72-.82-1.98-2.3-3.62-4.19-4.65-1.97-1.01-4.16-1.52-6.38-1.48-1.19,0-2.38.16-3.53.5-1.01.3-1.98.72-2.89,1.27-.81.49-1.54,1.08-2.19,1.76-.56.59-1.03,1.25-1.4,1.97h-.15v-4.66h-10.15v34.21h10.57v-17.03c0-1.08.07-2.17.22-3.24.12-.97.42-1.91.88-2.78.45-.83,1.12-1.51,1.94-1.97,1.02-.53,2.16-.79,3.31-.74,1-.07,1.99.23,2.79.84.62.55,1.1,1.26,1.38,2.04.29.82.46,1.67.5,2.54.04.88.06,1.63.06,2.25v18.09h10.58v-18.09c0-1,.1-1.99.31-2.96.19-.88.55-1.72,1.06-2.46.5-.71,1.18-1.28,1.97-1.65.97-.43,2.01-.63,3.07-.6,1.44-.15,2.83.51,3.63,1.72.71,1.25,1.06,2.68,1.02,4.12v19.92h10.56s0-20.19,0-20.19c.01-1.95-.19-3.9-.6-5.81-.35-1.68-1.02-3.28-1.97-4.72Z" fill={color}/>
        <path d="M315.9,59.33c-2.07-.08-4.11.47-5.86,1.59-1.71,1.23-3.09,2.86-4.02,4.75h-.14v-5.49h-10.58v34.21h10.58v-14.3c0-1.55.09-3.1.28-4.64.15-1.28.56-2.52,1.23-3.62.66-1.03,1.6-1.85,2.72-2.36,1.52-.62,3.16-.91,4.8-.84.77,0,1.53.06,2.29.18.75.12,1.5.29,2.23.52v-9.63c-.55-.15-1.12-.25-1.7-.29-.62-.05-1.22-.07-1.83-.07Z" fill={color}/>
        <path d="M81.67,50.17h-4.3v32.29h3.25c3.92.33,7.77-1.19,10.41-4.12,2.48-3.71,3.65-8.15,3.31-12.6.33-4.16-.78-8.31-3.14-11.75-2.41-2.69-5.93-4.1-9.53-3.82Z" fill={color}/>
        <path d="M129.38,0H3.74C1.67,0,0,1.67,0,3.74v125.35c0,2.07,1.68,3.76,3.76,3.76h125.61c2.07,0,3.76-1.68,3.76-3.76V3.74c0-2.07-1.67-3.74-3.74-3.74ZM38.3,95.25h-15.49v-26.55h15.49v26.55ZM57.78,95.26h-15.49v-42.46h15.49v42.46ZM102.56,87.43c-5.3,5.2-12.75,7.8-22.33,7.82h-3.15s-15.19,0-15.19,0v-57.66h19.63c9.25,0,16.4,2.36,21.44,7.1,5.05,4.73,7.56,11.57,7.55,20.51,0,9.62-2.65,17.03-7.95,22.23Z" fill={color}/>
      </g>
    </svg>
  );
};

export default function Chart() {
  return (
    <div style={{
      width: 500, height: 625,
      background: theme.bg,
      fontFamily: "'Source Sans 3', system-ui, -apple-system, sans-serif",
      padding: 23, boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700;900&display=swap');`}</style>
      <div style={{
        flex: 1, background: theme.card, border: theme.cardBorder,
        borderRadius: 10, padding: 23,
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        {/* Badge */}
        <div style={{ marginBottom: 10 }}>
          <span style={{
            background: "rgba(0,18,52,0.08)", color: "#001234",
            padding: "4px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600,
            letterSpacing: "0.02em", border: "1px solid rgba(0,18,52,0.2)",
            boxShadow: "0 0 10px rgba(0,18,52,0.05)",
          }}>
            🦄 AI & Unicorns · 2020–2025
          </span>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 22, fontWeight: 900, color: theme.textPrimary,
          lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 6,
        }}>
          1 in 2 New Unicorns Is Now an AI Company
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 12, color: theme.textSec, marginBottom: 12, fontWeight: 400 }}>
          Share of new AI unicorns among all newly minted unicorns, worldwide
        </div>

        {/* Legend */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 10 }}>
          {[
            { color: AI_COLOR, label: "New AI Unicorns" },
            { color: OTHER_COLOR, label: "Other New Unicorns" },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: theme.textSec }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pctData} margin={{ top: 6, right: 8, left: -18, bottom: 4 }} barCategoryGap="30%">
              <CartesianGrid stroke={theme.grid} vertical={false} />
              <XAxis dataKey="year"
                tick={{ fill: theme.textSec, fontSize: 11, fontFamily: "'Source Sans 3', system-ui", fontWeight: 600 }}
                axisLine={{ stroke: theme.border }} tickLine={false} dy={6} />
              <YAxis tickFormatter={v => `${v}%`} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]}
                tick={{ fill: theme.textMuted, fontSize: 10, fontFamily: "'Source Sans 3', system-ui", fontWeight: 500 }}
                axisLine={false} tickLine={false} dx={-4} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Bar dataKey="ai" stackId="a" fill={AI_COLOR} radius={[0,0,0,0]}>
                <LabelList dataKey="ai" content={LabelWhite} />
              </Bar>
              <Bar dataKey="other" stackId="a" fill={OTHER_COLOR} radius={[4,4,0,0]}>
                <LabelList dataKey="other" content={LabelDark} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: 10, paddingTop: 10, borderTop: `1px solid ${theme.border}`,
        }}>
          <span style={{ color: theme.textMuted, fontSize: 11, fontWeight: 500 }}>Source: Dealroom.co</span>
          <DealroomLogo color="#001234" size={88} />
        </div>
      </div>
    </div>
  );
}

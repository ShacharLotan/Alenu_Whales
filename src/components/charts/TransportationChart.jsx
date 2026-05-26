import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const data = [
  { name: 'הכנסות המדינה (מיסי רכב ודלק)', amount: 45, color: '#D84A7F' },
  { name: 'אובדן תוצר למשק (גודש בכבישים)', amount: 40, color: '#00A3C4' },
];

export default function TransportationChart() {
  return (
    <div className="h-80 w-full mt-6 bg-[#fff] p-6 minimal-border rounded-sm shadow-sm">
      <h4 className="text-[15px] font-black text-[#111] mb-6 text-center serif">המלכודת הפיסקלית: המדינה מרוויחה, המשק מפסיד</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 10 }} barSize={60}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#111', fontWeight: 600 }} axisLine={{ stroke: '#ccc' }} tickLine={false} interval={0} />
          <YAxis tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} domain={[0, 50]} />
          <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '4px', fontSize: '13px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
            formatter={(value) => [`${value} מיליארד ₪`, '']}
          />
          <Bar dataKey="amount" radius={[4, 4, 0, 0]} animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="amount" position="top" formatter={(val) => `${val} מיליארד ₪`} style={{ fill: '#333', fontSize: 12, fontWeight: 'bold' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { step: 'נפגעי עבירה', count: 100, fill: '#111' },
  { step: 'מדווחים למשטרה', count: 18.1, fill: '#444' },
  { step: 'כתב אישום', count: 5, fill: '#00A3C4' },
  { step: 'הורשעו ונענשו', count: 2, fill: '#D84A7F' },
];

export default function SecurityChart() {
  return (
    <div className="h-80 w-full mt-6 bg-[#fff] p-6 minimal-border rounded-sm shadow-sm">
      <h4 className="text-[15px] font-black text-[#111] mb-6 text-center serif">פירמידת ההרתעה שקרסה: מאירוע ועד להרשעה (באחוזים)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, bottom: 5, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis dataKey="step" type="category" tick={{ fontSize: 13, fill: '#111', fontWeight: 600 }} axisLine={{ stroke: '#ccc' }} tickLine={false} width={110} />
          <Tooltip 
            cursor={{fill: '#f9f9f9'}}
            contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '4px', fontSize: '13px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
            formatter={(value) => [`${value}%`, '']}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={32} animationDuration={1500}>
            <LabelList dataKey="count" position="right" formatter={(val) => `${val}%`} style={{ fill: '#666', fontSize: 12, fontWeight: 'bold' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

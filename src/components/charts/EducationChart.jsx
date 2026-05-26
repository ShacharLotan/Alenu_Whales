import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';

const data = [
  { year: '2005', budget: 24.4, performance: 496 },
  { year: '2010', budget: 35.0, performance: 488 },
  { year: '2015', budget: 50.0, performance: 512 },
  { year: '2020', budget: 70.0, performance: 480 },
  { year: '2025', budget: 92.2, performance: 474 },
];

export default function EducationChart() {
  return (
    <div className="h-80 w-full mt-6 bg-[#fff] p-6 minimal-border rounded-sm shadow-sm">
      <h4 className="text-[15px] font-black text-[#111] mb-6 text-center serif">תקציב משרד החינוך לעומת מדד PISA/TIMSS לאורך השנים</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#666', fontWeight: 600 }} axisLine={{ stroke: '#ccc' }} tickLine={false}>
             <Label value="שנת לימודים" offset={-15} position="insideBottom" style={{ fill: '#888', fontSize: 11 }} />
          </XAxis>
          
          <YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#D84A7F', fontWeight: 600 }} axisLine={false} tickLine={false} domain={[0, 100]}>
             <Label value="מיליארדי ₪" angle={-90} position="insideLeft" style={{ fill: '#D84A7F', fontSize: 11 }} />
          </YAxis>
          
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#00A3C4', fontWeight: 600 }} axisLine={false} tickLine={false} domain={[400, 550]}>
             <Label value="ציון במבחנים" angle={90} position="insideRight" style={{ fill: '#00A3C4', fontSize: 11 }} />
          </YAxis>
          
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '4px', fontSize: '13px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
            labelStyle={{ color: '#aaa', marginBottom: '8px' }}
          />
          <Legend wrapperStyle={{ fontSize: '13px', paddingTop: '15px' }} />
          
          <Line yAxisId="left" type="monotone" name="תקציב (מיליארדי ₪)" dataKey="budget" stroke="#D84A7F" strokeWidth={4} activeDot={{ r: 8 }} animationDuration={1500} />
          <Line yAxisId="right" type="monotone" name="ציון ממוצע במבחנים בינל" dataKey="performance" stroke="#00A3C4" strokeWidth={4} activeDot={{ r: 8 }} animationDuration={1500} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

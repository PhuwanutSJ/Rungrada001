import React from 'react';
import { keyStatistics } from '../data/meetingData';
import { Users, AlertTriangle, ShieldCheck, GraduationCap, School, FileCheck } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-4 h-4 text-blue-600" />;
      case 1:
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case 2:
        return <GraduationCap className="w-4 h-4 text-emerald-600" />;
      case 3:
        return <School className="w-4 h-4 text-indigo-600" />;
      case 4:
        return <ShieldCheck className="w-4 h-4 text-purple-600" />;
      case 5:
        return <FileCheck className="w-4 h-4 text-teal-600" />;
      default:
        return <GraduationCap className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {keyStatistics.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5 flex flex-col justify-between hover:bg-slate-100/80 transition"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="truncate">{stat.label}</span>
                {getIcon(i)}
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 tracking-tight flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  {stat.unit && <span className="text-[11px] font-normal text-slate-500">{stat.unit}</span>}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

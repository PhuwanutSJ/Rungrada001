import React from 'react';
import { agendas, speakers } from '../data/meetingData';
import { Clock, Filter, User, Search, X } from 'lucide-react';

interface AgendaNavigationProps {
  selectedAgenda: number | 'all';
  setSelectedAgenda: (agenda: number | 'all') => void;
  selectedSpeaker: string | 'all';
  setSelectedSpeaker: (speaker: string | 'all') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalSegments: number;
  filteredCount: number;
}

export const AgendaNavigation: React.FC<AgendaNavigationProps> = ({
  selectedAgenda,
  setSelectedAgenda,
  selectedSpeaker,
  setSelectedSpeaker,
  searchQuery,
  setSearchQuery,
  totalSegments,
  filteredCount,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 space-y-4">
      {/* Search Input */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
          ค้นหาในบทสนทนา / รายงาน
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหา เช่น Zero Dropout, กสศ., CCT, ปพ.3, ลูกเสือ, พี่โอ๋..."
            className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <div className="flex justify-between items-center text-xs text-slate-500 mt-1.5 px-1">
          <span>แสดง {filteredCount} จาก {totalSegments} ส่วนบทสนทนา</span>
          {(selectedAgenda !== 'all' || selectedSpeaker !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedAgenda('all');
                setSelectedSpeaker('all');
                setSearchQuery('');
              }}
              className="text-amber-700 hover:underline font-medium"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          )}
        </div>
      </div>

      {/* Agenda filter tabs */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
          ระเบียบวาระการประชุม
        </label>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setSelectedAgenda('all')}
            className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition flex items-center justify-between ${
              selectedAgenda === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>ทุกระเบียบวาระ (ฉบับเต็มทั้งหมด)</span>
            <span className="text-[11px] opacity-70">2 ชม. 28 น.</span>
          </button>
          {agendas.map((agenda) => (
            <button
              key={agenda.id}
              onClick={() => setSelectedAgenda(agenda.id)}
              className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition ${
                selectedAgenda === agenda.id
                  ? 'bg-amber-600 text-white shadow-xs font-semibold'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{agenda.number}</span>
                <span className="text-[10px] opacity-75">{agenda.timeStart}</span>
              </div>
              <div className="line-clamp-1 opacity-90 mt-0.5">{agenda.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Speaker Filter */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
          กรองตามผู้พูด / ผู้รายงาน
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedSpeaker('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
              selectedSpeaker === 'all'
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ทุกคน
          </button>
          {speakers.map((spk) => (
            <button
              key={spk.id}
              onClick={() => setSelectedSpeaker(spk.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                selectedSpeaker === spk.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${spk.avatarColor}`}></span>
              <span>{spk.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

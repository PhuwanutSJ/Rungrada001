import React from 'react';
import { FileText, Printer, Copy, Check, Download, Layers, Sparkles } from 'lucide-react';
import { meetingMetadata } from '../data/meetingData';

interface HeaderProps {
  activeTab: 'transcript' | 'minutes' | 'overview';
  setActiveTab: (tab: 'transcript' | 'minutes' | 'overview') => void;
  onCopyAll: () => void;
  copied: boolean;
  onExportTxt: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onCopyAll,
  copied,
  onExportTxt,
  onPrint,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  ถอดเสียงฉบับเต็ม 100%
                </span>
                <span className="text-xs text-slate-400">
                  {meetingMetadata.meetingNumber} • {meetingMetadata.date}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white line-clamp-1">
                {meetingMetadata.title}
              </h1>
              <p className="text-xs text-slate-400">
                {meetingMetadata.organization} • เวลา {meetingMetadata.time}
              </p>
            </div>
          </div>

          {/* Controls: Tabs & Export */}
          <div className="flex items-center gap-2 flex-wrap justify-between md:justify-end">
            {/* Tab switchers */}
            <div className="inline-flex p-1 bg-slate-800/90 rounded-xl border border-slate-700/80 text-xs">
              <button
                onClick={() => setActiveTab('transcript')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'transcript'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ข้อความถอดเสียงฉบับเต็ม
              </button>
              <button
                onClick={() => setActiveTab('minutes')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'minutes'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                รายงานการประชุม (ทางการ)
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                สรุปภาพรวม & สถิติ
              </button>
            </div>

            {/* Quick Action buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onCopyAll}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                title="คัดลอกข้อความทั้งหมด"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอก'}</span>
              </button>

              <button
                onClick={onExportTxt}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                title="ดาวน์โหลดเป็นไฟล์ข้อความ .txt"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">ส่งออก</span> .TXT
              </button>

              <button
                onClick={onPrint}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-medium border border-amber-500/30 transition"
                title="พิมพ์หรือบันทึกเป็น PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">พิมพ์ /</span> PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

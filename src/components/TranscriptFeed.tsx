import React, { useState } from 'react';
import { TranscriptSegment } from '../types';
import { Clock, Copy, Check, Sparkles, User, Tag } from 'lucide-react';
import { speakers } from '../data/meetingData';

interface TranscriptFeedProps {
  segments: TranscriptSegment[];
  searchQuery: string;
}

export const TranscriptFeed: React.FC<TranscriptFeedProps> = ({
  segments,
  searchQuery,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySegment = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-amber-200 text-slate-900 rounded px-0.5 font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (segments.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
        <p className="text-base font-medium">ไม่พบข้อความที่ตรงกับเงื่อนไขการค้นหา</p>
        <p className="text-xs text-slate-400 mt-1">ลองเปลี่ยนคำค้นหาหรือเลือกดูระเบียบวาระทั้งหมด</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {segments.map((segment) => {
        const speaker = speakers.find((s) => s.id === segment.speakerId);
        const isChairman = segment.speakerId === 'chairman';

        return (
          <article
            key={segment.id}
            id={segment.id}
            className={`bg-white rounded-2xl border transition shadow-xs hover:shadow-sm ${
              isChairman
                ? 'border-amber-200/90 bg-linear-to-b from-amber-50/20 to-white'
                : 'border-slate-200'
            }`}
          >
            {/* Header: Speaker & Timestamp */}
            <div className="px-5 py-3.5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2 bg-slate-50/50 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-xs ${
                    speaker?.avatarColor || 'bg-slate-700'
                  }`}
                >
                  {segment.speakerName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      {segment.speakerName}
                    </h3>
                    {isChairman && (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300/60">
                        ประธาน
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{segment.speakerRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono font-medium">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {segment.timestamp}
                </span>

                <button
                  onClick={() => handleCopySegment(segment.id, `${segment.speakerName} (${segment.timestamp}):\n${segment.text}`)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
                  title="คัดลอกท่อนนี้"
                >
                  {copiedId === segment.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="px-5 py-4">
              {segment.topic && (
                <div className="mb-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-md">
                  <Tag className="w-3 h-3 text-amber-700" />
                  <span>หัวข้อ: {segment.topic}</span>
                </div>
              )}

              <div className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {highlightMatch(segment.text, searchQuery)}
              </div>

              {/* Key Takeaways if available */}
              {segment.keyPoints && segment.keyPoints.length > 0 && (
                <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50/70 -mx-5 -mb-4 px-5 py-3 rounded-b-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>สาระสำคัญและตัวเลขที่บันทึก:</span>
                  </div>
                  <ul className="space-y-1">
                    {segment.keyPoints.map((point, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { StatsBanner } from './components/StatsBanner';
import { AgendaNavigation } from './components/AgendaNavigation';
import { TranscriptFeed } from './components/TranscriptFeed';
import { OfficialMinutesView } from './components/OfficialMinutesView';
import { ExecutiveSummaryView } from './components/ExecutiveSummaryView';
import { transcriptSegments } from './data/transcriptData';
import { meetingMetadata } from './data/meetingData';
import { officialMeetingMinutesMarkdown } from './data/meetingMinutesDoc';

export default function App() {
  const [activeTab, setActiveTab] = useState<'transcript' | 'minutes' | 'overview'>('transcript');
  const [selectedAgenda, setSelectedAgenda] = useState<number | 'all'>('all');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Filter transcript segments
  const filteredSegments = useMemo(() => {
    return transcriptSegments.filter((seg) => {
      // Agenda match
      if (selectedAgenda !== 'all' && seg.agendaId !== selectedAgenda) {
        return false;
      }
      // Speaker match
      if (selectedSpeaker !== 'all' && seg.speakerId !== selectedSpeaker) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const textMatch = seg.text.toLowerCase().includes(query);
        const speakerMatch = seg.speakerName.toLowerCase().includes(query);
        const topicMatch = seg.topic ? seg.topic.toLowerCase().includes(query) : false;
        const keyPointMatch = seg.keyPoints?.some((kp) => kp.toLowerCase().includes(query)) || false;
        return textMatch || speakerMatch || topicMatch || keyPointMatch;
      }
      return true;
    });
  }, [selectedAgenda, selectedSpeaker, searchQuery]);

  // Copy all transcript or minutes
  const handleCopyAll = () => {
    if (activeTab === 'minutes') {
      navigator.clipboard.writeText(officialMeetingMinutesMarkdown);
    } else {
      const fullText = transcriptSegments
        .map((seg) => `[${seg.timestamp}] ${seg.speakerName} (${seg.speakerRole}):\n${seg.text}\n`)
        .join('\n---\n\n');
      navigator.clipboard.writeText(
        `${meetingMetadata.title}\n${meetingMetadata.meetingNumber} - ${meetingMetadata.date}\n\n${fullText}`
      );
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Export as .txt file
  const handleExportTxt = () => {
    let content = '';
    let filename = '';

    if (activeTab === 'minutes') {
      content = officialMeetingMinutesMarkdown;
      filename = 'รายงานการประชุม_กลุ่มส่งเสริม_สพป_ขก2.txt';
    } else {
      content = `${meetingMetadata.title}\n${meetingMetadata.meetingNumber}\n${meetingMetadata.date} เวลา ${meetingMetadata.time}\nประธาน: ${meetingMetadata.chairman}\n\n` +
        transcriptSegments
          .map((seg) => `========================================\n[เวลา: ${seg.timestamp}] ผู้พูด: ${seg.speakerName}\nตำแหน่ง: ${seg.speakerRole}\nหัวข้อ: ${seg.topic || '-'}\n----------------------------------------\n${seg.text}\n`)
          .join('\n');
      filename = 'ถอดความเสียงฉบับเต็ม_กลุ่มส่งเสริม_สพป_ขก2.txt';
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Trigger browser print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCopyAll={handleCopyAll}
        copied={copied}
        onExportTxt={handleExportTxt}
        onPrint={handlePrint}
      />

      {/* Stats Summary Bar */}
      <StatsBanner />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'transcript' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column / Sidebar filters */}
            <aside className="lg:col-span-4 sticky top-20">
              <AgendaNavigation
                selectedAgenda={selectedAgenda}
                setSelectedAgenda={setSelectedAgenda}
                selectedSpeaker={selectedSpeaker}
                setSelectedSpeaker={setSelectedSpeaker}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                totalSegments={transcriptSegments.length}
                filteredCount={filteredSegments.length}
              />
            </aside>

            {/* Right Column / Transcript Feed */}
            <section className="lg:col-span-8">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-500 px-1">
                <span className="font-semibold text-slate-700">
                  ถอดเทปบันทึกเสียงแบบสมบูรณ์ (Verbatim Transcript)
                </span>
                <span>เรียงตามลำดับเวลาในที่ประชุม (00:00 - 148:20)</span>
              </div>
              <TranscriptFeed
                segments={filteredSegments}
                searchQuery={searchQuery}
              />
            </section>
          </div>
        )}

        {activeTab === 'minutes' && (
          <OfficialMinutesView onPrint={handlePrint} />
        )}

        {activeTab === 'overview' && (
          <ExecutiveSummaryView />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 text-xs text-center print:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-medium text-slate-300">
            ระบบถอดความและบันทึกรายงานการประชุม • กลุ่มส่งเสริมการจัดการศึกษา สพป.ขอนแก่น เขต 2
          </p>
          <p className="mt-1 text-slate-500">
            บันทึกการประชุมรอบการประเมินผลการปฏิบัติงาน 6 เดือน รอบที่ 2/2569 (1 เม.ย. – 30 ก.ย. 2569)
          </p>
        </div>
      </footer>
    </div>
  );
}

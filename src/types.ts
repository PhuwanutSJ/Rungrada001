export interface Speaker {
  id: string;
  name: string;
  role: string;
  nickname?: string;
  avatarColor: string;
}

export interface Agenda {
  id: number;
  number: string;
  title: string;
  description: string;
  timeStart: string;
}

export interface TranscriptSegment {
  id: string;
  timestamp: string;
  timeSeconds: number;
  speakerId: string;
  speakerName: string;
  speakerRole: string;
  agendaId: number;
  topic?: string;
  text: string;
  keyPoints?: string[];
}

export interface MeetingMetadata {
  title: string;
  organization: string;
  meetingNumber: string;
  date: string;
  time: string;
  location: string;
  chairman: string;
  chairmanRole: string;
  duration: string;
  attendees: {
    name: string;
    position: string;
    status: 'present' | 'leave';
    note?: string;
  }[];
}

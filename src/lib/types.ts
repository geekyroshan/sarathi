
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent' | 'viewer';
  avatarUrl?: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'agent';
  timestamp: Date;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  type: 'image' | 'document';
  url: string;
  name: string;
}

export interface Conversation {
  id: string;
  customer: {
    id: string;
    name: string;
    email?: string;
  };
  messages: Message[];
  status: 'active' | 'resolved' | 'waiting';
  createdAt: Date;
  updatedAt: Date;
  rating?: 'positive' | 'negative';
}

export interface ResponseTemplate {
  id: string;
  title: string;
  content: string;
  category: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DashboardMetrics {
  activeConversations: number;
  resolvedToday: number;
  avgResponseTime: number;
  customerSatisfaction: number;
}

export interface ChatWidgetSettings {
  primaryColor: string;
  fontFamily: string;
  welcomeMessage: string;
  logo?: string;
  position: 'left' | 'right';
}

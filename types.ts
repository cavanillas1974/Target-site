
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  items: string[];
  number: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

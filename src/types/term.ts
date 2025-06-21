export interface TermType {
  id: string;
  language1: string;
  term1: string;
  language2: string;
  term2: string;
  description: string;
  tags: string;
  likes: number;
  dislikes: number;
  created_at?: string; // optional
}
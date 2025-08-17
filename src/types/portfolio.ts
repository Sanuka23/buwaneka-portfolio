export interface Project {
  id: number;
  title: string;
  category: 'logo' | 'poster' | 'vector';
  image: string;
  description: string;
}

export type Category = 'all' | 'logo' | 'poster' | 'vector';
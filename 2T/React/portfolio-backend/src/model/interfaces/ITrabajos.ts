export interface ICategory {
  title: string;
  href: string;
}

export interface IAuthor {
  name: string;
  role: string;
  imageUrl: string;
  href?: string;
}

export interface ITrabajos {
  id: string;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: ICategory;
  author: IAuthor;
  created_at?: string;
}

import { CommentItem } from "./commentItem";

export interface NewsItem {
  _id: string;
  title: string;
  image: string;
  content: string;
  date: string;      
  hour: string;
  place: string;
  price: number;
  comments: CommentItem[];
  createAt: string;
  typeEntrance: "free" | "paid";
  __v: number;
}
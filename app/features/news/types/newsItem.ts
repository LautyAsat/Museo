export interface NewsItem {
  _id: string;
  title: string;
  image: string;
  content: string;
  date: string;      
  hour: string;
  place: string;
  typeEntrance: "free" | "paid";
  __v: number;
}
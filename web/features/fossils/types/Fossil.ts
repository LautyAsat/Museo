import { Image } from "@/features/collections/types/Species";

export interface Fossil {
  _id: string;
  name: string;
  description: string;
  photographers: string[];
  images: Image[];
  __v: number;
}

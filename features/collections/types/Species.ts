
interface Image {
  url: string;
  isFront: boolean;
  _id: string;
}

export interface Specie {
  _id: string;
  name: string;
  description: string;
  photographers: string[];
  images: Image[];
  __v: number;
}

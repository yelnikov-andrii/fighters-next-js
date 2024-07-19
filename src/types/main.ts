import { StaticImageData } from "next/image";

export interface ElementInt {
  translation_key: string;
  img: StaticImageData;
  imgAlt: string;
  linkUrl: string;
}

export interface BrandI {
  id: number;
  name: string;
  img: string;
}
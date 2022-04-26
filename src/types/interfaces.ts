export interface MainDataArticles {
  meta: Meta;
  data: Articles[];
}

export interface Articles {
  id: number;
  attributes: ArticlesData;
}

export interface ArticlesData {
  title: string;
  slug: string;
  category: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cover: Cover;
  categories: Categories;
}

export interface Categories {
  id: number;
  categoriesCollection: string;
}

export interface Cover {
  data: CoverData;
}

export interface CoverData {
  id: number;
  attributes: CoverAttributes;
}

export interface CoverAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  JPEG = ".jpeg",
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MainDataCategories {
  data: CategoriesData[];
}

export interface CategoriesData {
  uid: string;
  category: string;
  apiId: string;
  schema: Schema;
}

export interface Schema {
  icon: string;
  displayName: string;
  description: string;
  collectionName: string;
  attributes: CategoriesAttributes;
}

export interface CategoriesAttributes {
  categoriesCollection: Category;
}

export interface Category {
  type: string;
  enum: string[];
}

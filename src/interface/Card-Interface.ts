export interface ICard {
  author: string;
  description: string;
  urlToImage?: string;
  title: string;
}
export interface TruncateTextFunction {
  (text: string, maxLength: number): string;
}

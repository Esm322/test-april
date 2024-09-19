export interface IItem {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    count: number,
    rate: number,
  },
  title: string,
};

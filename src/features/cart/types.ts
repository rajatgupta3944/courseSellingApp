export interface CartItem {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  instructor: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}


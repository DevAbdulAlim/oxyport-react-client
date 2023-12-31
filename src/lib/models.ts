export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar?: string | null;
  bio?: string | null;
  phone?: string | null;
  birthDate?: Date | null;
  gender?: string | null;
  active: boolean;
}

export interface Address {
  id: number;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  userId: number;
}

export interface Category {
  id: number;
  name: string;
  description?: string | null;

}

export interface Product {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  image: string;
  stock: number;
  categoryId: number;
  userId: number;

}

export interface Review {
  id: number;
  text: string;
  rating: number;
  productId: number;

}

export interface Cart {
  id: number;
  userId: number;
}

export interface CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;

}

export interface Order {
  id: number;
  userId: number;
  total: number;
  status: string;
  paymentMethod: string;
  transactionId?: string | null;
  deliveryDate?: Date | null;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;

}

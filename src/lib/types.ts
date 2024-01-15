export type User = {
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
};

export type Address = {
  id: number;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  userId: number;
};

export type Category = {
  id: number;
  name: string;
  description?: string | null;
};

export type Product = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  image: string;
  stock: number;
  categoryId: number;
  userId: number;
};

export type ProductFormValues = {
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  categoryId: number;
  userId: number;
};

export type Review = {
  id: number;
  text: string;
  rating: number;
  productId: number;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type Order = {
  id: number;
  userId: number;
  total: number;
  status: string;
  paymentMethod: string;
  transactionId?: string | null;
  deliveryDate?: Date | null;
};

export type OrderItem = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
};

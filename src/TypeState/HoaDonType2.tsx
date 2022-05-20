export interface HoaDonType2 {
  productList: ProductList[];
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  cutomerAddress: string;
  uid: string;
  date: string;
  totalPrice: string;
  id: string;
  subId: string;
}
export interface ProductList {
  id: string;
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  count: number;
}  
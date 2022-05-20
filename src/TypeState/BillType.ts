export interface BillType {
    id: string;
    productLists : Product[];
    customerName?: string;
    customerPhoneNumber?: string;
    customerEmail?: string;
    cutomerAddress?: String;
    uid?: string;
    date?: string;
    totalPrice: number
}

export interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice: number;
    count: number;
}
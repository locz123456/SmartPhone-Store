import { UserType } from "../TypeState/UserType"
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
} from 'recoil';
import { BillType } from "../TypeState/BillType";
import { SanPhamType } from "../TypeState/SanPhamType";
import { CartProduct } from "../TypeState/CartProduct";

export const userInfoState = atom({
	key: "userInfo",
	default: {} as UserType
})
export const isSignedInState = atom({
	key: "isSignedIn",
	default : false
})
export const cartProductState = atom({
    key: "cartProductList",
	default : [] as CartProduct[]
})
export const totalPriceState = atom({
	key: "totalPrice",
	default : 0
})
export const billInfoState = atom({
    key: "billInfo",
    default: {} as BillType
})
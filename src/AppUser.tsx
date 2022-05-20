/** @format */
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import ProductDetail from "./Components/ChiTietSP/ProductDetail";
import Cart from "./Components/CartOrder/Cart";
import Footer from "./Components/FooterAndHeader/Footer";
import Header from "./Components/FooterAndHeader/Header";
import Content from "./Components/HomeTrangChu/Content";
import SearchOrder from "./Components/TraCuuDonHang/SearchOrder";
import DanhMucSP from "./Components/DanhMucSP/DanhMucSP";
import Payment from "./Components/CartOrder/Payment";
import PaymentInfo from "./Components/CartOrder/PaymentInfo";
import CompletePayment from "./Components/CartOrder/CompletePayment";
import SmemberMain from "./Components/Smember/SmemberMain";
import Smember from "./Components/SignIn/Smember";
import CuaHang from "./Components/CuaHang/CuaHang";

import { UserType } from "./TypeState/UserType";
import { isSignedInState, userInfoState } from "./Recoil/RecoilState";
import FindProduct from "./Components/HomeTrangChu/FindProduct";
import DanhMucSPByName from "./Components/DanhMucSP/DanhMucSPByName";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAHi4Jo0pqiI5hzX_F-hXbO2pecfQKA8Uk",
  authDomain: "mock-project-936ca.firebaseapp.com",
};
firebase.initializeApp(config);

function AppUser() {
  const setIsSignedIn = useSetRecoilState<boolean>(isSignedInState); // Local signed-in state.
  const setUserData = useSetRecoilState<UserType>(userInfoState);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user: any) => {
        if (user !== null) {
          setIsSignedIn(!!user);
          console.log(user);
          const userInfo: UserType = {
            uid: user._delegate.uid,
            displayName: user._delegate.displayName,
            email: user._delegate.email,
            photoURL: user._delegate.photoURL,
            phoneNumber: user._delegate.phoneNumber,
            createdAt: user._delegate.metadata.createdAt,
            creationTime: user._delegate.metadata.creationTime,
            lastLoginAt: user._delegate.metadata.lastLoginAt,
            lastSignInTime: user._delegate.metadata.lastSignInTime,
          };
          setIsSignedIn(!!user);
          setUserData(userInfo);
        } else {
          setIsSignedIn(!!user);
          setUserData(user);
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div>
      <div className="App w-full flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/Smember" element={<Smember />}></Route>
          <Route path="/Smember-info/*" element={<SmemberMain />}></Route>
          <Route path="/CuaHang" element={<CuaHang />}></Route>
          <Route path="/payment-info" element={<PaymentInfo />}></Route>
          <Route path="/complete-payment" element={<CompletePayment />}></Route>
          <Route path="/SearchOrder" element={<SearchOrder />}></Route>
          <Route path="/DanhMucSP/:idLoai" element={<DanhMucSP />}></Route>
          <Route
            path="/product-detail/:idSP"
            element={<ProductDetail />}
          ></Route>
          <Route
            path="/DanhMucSPByName/:name"
            element={<DanhMucSPByName />}
          ></Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
export default AppUser;

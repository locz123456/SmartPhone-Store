import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

type Props = {}

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/Smember-info',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // callbacks: {
    //     // Avoid redirects after sign-in.
    //     signInSuccessWithAuthResult: () => false,
    // },
};

function Smember({ }: Props) {
    
    return (
        <div className="w-3/5 mx-auto mt-20">
            <div className="">
                <img className="rounded-3xl" src="https://cellphones.com.vn/smember/_nuxt/img/BlockCPS.50bb45a.jpg" alt="" />
            </div>
            <div className="mt-4 text-center">
                <h2 className="font-bold text-red-600 text-xl">VUI LÒNG ĐĂNG NHẬP VÀO TRANG THÀNH VIÊN SMEMBER</h2>
            </div>
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    )
}

export default Smember
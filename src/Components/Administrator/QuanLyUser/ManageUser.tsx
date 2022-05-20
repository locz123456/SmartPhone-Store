import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp, applicationDefault  } from 'firebase-admin/app';
// initializeApp({
//     credential: applicationDefault(),
//     databaseURL: 'https://mock-project-936ca-default-rtdb.asia-southeast1.firebasedatabase.app'
// });
// var admin = require("firebase-admin");

// // Fetch the service account key JSON file contents
// var serviceAccount = require("./mock-project-936ca-firebase-adminsdk-zxf5a-2964f86b0c.json");

// // Initialize the app with a service account, granting admin privileges
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // The database URL depends on the location of the database
//   databaseURL: "https://mock-project-936ca-default-rtdb.asia-southeast1.firebasedatabase.app"
// });

// // As an admin, the app has access to read and write all data, regardless of Security Rules
// var db = admin.database();
// var ref = db.ref("restricted_access/secret_document");
// ref.once("value", function(snapshot: any) {
//   console.log(snapshot.val());
// });

type Props = {}

function ManageUser({ }: Props) {
    
    
    return (
        <div>ManageUser</div>
    )
}

export default ManageUser
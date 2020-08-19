import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCePG1PnDaZJBQdSIcV3m-X0ZssKSpzbFM",
  authDomain: "hichem-forum-app.firebaseapp.com",
  databaseURL: "https://hichem-forum-app.firebaseio.com",
  projectId: "hichem-forum-app",
  storageBucket: "hichem-forum-app.appspot.com",
  messagingSenderId: "459744541784",
  appId: "1:459744541784:web:d4dee1407d1824a3f35e2d",
  measurementId: "G-6MS01WV5GR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

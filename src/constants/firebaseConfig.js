import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJhZ8wO1I1TcxAX-1NQewTmTrRllTCPUo",
  authDomain: "tedxnerist-b9131.firebaseapp.com",
  databaseURL:
    "https://tedxnerist-b9131-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tedxnerist-b9131",
  storageBucket: "tedxnerist-b9131.firebasestorage.app",
  messagingSenderId: "508772564082",
  appId: "1:508772564082:web:1213c57bfbd11e17a716eb",
  measurementId: "G-0V7JE0177F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Function to log a page view
const logPageView = (page) => {
  if (analytics) {
    logEvent(analytics, "page_view", { page_path: page });
    console.log(`Logged page view: ${page}`);
  }
};

export { app, analytics, logPageView };

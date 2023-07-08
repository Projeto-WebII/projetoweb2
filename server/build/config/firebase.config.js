"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConfig = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
exports.firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURAMENT_ID,
};
const app = (0, app_1.initializeApp)(exports.firebaseConfig);
const analytics = (0, analytics_1.isSupported)().then((yes) => (yes ? (0, analytics_1.getAnalytics)(app) : null));

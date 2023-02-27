// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getMessaging,getToken,onMessage  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js";
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARvZdh7T75NeCEidkf4OqkMh1UZYzfHbM",
  authDomain: "web-push-7cd09.firebaseapp.com",
  projectId: "web-push-7cd09",
  storageBucket: "web-push-7cd09.appspot.com",
  messagingSenderId: "605587489568",
  appId: "1:605587489568:web:2fc6a4c81a17937d42cd45",
  measurementId: "G-1KNNQNJ399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BNqTfkFzy_zW4M0tEA62AHgxNXodV8wosVSGZnYUu5krAkgvjEYqf7hZFS89svWLc0uvgXO8w0vN7raNScVqlxs' }).then((currentToken) => {
if (currentToken) {
  // Send the token to your server and update the UI if necessary
  // ...
  onMessage(messaging, (payload) => {
console.log('Message received. ', payload);
// ...
});
  console.log(messaging);
} else {
  // Show permission request UI
  console.log('No registration token available. Request permission to generate one.');
  // ...
}
}).catch((err) => {
console.log('An error occurred while retrieving token. ', err);
// ...
});


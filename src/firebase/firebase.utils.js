import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAsLHLXm0yFDO_pe9ePGy2ZtWhHgIsOFJs",
    authDomain: "sample-shop-db.firebaseapp.com",
    databaseURL: "https://sample-shop-db.firebaseio.com",
    projectId: "sample-shop-db",
    storageBucket: "sample-shop-db.appspot.com",
    messagingSenderId: "557574330974",
    appId: "1:557574330974:web:e2f178ab269381422872cf"
  };

  export const createUserProfileDocument = async (userAuth, data) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
          } catch (error) {
              console.log('error creating user', error.message);
          }
          
      }

      return userRef;
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


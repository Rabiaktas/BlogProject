import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    async signInWithEmailAndPassword(email, password) {
      try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        return userCredential;
      } catch (error) {
        throw error;
      }
    },
  },
};
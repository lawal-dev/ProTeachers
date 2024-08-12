import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";


signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
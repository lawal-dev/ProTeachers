import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const getUser = async (usercol, user) => {
    // const docRef = doc(db, "teachersCollection", user);
    const docRef = doc(db, usercol, user);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        return data;
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
};
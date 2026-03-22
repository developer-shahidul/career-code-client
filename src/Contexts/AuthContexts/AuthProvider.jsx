import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };

        axios
          .post("https://career-code-server-lake.vercel.app/jwt", userData, {
            withCredentials: true,
          })
          .then(() => {
            console.log("JWT cookie set successfully");
            setLoading(false);
          })
          .catch((error) => {
            console.error("JWT Error:", error);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    localStorage.removeItem("career-code-token");
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    loading,
    user,
    setUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

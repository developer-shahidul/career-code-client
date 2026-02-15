import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
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
      setLoading(false);

      // jwt secore
      if (currentUser?.email) {
        const userData = { email: currentUser.email };

        axios
          .post(
            "https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app/jwt",
            userData,
            {
              // withCredentials: true,
            },
          )
          .then((res) => {
            if (res.data.token) {
                localStorage.setItem('career-code-token', res.data.token);
            }
          })
          .catch((error) => console.log(error));
      } else {
        localStorage.removeItem('career-code-token');
      }
      // console.log("user in the auth state change", currentUser);
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
    localStorage.removeItem('career-code-token');
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

import React, { useState } from "react";
import "./login.css";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useEffect } from "react";
import app from "../firebase";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [signup, setSignup] = useState(false);
  const [signuptitle, setSignuptitle] = useState(false);
  const auth = getAuth();
  const history = useHistory();

  function setupSignup() {
    setSignup(true);
    setSignuptitle(true);
  }

  function signupfn() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setDoc(doc(db, "user", userCredential.user.uid), {
          email: email,
          name: name,
        });

        history.push("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  function submitHandle() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className="login">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          ease: "easeOut",
          duration: 0.4,
        }}
        exit={{ opacity: 0.2 }}
        className="register"
      >
        {signup ? (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              ease: "easeOut",
              duration: 0.4,
            }}
            className="modalc"
          >
            <div className="close"></div>

            <div className="modaltitle">
              <h1>Sign up</h1>
            </div>

            <div className="inputs inp">
              <input
                type="email"
                className="email"
                placeholder="Enter Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="inputs">
              <input
                type="password"
                className="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputs">
              <input
                type="text"
                className="name"
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <button className="signinbtn" onClick={signupfn}>
              sign up
            </button>

            <div className="signdiv">
              <p>
                Not having an account?
                <span className="signup-span" onClick={() => setSignup(false)}>
                  sign up
                </span>
              </p>
            </div>
          </motion.div>
        ) : (
          <div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              ease: "easeOut",
              duration: 0.4,
            }}
            className="modalc"
          >
            <div className="close"></div>

            <div className="modaltitle">
              <h1>Sign in</h1>
            </div>

            <div className="inputs inp">
              <input
                type="email"
                className="email"
                placeholder="Enter password"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                type="password"
                className="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="signinbtn" onClick={submitHandle}>
              sign in
            </button>

            <div className="signdiv">
              <p>
                Not having an account?
                <span className="signup-span" onClick={() => setupSignup()}>
                  sign up
                </span>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Login;

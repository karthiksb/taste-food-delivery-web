import React from "react";
import "./header.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import profile from "./profile.jpg";

export default function Header() {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  var history = useHistory();
  const auth = getAuth();

  useEffect(async () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUser(user);
          console.log(uid);
        } else {
          console.log("log out");
        }
      });
    } catch (err) {}

    var ref = doc(db, "user", user.uid);
    const docnap = await getDoc(ref);

    setName(docnap.data().name);
  }, [user]);

  function loginclick() {
    history.push("/login");
  }

  function signout() {
    signOut(auth)
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  function searchFunction() {
    history.push("/search");
  }

  return (
    <div className="header">
      <div className="nav">
        <div className="leftnav">
          <h1 onClick={() => history.push("/")}>Taste</h1>
        </div>
        <div className="centernav">
          <div className="search">
            <input type="text" className="searchinp" />
            <button onClick={searchFunction}>search</button>
          </div>
        </div>
        {user ? (
          <div className="rightnav">
            <ul>
              <li className="profile">
                <img src={profile} alt="" />
                {name}
              </li>
              <li>
                <LocalMallOutlinedIcon />
              </li>
              <li>
                <div className="logins" onClick={signout}>
                  <LoginOutlinedIcon id="login" />
                  <p>Logout</p>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="rightnav">
            <ul>
              <li>
                <div className="logins" onClick={loginclick}>
                  <LoginOutlinedIcon id="login" />
                  <p>login</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

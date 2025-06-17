import React, { useRef, useState } from "react";
import { CheckValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_IMAGE } from "../utils/Constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleSubmitClick = async () => {
    const error = CheckValidation(email.current.value, password.current.value);
    setErrorMessage(error);
    if (error) return;

    try {
      if (!isSignIn) {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name.current.value || email.current.value,
          photoURL: USER_IMAGE,
        });
        const { uid, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email.current.value,
            displayName: displayName,
            password: password.current.value,
            photoURL: photoURL,
          })
        );
      } else {
        // Sign In
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
      }
    } catch (error) {
      setErrorMessage(`${error.message} - ${error.code}`);
    }
  };

  const toggleSignIn = () => setIsSignIn(!isSignIn);

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
          alt="background"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div>
        <form
          className="absolute bg-black/60 p-12 my-36 mx-auto left-0 right-0 md:w-3/12 w-full text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl font-bold mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-4 bg-gray-800 rounded"
              ref={name}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mb-4 bg-gray-800 rounded"
            ref={email}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 bg-gray-800 rounded"
            ref={password}
          />

          {errorMessage && (
            <p className="text-red-600 font-semibold">{errorMessage}</p>
          )}

          <button
            className="bg-red-700 w-full text-white p-2 mt-4 rounded"
            onClick={handleSubmitClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-white mt-4 cursor-pointer" onClick={toggleSignIn}>
            {isSignIn ? "New to Netflix?" : "Already Registered?"}
            <span className="text-red-700">
              {isSignIn ? " Sign up now." : " Sign In"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

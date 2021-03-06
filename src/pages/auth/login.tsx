import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorText from "../../components/ErrorText";
import { auth, Providers } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interface/page";
import firebase from "firebase/compat/app";
import { SignInWithSocialMedia } from "./modules";

const LoginPage: React.FunctionComponent<IPageProps> = (props) => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const history = useHistory();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        history.push("/");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };

  const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
    if (error !== "") setError("");

    setAuthenticating(true);

    SignInWithSocialMedia(provider)
      .then((result) => {
        logging.info(result);
        history.push("/");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };

  return (
    <div className=" flex justify-center min-h-screen bg-gray-100">
      
        <div className="container sm:mt-40 mt-24 mb-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
          <div className="text-center my-6">
            <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
            <p className="text-gray-500">Sign in to access your account</p>
          </div>
          <div className="m-6">
            <form className="mb-4">
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Email Address:
                </label>
                <input
                  className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-4">
                <label className="block text-md font-light mb-2">
                  Password
                </label>
                <input
                  className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>

              <div className="flex items-center justify-between mb-5">
                <button
                  className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  disabled={authenticating}
                  onClick={() => signInWithEmailAndPassword()}
                >
                  LOGIN
                </button>
                <p className="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500">
                  <Link to="/forget">Forget your password?</Link>
                </p>
              </div>
              <ErrorText error={error} />

              <p className="text-center text-md font-light">
                Don't have an account?{" "}
                <Link
                  className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                  to="/register"
                >
                  Register here.
                </Link>
              </p>
              <button
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="button"
                disabled={authenticating}
                onClick={() => signInWithSocialMedia(Providers.google)}
              >
                Login with Google
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;

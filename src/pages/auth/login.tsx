import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import AuthContainer from "../../components/AuthContainer";
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
    <AuthContainer header="Login">
      <form>
        <div className="mb-4">
          <label className="block text-md font-light mb-2">Email: </label>
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
          <label className="block text-md font-light mb-2">Password</label>
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
          <Link className="font-light text-md text-indigo-600" to="/register">
            Register here.
          </Link>
        </p>
        <button
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
        disabled={authenticating}
        onClick={() => signInWithSocialMedia(Providers.google)}
          >Login with Google</button>
      </form>{/* 
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormGroup>
      <Button
        disabled={authenticating}
        color="success"
        block
        onClick={() => signInWithEmailAndPassword()}
      >
        Login
      </Button>
      <small>
        <p className="m-1 text-center">
          Don't have an account? <Link to="/register">Register here.</Link>
        </p>
        <p className="m-1 text-center">
          <Link to="/forget">Forget your password?</Link>
        </p>
      </small>
      <ErrorText error={error} />
      <hr className="bg-info m-3" />
      <Button
        block
        disabled={authenticating}
        onClick={() => signInWithSocialMedia(Providers.google)}
        style={{ backgroundColor: "#ea4335", borderColor: "#ea4335" }}
      >
        <i className="fab fa-google mr-2"></i> Sign in with Google
      </Button> */}
    </AuthContainer>
  );
};

export default LoginPage;

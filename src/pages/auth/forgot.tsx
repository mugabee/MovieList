import React, { useState } from "react";
import AuthContainer from "../../components/AuthContainer";
import ErrorText from "../../components/ErrorText";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interface/page";

const ForgotPasswordPage: React.FunctionComponent<IPageProps> = (props) => {
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const resetPasswordRequest = () => {
    if (error !== "") setError("");

    setSending(true);

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        logging.info("Email sent.");
        setSent(true);
        setSending(false);
      })
      .catch((error) => {
        logging.error(error);
        setError(error.message);
        setSending(false);
      });
  };

  return (
    <AuthContainer header="Send Password Reset">
      {sent ? (
        <p>A link has been sent to your email with instructions.</p>
      ) : (
        <>
          <div className="flex justify-center min-h-screen bg-gray-100 antialiased">
            <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
              <div className="text-center m-6">
                <h1 className="text-3xl font-semibold text-gray-700">
                  Forgot your password?
                </h1>
                <p className="text-gray-500">
                  Just enter your email address below and we'll send you a link
                  to reset your password!
                </p>
              </div>

              <div className="m-6">
                <form className="mb-4">
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email address"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <button
                      disabled={sending}
                      color="success"
                      onClick={() => resetPasswordRequest()}
                      type="button"
                      className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                    >
                      Send reset link
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ErrorText error={error} />         
        </>
      )}
    </AuthContainer>
  );
};

export default ForgotPasswordPage;

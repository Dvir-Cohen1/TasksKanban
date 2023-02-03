import React, { useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import {
  loginByEmailAndPassword,
  clearErrorMessage,
} from "../../app/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";


const TIME_TO_CLEAR_ERROR_MSG = 3500;

const Login = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);

  function onLoginSubmit(e) {
    e.preventDefault();
    const formValues = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatch(loginByEmailAndPassword(formValues));
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, TIME_TO_CLEAR_ERROR_MSG);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (



    
    <>


      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto sm:max-w-md">
          <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg  text-slate-100 dark:shadow-slate-800">
            <p className="text-lg font-medium text-center my-10">Sign in</p>
            <p>test@test.com || Password123</p>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={onLoginSubmit} className="flex flex-col gap-y-3">
              <div>
                <label className="text-sm font-medium text-slate-100">
                  <p>Email</p>
                </label>
                <div className="relative mt-1">
                  <input
                    onChange={(e) => {
                      e.target;
                    }}
                    required
                    ref={emailInputRef}
                    className="w-full p-3 pr-12 text-sm shadow-sm border text-slate-800 border-gray-200 rounded-global dark:bg-slate-900 dark:border-gray-700"
                    type="text"
                  />
                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <span className="w-fit">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-100">
                  <p>Password</p>
                </label>
                <div className="relative mt-1">
                  <input
                    onChange={(e) => {
                      e.target;
                    }}
                    required
                    ref={passwordInputRef}
                    className="w-full p-3 pr-12 text-sm shadow-sm border text-slate-800 border-gray-200 rounded-global dark:bg-slate-900 dark:border-gray-700"
                    type="text"
                  />
                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <span className="w-fit">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="block w-full px-5 bg-slate-300 py-3 text-sm font-medium text-slate-600 font-semibold bg-primary-500 rounded-global mt-3 hover:bg-primary-700"
              >
                Login
              </button>
            </form>
            <div className="flex items-center gap-x-1.5 justify-center">
              <p className="text-sm text-center text-gray-500">No Account? </p>
              <Link to="/register" className="underline text-sm">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

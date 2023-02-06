import React, { useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { registerByPayload } from "../../app/redux/slices/registerSlice";
import formValidationSchema from "../../pages/authentication/formValidationSchema";
import { loginByEmailAndPassword } from "../../app/redux/slices/authSlice";
import RegisterTextField from "../../components/forms/RegisterTextField";
import { registerItemLists } from "../../constants/constants";

const Register = () => {
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(formValidationSchema),
  });

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const onRegisterSubmit = (formData) => {
    const formValues = {
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
      lastName: formData.lastName,
      firstName: formData.firstName,
    };
    dispatch(registerByPayload(formValues));

    setTimeout(() => {
      console.log(formValues.email, formValues.password);
      dispatch(loginByEmailAndPassword(formValues));
    }, 500);
  };

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto sm:max-w-md">
        <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg  text-slate-100 dark:shadow-slate-800">
          <p className="text-lg font-medium text-center my-10">Sign up</p>
          <form onSubmit={handleSubmit(onRegisterSubmit)}>
            {registerItemLists.map((registerItem, index) => {
              return (
                <RegisterTextField
                  label={registerItem.label}
                  fieldName={registerItem.field}
                  type={registerItem.type}
                  register={register}
                  errors={errors}
                  key={index}
                  size={"small"}
                  color={"primary"}
                />
              );
            })}

            <button
              type="submit"
              className="block w-full px-5 bg-slate-300 py-3 text-sm text-slate-600 font-semibold bg-primary-500 rounded-global mt-3 hover:bg-primary-700"
            >
              Register
            </button>
          </form>
          <div className="flex items-center gap-x-1.5 justify-center">
            <p className="text-sm text-center text-gray-500">No Account? </p>
            <Link to="/login" className="underline text-sm">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

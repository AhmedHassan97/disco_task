import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import * as types from "../../types/types";
import { useStore } from "../../store/store";
import { useRouter } from "next/router";
import useLogin from "../../hooks/useLogin";
const LoginComponent: FC = () => {
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  const { isLoggedIn } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useLogin();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/home");
    }
  });
  const onSubmit: SubmitHandler<types.LoginForm> = async (data) => {
    setError(false);
    setLoading(true);
    const result = await login(data);

    if (result === true) {
      router.push("/home");
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center min-h-screen space-y-6">
      <Image src="/logo-02.png" alt="logo" width={200} height={100} />
      <div className=" flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              className={`p-2 text-black border-base-content border-2 rounded-md text-xl mb-4`}
              aria-label="username"
              placeholder="Username"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && (
              <div className="mb-3 text-normal text-error">
                username is required
              </div>
            )}
          </div>
          <div>
            <input
              type="password"
              className={`p-2 text-black border-base-content border-2 rounded-md text-xl mb-4`}
              id="password"
              aria-label="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <div className="mb-3 text-normal text-error">
                password is required{" "}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <button
              className={`bg-blue-500 text-black-content p-4 px-8 hover:bg-blue-200 -focus rounded-box`}
              type="submit"
              aria-label="submitbutton"
            >
              Login
            </button>
            {loading && (
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            )}
            {error && (
              <div className="mb-3 text-normal text-error">
                username or password is incorrect
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginComponent;

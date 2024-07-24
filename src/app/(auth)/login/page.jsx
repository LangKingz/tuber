import InputField from "@/app/component/input";
import PasswordField from "@/app/component/password";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPages = () => {
  return (
    <div className="flex flex-col w-screen bg-gradient-to-b from-[#0074A7] to-[#084E72] h-screen items-center">
      <div className="header justify-start flex px-7 py-4 w-full ">
        <Link href={"/"}>
          {" "}
          <Image src={"/logo.png"} width={150} height={100} alt={"logo"} />
        </Link>
      </div>
      <div className="h-full w-full flex justify-center p-3 items-center">
        <div className="bg-white rounded-xl shadow-xl shadow-gray-700 flex flex-col w-full lg:w-1/3 p-8 ">
          <button className="btn border-black">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_1833)">
                <path
                  d="M11.0669 1.4438C8.00906 2.46923 5.37199 4.41553 3.54302 6.99682C1.71406 9.57811 0.789607 12.6583 0.90545 15.785C1.02129 18.9117 2.17133 21.9201 4.18664 24.3683C6.20194 26.8165 8.97629 28.5755 12.1022 29.3868C14.6364 30.019 17.2915 30.0467 19.8393 29.4677C22.1473 28.9666 24.2812 27.8946 26.0319 26.3568C27.8539 24.7074 29.1765 22.609 29.8574 20.2874C30.5974 17.7628 30.7291 15.1078 30.2423 12.5263H16.0114V18.2327H24.253C24.0883 19.1429 23.7353 20.0115 23.2152 20.7867C22.6951 21.5619 22.0185 22.2277 21.226 22.7443C20.2196 23.3878 19.0852 23.8208 17.8954 24.0155C16.7022 24.23 15.4783 24.23 14.2851 24.0155C13.0757 23.7738 11.9317 23.2913 10.9258 22.5987C9.3099 21.493 8.09656 19.9221 7.45895 18.1102C6.81055 16.2645 6.81055 14.2634 7.45895 12.4176C7.91281 11.1238 8.66311 9.94582 9.65384 8.97155C10.7876 7.83614 12.223 7.02454 13.8025 6.6258C15.382 6.22706 17.0446 6.25659 18.6079 6.71114C19.8292 7.07353 20.9459 7.70669 21.8692 8.56014C22.7985 7.66646 23.7262 6.77046 24.6523 5.87216C25.1305 5.38911 25.6517 4.92917 26.1227 4.43456C24.7134 3.16678 23.0591 2.1803 21.2547 1.53163C17.9689 0.378288 14.3735 0.347293 11.0669 1.4438Z"
                  fill="white"
                />
                <path
                  d="M11.067 1.44382C14.3733 0.346572 17.9687 0.376751 21.2548 1.52934C23.0595 2.18242 24.713 3.17365 26.1204 4.44614C25.6422 4.94075 25.1377 5.403 24.65 5.88374C23.7223 6.77896 22.7954 7.67111 21.8693 8.56017C20.946 7.70671 19.8292 7.07355 18.608 6.71117C17.0452 6.25502 15.3827 6.22379 13.8027 6.6209C12.2228 7.018 10.7865 7.82811 9.65152 8.96233C8.66079 9.9366 7.91049 11.1146 7.45662 12.4084L2.50018 8.69884C4.27429 5.29798 7.34604 2.69658 11.067 1.44382Z"
                  fill="#E33629"
                />
                <path
                  d="M1.18502 12.3737C1.45142 11.0975 1.89371 9.86147 2.50004 8.69885L7.45648 12.4177C6.80809 14.2634 6.80809 16.2645 7.45648 18.1103C5.80513 19.3429 4.15299 20.5818 2.50004 21.8268C0.98215 18.9061 0.519219 15.5783 1.18502 12.3737Z"
                  fill="#F8BD00"
                />
                <path
                  d="M16.0114 12.524H30.2423C30.7291 15.1056 30.5974 17.7606 29.8574 20.2852C29.1765 22.6068 27.8539 24.7051 26.0319 26.3546C24.4323 25.1481 22.8256 23.9509 21.226 22.7444C22.0191 22.2273 22.6959 21.5608 23.2161 20.7848C23.7362 20.0087 24.0889 19.1392 24.253 18.2282H16.0114C16.009 16.3284 16.0114 14.4262 16.0114 12.524Z"
                  fill="#587DBD"
                />
                <path
                  d="M2.49771 21.8268C4.15065 20.5942 5.8028 19.3553 7.45415 18.1104C8.09303 19.9228 9.30811 21.4938 10.9258 22.5988C11.9348 23.2882 13.0813 23.7668 14.2923 24.004C15.4855 24.2185 16.7094 24.2185 17.9026 24.004C19.0923 23.8094 20.2268 23.3764 21.2332 22.7329C22.8327 23.9393 24.4395 25.1366 26.039 26.343C24.2886 27.8817 22.1547 28.9545 19.8464 29.4563C17.2987 30.0353 14.6436 30.0075 12.1093 29.3754C10.105 28.8581 8.23283 27.9461 6.61015 26.6967C4.89263 25.3785 3.48985 23.7174 2.49771 21.8268Z"
                  fill="#319F43"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1833">
                  <rect width="30.6042" height="29.584" fill="white" transform="translate(0.405579 0.470825)" />
                </clipPath>
              </defs>
            </svg>
            Continue with google
          </button>
          <div className="divider">or</div>
          <form action="" className="flex flex-col">
            <InputField placeholder="Masukkan email anda" type="email" labels="Email" icon="envelope" />
            <PasswordField placeholder="Masukan password anda" labels="Password" icon="key" />
            <div className="flex flex-row justify-between mt-2 mb-8">
              <label htmlFor="" className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 border-black" name="remember" id="" />
                <label htmlFor="" className="font-medium text-sm">
                  ingat sandi
                </label>
              </label>
              <Link href="/forgot-password" className="font-medium text-sm">
                Lupa sandi?
              </Link>
            </div>
            <button type="submit" className="bg-[#084E72] btn hover:bg-[#0074A7] text-white py-4 px-5 rounded-2xl  font-semibold">
              Log In
            </button>
            <p className="flex justify-center items-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-bold text-sm">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;

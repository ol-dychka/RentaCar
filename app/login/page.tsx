import Link from "next/link";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import { CustomButton } from "@/components";

const LoginPage = () => {
  return (
    <main className="overflow-hidden">
      <div className="pt-20 padding-x">
        <h1 className="hero__title">Log in to book or rent a car.</h1>

        <p className="hero__subtitle">
          If you do not have an account,{" "}
          <Link href="/register" className="underline text-primary-blue">
            Register
          </Link>
        </p>

        <div className="w-full h-screen relative">
          <div className="absolute xl:-top-36 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />

          <div className="pt-16">
            <div className="rounded-xl border-gray-100 border bg-white lg:w-1/2 w-full p-4">
              <form>
                <div className="space-y-4">
                  <CustomInput name="email" placeholder="E-mail" />
                  <CustomInput name="password" placeholder="Password" />
                  <CustomButton
                    btnType="submit"
                    title="Log in"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10 w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;

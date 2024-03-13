"use client";

import { useSession } from "next-auth/react";
import { googleSignIn, googleSignOut } from "@/actions/sign-in";
import { CustomButton } from ".";

const GoogleSignIn = () => {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = (
      <CustomButton
        btnType="submit"
        title="Sign In"
        containerStyles="text-gray-500 rounded-full bg-white min-w-[130px]"
        isDisabled
      />
    );
  } else if (session.data?.user) {
    authContent = (
      <form action={googleSignOut}>
        <CustomButton
          btnType="submit"
          title={session.data.user.name || ""}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </form>
    );
  } else {
    authContent = (
      <form action={googleSignIn}>
        <CustomButton
          btnType="submit"
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </form>
    );
  }

  return authContent;
};
export default GoogleSignIn;

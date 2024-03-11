"use client";

import { useSession } from "next-auth/react";
import { googleSignIn, googleSignOut } from "@/actions/sign-in";
import { CustomButton } from ".";

const GoogleSignIn = () => {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <form action={googleSignOut}>
        <CustomButton
          btnType="submit"
          title={session.data.user.name || ""}
          containerStyles="bg-primary-blue text-white rounded-full mt-10 w-full"
        />
      </form>
    );
  } else {
    authContent = (
      <form action={googleSignIn}>
        <CustomButton
          btnType="submit"
          title="Sign In"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 w-full"
        />
      </form>
    );
  }

  return authContent;
};
export default GoogleSignIn;

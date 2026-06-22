"use client";

import google from "@/public/google.webp";
import github from "@/public/github.png";
import Button from "@/components/Button";
import { Bounce, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import ROUTES from "@/route";

function OAuthForm() {
  const oauthSignIn = async (type: "google" | "github") => {
    try {
      await signIn(type, {
        redirectTo: ROUTES.HOME,
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className="flex gap-4">
      <Button
        image={google}
        variant="outline"
        onClick={() => oauthSignIn("google")}
      >
        Sign in with Google
      </Button>

      <Button
        image={github}
        variant="outline"
        onClick={() => oauthSignIn("github")}
      >
        Sign in with GitHub
      </Button>
    </div>
  );
}

export default OAuthForm;

"use client";

import Button from "@/components/Button";

import React, { useState } from "react";
import OAuthForm from "./OAuthForm";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import ROUTES from "@/route";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string[];
  username?: string[];
  email?: string[];
  password?: string[];
}

function AuthenticationForm({
  type,
  submitAction,
}: {
  type: "login" | "register";
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  submitAction: Function;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors | null>(null);

  const router = useRouter();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);
    const result = await submitAction(formData);
    if (result.success) {
      console.log("success");
      router.push(ROUTES.HOME);
    } else {
      if ("details" in result && result.details) {
        return setErrors(result.details as FormErrors);
      }
      if ("message" in result && result.message === "Email Already Exists") {
        return setErrors({
          email: [result.message],
        });
      }
      if ("message" in result && result.message === "Username Already Exists") {
        return setErrors({
          username: [result.message],
        });
      }
      setErrors({
        password: [result.message],
      });
    }
  };
  return (
    <form className="w-4/5 space-y-6" onSubmit={submit}>
      <h3 className="text-xl font-semibold">
        Sign {type === "login" ? "In" : "Up"} to Creative{" "}
        <span className="text-main">Coder</span> Forum
      </h3>
      {type === "register" && (
        <>
          <div>
            <Input
              label="Name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            {errors?.name && (
              <p className="my-2 text-xs text-red-500">{errors.name[0]}</p>
            )}
          </div>
          <div>
            <Input
              label="Username"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            {errors?.username && (
              <p className="my-2 text-xs text-red-500">{errors.username[0]}</p>
            )}
          </div>
        </>
      )}
      <div>
        <Input
          label="Email Address"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors?.email && (
          <p className="my-2 text-xs text-red-500">{errors.email[0]}</p>
        )}
      </div>
      <div>
        <Input
          label="Password"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {errors?.password && (
          <p className="my-2 text-xs text-red-500">{errors.password[0]}</p>
        )}
      </div>
      <div>
        <Button type="submit">{type === "login" ? "Login" : "Register"}</Button>
      </div>
      <OAuthForm />
    </form>
  );
}

export default AuthenticationForm;

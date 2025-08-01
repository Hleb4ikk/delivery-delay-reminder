import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { PrimaryButton } from "@/components/basic/Button";
import { Input } from "@/components/basic/Input";
import { X, Shield, Mail, Send } from "lucide-react";
import { authSchema } from "@/schemas/authSchema";
import { FormErrors } from "../forms/types";
import { FormEvent, useState } from "react";
import z from "zod";
import { validateForm } from "../forms/validation";
import { useUser } from "@/context";

async function auth(
  user: z.infer<typeof authSchema>,
  type: "login" | "register"
) {
  let url = "";

  switch (type) {
    case "login":
      url = "http://localhost:8080/auth/login";
      break;
    case "register":
      url = "http://localhost:8080/auth/register";
      break;
    default:
      throw new Error("Unknown auth type");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  console.log(response);
  return await response.json();
}

export const AuthForm = ({ trigger }: { trigger: React.ReactNode }) => {
  const [authState, setAuthState] = useState<"login" | "register">("login");
  const [messages, setMessages] = useState<FormErrors<
    z.infer<typeof authSchema>
  > | null>(null);
  const { setUser } = useUser();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = validateForm(new FormData(event.currentTarget), authSchema);

    if (!result.success) {
      setMessages(result.errors);
    } else {
      console.log(auth(result.data, authState));
      setMessages(null);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center">
          <div className=" bg-blue-500 size-15 bg-linear-65 from-sky-500 to-indigo-500 text-white rounded-xl flex items-center justify-center">
            <Shield size={30} />
          </div>
          <AlertDialogTitle className="text-xl font-bold">
            {authState === "login" ? "Sign In" : "Sign Up"}
          </AlertDialogTitle>
          <p className="text-gray-500 text-sm">Enter your email and password</p>
        </AlertDialogHeader>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <Input
                className="h-12"
                placeholder="Enter your email"
                name="email"
              />
              {messages?.email && (
                <p className="text-red-500">{messages?.email.errors[0]}</p>
              )}
            </div>
            <div>
              <Input
                className="h-12"
                placeholder="Enter your password"
                name="password"
                type="password"
              />
              {messages?.password && (
                <ul className="text-red-500">
                  {messages?.password.errors.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <PrimaryButton className="h-12">
            {authState === "login" ? "Sign In" : "Sign Up"}
          </PrimaryButton>
        </form>
        <p className="text-sm text-gray-500">
          {authState === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <PrimaryButton
            onClick={() => {
              authState === "login"
                ? setAuthState("register")
                : setAuthState("login");
            }}
            className="ml-1 bg-opacity-0 hover:bg-opacity-0 shadow-none text-black p-0 underline text-sm text-gray-700 cursor-pointer"
          >
            {authState === "login" ? "Sign up" : "Sign in"}
          </PrimaryButton>
        </p>
        <AlertDialogCancel className="absolute right-0 border-none shadow-none">
          <X />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

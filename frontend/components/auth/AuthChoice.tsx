import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";

import { PrimaryButton } from "@/components/basic/Button";

import { X, Shield, Mail, Send } from "lucide-react";
import { useState } from "react";

type AuthStep =
  | "choose"
  | "email"
  | "telegram-phone"
  | "telegram-verify"
  | "authenticated";

export const AuthChoice = ({ trigger }: { trigger: React.ReactNode }) => {
  const [authStep, setAuthStep] = useState<AuthStep>("choose");

  return (
    <AlertDialog
      onOpenChange={(open) => {
        if (!open) {
          setAuthStep("choose");
        }
      }}
    >
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center">
          <div className=" bg-blue-500 size-15 bg-linear-65 from-sky-500 to-indigo-500 text-white rounded-xl flex items-center justify-center">
            <Shield size={30} />
          </div>
          <AlertDialogTitle className="text-xl font-bold">
            {authStep === "choose" && "Sign In"}
            {authStep === "email" && "Email Authentication"}
            {authStep === "telegram-phone" && "Telegram Authentication"}
          </AlertDialogTitle>
          <p className="text-gray-500 text-sm">
            {authStep === "choose" &&
              "Choose your preffered authentication method"}
            {authStep === "email" && "Enter your email and password"}
            {authStep === "telegram-phone" && "Enter your phone number"}
          </p>
        </AlertDialogHeader>
        {authStep === "choose" && (
          <div className="flex flex-col gap-4">
            <PrimaryButton
              onClick={() => setAuthStep("email")}
              className="h-12 border-1 border-border hover:opacity-100 bg-white text-black hover:bg-gray-100"
            >
              <Mail />
              Continue with Email
            </PrimaryButton>
            <div className="w-full text-gray-700">
              <Separator className="data-[orientation=horizontal]:h-[0.1px]" />
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2">
                OR
              </span>
            </div>
            <PrimaryButton
              onClick={() => setAuthStep("telegram-phone")}
              className="h-12"
            >
              <Send />
              Continue with Telegram
            </PrimaryButton>
          </div>
        )}

        <AlertDialogCancel className="absolute right-0 border-none shadow-none">
          <X />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import z from "zod";
import { IconInput } from "../shared/IconInput";
import { loginSchema } from "./loginValidation";
import { useForm } from "react-hook-form";

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login:", data);
  };

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Sign In
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Please enter your credentials to access your store secure dashboard.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <IconInput
            icon={Mail}
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500 ml-2">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <IconInput
            icon={Lock}
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500 ml-2">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#3B9DF8] text-white font-medium py-3 rounded-md hover:bg-[#2a8ae0] transition-colors duration-300 disabled:opacity-60"
        >
          {isSubmitting ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

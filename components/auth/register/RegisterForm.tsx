"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, ShieldCheck } from "lucide-react";
import z from "zod";
import { IconInput } from "../shared/IconInput";
import { useForm } from "react-hook-form";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Register:", data);
  };

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Create an Account
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Get started by creating your secure administrator store account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Full Name Field */}
        <div className="flex flex-col gap-1">
          <IconInput
            icon={User}
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500 ml-2">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
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

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <IconInput
            icon={Lock}
            label="Password"
            type="password"
            placeholder="Create a password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500 ml-2">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col gap-1">
          <IconInput
            icon={ShieldCheck}
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 ml-2">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button (Exact Same Styling & Height As Login) */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#3B9DF8] text-white font-medium py-3 rounded-md hover:bg-[#2a8ae0] transition-colors duration-300 disabled:opacity-60 text-base"
        >
          {isSubmitting ? "Creating account…" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

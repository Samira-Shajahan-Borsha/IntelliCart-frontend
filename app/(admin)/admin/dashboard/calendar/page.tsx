import type { Metadata } from "next";
import { connection } from "next/server";

import { Calendar } from "./_components/calendar";

export const metadata: Metadata = {
  title: "Open Source Calendar with shadcn/ui",
  description:
    "Explore an open source calendar interface for organizing events, schedules, and daily activities.",
  alternates: {
    canonical: "/admin/dashboard/calendar",
  },
};

export default async function Page() {
  await connection();
  return <Calendar />;
}

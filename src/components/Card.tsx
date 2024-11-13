/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  discription: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="">
        <props.icon className="h-8 w-8 text-gray-500" />
        <p className="text-sm mt-4">{props.label}</p>
      </section>
      <section className="flex flex-col gap-1 ">
        <h2 className="text-2xl font-semibold ">{props.amount}</h2>
        <p className="text-xs text-gray-500 mt-9">{props.discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}

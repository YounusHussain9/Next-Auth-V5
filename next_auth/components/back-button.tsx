"use client";

import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full mt-4" size={"sm"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

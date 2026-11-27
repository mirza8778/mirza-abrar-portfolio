"use client";

import { useEffect, useState } from "react";
import { experienceYears } from "@/lib/experience";

export function ExperienceYears() {
  const [text, setText] = useState(experienceYears);
  useEffect(() => setText(experienceYears()), []);
  return <span suppressHydrationWarning>{text}</span>;
}
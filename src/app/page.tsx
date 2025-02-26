import React from "react";
import Educations from "@/components/resume/education";
import Experience from "@/components/resume/experience";

export default function Home()
{
  return(
    <div className="h-screen p-4 lg:p-8 mt-16">
      <Educations />
      <Experience />
    </div>
  )
}

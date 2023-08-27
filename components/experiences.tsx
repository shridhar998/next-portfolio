"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import Experience from "./experience";
// import { useSectionInView } from "@/lib/hooks";

export default function Experiences() {
  // const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>Work Experience</SectionHeading>
      <div>
        {experiencesData .map((project, index) => (
          <React.Fragment key={index}>
            <Experience {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
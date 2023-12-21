"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import Education from "./education";
// import { useSectionInView } from "@/lib/hooks";

export default function Educations() {
  // const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="educations" className="scroll-mt-28 mb-28">
      <SectionHeading>My educations</SectionHeading>
      <div>
        {educationData.map((education, index) => (
          <React.Fragment key={index}>
            <Education {...education} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
import SectionContainer from "@/components/ui/sectionContainer";
import { Button } from "@/components/ui/button";
import React from "react";

const EducationAndTrainings = () => {
  return (
    <section className=" bg-cover bg-center [background-image:theme(backgroundImage.gradient-darkness),url(/assets/images/bg-training.png)] md:aspect-video">
      <SectionContainer
        className=" md:aspect-video"
        title="education & trainings"
      >
        <div className="flex h-full  items-center">
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-6  xl:w-2/5">
            <p className="section-header">
              Our Education & <span className="block">Trainings</span>
            </p>
            <p className="content-text">
              Discover immersive learning experiences at Teleios Dome. From
              educational trips exploring our factory to safety driving lessons
              and group racing instruction, we offer dynamic programs to engage
              learners of all ages. Prepare to embark on an educational journey
              at Teleios Dome.
            </p>

            <Button className="self-start md:w-40">find out more</Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default EducationAndTrainings;

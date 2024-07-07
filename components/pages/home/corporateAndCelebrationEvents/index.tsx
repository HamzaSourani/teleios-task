import AppVideo from "@/components/items/appVedio";
import SectionContainer from "@/components/ui/sectionContainer";
import { Button } from "@/components/ui/button";
import React from "react";

const CorporateAndCelebrationEvents = () => {
  return (
    <section>
      <SectionContainer title="events">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="section-header">
            corporate & celebration<span className="block">events</span>
          </p>
          <p className="content-text">
            Events Corporate & Celebration events From Corporate milestones to
            personal celebrations, Teleios Dome is your premier destination for
            private events Whether you&apos;re planning a corporate gathering,
            product launch, team-building session, or personal celebration, our
            versatile venue and dedicated team ensure an unforgettable
            experience tailored to your needs See more
          </p>
          <AppVideo src="https://dud8cevzzy9qg.cloudfront.net/videos/BRAND_VIDEO_GENERIC_16X9_APPROVED-LOWRES.mp4" />
          <Button className=" m-auto md:w-40" variant={"outline"}>
            see more
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
};

export default CorporateAndCelebrationEvents;

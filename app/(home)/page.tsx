import Experience from "@/components/items/experience";
import Container from "@/components/ui/container";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" h-[60vh] md:h-screen w-screen object-cover"
      >
        <source
          src={
            "https://dud8cevzzy9qg.cloudfront.net/videos/BRAND_VIDEO_GENERIC_16X9_APPROVED-LOWRES.mp4"
          }
          type="video/mp4"
        />
      </video>
      <Container>
        <Experience />
      </Container>
    </div>
  );
}

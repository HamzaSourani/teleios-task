import MainSection from "@/components/items/homePage/sections/main";
import MainVideo from "@/components/items/mainVideo";
import Container from "@/components/ui/container";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <MainVideo />
      <Container>
        <MainSection />
      </Container>
    </div>
  );
}

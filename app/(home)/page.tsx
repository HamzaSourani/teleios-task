import FoodSection from "@/components/items/homePage/sections/food";
import MainSection from "@/components/items/homePage/sections/main";
import SocialAndPartySection from "@/components/items/homePage/sections/socialAndParty";
import SubscribeForm from "@/components/items/homePage/sections/subscribForm";
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
      <FoodSection />
      <Container>
        <SocialAndPartySection />
      </Container>
      <SubscribeForm />
    </div>
  );
}

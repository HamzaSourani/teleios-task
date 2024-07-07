import FoodSection from "@/components/pages/home/food";
import MainSection from "@/components/pages/home/main";
import SocialAndPartySection from "@/components/pages/home/socialAndParty";
import SubscribeForm from "@/components/pages/home/subscribForm";
import MainVideo from "@/components/pages/home/mainVideo";
import Container from "@/components/ui/container";
import SectionContainer from "@/components/ui/sectionContainer";
import ExperiencesSection from "@/components/pages/home/experiences";
import EventStripeCarousel from "@/components/pages/home/eventsStripCarousel";
import DomeCarousel from "@/components/pages/home/domeCarousel";
import OurEventCarousel from "@/components/pages/home/ourEventsCarousel";
import CorporateAndCelebrationEvents from "@/components/pages/home/corporateAndCelebrationEvents";
import Stores from "@/components/pages/home/stores";
import EducationAndTrainings from "@/components/pages/home/educationAndTrainings";
import FAQ from "@/components/pages/home/FAQ";

export default function HomePage() {
  return (
    <div>
      <MainVideo />
      <ExperiencesSection />
      <EventStripeCarousel />
      <DomeCarousel />
      <OurEventCarousel />
      <CorporateAndCelebrationEvents />
      <Stores />
      <EducationAndTrainings />
      <FAQ />
      <SubscribeForm />
      {/* <Container>
        <MainSection />
      </Container>
      <FoodSection />
      <Container>
        <SocialAndPartySection />
      </Container>
      <SubscribeForm /> */}
    </div>
  );
}

import AppImage from "@/components/items/appImage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const SocialAndPartySection = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-x-16 lg:gap-20 ">
      <div className="my-12 flex items-center flex-col gap-10 md:gap-x-16 lg:gap-20">
        <div className="grid grid-cols-1 items-center  md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <AppImage src="/assets/images/social-section.jpg" />
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="section-header">This Is Social Gaming</p>
            <hr className="h-1 w-8 bg-white" />
            <p>
              A thrilling Teleios racing experience designed to make you feel
              like a champion. F1 Arcade brings all the excitement, glamour and
              thrills of Formula 1® to the UK with our bespoke full-motion
              racing simulators, incredible food & cocktail menus and an
              electric atmosphere creating the perfect social gaming experience.
            </p>
            <Button className="self-start">find out more</Button>
          </div>
        </div>
      </div>
      <div className="my-12 flex items-center flex-col gap-10 md:gap-x-16 lg:gap-20">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="section-header">A WORLD FIRST EXPERIENCE</p>
            <hr className="h-1 w-8 bg-white" />
            <p>
              A thrilling Teleios racing experience designed to make you feel
              like a champion. F1 Arcade brings all the excitement, glamour and
              thrills of Formula 1® to the UK with our bespoke full-motion
              racing simulators, incredible food & cocktail menus and an
              electric atmosphere creating the perfect social gaming experience.
            </p>
            <Button className="self-start">find out more</Button>
          </div>
          <AppImage
            src="/assets/images/gaming-section.jpg"
            direction="revert"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialAndPartySection;

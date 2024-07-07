import { Fragment } from "@/components/items/svg";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

const FoodSection = () => {
  return (
    <div className="h-[70vh] bg-[url(/assets/images/bg-food-section.png)] bg-cover ">
      <Container className="h-full">
        <div className="flex h-full items-center justify-center md:justify-start">
          <div className="relative ">
            <div className={"absolute h-full top-5 -right-3"}>
              <Fragment className=" fill-secondary/70 h-[80%]  " />
            </div>
            <div className="food-section-clip py-12 px-8 bg-background w-[90vw] md:w-[60vw] lg:w-[30vw] ">
              <div className="flex flex-col relative  gap-4 md:gap-6">
                <div>
                  <p className="section-header   ">Food</p>
                  <p className="section-header ">& Drinks</p>
                </div>
                <hr className="h-1 w-8 bg-white" />

                <p>
                  A thrilling Teleios racing experience designed to make you
                  feel like a champion. F1 Arcade brings all the excitement,
                  glamour and thrills of Formula 1® to the UK with our bespoke
                  full-motion racing simulators, incredible food & cocktail
                  menus and an electric atmosphere creating the perfect social
                  gaming experience.
                </p>
                <Button className="self-start  bg-gradient-primary">
                  <p className="skew-x-[35deg]  ">find out more</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FoodSection;

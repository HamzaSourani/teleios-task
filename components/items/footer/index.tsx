"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaceBookIcon, InstagramIcon, ThreadIcon, WhatsappIcon } from "../svg";
import Link from "next/link";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import {
  FOOTER_CONTACTS_ITEMS,
  FOOTER_NAV_ITEMS,
  NAV_MENU_ITEMS,
} from "@/constants";
import L from "leaflet";

var MAP_INDICATOR_ICON = L.icon({
  iconUrl: "/assets/svg/location.svg",
  iconSize: [38, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-8 border-t border-border  px-6 py-8 shadow-negative md:flex-row md:gap-16  md:px-12  md:py-16 ">
      <Link href={"/"} className="">
        <div className="flex md:flex-col gap-8  ">
          <Image
            src={"/assets/images/logo3.png"}
            className="hover:scale-105 transition-transform"
            width={100}
            height={100}
            alt="teleios"
          />
          <Image
            src={"/assets/images/esaad.png"}
            className="hover:scale-105 transition-transform"
            width={100}
            height={100}
            alt="essad"
          />
        </div>
      </Link>
      <div className=" flex gap-16">
        <div>
          <p className="mb-6 text-xl font-semibold capitalize text-secondary">
            Links
          </p>
          <ul className="flex flex-col justify-center gap-2">
            {FOOTER_NAV_ITEMS.map((navLink) => (
              <li key={navLink}>
                <Link href={navLink}>
                  <p className=" font-semibold hover:text-primary transition-colors capitalize">
                    {navLink}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-6 text-xl font-semibold capitalize text-secondary">
            Contacts{" "}
          </p>
          <ul className="flex flex-col justify-center  gap-2">
            {FOOTER_CONTACTS_ITEMS.map((navLink) => (
              <li key={navLink}>
                <Link href={navLink}>
                  <p className=" font-semibold hover:text-primary transition-colors capitalize">
                    {navLink}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="mb-6 text-xl font-semibold capitalize text-secondary">
          social media
        </p>
        <ul className="mb-2 flex gap-2">
          <li>
            <Link href={""} target="_blank">
              <FaceBookIcon className="h-8 w-8 hover:scale-105 transition-transform fill-white" />
            </Link>
          </li>
          <li>
            <Link href={""} target="_blank">
              <InstagramIcon className="h-8 w-8 hover:scale-105 transition-transform fill-white" />
            </Link>
          </li>

          <li>
            <Link href={""} target="_blank">
              <ThreadIcon className="h-8 w-8 hover:scale-105 transition-transform fill-white" />
            </Link>
          </li>
          <li>
            <Link href={""} target="_blank">
              <WhatsappIcon className="h-8 w-8 hover:scale-105 transition-transform fill-white" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex  flex-col">
        <div className=" w-full md:w-[400px] lg:w-[500px]">
          <MapContainer
            className="aspect-video h-full w-full"
            center={[25.032865745772696, 55.188939409433495]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuhrefrs'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              icon={MAP_INDICATOR_ICON}
              position={[25.032865745772696, 55.188939409433495]}
            >
              <Popup>{""}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="pt-4">
          <p className="mb-6 text-xl font-semibold capitalize text-secondary">
            locations
          </p>
          <p className="font-semibold  ">UAE,Dubai, Production city</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

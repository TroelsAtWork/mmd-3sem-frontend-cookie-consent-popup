"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import CookieConsentButton from "../components/CookieConsentButton";
import CookieConsentText from "../components/CookieConsentText";

const CookieConsentPopup = () => {
  return (
    <section className="flex flex-col justify-between p-6 text-white bg-black w-72 h-80 rounded-3xl">
      <header className="flex justify-between">
        <LiaCookieBiteSolid size={50} />
        <IoIosClose className="cursor-pointer" size={25} />
      </header>
      <footer className="flex flex-col">
        <CookieConsentText />
        <CookieConsentButton />
      </footer>
    </section>
  );
};

export default CookieConsentPopup;

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between py-4 border-t border-[#BDBDBD]">
      <h4 className="font-monts font-semibold text-sm text-[#BDBDBD]">
        Copyright 2023 © Professional Regulation Commission. All Rights
        Reserved.
      </h4>
      <div className="flex flex-row gap-5">
        <Link
          href={"https://web.facebook.com/professionalregulationcommission"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/icons/fb_logo.svg"}
            width={20}
            height={20}
            alt={"facebook logo"}
          />
        </Link>
        <Link
          href={"https://twitter.com/prc_main"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/icons/twitter_logo.svg"}
            width={20}
            height={20}
            alt={"twitter logo"}
          />
        </Link>
      </div>
    </div>
  );
}

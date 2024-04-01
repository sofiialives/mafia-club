import React from "react";
import Logo from "../Header/Logo";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <MaxWidthWrapper>
        <div>
          <span>Club </span>
          <Logo />
          <p>123 Main street</p>
          <p>Budapest, HU 12345</p>
          <ul>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div>Google map</div>
        <nav>
          <Link href="/">Main</Link>
          <Link href="/">Terms and Conditions</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Guide</Link>
        </nav>
        <p>Copyright (c) 2024 Lindigo design All Rights Reserved</p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

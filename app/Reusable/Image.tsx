import Image from "next/image";
import React from "react";

export default function ImageComp({ src }: any) {
  return <Image src={src} alt='logo' fill sizes='100vw' />;
}

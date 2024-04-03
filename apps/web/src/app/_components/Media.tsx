import Image from "next/image";
import { useTheme } from "next-themes";

import { type NftMedia } from "~/server/api/types";
/* eslint-disable @next/next/no-img-element */

interface MediaProps {
  alt: string;
  className?: string;
  height: number;
  media: NftMedia;
  width: number;
}

export default function Media({
  alt,
  className,
  height,
  media,
  width,
}: MediaProps) {
  const { resolvedTheme } = useTheme();
  console.log(media);

  if (media.src === undefined || media.src.length === 0) {
    return (
      <Image
        alt={alt}
        className={className}
        height={height}
        src={`/medias/${resolvedTheme === "dark" ? "dark/" : ""}empty_nft.png`}
        width={width}
      />
    );
  }

  if (media.format === "video") {
    return (
      <video
        autoPlay
        className={className}
        height={height}
        loop
        muted
        width={width}
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <img
        alt={alt}
        className={className}
        height={height}
        src={media.src}
        width={width}
      />
    );
  }
}

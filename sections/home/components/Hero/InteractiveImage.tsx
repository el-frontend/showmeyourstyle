"use client";
import { generateImage } from "@/lib/cloudinary/builder";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  effect: string;
};

const InteractiveImage: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  effect,
}) => {
  const [url, setUrl] = useState<string>("");

  const getImageUrl = useCallback(async () => {
    const url = await generateImage({ src, width, height, effect });
    setUrl(url);
  }, [src, height, width, effect]);

  useEffect(() => {
    getImageUrl();
  }, [getImageUrl]);

  return <Image src={url} width={width} height={height} alt={alt} />;
};

export default InteractiveImage;

"use client"

import Image from "next/image"

interface ProfilePictureProps {
  src: string
  alt?: string
  size?: number // size in pixels
}

export function ProfilePicture({ src, alt = "Profile picture", size = 150 }: ProfilePictureProps) {
  return (
    <div
      className="overflow-hidden rounded-full shadow-md"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  )
}

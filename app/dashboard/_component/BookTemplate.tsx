"use client";

import Image from "next/image";

interface BookCardProps {
    cover?: string; // image URL
    title: string;
    coverColor?: string;
}

export default function BookTemplate({
    cover,
    title,
    coverColor,
}: BookCardProps) {
    const bookWidth = "w-[90px]";
    const bookAspectRatio = "aspect-[80/130]";
    const shadowClass = "shadow-lg";

    return (
        <div
            className={`relative ${bookWidth} ${bookAspectRatio} flex-shrink-0 ${shadowClass}`}
        >
            {/* 1. The Cover Image Layer (Clipped by the SVG Mask) */}
            <div
                className="absolute inset-0 z-10 bg-cover bg-center"
                style={{
                    backgroundImage: cover ? `url(${cover})` : "none",
                    // CRITICAL: Apply the SVG as a mask using Tailwind's arbitrary values or CSS
                    // Note: Tailwind doesn't have native mask utilities, so we use a style object.
                    WebkitMaskImage: "url(/book_cover.svg)",
                    maskImage: "url(/book_cover.svg)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                }}
            >
                {/* Fallback for no cover (optional) */}
                {!cover && (
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-400 bg-gray-200">
                        No Cover
                    </div>
                )}
            </div>

            {/* 2. The SVG Book Base (Spine and Edges) Layer */}
            {/* This layer provides the final shape, spine, and page colors */}
            <Image
                src="/book_cover.svg" // Your modified SVG that only contains the spine/edges
                alt={title}
                fill
                sizes="100%"
                className="object-contain pointer-events-none select-none z-0"
                // You can use the spineColor to set a background color behind the SVG
                // if the SVG itself is mostly transparent (best practice for dynamic color)
                style={{ backgroundColor: coverColor || "transparent" }}
                priority
            />
        </div>
    );
}

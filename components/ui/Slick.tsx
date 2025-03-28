"use client"
import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import { cn } from "../libs/utils";

function Arrows(props: { onClick?: () => void; type: "next" | "prev" }) {
    const { onClick } = props;
    return(
        <div className={cn("", {
            "absolute -bottom-16 -right-0": props.type == "next",
            "absolute -bottom-16 right-12": props.type == "prev",
            "": props.type == "prev",
        })} onClick={onClick}>
            <span className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center transition hover:brightness-90 backdrop-blur-sm cursor-pointer"><Icon icon={`solar:alt-arrow-${props.type == "next" ? "right" : "left"}-outline`} /></span>
        </div>
    )
}
export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrows type="next"/>,
    prevArrow: <Arrows type="prev"/>,
}

export function Slick({children, settings}: {children:React.ReactNode;settings?:object}) {
  return (
    <Slider {...settings}>
        {children}
    </Slider>
  )
}

"use client";

import { tools } from "@/data";
import { PinContainer } from "./ui/Pin";
import { HoverEffect } from "./ui/HoverEffect";
import { GlareCard } from "./ui/GlareCard";
const Tools = () => {
    return (
        <div className="max-w-5xl mx-auto px-12">
            <HoverEffect items={tools} />

            
        </div>
    );
};

export default Tools;
import React from "react";
import TextInput from "../TextInput";

const Hero = ({ children }) => {
    return (
        <div className="flex flex-wrap w-full mt-12 justify-between">
            {children}
        </div>
    );
};
const HeroLeft = ({
    title,
    subtitle,
    location = "",
    text,
    type,
    placeholder,
    onChange,
    defaultValue,
}) => {
    return (
        <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="w-full md:pr-8 h-full flex justify-between flex-col">
                <div className="flex flex-col mt-16">
                    <h1 className="text-secondary font-bold sm:text-4xl md:text-5xl">
                        {title}
                    </h1>
                    <p className="font-medium text-dark text-xl md:text-2xl">
                        {subtitle}
                    </p>
                </div>
                <div className="md:pr-8 mt-8 md:mt-0">
                    <h6 className="text-dark mb-2">
                        {`${text}`}{" "}
                        <span className="font-semibold"> {location}</span>
                    </h6>
                    <TextInput
                        type={type}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        onChange={onChange}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

const HeroRight = () => {
    return (
        <div className="w-full order-1 md:order-2 md:w-1/3 h-full">
            <img
                src="images/app/hero_home.webp"
                className="rounded h-full w-full"
                alt=""
            />
        </div>
    );
};

Hero.HeroLeft = HeroLeft;
Hero.HeroRight = HeroRight;

export default Hero;

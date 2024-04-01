import Image from "next/image";
import cog from "@/assets/images/cog.svg";
import glass from "@/assets/images/glass.svg";
import success from "@/assets/images/success.svg";
import waiting from "@/assets/images/waiting.svg";
import x from "@/assets/images/x.svg";

interface IconProps {
    source: string,
    alt: string,
    classname?: string,
};

const Icon = ({ source, alt, classname }: IconProps) => {
    return (
        <Image 
            src={source}
            width={28}
            height={28}
            alt={alt}
            className={`${classname}`}
        />
    )
};

interface Props {
    status: "Initial" | "Loading" | "Waiting" | "Success" | "Failed",
};

const SearchIcon = ({ status }: Props) => {
    switch(status) {
        case "Loading":
            return <Icon source={cog} alt="Loading Icon" classname="motion-safe:animate-spin "/>
        case "Waiting":
            return <Icon source={waiting} alt="Waiting Icon" classname="motion-safe:animate-ping"/>
        case "Success":
            return <Icon source={success} alt="Success Icon"/>
        case "Failed":
            return <Icon source={x} alt="Failed Icon"/>
        default:
            return <Icon source={glass} alt="Magnifying Glass Icon"/>
    }
};

export default SearchIcon;
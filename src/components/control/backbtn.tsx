"use client"

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import Lightleftarrow from "@/assets/images/lightleftarrow.svg";
import Leftarrow from "@/assets/images/leftarrow.svg";
import { useState, useEffect } from "react";

const Backbtn = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme } = useTheme();
    const router = useRouter();
    useEffect(() => {
        setMounted(true)
    }, []);
    if (!mounted) {
        return null
    };
    const handleclick = () => {
        router.back()
    };

    return (
        <section className="flex flex-row justify-center">
            <div className="cursor-pointer max-w-fit" onClick={handleclick}>
                {theme === "dark" ? 
                    <Image 
                        src={Lightleftarrow}
                        alt="Back Button"
                        width={40}
                        height={40}
                    />
                :
                    <Image 
                        src={Leftarrow}
                        alt="Back Button"
                        width={40}
                        height={40}
                    />                
                }

            </div>
        </section>
    )
};

export default Backbtn;
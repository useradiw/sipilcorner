"use client"

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import Lightleftarrow from "@/assets/images/lightleftarrow.svg";
import Leftarrow from "@/assets/images/leftarrow.svg";

const Backbtn = () => {
    const router = useRouter();
    const handleclick = () => {
        router.back()
    };
    const { theme } = useTheme();

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
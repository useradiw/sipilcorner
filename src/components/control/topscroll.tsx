"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import  { useTheme } from "next-themes";
import Uparrow from "@/assets/images/uparrow.svg";
import Lightuparrow from "@/assets/images/lightuparrow.svg";

const Upbutton = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const [ isVisible, setVisible ] = useState(false);
    const { theme } = useTheme();
    useEffect(() => {
        setMounted(true)
        const toggleVisibility = () => {
            window.scrollY > 500 ? setVisible(true) : setVisible(false)
        }

        window.addEventListener("scroll", toggleVisibility)
        
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, []);

    if (!mounted) {
        return null
    }
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    };
    return (
        <div className={`${isVisible ? "block" : "hidden"} bg-slate-900/10 dark:bg-slate-100/10 max-w-fit z-10 fixed bottom-4 right-4 p-1 rounded-sm cursor-pointer`} onClick={scrollToTop}>
            {theme === "dark" ? 
                <Image 
                    src={Lightuparrow}
                    alt="Scroll To Top Arrow"
                    width={32}
                    height={32}
                />
            :
                <Image 
                    src={Uparrow}
                    alt="Scroll To Top Arrow"
                    width={32}
                    height={32}
                />            
            }
        </div>
    )
};

export default Upbutton;
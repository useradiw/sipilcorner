import Link from "next/link";
import Control from "../control";

const home = process.env.PUBLIC_BASE as string;

const Navbar = () => {
    return (
        <>
            <section className="w-full mt-2 mb-6">
                <nav className="flex flex-row justify-between items-end">
                    <div className="font-bold text-2xl">
                        <Link href={home}>Sipil Corner</Link>
                    </div>
                    <div>
                        <Control />
                    </div>
                </nav>
            </section>
        </>
    )
};

export default Navbar;
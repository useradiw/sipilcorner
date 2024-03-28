import Link from "next/link";
import Control from "../control";
import { SearchLink } from "../search";

const Navbar = () => {
    return (
        <>
            <section className="w-full mt-2 mb-6">
                <nav className="flex flex-row justify-between items-end">
                    <div className="font-bold text-2xl">
                        <Link href="/">Sipil Corner</Link>
                    </div>
                    <div className="flex flex-row gap-4">
                        <SearchLink />
                        <Control />
                    </div>
                </nav>
            </section>
        </>
    )
};

export default Navbar;
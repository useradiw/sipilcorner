import Control from "../controlpanel";

const Navbar = () => {
    return (
        <>
            <section className="w-full mt-2 mb-6">
                <nav className="flex flex-row justify-between items-end">
                    <div className="font-bold text-2xl">Sipil Corner</div>
                    <div>
                        <ul className="flex flex-row gap-4 font-semibold uppercase">
                            <li>About</li>
                            <li>Tags</li>
                            <li>Feedback</li>
                        </ul>
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
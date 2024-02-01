const SearchBar = () => {
    return (
        <>
            <section className="w-full mb-8">
                <div>
                    <search className="w-[50%] mx-auto border-2 border-slate-600 rounded-full flex flex-row gap-1 overflow-hidden">
                        <input type="search" name="searchbar" id="searchbar" className="basis-5/6" disabled />
                        <button type="submit" className="basis-1/6" disabled>Search</button>
                    </search>
                </div>
            </section>
        </>
    )
};

export default SearchBar
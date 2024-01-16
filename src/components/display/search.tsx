const SearchBar = () => {
    return (
        <>
            <section className="w-full">
                <div>
                    <search className="w-[50%] mx-auto border-2 rounded-full">
                        <input type="search" name="searchbar" id="searchbar" disabled />
                        <button type="submit" disabled>Search</button>
                    </search>
                </div>
            </section>
        </>
    )
};

export default SearchBar;
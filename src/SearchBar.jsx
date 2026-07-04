function SearchBar({ search, setSearch }) {
  return (
    <div className="searchbar-wrapper">
      <input
        className="input search-input"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
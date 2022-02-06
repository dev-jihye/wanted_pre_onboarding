import { useEffect, useState } from "react";

export default function AutoComplete({ words, text, setText }) {
  const [searched, setSearched] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (e) => {
    const val = e.target.value;
    setText(val);
    setIsOpen(true);
  };

  useEffect(() => {
    let suggestions = [];
    if (text.trim()) {
      const regex = new RegExp(`^${text.trim()}`, "i");
      suggestions = words.sort().filter((v) => regex.test(v));
      setSearched(suggestions);
    } else {
      setSearched([]);
    }
  }, [text]);

  const onClick = (word) => {
    setSearched([]);
    setText(word);
    setIsOpen(false);
  };

  const SearchList = () => {
    return (
      <ul className="border">
        {searched.map((word) => (
          <li
            key={word}
            className="cursor-default hover:bg-gray-200 py-1 px-3"
            onClick={() => onClick(word)}
          >
            {word}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="border p-2 rounded-md">
        <input
          type="search"
          value={text}
          onChange={onChange}
          className="w-full outline-none"
        />
      </div>
      <div>{searched.length > 0 && isOpen ? <SearchList /> : ""}</div>
    </>
  );
}

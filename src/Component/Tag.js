import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Tag({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const onChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
  };

  const onDeleteClick = (index) => {
    setTags([...tags.filter((_, i) => i !== index)]);
  };

  return (
    <div className="flex w-full p-2 border rounded-md flex-wrap">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="m-1 inline-flex bg-indigo-600 p-2 rounded-md text-white items-center flex-nowrap space-x-2"
        >
          <span className="break-all">{tag}</span>
          <XIcon
            className="w-4 h-4 shrink-0"
            onClick={() => onDeleteClick(index)}
          />
        </div>
      ))}
      <form
        onSubmit={onSubmit}
        className="inline-flex items-center flex-1 ml-1"
      >
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          placeholder="Press enter to add tags"
          className="outline-none w-full"
        />
      </form>
    </div>
  );
}

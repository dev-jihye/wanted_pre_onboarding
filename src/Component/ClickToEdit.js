import { useState } from "react";

export default function ClickToEdit({ text, setText }) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(text);

  const onChange = (e) => {
    const val = e.target.value;
    setInputText(val);
  };

  const onFocus = () => {
    setIsEditable(true);
  };

  const onBlur = () => {
    setIsEditable(false);
    setText(inputText);
  };

  return (
    <input
      type="text"
      className="border ml-4 p-2 rounded-md"
      value={inputText}
      onChange={onChange}
      readOnly={!isEditable}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

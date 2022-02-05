import Toggle from "./Component/Toggle";
import "./App.css";
import Modal from "./Component/Modal";
import Tab from "./Component/Tab";
import Tag from "./Component/Tag";
import AutoComplete from "./Component/AutoComplete";
import ClickToEdit from "./Component/ClickToEdit";
import { useState } from "react";

function App() {
  //toggle
  const [toggle, setToggle] = useState(false);

  //modal
  const [isOpen, setIsOpen] = useState(false);

  //tab
  const tabs = [
    { name: "Tab1", content: "Tab Menu ONE" },
    { name: "Tab2", content: "Tab Menu TWO" },
    { name: "Tab3", content: "Tab Menu THREE" },
  ];
  const [active, setActive] = useState(tabs[0].content);

  //tag
  const [tags, setTags] = useState(["Hello"]);

  //auto complete
  const words = [
    "incapable",
    "bloodshed",
    "haunt",
    "flat",
    "section",
    "animal",
    "flex",
    "source",
    "express",
    "harm",
    "effort",
    "normal",
    "tick",
    "injury",
    "expose",
    "judicial",
    "leave",
    "king",
    "so",
    "learn",
    "visit",
    "hot",
    "charity",
    "demand",
    "worry",
    "replacement",
    "willpower",
    "deserve",
    "occupation",
    "kettle",
    "quiet",
    "greeting",
    "calorie",
    "photography",
    "do",
    "head",
    "star",
    "hostage",
    "beef",
    "auction",
    "pick",
    "hunter",
    "ward",
    "pottery",
    "sanctuary",
    "ridge",
    "fortune",
    "load",
    "liability",
    "bride",
  ];
  const [text, setText] = useState("");

  //click to edit
  const [name, setName] = useState("이코딩");
  const [age, setAge] = useState("20");

  return (
    <div className="m-20">
      <div className="my-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Toggle</h2>
        <Toggle toggle={toggle} setToggle={setToggle} />
        <p>Toggle Switch {toggle ? "ON" : "OFF"}</p>
      </div>

      <div className="my-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Modal</h2>
        <Modal btnText={"Open Modal"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <p>Hello CodeState!</p>
        </Modal>
      </div>

      <div className="my-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Tab</h2>
        <Tab tabs={tabs} active={active} setActive={setActive} />
        <p className="py-10 text-center border">{active}</p>
      </div>

      <div className="my-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Tag</h2>
        <Tag tags={tags} setTags={setTags} />
      </div>

      <div className="my-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Auto complete</h2>
        <AutoComplete words={words} text={text} setText={setText} />
      </div>
      <div className="my-10 mx-5">
        <h2 className="text-xl font-bold mb-4">Click to Edit</h2>
        <div className="my-2">
          <span>이름</span>
          <ClickToEdit text={name} setText={setName} />
        </div>
        <div className="my-2">
          <span>나이</span>
          <ClickToEdit text={age} setText={setAge} />
        </div>
        <div className="space-x-4 mt-4">
          <span>이름 {name}</span>
          <span>나이 {age}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

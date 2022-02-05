export default function Toggle({ toggle, setToggle }) {
  const triggerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      onClick={triggerToggle}
      className={`relative ${toggle ? "toggleChecked" : ""}`}
    >
      <div className="bg-gray-300 w-20 h-10 rounded-full toggleDiv"></div>
      <div className="bg-white w-8 h-8 rounded-full absolute top-1 left-1 toggleBtn"></div>
      <input type="checkbox" className="absolute overflow-hidden toggleInput" />
    </div>
  );
}

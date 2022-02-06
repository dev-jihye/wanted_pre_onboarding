export default function Toggle({ toggle, setToggle }) {
  const triggerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      onClick={triggerToggle}
      className="relative w-20 bg-gray-300 rounded-full overflow-hidden"
    >
      <div
        className={`h-10 bg-indigo-600 duration-300 ${
          toggle ? "w-full" : "w-0"
        }`}
      />
      <div
        className="flex absolute px-1 top-1 duration-300 justify-end min-w-min"
        style={{
          width: toggle ? "100%" : "0%",
        }}
      >
        <div className="bg-white w-8 h-8 rounded-full" />
      </div>
      <input type="checkbox" className="absolute hidden" />
    </div>
  );
}

export default function Tab({ tabs, active, setActive }) {
  return (
    <div className="w-auto">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.name}
            onClick={() => setActive(tab.content)}
            className={`py-4 w-1/3 text-lg ${
              active === tab.content
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800"
            } `}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}

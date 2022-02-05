import { XIcon } from "@heroicons/react/solid";

export default function Modal({ btnText, isOpen, setIsOpen, children }) {
  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={modalOpen}
        className="bg-indigo-600 rounded-full text-white p-5"
      >
        {btnText}
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
          <div className="bg-gray-400 opacity-70 fixed w-full h-screen top-0 left-0" />
          <div className="bg-gray-100 relative rounded-md w-64 p-12 items-center flex flex-col justify-center">
            <XIcon className="w-5 h-5 mb-8" onClick={modalClose} />
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

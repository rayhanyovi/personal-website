function Navbar() {
  return (
    <div className="fixed w-full z-900 bg-slate-100 shadow flex flex-row items-center justify-center gap-4 p-4 text-white">
      <lu className="flex flex-row list-none gap-12 text-green-600 font-medium">
        <li className="text-green-600 font-bold">
          {" "}
          <a href="#hero">Home</a>
        </li>
        <li>
          {" "}
          <a href="#projects">Projects</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </lu>
    </div>
  );
}

export default Navbar;

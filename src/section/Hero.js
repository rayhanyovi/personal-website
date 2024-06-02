function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-row items-center justify-center gap-8 h-screen pb-20"
    >
      <div className="w-fit flex  justify-end">
        <div className="rounded-full w-64 h-64 overflow-visible relative bg-green-600/75">
          <img
            alt=""
            src="/YOVI.png"
            className="w-80 h-80 object-cover absolute bottom-0 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/2 items-start w-fit ">
        <p className="text-gray-700 text-2xl">Hello there! 👋 I am</p>
        <p className="text-gray-700 text-7xl font-bold">Rayhan Yovi,</p>
        <p className="text-green-600 text-7xl font-bold mt-2">
          A Fullstack Engineer
        </p>
        <p className="text-gray-700 text-2xl mt-4">
          Crafting digital experiences and building innovative web solutions is
          my forte.
          <br />
          Welcome to my creative world, where every line of code tells a story,
          <br />
          and every interface is a work of art
        </p>
        <ul className="flex flex-row gap-4 mt-2">
          <li className="text-gray-700 text-lg mt-4">
            <a
              href="https://www.linkedin.com/in/rayhan-yovi/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-8 w-8 ease-out duration-200 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/480px-LinkedIn_icon.svg.png"
                alt="Linkedin"
              />
            </a>
          </li>
          <li className="text-gray-700 text-lg mt-4">
            <a
              href="https://github.com/rayhan-yovi"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-8 w-8 ease-out duration-200 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png"
                alt="Github"
              />
            </a>
          </li>
          <li className="text-gray-700 text-lg mt-4">
            <a href="https://www.instagram.com/rayhan_yovi/" target="_blank">
              <img
                className="h-8 w-8 ease-out duration-200 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;

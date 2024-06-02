function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col w-full items-center h-fit pt-20 px-60"
    >
      <p className="text-4xl font-bold text-green-600">
        <span className="text-gray-600">Featured</span> Projects
      </p>
      <p className="text-gray-700 mt-2 text-lg">
        Here's some projects that I've been worked with
      </p>
      <div className="grid grid-cols-2 w-full gap-8 mt-10">
        <a
          href="https://navigasi-supermarket.vercel.app/"
          className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.025] ease-in-out duration-200 bg-white"
        >
          <img
            alt="Project Images"
            src="/Supermarket.png"
            className="h-60 w-full object-fit bg-gray-400 overflow-hidden"
          />
          <div className="flex flex-col p-4 gap-2">
            <p className="text-xl font-bold text-green-600">
              Supermarket Navigation App
            </p>
            <p className="text-gray-700 mt-2 text-md line-clamp-4 overflow-elipsis">
              This app guides users to quickly find specific products and
              navigate efficiently while shopping in supermarkets. It enhances
              the shopping experience by making it faster and more convenient.
            </p>
          </div>
        </a>

        <a
          href="https://rayhanyovi.github.io/simple-calculator/"
          className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.025] ease-in-out duration-200 bg-white"
        >
          <img
            alt="Project Images"
            src="/kalkulator.jpg"
            className="h-60 object-cover bg-gray-400 overflow-hidden"
          />
          <div className="flex flex-col p-4 gap-2">
            <p className="text-xl font-bold text-green-600">
              Simple Calculator
            </p>
            <p className="text-gray-700 mt-2 text-md line-clamp-4 overflow-elipsis">
              A straightforward calculator app that performs basic arithmetic
              operations with ease and precision. Perfect for quick calculations
              on the go.
            </p>
          </div>
        </a>

        <a
          href="https://rayhanyovi.github.io/simple-calculator/"
          className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.025] ease-in-out duration-200 bg-white"
        >
          <img
            alt="Project Images"
            src="/bookshelf.png"
            className="h-60 object-cover bg-gray-400 overflow-hidden"
          />
          <div className="flex flex-col p-4 gap-2">
            <p className="text-xl font-bold text-green-600">Bookshelf App</p>
            <p className="text-gray-700 mt-2 text-md line-clamp-4 overflow-elipsis">
              An intuitive bookshelf app designed to help you manage your book
              collection effortlessly. Track your reading progress, organize
              your books, and discover new favorites.
            </p>
          </div>
        </a>

        <a
          href="https://rayhanyovi.github.io/simple-calculator/"
          className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.025] ease-in-out duration-200 bg-white"
        >
          <img
            alt="Project Images"
            src="/Chatbot.png"
            className="h-60 object-cover bg-gray-400 overflow-hidden"
          />
          <div className="flex flex-col p-4 gap-2">
            <p className="text-xl font-bold text-green-600">Chatbot</p>
            <p className="text-gray-700 mt-2 text-md line-clamp-4 overflow-elipsis">
              A smart chatbot designed to assist with questions about
              blockchains activity. It can answer questions, provide
              recommendations, and help you stay productive.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;

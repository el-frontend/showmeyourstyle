import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="SHOWME your style Logo"
            width={117}
            height={50}
          />
        </div>
        <nav>
          <ul className="flex space-x-6 text-base font-medium text-foreground">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Stylize you
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Showcase
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow hover:bg-gray-100">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;

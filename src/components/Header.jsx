

import { FaUserTie } from "react-icons/fa";



const Header = () => {
    return (
        <div>
            <header className="bg-white">
  <div className=" px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <p className=" text-2xl font-bold ">Recipe Calories </p>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home</a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Recipes </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <input className="bg-gray-200 rounded-lg h-8" type="search " name="" id=""   />
      <FaUserTie className=" bg-green-400 w-7 h-7 rounded-s-box rounded-e-box">

      </FaUserTie>
      </div>
    </div>
  </div>
</header>
        </div>
    );
};

export default Header;
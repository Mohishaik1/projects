import { Link } from "react-router-dom";
import hero from "../assets/videos/hero.mp4";
import logo from "../assets/Images/logo.png";
//            <Link to='/'>Home</Link>
//    <Link to='/packages'>Packages</Link>
//  <Link to='/contact'>Contact</Link>

function Home() {
  return (
    <>
      <div>
        <nav className="decoration-amber-400 bg-gray-900 box-border text-white font-bold flex flex-row justify-between p-3 sticky top-0">
          <div className="border-3 border-green-400 rounded-full w-50 h-10 flex flex-row justify-center items-center">
            <h2 className="bg-green-400 rounded-2xl w-8 h-7 flex justify-center items-center">
              AH
            </h2>
            <h3 className="m-3 font-extrabold text-green-400">
              Al-Hateem Tours
            </h3>
          </div>
          <ul className="flex flex-row justify-end">
            <li className="p-1 m-1 hover:text-blue-500 hover:bg-amber-300 rounded-2xl">
              <Link to="/" target="_blank">
                Home
              </Link>
            </li>
            <li className="p-1 m-1 hover:text-blue-500 hover:bg-amber-300 rounded-2xl">
              <Link to="/packages" target="_blank">
                Packages
              </Link>
            </li>
            <li className="p-1 m-1 hover:text-blue-500 hover:shadow-2xl hover:bg-amber-300 rounded-2xl">
              <Link to="/contact" target="_blank">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center h-140">
          <div className="bg-gray-400 w-250 h-100 flex justify-center items-center">
            <video
              src={hero}
              type="video/mp4"
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              This is a video
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

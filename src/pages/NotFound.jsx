import { Link } from "react-router-dom";
import NotFoundImg from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <img src={NotFoundImg} alt="404" className="max-w-xs mb-6" />
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-400 mb-4">Sorry, the page you requested doesn’t exist.</p>
      <Link
        to="/"
        className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

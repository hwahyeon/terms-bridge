import { Link } from "react-router-dom";

export default function AdminBar() {
  return (
    <div className="fixed top-0 right-0 z-50 bg-black bg-opacity-70 px-4 py-2 rounded-bl-md text-xs text-white shadow-md">
      <Link to="/admin" className="underline hover:text-gray-300">
        Admin
      </Link>
    </div>
  );
}

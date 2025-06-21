import { Link } from "react-router-dom";

export default function AdminBar() {
  return (
    <div className="fixed top-0 right-0 px-4 py-2 text-xs text-white z-50">
      <Link to="/admin" className="underline hover:text-gray-300">
        Admin
      </Link>
    </div>
  );
}

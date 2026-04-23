import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "lucide-react";
import { UserLock } from "lucide-react";
import Login from "./Login";
function Admin_user_input() {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-16 bg-gray-50">
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center h-28 w-28 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
            <UserLock className="h-12 w-12" />
          </button>
          <h2 className="mt-3 text-lg font-semibold text-gray-700">ADMIN</h2>
        </div>

        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center h-28 w-28 rounded-full bg-green-500 text-white hover:bg-green-600 transition">
            <User className="h-12 w-12" />
          </button>
          <h2 className="mt-3 text-lg font-semibold text-gray-700">USER</h2>
        </div>
        <Login />
      </div>
    </>
  );
}

export default Admin_user_input;

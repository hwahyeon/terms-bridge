import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Login failed");
    } else {
      const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
      if (data.user?.email === ADMIN_EMAIL) {
        navigate("/admin");
      } else {
        setErrorMsg("Not authorized");
      }
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 p-6 max-w-md mx-auto mt-20 bg-stone-800 rounded-lg"
    >
      <h1 className="text-xl font-bold text-white">Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded px-4 py-2 bg-stone-500 text-white"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded px-4 py-2 bg-stone-500 text-white"
        required
      />
      <button
        type="submit"
        className="bg-stone-700 hover:bg-stone-600 text-white rounded px-4 py-2"
      >
        Login
      </button>
      {errorMsg && <p className="text-red-400">{errorMsg}</p>}
    </form>
  );
}

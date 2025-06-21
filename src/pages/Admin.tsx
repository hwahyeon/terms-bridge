import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import type { TermType } from "../types/term";

export default function Admin() {
  const navigate = useNavigate();
  const [terms, setTerms] = useState<TermType[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigate("/login");
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    async function fetchPendingTerms() {
      const { data, error } = await supabase
        .from("terms")
        .select("*")
        .eq("approved", false);

      if (!error && data) setTerms(data);
    }

    fetchPendingTerms();
  }, []);

  async function approveTerm(id: string) {
    const { error } = await supabase
      .from("terms")
      .update({ approved: true })
      .eq("id", id);

    if (!error) {
      setTerms((prev) => prev.filter((term) => term.id !== id));
    }
  }

  async function deleteTerm(id: string) {
    const { error } = await supabase.from("terms").delete().eq("id", id);

    if (!error) {
      setTerms((prev) => prev.filter((term) => term.id !== id));
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Pending Terms</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-stone-600 text-white rounded hover:bg-stone-700 text-sm"
        >
          Logout
        </button>
      </div>
      {terms.length === 0 ? (
        <p>No pending terms.</p>
      ) : (
        <ul className="space-y-4">
          {terms.map((term) => (
            <li
              key={term.id}
              className="rounded-lg bg-stone-200 p-4 text-black shadow"
            >
              <p>
                <strong>{term.language1}</strong>: {term.term1} →{" "}
                <strong>{term.language2}</strong>: {term.term2}
              </p>
              <p className="text-sm text-gray-600">{term.tags}</p>
              {term.description && (
                <p className="mt-1 text-sm text-gray-500">{term.description}</p>
              )}
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => approveTerm(term.id)}
                  className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => deleteTerm(term.id)}
                  className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

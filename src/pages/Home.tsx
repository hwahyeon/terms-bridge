import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.ts";
import Header from "../components/Header.tsx";
import AddTermForm from "../components/AddTermForm.tsx";
import type { TermType } from "../types/term";
import CategoryFilter from "../components/CategoryFilter.tsx";
import TermList from "../components/TermList.tsx";
import Loader from "../components/Loader.tsx";
import AdminBar from "../components/AdminBar.tsx";

function Home() {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [terms, setTerms] = useState<TermType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTerms = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("terms")
        .select("*")
        .eq("approved", true);
      if (error) {
        console.error("Error fetching terms:", error);
      } else {
        setTerms(data || []);
      }
      setIsLoading(false);
    };

    fetchTerms();
  }, []);

  const filteredTerms =
    currentCategory === "all"
      ? terms
      : terms.filter((term) => term.tags.includes(currentCategory));

  return (
    <>
      <AdminBar />
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <AddTermForm setTerms={setTerms} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />

        {isLoading ? (
          <Loader />
        ) : (
          <TermList terms={filteredTerms} setTerms={setTerms} />
        )}
      </main>
    </>
  );
}

export default Home;

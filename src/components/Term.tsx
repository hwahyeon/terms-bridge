import { useState } from "react";
import { supabase } from "../lib/supabase";
import type { TermType } from "../types/term";

type Props = {
  term: TermType;
  setTerms: React.Dispatch<React.SetStateAction<TermType[]>>;
};

export default function Term({ term, setTerms }: Props) {
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleVote(column: "likes" | "dislikes") {
    const votedTerms = JSON.parse(localStorage.getItem("votedTerms") || "{}");

    if (votedTerms[term.id]) {
      alert("You have already voted for this term.");
      return;
    }

    setIsUpdating(true);

    const { data, error } = await supabase
      .from("terms")
      .update({ [column]: term[column] + 1 })
      .eq("id", term.id)
      .select();

    setIsUpdating(false);

    if (error) {
      console.error("Vote Error:", error.message);
    } else {
      setTerms((terms) => terms.map((t) => (t.id === term.id ? data[0] : t)));
      // local storage
      localStorage.setItem(
        "votedTerms",
        JSON.stringify({ ...votedTerms, [term.id]: true })
      );
    }
  }

  return (
    <li className="fact">
      <p>
        <span className="disputed">{term.language1}</span> {term.term1} →{" "}
        <span className="disputed">{term.language2}</span> {term.term2}
      </p>

      {term.description && (
        <p style={{ fontSize: "14px", marginTop: "4px", color: "#a8a29e" }}>
          {term.description}
        </p>
      )}

      <span className="tag" style={{ backgroundColor: "#16a34a" }}>
        #{term.tags}
      </span>

      <div className="vote-buttons">
        <button onClick={() => handleVote("likes")} disabled={isUpdating}>
          👍 {term.likes ?? 0}
        </button>
        <button onClick={() => handleVote("dislikes")} disabled={isUpdating}>
          👎 {term.dislikes ?? 0}
        </button>
      </div>
    </li>
  );
}

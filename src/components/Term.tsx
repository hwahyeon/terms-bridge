import { useState } from "react";
import { supabase } from "../lib/supabase";
import type { TermType } from "../types/term";
import { CATEGORIES } from "../data/categories";

type Props = {
  term: TermType;
  setTerms: React.Dispatch<React.SetStateAction<TermType[]>>;
};


export default function Term({ term, setTerms }: Props) {
  const [isUpdating, setIsUpdating] = useState(false);

  const category = CATEGORIES.find((c) => c.name === term.tags);
  const categoryColor = category?.color || "#78716c"; // fallback 색상

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
      return;
    }

    setTerms((terms) => terms.map((t) => (t.id === term.id ? data[0] : t)));
    localStorage.setItem(
      "votedTerms",
      JSON.stringify({ ...votedTerms, [term.id]: true })
    );
  }

  return (
    <li className="flex items-start gap-6 rounded-[16px] bg-[#44403c] px-6 py-4 text-[20px] leading-[1.4] tracking-[-1px] mb-4">
      <div className="flex-1">
        <p>
          <span className="text-[#ef4444] font-semibold mr-2">
            {term.language1}
          </span>
          {term.term1} →{" "}
          <span className="text-[#ef4444] font-semibold mr-2">
            {term.language2}
          </span>
          {term.term2}
        </p>
        {term.description && (
          <p className="mt-1 text-sm text-[#a8a29e]">{term.description}</p>
        )}
      </div>

      <div className="flex flex-col items-end gap-2 flex-shrink-0">
        <span
          className="uppercase text-sm font-display px-2.5 py-[3px] rounded-full"
          style={{ backgroundColor: categoryColor }}
        >
          #{term.tags}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => handleVote("likes")}
            disabled={isUpdating}
            className="px-3 py-1.5 text-lg font-semibold rounded-full text-inherit bg-[#78716c] hover:bg-[#292524] disabled:bg-[#44403c] transition"
          >
            👍 {term.likes ?? 0}
          </button>
          <button
            onClick={() => handleVote("dislikes")}
            disabled={isUpdating}
            className="px-3 py-1.5 text-lg font-semibold rounded-full text-inherit bg-[#78716c] hover:bg-[#292524] disabled:bg-[#44403c] transition"
          >
            👎 {term.dislikes ?? 0}
          </button>
        </div>
      </div>
    </li>
  );
}

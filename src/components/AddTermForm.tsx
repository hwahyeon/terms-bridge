import { useState } from "react";
import { supabase } from "../lib/supabase";
import { LANGUAGES } from "../data/languages";
import { CATEGORIES } from "../data/categories";
import type { TermType } from "../types/term";

type Props = {
  setTerms: React.Dispatch<React.SetStateAction<TermType[]>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddTermForm({ setTerms, setShowForm }: Props) {
  const [language1, setLanguage1] = useState(LANGUAGES[0].value);
  const [term1, setTerm1] = useState("");
  const [language2, setLanguage2] = useState(LANGUAGES[1].value);
  const [term2, setTerm2] = useState("");
  const [tags, setTags] = useState(CATEGORIES[0].name);
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newTerm: Omit<TermType, "id"> = {
      language1,
      term1,
      language2,
      term2,
      tags,
      description,
      likes: 0,
      dislikes: 0,
    };

    const { data, error } = await supabase
      .from("terms")
      .insert([newTerm])
      .select();

    if (!error && data) {
      setTerms((terms) => [data[0], ...terms]);
      setShowForm(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg bg-stone-700 p-4 text-base mb-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <select
          value={language1}
          onChange={(e) => setLanguage1(e.target.value)}
          className="rounded-full bg-stone-500 px-4 py-3"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Term"
          value={term1}
          onChange={(e) => setTerm1(e.target.value)}
          className="flex-1 rounded-full bg-stone-500 px-4 py-3"
          required
        />

        <select
          value={language2}
          onChange={(e) => setLanguage2(e.target.value)}
          className="rounded-full bg-stone-500 px-4 py-3"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Translation"
          value={term2}
          onChange={(e) => setTerm2(e.target.value)}
          className="flex-1 rounded-full bg-stone-500 px-4 py-3"
          required
        />

        <select
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="rounded-full bg-stone-500 px-4 py-3"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="rounded-full bg-stone-500 px-4 py-3"
      />

      <button className="btn self-end px-6 py-3 text-sm uppercase">Add</button>
    </form>
  );
}

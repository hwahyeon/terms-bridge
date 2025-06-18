import type { TermType } from "../types/term";
import Term from "./Term";

type Props = {
  terms: TermType[];
  setTerms: React.Dispatch<React.SetStateAction<TermType[]>>;
};

export default function TermList({ terms, setTerms }: Props) {
  if (terms.length === 0)
    return (
      <p className="text-center uppercase text-2xl font-semibold mt-6">
        No terms yet. Add the first one!
      </p>
    );

  return (
    <section>
      <ul className="list-none space-y-4">
        {terms.map((term) => (
          <Term key={term.id} term={term} setTerms={setTerms} />
        ))}
      </ul>
      <p>{terms.length} terms in total. Add more!</p>
    </section>
  );
}

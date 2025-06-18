import { CATEGORIES } from "../data/categories";

type Props = {
  setCurrentCategory: (category: string) => void;
};

function CategoryFilter({ setCurrentCategory }: Props) {
  return (
    <aside>
      <ul>
        <li className="mb-4">
          <button
            className="btn mb-4 w-full"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="mb-4">
            <button
              className="btn w-full bg-none"
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;

import { useState } from "react";

const CATEGORIES = [
  { id: 1, name: "Red Wine" },
  { id: 2, name: "White Wine" },
  { id: 3, name: "Rosé Wine" },
  { id: 4, name: "Sparkling Wine" },
  { id: 5, name: "Orange Wine" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Laurent-Perrier",
    category_id: 4,
    category_name: "Sparkling Wine",
  },
  {
    id: 2,
    name: "Cabernet Sauvignon",
    category_id: 1,
    category_name: "Red Wine",
  },
  {
    id: 3,
    name: "Channing Daughters",
    category_id: 5,
    category_name: "Orange Wine",
  },
  {
    id: 4,
    name: "Cupcake Vineyards",
    category_id: 3,
    category_name: "Rosé Wine",
  },
  {
    id: 5,
    name: "Vega Sicilia",
    category_id: 1,
    category_name: "Red Wine",
  },
  {
    id: 6,
    name: "Pheasant's Tears",
    category_id: 5,
    category_name: "Orange Wine",
  },
  {
    id: 7,
    name: "Donkey & Goat",
    category_id: 5,
    category_name: "Orange Wine",
  },
  {
    id: 8,
    name: "Vouvray Domaine Huet",
    category_id: 2,
    category_name: "White Wine",
  },
  {
    id: 9,
    name: "Cloudy Bay",
    category_id: 2,
    category_name: "White Wine",
  },
  {
    id: 10,
    name: "Opus One",
    category_id: 1,
    category_name: "Red Wine",
  },
  {
    id: 11,
    name: "Robert Mondavi Winery",
    category_id: 2,
    category_name: "White Wine",
  },
  {
    id: 12,
    name: "Jacob's Creek",
    category_id: 2,
    category_name: "White Wine",
  },
  {
    id: 13,
    name: "Miraval",
    category_id: 3,
    category_name: "Rosé Wine",
  },
  {
    id: 14,
    name: "Piper-Heidsieck",
    category_id: 4,
    category_name: "Sparkling Wine",
  },
  {
    id: 15,
    name: "Taittinger",
    category_id: 4,
    category_name: "Sparkling Wine",
  },
  {
    id: 16,
    name: "Whispering Angel",
    category_id: 3,
    category_name: "Rosé Wine",
  },
  {
    id: 17,
    name: "Kim Crawford",
    category_id: 2,
    category_name: "White Wine",
  },
  {
    id: 18,
    name: "Veuve Clicquot",
    category_id: 4,
    category_name: "Sparkling Wine",
  },
  {
    id: 19,
    name: "La Stoppa",
    category_id: 5,
    category_name: "Orange Wine",
  },
  {
    id: 20,
    name: "Penfolds",
    category_id: 1,
    category_name: "Red Wine",
  },
  {
    id: 21,
    name: "Frank Cornelissen",
    category_id: 5,
    category_name: "Orange Wine",
  },
  {
    id: 22,
    name: "Louis Jadot",
    category_id: 1,
    category_name: "Red Wine",
  },
  {
    id: 23,
    name: "Minuty",
    category_id: 3,
    category_name: "Rosé Wine",
  },
  {
    id: 24,
    name: "Freixenet",
    category_id: 4,
    category_name: "Sparkling Wine",
  },
  {
    id: 25,
    name: "Domaines Ott",
    category_id: 3,
    category_name: "Rosé Wine",
  },
];

function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl mb-4">Search Item</h1>

      <section className="mb-4">
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
      </section>

      <section>
        <div className="flex flex-wrap gap-2 mb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`border border-slate-500 px-4 py-2 rounded ${
                category.id === selectedCategory
                  ? "border-blue-600 bg-blue-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <ul className="pl-6">
            {PRODUCTS.map((product) => (
              <li key={product.id} className="h-8 list-disc">
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;

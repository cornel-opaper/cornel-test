const OPTIONS = [
  { label: "Rose", value: "rose" },
  { label: "Lily", value: "lily" },
  { label: "Tulip", value: "tulip" },
  { label: "Sunflower", value: "sunflower" },
  { label: "Daisy", value: "daisy" },
];

function SelectionPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-2xl mb-4">Selection Filters</h1>

      <ul className="flex flex-col">
        <li>
          <label className="block">
            <input
              type="checkbox"
              checked
              onChange={() => {}}
              className="mr-2"
            />
            Select All
          </label>
        </li>

        {OPTIONS.map((option) => (
          <li key={option.value}>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectionPage;

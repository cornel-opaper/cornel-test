import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Input({ value, onChange }: any) {
  const [internalValue, setInternalValue] = useState(value);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (!isOpen) {
      onChange(internalValue);
    }
  }, [isOpen, onChange]);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {isOpen && (
        <div>
          <input
            value={internalValue}
            onChange={(e) => setInternalValue(e.currentTarget.value)}
          />
          <button onClick={() => setOpen(false)}>Submit</button>
        </div>
      )}
    </>
  );
}

export default Input;

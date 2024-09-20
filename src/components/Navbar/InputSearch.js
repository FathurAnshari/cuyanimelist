"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      event.preventDefault();
      const keyword = searchRef.current.value;
      if (keyword === "") {
        return;
      }
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        type="submit"
        className="absolute top-2 end-2"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;

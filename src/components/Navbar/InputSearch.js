"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const searchHandler = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={keyDownHandler}
      />
      <button className="absolute top-2 end-2" onClick={searchHandler}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;

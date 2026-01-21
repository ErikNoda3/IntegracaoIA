'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  const [value, setValue] = useState("")

  function handleLogin() {
    router.push("/result")
  }

  return (
    <div className=" h-full flex items-center justify-center flex-col gap-5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-amber-50 text-black border border-amber-400 rounded"
      />
      <button
        onClick={handleLogin}
        className="">Entrar</button>
    </div>
  );
}

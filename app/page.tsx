'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (!text.trim()) {
      router.push("/result")
      return
    }

    router.push(`/result?prompt=${encodeURIComponent(text)}`)
  }

  return (
    <div className=" h-dvh flex items-center justify-center">
      <div className="p-20 flex  items-center justify-center flex-col gap-5 bg-emerald-900 border rounded">

        <p className="text-2xl">Chat:</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite seu prompt"
            className="p-2 bg-amber-50 text-black border border-amber-400 rounded"
          />
          <button
            type="submit"
            className="p-2 font-bold text-white bg-emerald-400 rounded"
          >Entrar
          </button>
        </form>

      </div>
    </div>
  );
}

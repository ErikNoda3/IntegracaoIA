'use client'

import { useSearchParams } from "next/navigation"

export default function Result() {
  const searchParams = useSearchParams()
  const prompt = searchParams.get("prompt")

  const aiResponse = "Essa é uma resposta simulada por IA"

  return (
    <div className="h-dvh flex  items-center justify-center">

      <div className="p-20 flex flex-col items-center justify-center gap-5 bg-emerald-900 border rounded">
        <h1 className="text-5xl font-bold">CHAT</h1>

        <div className="flex gap-1">
          <p className="text-2xl">Você: </p>
          <p className="text-2xl">{prompt ?? "Nenhuma mensagem enviada"}</p>
        </div>

        <div className="flex gap-1">
          <p className="text-2xl">IA: </p>
          <p className="text-2xl">{aiResponse}</p>
        </div>
      </div>

    </div>
  )
}
'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function Result() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const prompt = searchParams.get("prompt")

  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!prompt) return;

    async function fetchAnalysis() {
      try {
        setLoading(true)
        setError(null);
        const res = await fetch("http://localhost:3333/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt })
        })

        if (!res.ok) {
          throw new Error("Erro ao chamar API");
        }

        const data = await res.json();
        setAiResponse(data.result ?? JSON.stringify(data))
      } catch (err) {
        setError("Erro ao processar requisição")

      } finally {
        setLoading(false)
      }
    }
    fetchAnalysis()
  }, [prompt])


  function handleBack() {
    router.push("/")
  }
  return (
    <div className="h-dvh flex  items-center justify-center">

      <div className="p-20 flex flex-col items-center justify-center gap-5 bg-emerald-900 border rounded">
        <h1 className="text-5xl font-bold">CHAT</h1>

        <div className="flex gap-1">
          <p className="text-2xl font-bold ">Você: </p>
          <p className="text-2xl">{prompt}</p>
        </div>

        {loading && (
          <p>
            Analisando texto...
          </p>
        )}

        {error && (
          <p>
            {error}
          </p>
        )}

        <div className="flex gap-1">
          <p className="text-2xl font-bold">IA: </p>
          <p className="text-2xl">{aiResponse}</p>
        </div>
        <button onClick={handleBack} className="p-2 font-bold text-white bg-emerald-400 rounded">Voltar</button>
      </div>
    </div>
  )
}
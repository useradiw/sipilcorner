"use client"

import { useRouter } from "next/navigation";
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    const router = useRouter();
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button className="font-bold my-1" onClick={() => reset()}>Try again</button>
        <br />
        <button className="font-bold my-1" onClick={() => router.back()}>Go back!</button>
      </body>
    </html>
  )
}
"use client"
 
import { useEffect } from "react";
import { useRouter } from "next/navigation";
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter();
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        className="font-bold my-1"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <br />
      <button className="font-bold my-1" onClick={() => router.back()}>Go back!</button>
    </div>
  )
}
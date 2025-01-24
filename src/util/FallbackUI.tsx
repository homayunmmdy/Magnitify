"use client";
import { Button } from "@/components";
import { FallbackProps } from "@/types/entities";
import { useEffect } from "react";
import { IoReloadSharp } from "react-icons/io5";

/**
 * @typedef {Object} FallbackProps
 * @property {Error} error - The error object that caused the fallback UI to render.
 * @property {() => void} resetErrorBoundary - A function to reset the error boundary and retry the operation.
 * @property {number} retryCount - The current number of retry attempts.
 * @property {React.Dispatch<React.SetStateAction<number>>} setRetryCount - A function to update the retry count.
 */

const MAX_RETRY_COUNT = 5; // Set the maximum retries

/**
 * A fallback UI component that displays an error message and provides options to retry the operation.
 * @param {FallbackProps} props - The props for the FallbackUI component.
 * @returns {React.ReactElement} The rendered fallback UI.
 */
export const FallbackUI: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
  retryCount,
  setRetryCount,
}) => {
  useEffect(() => {
    if (retryCount < MAX_RETRY_COUNT) {
      const timer = setTimeout(() => {
        setRetryCount((prev) => prev + 1); // Increment retry count
        resetErrorBoundary(); // Retry fetching data
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [retryCount, resetErrorBoundary, setRetryCount]);

  const canRetry = retryCount < MAX_RETRY_COUNT;

  return (
    <div className="flex flex-col items-center justify-center p-3 text-center">
      <h2 className="mb-4 text-lg font-semibold text-red-600">
        Oops! Something went wrong.
      </h2>
      <p className="mb-4 text-sm">{error.message}</p>
      {canRetry && (
        <>
          <Button
            type="button"
            color="btn-error"
            onClick={() => {
              setRetryCount((prev) => prev + 1); // Reset retry count
              resetErrorBoundary(); // Retry manually
            }}
          >
            <IoReloadSharp />
          </Button>
          <p className="mt-4 text-xs">
            Retrying automatically in {MAX_RETRY_COUNT} seconds... ({retryCount}
            /{MAX_RETRY_COUNT})
          </p>
        </>
      )}
    </div>
  );
};

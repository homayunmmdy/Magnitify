"use client";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackUI } from "./FallbackUI";

/**
 * A wrapper component that provides error boundary functionality to its children.
 * If an error occurs within the children, it will be caught and a fallback UI will be displayed.
 * The fallback UI includes retry functionality, allowing the user to attempt to recover from the error.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the error boundary.
 * @returns {JSX.Element} The ErrorBoundaryProvider component with error boundary functionality.
 *
 * @example
 * ```jsx
 * <ErrorBoundaryProvider>
 *   <MyComponent />
 * </ErrorBoundaryProvider>
 * ```
 */
const ErrorBoundaryProvider = ({children} : {children: React.ReactNode}) => {
  const [retryCount, setRetryCount] = useState(0);

  return (
    <ErrorBoundary
      FallbackComponent={(props) => (
        <FallbackUI
          {...props}
          retryCount={retryCount}
          setRetryCount={setRetryCount}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryProvider;

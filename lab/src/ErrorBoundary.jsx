import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  );
}

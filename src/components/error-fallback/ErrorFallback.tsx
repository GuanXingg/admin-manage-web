import cs from 'clsx';

interface ErrorFallbackProps {
  error: Error;
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div className={cs('text-red-500')}>
      <p className={cs('text-15 font-bold')}>Something went wrong:</p>
      <p className={cs('mt-5 italic')}>
        <span className={cs('font-bold')}>({error.name}):</span>
        {error.message}
      </p>
    </div>
  );
}

export default ErrorFallback;

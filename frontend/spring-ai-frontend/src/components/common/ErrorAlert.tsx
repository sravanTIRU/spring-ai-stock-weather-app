type ErrorProps = {
  message: string;
};

function ErrorAlert({ message }: ErrorProps) {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-md">
      {message}
    </div>
  );
}

export default ErrorAlert;

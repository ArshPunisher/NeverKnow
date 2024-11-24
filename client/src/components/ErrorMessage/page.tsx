interface ErrorMessageProps{
    message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <p className="text-red-500 text-sm">{message}</p>
);

export default ErrorMessage;

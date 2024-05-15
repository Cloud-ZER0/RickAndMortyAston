import { Component, ErrorInfo } from "react";

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };
  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <p>Seems like an error occured!</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component, ErrorInfo, ReactNode } from "react"

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("error", error)
    console.log("errorInfo", errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) return <h1>Oops, something went wrong</h1>
    return this.props.children
  }
}

export default ErrorBoundary
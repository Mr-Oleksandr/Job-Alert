import React, { Component } from "react";
import ErrorIndicator from "./ErrorIndicator";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

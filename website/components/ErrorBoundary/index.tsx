import React from 'react';

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
    static getDerivedStateFromError(error) {
        // tslint:disable-next-line
        console.log('getDerivedStateFromError', error);

        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);

        // tslint:disable-next-line
        console.log('componentDidCatch', error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

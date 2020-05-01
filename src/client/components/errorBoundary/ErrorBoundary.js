import React from 'react';
import styles from './ErrorBoundary.module.css'

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return(
        <div className = {styles.errorBoundary}>
          <h2 style = {{color: 'red'}}>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap', color: "white" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    } 

    return this.props.children;
  }
}

export default ErrorBoundary;
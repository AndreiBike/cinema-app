import React from 'react';
import Head from './head/Head'
import Specification from './specification/Specification'
import './Description.module.css'


class Description extends React.Component {

  constructor(props) {
    super(props);
    this.isUnmount = false;
    this.state = {
      id: this.props.match.params.id,
    }
    console.log(props);
  }

  componentDidMount() {
    this.props.uploadIdMovie({ id: this.props.match.params.id });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.id) {
      nextProps.uploadIdMovie({ id: nextProps.match.params.id })
      return {
        id: nextProps.match.params.id
      }
    }
    return null;
  }

  componentWillUnmount() {
    this.isUnmount = true;
  }

  render() {
    return (
      <div className="description">
        <Head headerLabels={this.props.headerLabels} />
        <Specification movie={this.props.movie} />
      </div>
    )
  }
}

export default Description;

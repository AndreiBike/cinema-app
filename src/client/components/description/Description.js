import React from 'react';
import Head from './head/Head';
import Specification from './specification/Specification';
import Preloader from '@root/client/components/shared/preloader/Preloader';
import './Description.module.css'


class Description extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    }
  }

  componentDidMount() {
    this.props.uploadIdMovie({ id: this.props.match.params.id });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Preloader />
      )
    }

    return (
      <div className="description">
        <Head headerLabels={this.props.headerLabels} searchText={this.props.searchText} />
        <Specification movie={this.props.movie} />
      </div>
    )
  }
}

export default Description;

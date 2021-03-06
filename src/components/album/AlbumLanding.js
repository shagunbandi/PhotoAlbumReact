import React, { Component } from 'react';

import { connect } from 'react-redux';

import DirectoryContainer from './DirectoryContainer';
import FileContainer from './FileContainer'

import Spinner from '../layout/Spinner';

import {
  setLoading,
  getAllImagesWithPath,
  selectSubDirectoryGlobal
} from '../../actions/albumAction';


export class AlbumLanding extends Component {

  componentWillMount() {
    this.props.setLoading();
    this.props.getAllImagesWithPath();
  }

  componentDidMount() {
    if (this.props.location.pathname !== "") {
      this.props.selectSubDirectoryGlobal(this.props.location.pathname);
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="main-container">
        {loading ? <Spinner /> : <DirectoryContainer />}
        <hr />
        {loading ? <Spinner /> : <FileContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.album.loading,
  folder: state.album.folder,
});

export default connect(
  mapStateToProps,
  {
    setLoading,
    selectSubDirectoryGlobal,
    getAllImagesWithPath,
  }
)(AlbumLanding);

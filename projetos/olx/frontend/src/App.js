import React from 'react';
import { connect } from 'react-redux';

import Routes from './Routes';

import  * as C  from './components/MainComponents'

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const Page = (props) => {
  return (
    <div>
      <C.Template>
        <Header />
        <Routes />
        <Footer />
      </C.Template>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
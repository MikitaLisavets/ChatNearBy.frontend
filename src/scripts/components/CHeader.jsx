import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Utils } from '/imports/services/Utils';
// import { I18n } from '/imports/services/I18n';
// import { CAuth } from '/imports/ui/components/CAuth';

export default class CHeader extends Component {

  render() {
    return (
      <header className='header'>
        <Link to='/' className='header__logo'>ChatNearby</Link>
        <div className='header__auth'>
          Auth
        </div>
      </header>
    );
  }
}

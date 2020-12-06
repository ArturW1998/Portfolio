import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import portfolioLinksList from '../../../constants/portfolioLinksList';
import URLS from '../../../constants/urls';
import Pattern from '../parts/Pattern';

class C2Corner extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string,
    }),
  };

  static defaultProps = {
    page: {
      page: '',
    },
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      page: { page },
    } = nextProps;

    const menuItems = document.querySelectorAll('#fp-nav ul li a span');

    menuItems.forEach(menuItem =>
      page === URLS.c2corner
        ? menuItem.classList.add('c2corner-bg')
        : menuItem.classList.remove('c2corner-bg'),
    );
  }

  render() {
    return (
      <Pattern
        classname="C2Corner"
        description={() => (
          <div className="description">
            <p>
              My team and I developed this system. The backend is built with Laravel and the
              frontend with TypeScript; a lot of components for API communication with marketplaces
              and payment operations; development and design of new features.
            </p>
          </div>
        )}
        effectClassIn="zoomIn"
        effectClassOut="zoomOut"
        figure={() => (
          <div>
            <span>View</span>
            <span>C2Corner</span>
          </div>
        )}
        logoDescription={() => (
          <p className="paragraph">
            High load platform for wholesalers on the largest marketplaces such as
            Amazon&nbsp;and&nbsp;eBay
          </p>
        )}
        logoText="C2CORNER"
        url={portfolioLinksList.c2corner}
      />
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(C2Corner);

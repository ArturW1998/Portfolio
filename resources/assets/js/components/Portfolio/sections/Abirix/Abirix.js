import React from 'react';
import PropTypes from 'prop-types';

import URLS from '../../../../constants/urls';
import withSectionData from '../../hocs/withSectionData';
import { remove, setup } from './common/coalesce';

const Abirix = ({ info, toggle }) => (
  <div className="demo-4 abirix">
    <section>
      <div className="frame" />

      <div className="content content--canvas-abirix">
        <div className="abirix-container">
          <div className="header">
            <h2 className="logo">ABIRIX CRM</h2>

            <div className="description">CRM system for a sales company</div>
          </div>

          <div className={`tech-container ${info ? 'd-none' : 'd-flex'}`}>
            <div className="row">
              <div className="techs" />
            </div>
          </div>

          <div className={`info-container tzie-small ${info ? 'd-flex' : 'd-none'}`}>
            I have completed writing the CRM system in a team as a middle developer, designed and
            wrote the main system components, developed the database. Used TypeScript as the
            interface development tool and Laravel as the backend API; Complete test coverage;
            Development with strict flow based on Agile princes; Transfer data from legacy systems.
          </div>

          <div className={`arrow ${info ? 'arrow-up' : 'arrow-down'}`} onClick={toggle} />
        </div>
      </div>
    </section>
  </div>
);

Abirix.propTypes = {
  info: PropTypes.bool,
  toggle: PropTypes.func,
};

Abirix.defaultProps = {
  info: false,
  toggle: () => {},
};

const sectionData = {
  sectionClassName: 'abirix-bg',
  sectionPage: URLS.abirix,
  onEnter: () => setup(),
  onLeave: () => remove(),
};

export default withSectionData(sectionData)(Abirix);

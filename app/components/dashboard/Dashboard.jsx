import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DirectionsList from 'directions/list/DirectionsList';
import WidgetTab from 'Widget/Tab/WidgetTab';

class Dashboard extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    directions: PropTypes.object,
    params: PropTypes.object,
    children: PropTypes.object
  };

  static defaultProps = {
    dispatch: () => {},
    directions: {},
    params: {},
    children: {}
  };

  render() {
    const { user } = this.props;
    let tabs = {};

    tabs[`/${user.nick}/info`] = 'Progress';
    tabs[`/${user.nick}/shared`] = 'Shared';
    tabs[`/${user.nick}/statistic`] = 'Statisitc';

    return (
      <div className="dashboard">
        <WidgetTab tabs={tabs} className="horizontal-bottom" />
        {this.props.children}
      </div>
    );
  }
}

/**
 * Mapping application state to properties
 * @param  {Object} state Application state
 * @return {Object} Mapped properties
 */
function mapStateToProps(state) {
  return {
    direction: state.directions.list,
    user: state.users.show
  };
}

export default connect(mapStateToProps)(Dashboard);

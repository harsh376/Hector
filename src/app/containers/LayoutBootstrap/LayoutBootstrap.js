import React from 'react'

import ConnectedCustomNavBar from '../../components/ConnectedCustomNavBar/ConnectedCustomNavBar'
import Home from '../Home/Home'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import './stylesheets/Layout.scss'

// TODO: Add tests for `LayoutBootstrap` component

function LayoutBootstrap({ content, routes }) {
  return (
    <div>
      <ConnectedCustomNavBar />
      {/* <Breadcrumbs routes={routes} /> */}
      <div className="contentBoot topOffset">{content || <Home />}</div>
    </div>
  )
}

LayoutBootstrap.propTypes = {
  content: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
  routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

LayoutBootstrap.defaultProps = {
  content: null,
}

export default LayoutBootstrap

import './HomeView.scss'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class HomeView extends Component {
  static propTypes = {
    router : PropTypes.object.isRequired
  }

  componentDidMount () {
    setTimeout(() => this.props.router.push('/feed'), 500)
  }

  render () {
    return (
      <div className='home'>loading...</div>
    )
  }
}

export default connect(s => s)(HomeView)

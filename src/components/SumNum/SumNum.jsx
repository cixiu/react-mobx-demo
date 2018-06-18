import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject(({ store }) => {
  return { numberState: store.numberState }
})
@observer
class SumNum extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.numberState.add()}>+</button>
        <strong>{this.props.numberState.number}</strong>
        <button onClick={() => this.props.numberState.minus()}>-</button>
      </div>
    )
  }
}

SumNum.propTypes = {}

export default SumNum

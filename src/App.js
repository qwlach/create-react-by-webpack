import React, { PureComponent } from 'react';

import { loadBridge } from './store';

class App extends PureComponent {

  static defaultProps = {
    value: 11111
  }

  handleChange = () => {
    const { setCurrentPage } = this.props;
    setCurrentPage({
      path: "value",
      value: 2222
    })
  }

  render() {
    const { value } = this.props;
    console.log(value)
    return (
      <div onClick={this.handleChange}>{value}</div>
    )
  }
}

export default loadBridge({
  mapStateToPropsKey: []
})(App);
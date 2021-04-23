import React, { PureComponent } from 'react';
import { Button } from 'antd';

import { loadBridge } from '../../store';
import './index.less';

class Home extends PureComponent {
  
  render() {
    return (
      <Button>
        Home
      </Button>
    )
  }
}

export default loadBridge({
  mapStateToPropsKey: []
})(Home);
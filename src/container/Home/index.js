import React, { PureComponent } from 'react';
import { Button } from 'antd';

import { loadBridge } from '../../store';

class Home extends PureComponent {
  
  render() {
    return (
      <Button>
        Home 我是测试加的分支
      </Button>
    )
  }
}

export default loadBridge({
  mapStateToPropsKey: []
})(Home);
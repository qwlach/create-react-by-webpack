import React, { PureComponent } from 'react';
import { Button } from 'antd';

import { loadBridge } from '../../store';

class Other extends PureComponent {
  
  render() {
    return (
      <Button>
        Other
      </Button>
    )
  }
}

export default loadBridge({
  mapStateToPropsKey: []
})(Other);
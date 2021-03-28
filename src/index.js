import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Utils from "@Utils";

// const ele = React.createElement('div', { title: '我是div' }, '我是div')
function App() {
  const [status, setStatus] = useState(true);
  Utils.testDemo();
  return (
    <div>
      我是hooks
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'));
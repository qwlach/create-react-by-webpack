import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Button } from 'antd';
import classNames from 'classnames';
import { loadBridge } from './store';
import './index.less';

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
    var btnClass = classNames({
      'qiweilong': true,
      'testColor': true,
    });
    return (
      <>
        <div onClick={this.handleChange}>{value}</div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Button type="primary" className={btnClass}>1111qq11</Button>
            <Switch>
              <Route path="/" exact component={Home} />
                
              <Route path="/about" exact component={About} />

              <Route path="/users" component={Users} />
              {/* <Route path="/about/:id" component={Users} /> */}
              <Route path="" render={() => <div>not found</div>} />
              
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

function About(props) {
  console.log(useParams())
  return (
    <div>
      <Switch>
        <Route path="/about/:id" component={Users} />
        
      </Switch>
      <div onClick={() => props.history.push('/about/1')}>
        About
      </div>
    </div>
  )
}
function Users() {
  console.log(useParams())
  return (
    <div>
      Users
    </div>
  )
}
function Home(props) {
  console.log(props);
  console.log(useParams())
  return (
    <div onClick={() => props.history.push('./about')}>
      Home
    </div>
  )
}

export default loadBridge({
  mapStateToPropsKey: []
})(App);
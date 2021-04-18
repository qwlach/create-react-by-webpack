import React, { lazy, Suspense} from 'react';
import { Route as OriginRoute, HashRouter, Switch } from 'react-router-dom';
import Route from './wrapperRouter';

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<div>1111</div>}>
      <Component {...props} />
    </Suspense>
  )
}

function NotFound () {
  return <div>404 Not Found</div>
}

const HomeComponent = lazy(() => import('../container/Home'));
const OtherComponent = lazy(() => import('../container/Other'));

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <OriginRoute exact path='/' component={SuspenseComponent(HomeComponent)} />
        <OriginRoute exact path='/other' component={SuspenseComponent(OtherComponent)} />
        <Route component={NotFound}/>
      </Switch>
      
    </HashRouter>
  )
}
import { connect } from 'react-redux';
import { get } from 'lodash';

const urlPath = window.location.pathname.replace(/^\//g, "");


const setCurrentPage = (dispatch) => ({ path, value }) => {
  dispatch({
    type: 'SET_CURRENT_PAGE',
    path: `${urlPath}${path}`,
    value: value,
  })
  // Promise.resolve();
} 

const loadBridge = ({ mapStateToPropsKey }) => (Component)  => {

  const mapStateToProps = (state) => state;
  const mapDispatchToProps = (dispatch) => {
    return {
      setCurrentPage: setCurrentPage(dispatch)
    }
  }

  if (!Array.isArray(mapStateToPropsKey)) {
    throw ('mapStateToPropsKey need to be Array')
  }
  if (Array.isArray(mapStateToPropsKey) && mapStateToPropsKey.length) {
    mapStateToProps = (state) => {
      const obj = {};
      mapStateToPropsKey.forEach(item => {
        obj[item.name] = get(state, `${urlPath}${item.path}`)
      })
      return obj;
    }
  }
  return connect(
    mapStateToProps, 
    mapDispatchToProps,
  )(Component)
}

export default loadBridge;
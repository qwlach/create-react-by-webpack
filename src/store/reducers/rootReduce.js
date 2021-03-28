
// 初始数据
const initialState = {};

function AllReducer(state = initialState, actions) {
  switch (actions.type) {
    case "SET_CURRENT_PAGE":
      console.log('assign', actions)
      const { path, value } = actions;
      return Object.assign({}, state, { [path]: value });

    default:
      return state;
  }
}
export default AllReducer;
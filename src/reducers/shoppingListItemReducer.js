export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log(action)
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log(state.items.concat(state.items.length));
      return Object.assign({}, {
        items: state.items.concat(state.items.length)
      });

    case 'DECREASE_COUNT':
      console.log(state.items.length)
      return Object.assign({}, {
        item: state.items
      })

    default:
      console.log(state)
      return state;
  }
};

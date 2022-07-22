const redux = require('redux')

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'INCREMENT')
        return { counter: state.counter + action.value, showCounter: state.showCounter }
    if (action.type === 'DECREMENT')
        return { counter: state.counter - action.value, showCounter: state.showCounter }
    if (action.type === 'TOGGLE')
        return { counter: state.counter, showCounter: !state.showCounter }
    return { counter: 0, showCounter: true }
}

const store = redux.legacy_createStore(counterReducer);

//Here we export our store for availability in our react app
//For this we go as higher in higher in our app at root level to make it avaible at top most
export default store;



// const counterSubscriber = () => {
//     //getState is a built in function in store which give us latest state snapshot
//     console.log(store.getState());
// }
// store.subscribe(counterSubscriber);

// //dispatch: this function only takes plain object otherwise we need to add middleware for passing other values
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' })
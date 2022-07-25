import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, toggle } from '../store';

// import { counterActions } from '../store';
// import { Connect } from 'react-redux';
// import { Component } from 'react';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(increment());
    // dispatch({ type: 'INCREMENT', value: 1 })
  }
  const decrementHandler = () => {
    dispatch(decrement())
    // dispatch({ type: 'DECREMENT', value: 1 })
  }
  const toggleCounterHandler = () => {
    dispatch(toggle())
    // dispatch({ type: 'TOGGLE' })
  };

  return (
    <main className={classes.counter}>

      <h1> REDUX COUNTER </h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;




//REDUX: DISPATCHING ACTION USING CLASS COMPONENTS



// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.INCREMENT();
//   }
//   decrementHandler = () => {
//     this.props.DECREMENT();
//   }
//   toggleCounterHandler() {
//   }
//   render() {
//     return (
//       <main className={classes.counter} >
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.incrementHandler}>INCREMENT</button>
//         <button onClick={this.decrementHandler}>DECREMENT</button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }


// const mapStateToProps = (state) => ({ counter: state.counter })
// const mapDispatchToProps = (dispatch) => {
//   return {
//     INCREMENT: () => dispatch({ type: 'INCREMENT' }),
//     DECREMENT: () => dispatch({ type: 'DECREMENT' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
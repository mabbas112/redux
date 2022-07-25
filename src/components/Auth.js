import classes from './Auth.module.css';
import { authActions } from '../store';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const Auth = () => {

  const dispatch = useDispatch();
  const { isLogin } = authActions;
  const emailRef = useRef();
  const passwardRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (emailRef.current.value.trim() === '' || passwardRef.current.value.trim() === '')
      return
    dispatch(isLogin());

  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwardRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

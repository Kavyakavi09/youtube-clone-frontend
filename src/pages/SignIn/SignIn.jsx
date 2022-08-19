import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import {
  Container,
  Wrapper,
  Title,
  Input,
  SubTitle,
  Button,
  More,
  Links,
  Link,
} from './style';
import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/signin', { name, password });
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post('/auth/google', {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            navigate('/');
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to KavyaTube</SubTitle>
        <Input
          placeholder='username'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='password'
          placeholder='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <Title>or</Title>
        <Input
          placeholder='username'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;

import React from 'react';
import { useHistory } from "react-router-dom";
import { Background, Container, Title, Subtitle, InputLabel, LoginInput, Option, Button, MutedSpan } from './styles';

const Login: React.FC = () => {
  let history = useHistory();
  function login() {
      history.push('/home')
  }
  return <Background>
    <Container>
      <Title>Boas-vindas de volta!</Title>
      <Subtitle>Estamos muito animados em te ver novamente!</Subtitle>
      <InputLabel htmlFor="email">E-mail ou número de telefone</InputLabel>
      <LoginInput id="email" />
      <InputLabel htmlFor="password">Senha</InputLabel>
      <LoginInput id="password" />
      <Option href="#">Esqueceu sua senha?</Option>
      <Button onClick={login}>Entrar</Button>
      <div>
        <MutedSpan>Precisando de uma conta?</MutedSpan>
        <Option>Registre-se</Option>
      </div>
    </Container>;
  </Background> 
}

export default Login;
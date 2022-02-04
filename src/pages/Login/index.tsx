import React, { useState, useEffect, ChangeEvent, useContext } from "react";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { LOGIN } from "./../../graphql/queries";
import {
  Background,
  Container,
  Title,
  Subtitle,
  InputLabel,
  LoginInput,
  Option,
  Button,
  MutedSpan,
} from "./styles";
import AuthContext from "../../context/Auth.context";

import LoadingImage from "./../../assets/images/loading-gif-discord.gif";
import { IAuthUser } from "../../models/user.interface";

const Login: React.FC = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { loading, error, data }] = useLazyQuery(LOGIN);
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    if (data) {
      const {login: userLogged} = data; 
      console.log(userLogged, 'RESULT');      
      setUser(userLogged)
      history.push('/home')
    }
  }, [data]);

  return (
    <Background>
      <Container>
        <Title>Boas-vindas de volta!</Title>
        <Subtitle>Estamos muito animados em te ver novamente!</Subtitle>
        <InputLabel className={error ? "labelError" : ""} htmlFor="email">
          E-mail ou número de telefone{" "}
          <span>{error ? `- ${error.message}` : ""}</span>
        </InputLabel>
        <LoginInput
          className={error ? "inputError" : ""}
          autoComplete="false"
          spellCheck={false}
          type="email"
          onInput={(value: ChangeEvent<HTMLInputElement>) =>
            setEmail(value.target.value)
          }
        />
        <InputLabel className={error ? "labelError" : ""} htmlFor="password">
          Senha <span>{error ? `- ${error.message}` : ""}</span>
        </InputLabel>
        <LoginInput
          className={error ? "inputError" : ""}
          id="password"
          autoComplete="false"
          spellCheck={false}
          type="password"
          onInput={(value: ChangeEvent<HTMLInputElement>) => {
            console.log(value.target.value, 'return');
            return setPassword(value.target.value)
          }
          }
        />
        <Option href="#">Esqueceu sua senha?</Option>
        <Button onClick={() => {
          console.log({ UserData: {email, password} });
          
          return login({ variables: { UserData: {email, password} } })
        }}>
          Entrar
        </Button>
        {loading ? <img src={LoadingImage} alt="Loading" /> : <></>}
        <div>
          <MutedSpan>Precisando de uma conta?</MutedSpan>
          <Option>Registre-se</Option>
        </div>
      </Container>
    </Background>
  );
};

export default Login;

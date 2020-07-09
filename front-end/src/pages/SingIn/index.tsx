import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import logoImg from '../../assets/logoImg.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const handleSubmit: SubmitHandler<FormData> = useCallback(
    (data: FormData): void => {
      console.log(data);
    },
    [],
  );

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="Reserved Blood" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input
            name="email"
            autoComplete="off"
            icon={FiMail}
            placeholder="Email"
          />
          <Input
            name="password"
            autoComplete="off"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="create">
          <FiLogIn size={16} />
          Cadastrar um posto de coleta
        </a>
      </Content>
    </Container>
  );
};
export default SignIn;

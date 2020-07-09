import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
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
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input
            name="name"
            autoComplete="off"
            icon={FiUser}
            placeholder="Usuário"
          />
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
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="create">
          <FiArrowLeft size={12} />
          Voltar para o Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

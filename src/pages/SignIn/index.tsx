import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, Content, AnimationContainer, ErroLogin } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [erro, setErro] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const history = useHistory();

  const handleErro = useCallback(() => {
    setErro(err => !err);
  }, []);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          handleErro();
          return;
        }
        handleErro();
      }
    },
    [signIn, handleErro, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Logo light />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
            >
              <Button type="submit">Entrar</Button>
            </Input>
          </Form>
          {erro && (
            <ErroLogin>
              <span>Email e/ou senha incorretos.</span>
            </ErroLogin>
          )}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;

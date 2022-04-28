import React, { useContext } from 'react';

import { UserContext } from '../../Contexts/UserContext';

import { USER_POST } from '../../api';

import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Error from '../../components/Helper/Error';

const LoginCreate = () => {
  const { userLogin } = useContext(UserContext);
  const { request, loading, error } = useFetch();

  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;

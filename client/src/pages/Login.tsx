import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {} from './Login.module.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    passwd: '',
  });

  const [mensagens, setMensagem] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:5000/api/auth/login', inputs).then(response => {
        setMensagem(response.data.message);
      });
    } catch (error: any) {
      setMensagem(error.response.data.message);
    }
  };

  return (
    <section>
      <form>
      <h1>Login</h1>
        <input type="email" name="email" onChange={handleChange} placeholder="email" />
        <input type="password" name="passwd" onChange={handleChange} placeholder="palavra-chave" />
        <p>{mensagens}</p>
        {mensagens === 'usuário foi autenticado com sucesso' ? 'true' : 'false'}
        <Link to="/register" style={{ textDecoration: 'none', marginTop: '5px' }}>
          Ainda não possui cadastro? Clique aqui
        </Link>
        <button onClick={handleClick} type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};
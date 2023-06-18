import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom'
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    passwd: '',
  });

  const [mensagens, setMensagem] = useState<string>('');

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: FormEvent) => {
  	e.preventDefault();
    try {

       const response = await axios.post('http://18.215.50.31:5000/api/auth/login', inputs);
       setMensagem(response.data.message);
       if (response.data.message === 'usuário foi autenticado com sucesso') {
           setIsAuth(true);
       }
  } catch (error: any) {
    setMensagem(error.response.data.message);
  }
};

console.log(isAuth)
  return (
    <section className={styles.section}>
      <form className={styles.form}>
      <h1 className={styles.h1}>Login</h1>
        <input className={styles.input} type="email" name="email" onChange={handleChange} placeholder="email" />
        <input className={styles.input} type="password" name="passwd" onChange={handleChange} placeholder="palavra-chave" />
        <p>{mensagens}</p>
        <Link to="/register" style={{ textDecoration: 'none', marginTop: '5px' }}>
          Ainda não possui cadastro? Clique aqui!
        </Link>
        <button className={styles.button} onClick={handleClick} type="submit">
          Enviar
        </button>
	{isAuth && (
           <Navigate to="/" replace={true} />
        )}
      </form>
    </section>
  );
};


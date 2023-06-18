import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Login.module.css'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    passwd: '',
  });

  const [message, setMessage] = useState<string>('');

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://18.215.50.31:5000/api/auth/registro", inputs);
      setMessage(res.data.message);
      if (res.data.message === 'usuario foi criado com sucesso'){
	setIsAuth(true);
      }
    } catch (error) {
      console.log(`${error}`);
    }
  };

  console.log(inputs);
  return (
    <section className={styles.section}>
      <form className={styles.form}>
      <h1 className={styles.h1}>Registro</h1>
        <input className={styles.input} type="text" placeholder="usuário" name="username" onChange={handleChange} />
        <input className={styles.input} type="email" placeholder="email" name="email" onChange={handleChange} />
        <input className={styles.input}type="password" placeholder="palavra-chave" name="passwd" onChange={handleChange} />
        <Link to="/login" style={{ textDecoration: 'none', marginTop: '5px' }}>
          Já possui cadastro? Clique aqui
        </Link>
	<p>{message}</p>
        <button className={styles.button} onClick={handleSubmit} type="submit">
          Enviar
        </button>
	{isAuth && (
	<Navigate to="/login" replace={true} />
)}
      </form>
    </section>
  );
};

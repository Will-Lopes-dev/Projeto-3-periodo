import { useState, ChangeEvent, FormEvent } from 'react';
import {} from './Login.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    passwd: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/registro", inputs);
      console.log("O usuário foi criado com sucesso");
    } catch (error) {
      console.log(`${error}`);
    }
  };

  console.log(inputs);

  return (
    <section>
      <form>
      <h1>Registro</h1>
        <input type="text" placeholder="usuário" name="username" onChange={handleChange} />
        <input type="email" placeholder="email" name="email" onChange={handleChange} />
        <input type="password" placeholder="palavra-chave" name="passwd" onChange={handleChange} />
        <Link to="/login" style={{ textDecoration: 'none', marginTop: '5px' }}>
          Já possui cadastro? Clique aqui
        </Link>
        <button onClick={handleSubmit} type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomer } from '../redux/usuarioRedux';

const CustomerForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    cpf: '',
    nome: '',
    endereco: '',
    cidade: '',
    uf: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCustomer(formData));  
    onSubmit();  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="cpf" placeholder="CPF" onChange={handleChange} value={formData.cpf} required />
      <input name="nome" placeholder="Nome" onChange={handleChange} value={formData.nome} required />
      <input name="endereco" placeholder="Endereço" onChange={handleChange} value={formData.endereco} required />
      <input name="cidade" placeholder="Cidade" onChange={handleChange} value={formData.cidade} required />
      <input name="uf" placeholder="UF" onChange={handleChange} value={formData.uf} required />
      <button type="submit">Identificar</button>
    </form>
  );
};

export default CustomerForm;

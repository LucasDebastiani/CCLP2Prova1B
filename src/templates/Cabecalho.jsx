import { useSelector } from 'react-redux'; 
import logo from "../assets/imagens/ricardoeletro.png";

export default function Cabecalho() {
   
    const cliente = useSelector((state) => state.customer.customer);
    const cartItems = useSelector((state) => state.cart.items);  
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <header style={{
            margin: '0px',
            padding: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
        }}>
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> 
            <p style={{ fontSize: '18px', color: '#333' }}>
                {totalItems > 0 ? `Carrinho: ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}` : 'Carrinho Vazio'}
            </p>
            
            {cliente ? (
                <p style={{ fontSize: '18px', color: '#333' }}>
                    Bem-vindo, {cliente.nome}!
                </p>
            ) : (
                <p style={{ fontSize: '18px', color: '#333' }}>
                    Bem-vindo à nossa loja!
                </p>
            )}
        </header>
    );
}

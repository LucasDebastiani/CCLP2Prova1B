import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/carrinhoRedux'; 

export default function GradeProdutos({ listaProdutos }) {  
    const dispatch = useDispatch();

    
    const handleAddToCart = (produto) => {
        dispatch(addToCart({ ...produto, quantity: 1 })); 
    };

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px',
        }}>
            {listaProdutos.map((produto) => (  
                <div key={produto.id} style={{
                    width: '200px',
                    margin: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '10px',
                    textAlign: 'center',
                }}>
                    <img 
                        src={produto.image} 
                        alt={produto.title} 
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <h3>{produto.title}</h3>
                    <p>R$ {produto.price}</p>
                    <button 
                        onClick={() => handleAddToCart(produto)} 
                        style={{
                            backgroundColor: 'rgb(255, 60, 60)', 
                            color: 'white', 
                            padding: '10px', 
                            border: 'none', 
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}
        </div>
    );
}

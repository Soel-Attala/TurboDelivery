import { useEffect, useState } from 'react';
import './App.css';
import MapComponent from './components/MapComponent';

function App() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Orders Map</h1>
            <MapComponent apiKey="TU_API_KEY_AQUI" orders={orders} />
        </div>
    );

    async function fetchOrders() {
        const response = await fetch('/api/order/GetOrders'); // Ajusta la URL según tu API
        const data = await response.json();
        setOrders(data);
    }
}

export default App;

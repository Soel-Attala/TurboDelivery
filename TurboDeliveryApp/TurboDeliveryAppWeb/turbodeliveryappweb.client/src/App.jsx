import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Common/Home';
import OrderForm from './components/Client/OrderForm';
import OrderList from './components/Client/OrderList';
import OrderDetail from './components/Courier/OrderDetail';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Common/Profile';
import MapComponent from './components/Common/MapComponent';
import Customers from './components/Admin/Customers';

function App() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        setLoading(true);
        try {
            const response = await fetch('/api/order/GetOrders');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Router>
            <div>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/order-form" element={<OrderForm />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/order-detail/:id" element={<OrderDetail />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/map" element={<MapComponent apiKey="AIzaSyArfkZl9tkhUzoZJDMH-fkcBNlnErthRnE" orders={orders} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
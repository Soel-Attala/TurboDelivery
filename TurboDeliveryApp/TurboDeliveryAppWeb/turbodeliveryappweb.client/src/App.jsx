import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './components/Common/Home';
import OrderForm from './components/Client/OrderForm';
import OrderList from './components/Client/OrderList';
import OrderDetail from './components/Courier/OrderDetail';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Common/Profile';
import MapComponent from './components/Common/MapComponent';

function App() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        const response = await fetch('/api/order/GetOrders');
        const data = await response.json();
        setOrders(data);
    }

    return (
        <Router>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/order-form" element={<OrderForm />} />
                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/order-detail/:id" element={<OrderDetail />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/map" element={<MapComponent apiKey="TU_API_KEY" orders={orders} />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

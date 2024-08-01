import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
}));

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            const result = await response.json();
            setOrders(result);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <RootContainer>
            <Typography variant="h1">Order List</Typography>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.clientName} - {order.items}</li>
                ))}
            </ul>
        </RootContainer>
    );
}

export default OrderList;

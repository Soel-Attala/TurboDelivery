import { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/order/GetOrders');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Typography variant="h4">Order List</Typography>
                <List>
                    {orders.map(order => (
                        <ListItem key={order.id}>
                            <ListItemText
                                primary={`Order ID: ${order.id}`}
                                secondary={`Items: ${order.items} - Address: ${order.address}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Container>
            <Footer />
        </div>
    );
}

export default OrderList;

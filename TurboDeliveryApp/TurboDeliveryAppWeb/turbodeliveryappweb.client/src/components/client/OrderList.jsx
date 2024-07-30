import  { useState, useEffect } from 'react';
import { Container, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

function OrderList() {
    const classes = useStyles();
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
        <Container className={classes.root}>
            <Typography variant="h1">Order List</Typography>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.clientName} - {order.items}</li>
                ))}
            </ul>
        </Container>
    );
}

export default OrderList;

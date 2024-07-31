import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../Config/axiosConfig';
import { Container, Typography, CircularProgress, Paper } from '@mui/material';

const OrderDetail = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`/orders/${orderId}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching order:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Order Detail
            </Typography>
            <Paper style={{ padding: '16px' }}>
                <pre>{JSON.stringify(order, null, 2)}</pre>
            </Paper>
        </Container>
    );
};

export default OrderDetail;

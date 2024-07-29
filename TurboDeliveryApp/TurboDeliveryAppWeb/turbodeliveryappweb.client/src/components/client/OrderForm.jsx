import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function OrderForm() {
    const [order, setOrder] = useState({
        address: '',
        items: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/order/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            });
            if (response.ok) {
                alert('Order created successfully!');
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Typography variant="h4">Create Order</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Address"
                        name="address"
                        value={order.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Items"
                        name="items"
                        value={order.items}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={order.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
            </Container>
            <Footer />
        </div>
    );
}

export default OrderForm;

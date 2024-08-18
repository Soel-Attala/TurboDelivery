import { useState } from 'react';
import { Container, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#ffffff', 
    color: '#000000', 
    borderRadius: theme.shape.borderRadius,
}));

const FormTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

function OrderForm() {
    const [order, setOrder] = useState({
        address: '',
        description: '',
        deliveryCost: '',
        salePrice: '',
        finished: false,
        
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setOrder({
            ...order,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/orders', order);
            console.log('Order submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <RootContainer>
            <FormTitle variant="h2">Order Form</FormTitle>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Address"
                    name="address"
                    value={order.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{
                        style: { color: '#000000' }, 
                    }}
                    InputProps={{
                        style: { color: '#000000' }, 
                    }}
                />
                <TextField
                    label="Description"
                    name="description"
                    value={order.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{
                        style: { color: '#000000' },
                    }}
                    InputProps={{
                        style: { color: '#000000' }, 
                    }}
                />
                <TextField
                    label="Delivery Cost"
                    name="deliveryCost"
                    value={order.deliveryCost}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{
                        style: { color: '#000000' },
                    }}
                    InputProps={{
                        style: { color: '#000000' }, 
                    }}
                />
                <TextField
                    label="Sale Price"
                    name="salePrice"
                    value={order.salePrice}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{
                        style: { color: '#000000' },
                    }}
                    InputProps={{
                        style: { color: '#000000' },
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="finished"
                            checked={order.finished}
                            onChange={handleChange}
                        />
                    }
                    label="Finished"
                    style={{ color: '#000000' }} 
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </RootContainer>
    );
}

export default OrderForm;

import { useState } from 'react';
import { Container, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { styled } from '@mui/system';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
}));

function OrderForm() {
    const [order, setOrder] = useState({
        address: '',
        description: '',
        deliveryCost: '',
        salePrice: '',
        finished: false,
        createdAt: new Date(),
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setOrder({
            ...order,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleDateChange = (date) => {
        setOrder({
            ...order,
            createdAt: date,
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
            <Typography variant="h1">Order Form</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Address"
                    name="address"
                    value={order.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Description"
                    name="description"
                    value={order.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
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
                />
                <DateTimePicker
                    label="Created At"
                    value={order.createdAt}
                    onChange={handleDateChange}
                    renderInput={(props) => <TextField {...props} fullWidth margin="normal" />}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </RootContainer>
    );
}

export default OrderForm;

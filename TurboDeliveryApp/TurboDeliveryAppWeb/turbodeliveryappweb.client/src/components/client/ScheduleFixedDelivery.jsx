import  { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import './ScheduleFixedDelivery.css';

function ScheduleFixedDelivery() {
    const [selectedDate, setSelectedDate] = useState(dayjs().add(12, 'hour'));
    const [deliveryName, setDeliveryName] = useState('');
    const [orders, setOrders] = useState([]);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleReservation = () => {
        if (selectedDate && selectedDate.isAfter(dayjs().add(12, 'hour'))) {
            const newOrder = {
                id: orders.length + 1,
                description: `Reserva para el ${selectedDate.format('DD/MM/YYYY HH:mm')} - ${deliveryName || 'Sin nombre'}`,
            };
            setOrders([...orders, newOrder]);
            setDeliveryName('');
        } else {
            alert('La reserva debe ser con al menos 12 horas de anticipación.');
        }
    };

    return (
        <Container className="schedule-container">
            <Typography variant="h5" className="schedule-header">
                Programar Delivery Fijo
            </Typography>
            <div className="schedule-form">
                <DateTimePicker
                    label="Selecciona Fecha y Hora"
                    value={selectedDate}
                    onChange={handleDateChange}
                    disablePast
                    minDateTime={dayjs().add(12, 'hour')}
                    renderInput={(params) => <TextField {...params} className="schedule-input" />}
                />
                <TextField
                    label="Nombre del Delivery (Opcional)"
                    value={deliveryName}
                    onChange={(e) => setDeliveryName(e.target.value)}
                    className="schedule-input"
                />
                <Button
                    variant="contained"
                    className="schedule-button"
                    onClick={handleReservation}
                >
                    Reservar
                </Button>
            </div>
            <Typography variant="h6">Mis Reservas</Typography>
            <List className="schedule-orders">
                {orders.map((order) => (
                    <ListItem key={order.id} className="schedule-order-item">
                        <ListItemText primary={order.description} className="schedule-order-text" />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default ScheduleFixedDelivery;

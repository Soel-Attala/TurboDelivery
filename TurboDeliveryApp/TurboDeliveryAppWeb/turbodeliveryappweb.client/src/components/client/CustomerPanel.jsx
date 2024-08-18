import { useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const PanelContainer = styled(Container)({
    padding: '80px',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
});

const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '50px',
});

const OrderList = styled(List)({
    marginTop: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '8px',
});

const StyledButton = styled(Button)({
    marginRight: '10px', // A�ade un margen derecho al primer bot�n
});

function CustomerPanel() {
    const [orders] = useState([
        { id: 1, description: 'Pedido 1 - Descripci�n del pedido' },
        { id: 2, description: 'Pedido 2 - Descripci�n del pedido' },
        { id: 3, description: 'Pedido 3 - Descripci�n del pedido' },
        { id: 4, description: 'Pedido 4 - Descripci�n del pedido' },
        { id: 5, description: 'Pedido 5 - Descripci�n del pedido' },
    ]);

    return (
        <PanelContainer>
            <Typography variant="h5" gutterBottom marginBottom="20px">
                Panel del Cliente
            </Typography>
            <ButtonContainer>
                <StyledButton variant="contained" color="primary">
                    Pedir Delivery
                </StyledButton>
                <Button variant="contained" color="secondary">
                    Pedir Delivery Fijo
                </Button>
            </ButtonContainer>
            <Typography variant="h6">Mis Pedidos</Typography>
            <OrderList>
                {orders.map((order) => (
                    <ListItem key={order.id}>
                        <ListItemText primary={order.description} />
                    </ListItem>
                ))}
            </OrderList>
        </PanelContainer>
    );
}

export default CustomerPanel;

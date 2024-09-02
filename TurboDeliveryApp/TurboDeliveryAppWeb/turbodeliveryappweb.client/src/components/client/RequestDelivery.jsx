import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import './RequestDelivery.css';

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

function RequestDelivery() {
    const orders = [
        { id: 1, description: 'Pedido 1 - Descripción del pedido' },
        { id: 2, description: 'Pedido 2 - Descripción del pedido' },
        { id: 3, description: 'Pedido 3 - Descripción del pedido' },
        { id: 4, description: 'Pedido 4 - Descripción del pedido' },
        { id: 5, description: 'Pedido 5 - Descripción del pedido' },
    ];

    return (
        <PanelContainer>
            <Typography variant="h5" gutterBottom marginBottom="20px">
                Pedir Delivery
            </Typography>
            <ButtonContainer>
                <Button variant="contained" color="primary">
                    Pedir Delivery
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

export default RequestDelivery;

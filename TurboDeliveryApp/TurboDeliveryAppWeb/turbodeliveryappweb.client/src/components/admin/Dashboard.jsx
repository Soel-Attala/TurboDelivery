import { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function Dashboard() {
    const [data, setData] = useState({
        orders: [],
        deliveries: [],
        costs: 0,
        revenue: 0
    });

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const response = await fetch('/api/admin/dashboard');
            const result = await response.json();
            setData({
                orders: result.orders,
                deliveries: result.deliveries,
                costs: result.costs,
                revenue: result.revenue
            });
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h1>Dashboard</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Pedidos</Typography>
                                <ul>
                                    {data.orders.map(order => (
                                        <li key={order.id}>{order.clientName} - {order.items}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Entregas</Typography>
                                <ul>
                                    {data.deliveries.map(delivery => (
                                        <li key={delivery.id}>{delivery.courierName} - {delivery.orderId}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Costos y Ganancias</Typography>
                                <p>Costos: ${data.costs}</p>
                                <p>Ganancias: ${data.revenue}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Dashboard;

import { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

function Dashboard() {
    const [data, setData] = useState({
        orders: [],
        deliveries: [],
        costs: 0,
        revenue: 0,
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
                revenue: result.revenue,
            });
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    // Example chart data
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                data: [0, 10, 5, 2, 20, 30, 45],
                borderColor: '#3f51b5',
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
            },
        ],
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Total Orders</Typography>
                        <Typography variant="h4">{data.orders.length}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Total Deliveries</Typography>
                        <Typography variant="h4">{data.deliveries.length}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Costs</Typography>
                        <Typography variant="h4">${data.costs}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Revenue</Typography>
                        <Typography variant="h4">${data.revenue}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Revenue Over Time
                            </Typography>
                            <Line data={chartData} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Dashboard;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetail() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrderDetail();
    }, []);

    const fetchOrderDetail = async () => {
        try {
            const response = await fetch(`/api/order/${orderId}`);
            const data = await response.json();
            setOrder(data);
        } catch (error) {
            console.error('Error fetching order detail:', error);
        }
    };

    return (
        <div>
            <h1>Order Detail</h1>
            {order ? (
                <div>
                    <p>Client Name: {order.clientName}</p>
                    <p>Items: {order.items}</p>
                    <p>Address: {order.address}</p>
                    <p>Status: {order.status}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default OrderDetail;

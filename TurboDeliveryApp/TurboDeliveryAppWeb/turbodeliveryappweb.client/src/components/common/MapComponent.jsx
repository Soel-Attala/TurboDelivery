import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import './MapComponent.css';

const MapComponent = ({ apiKey, orders }) => {
    const mapContainerStyle = {
        height: '600px', 
        width: '400px' 
    };

    const center = {
        lat: -34.6177,
        lng: -68.3301
    };

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const geocodeAddresses = async () => {
            const geocoder = new window.google.maps.Geocoder();

            try {
                const locations = await Promise.all(orders.map(order => {
                    return new Promise((resolve, reject) => {
                        geocoder.geocode({ address: order.address }, (results, status) => {
                            if (status === 'OK' && results[0]) {
                                resolve({
                                    id: order.id,
                                    position: results[0].geometry.location,
                                    description: order.description
                                });
                            } else {
                                reject(new Error(`Failed to geocode address: ${order.address}`));
                            }
                        });
                    });
                }));

                setLocations(locations);
            } catch (error) {
                setError(error.message);
                console.error('Error geocoding addresses:', error);
            } finally {
                setLoading(false);
            }
        };

        if (orders.length) {
            geocodeAddresses();
        }
    }, [orders]);

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={12}
                >
                    {locations.map(location => (
                        <Marker
                            key={location.id}
                            position={location.position}
                            label={location.description}
                        />
                    ))}
                </GoogleMap>
            </div>
        </LoadScript>
    );
};

MapComponent.propTypes = {
    apiKey: PropTypes.string.isRequired,
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            address: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
};

export default MapComponent;
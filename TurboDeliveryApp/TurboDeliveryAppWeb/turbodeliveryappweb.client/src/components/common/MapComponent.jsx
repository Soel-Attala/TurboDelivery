import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const MapComponent = ({ apiKey, orders }) => {
    const mapContainerStyle = {
        height: '400px',
        width: '100%'
    };

    const center = {
        lat: -34.6177,
        lng: -68.3301
    };

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const geocodeAddresses = async () => {
            const geocoder = new window.google.maps.Geocoder();

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
                            reject(new Error('Failed to geocode address'));
                        }
                    });
                });
            }));

            setLocations(locations);
        };

        if (orders.length) {
            geocodeAddresses();
        }
    }, [orders]);

    return (
        <LoadScript googleMapsApiKey={apiKey}>
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

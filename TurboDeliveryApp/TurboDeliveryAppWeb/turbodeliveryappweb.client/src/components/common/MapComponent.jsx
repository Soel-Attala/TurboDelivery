import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const MapComponent = ({ orders }) => {
    const [map, setMap] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = 'AIzaSyArfkZl9tkhUzoZJDMH-fkcBNlnErthRnE'; 

    // Función para cargar el script de Google Maps
    const loadGoogleMapsScript = useCallback(() => {
        const existingScript = document.getElementById('google-maps-script');
        if (existingScript) return; 

        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            setLoading(false);
            window.initMap = () => {
                const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: -34.6177, lng: -68.3301 },
                    zoom: 12
                });
                setMap(mapInstance);
            };
        };
        script.onerror = () => {
            setLoading(false);
            setError('Failed to load Google Maps API');
        };

        document.body.appendChild(script);

        return () => {
            const script = document.getElementById('google-maps-script');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [apiKey]);

    useEffect(() => {
        loadGoogleMapsScript();

        return () => {
            const script = document.getElementById('google-maps-script');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [loadGoogleMapsScript]);

    useEffect(() => {
        if (map && orders.length) {
            const geocoder = new window.google.maps.Geocoder();
            const geocodePromises = orders.map(order =>
                new Promise((resolve, reject) => {
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
                })
            );

            Promise.all(geocodePromises)
                .then(locations => {
                    console.log('Geocoded locations:', locations);
                    locations.forEach(location => {
                        new window.google.maps.Marker({
                            position: location.position,
                            map: map,
                            label: location.description
                        });
                    });
                })
                .catch(error => {
                    console.error('Error fetching locations:', error);
                });
        }
    }, [map, orders]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

// Definición de PropTypes
MapComponent.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
};

export default MapComponent;

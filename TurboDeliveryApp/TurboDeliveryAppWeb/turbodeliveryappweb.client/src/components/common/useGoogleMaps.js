
import { useEffect, useState } from 'react';

const useGoogleMaps = (apiKey, callback) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadScript = () => {
            const existingScript = document.getElementById('google-maps-script');
            if (existingScript) {
                if (callback) callback();
                return;
            }

            const script = document.createElement('script');
            script.id = 'google-maps-script';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                setLoading(false);
                if (callback) callback();
            };
            script.onerror = () => {
                setLoading(false);
                setError('Failed to load Google Maps API');
            };

            document.body.appendChild(script);
        };

        loadScript();

        return () => {
            const script = document.getElementById('google-maps-script');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [apiKey, callback]);

    return { loading, error };
};

export default useGoogleMaps;


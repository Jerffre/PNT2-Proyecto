import React, { createContext, useState, useEffect } from 'react';

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulamos la carga de notificaciones desde una API o fuente de datos
        const fetchNotifications = async () => {
            const data = [
                { id: 1, title: 'Latest movies', message: 'Check out the newest movies added to our collection.' },
                { id: 2, title: 'Recommended for you', message: 'We recommend these movies based on your viewing history.' },
                // Agrega más notificaciones según sea necesario
            ];
            setNotifications(data);
        };

        fetchNotifications();
    }, []);

    return (
        <NotificationsContext.Provider value={{ notifications }}>
            {children}
        </NotificationsContext.Provider>
    );
};
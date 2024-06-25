import React, { createContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      // Solicitar permisos de notificación
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        handleRegistrationError('Permission not granted to get push token for push notification!');
        return;
      }

      // Verificar y obtener el Project ID de la configuración de Expo
      try {
        console.log('Constants:', Constants);

        if (Constants.manifest) {
          console.log('Constants.manifest:', Constants.manifest);
        } else {
          console.error('Constants.manifest is null or undefined');
        }

        const projectId = Constants.manifest?.extra?.expo?.projectId;
        console.log('Project ID:', projectId);

        if (!projectId) {
          handleRegistrationError('Project ID not found in Constants.manifest.extra.expo');
          return;
        }

        // Obtener el token de notificación de Expo
        const { data: pushTokenString } = await Notifications.getExpoPushTokenAsync({
          projectId,
        });
        console.log(pushTokenString);
        setExpoPushToken(pushTokenString);
      } catch (e) {
        handleRegistrationError(`${e}`);
      }
    };

    registerForPushNotificationsAsync();

    // Limpiar suscripciones a notificaciones cuando se desmonte el componente
    return () => {};
  }, []);

  const handleRegistrationError = (errorMessage) => {
    alert(errorMessage);
    throw new Error(errorMessage);
  };

  return (
    <NotificationsContext.Provider value={{ expoPushToken }}>
      {children}
    </NotificationsContext.Provider>
  );
};

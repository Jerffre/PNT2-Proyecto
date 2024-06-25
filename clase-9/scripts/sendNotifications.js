const { ExpoPushToken } = require('expo-server-sdk');
const expo = require('expo-server-sdk').default;

// Inicializar el SDK de Expo
expo.isExpoPushToken = ExpoPushToken.isExpoPushToken;
expo.chunkPushNotifications = ExpoPushToken.chunkPushNotifications;
expo.chunkItems = ExpoPushToken.chunkItems;
const expoClient = new expo();

// Token de prueba (reemplázalo con el token real del dispositivo)
const token = 'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]';

// Datos de la notificación
const message = {
  to: token,
  sound: 'default',
  title: 'Notificación de Prueba',
  body: 'Esta es una prueba de notificación push',
  data: { anyData: 'additional data' },
};

// Enviar la notificación
expoClient.sendPushNotificationsAsync([message])
  .then(response => {
    console.log('Notificación enviada:', response);
  })
  .catch(error => {
    console.error('Error al enviar la notificación:', error);
  });
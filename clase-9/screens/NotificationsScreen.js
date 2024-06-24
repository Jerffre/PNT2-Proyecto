import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NotificationsContext } from '../context/NotificationsContext';
import { NotificationCard } from '../components/NotificationCard';

export const NotificationsScreen = () => {
    const { notifications } = useContext(NotificationsContext);

    const renderItem = ({ item }) => (
        <NotificationCard 
            title={item.title}
            message={item.message}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    flatListContainer: {
        paddingBottom: 20,
    }
});
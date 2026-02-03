import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useToast } from '../../contexts/ToastContext';

const NoInternet = () => {
    const [isConnected, setIsConnected] = useState(true);
    const [opacity] = useState(new Animated.Value(0));
    const { showToast } = useToast();

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            const connected = state.isConnected && state.isInternetReachable !== false;

            if (isConnected && !connected) {
                showToast("You are offline. Please check your internet.", "error");
            } else if (!isConnected && connected) {
                showToast("Internet restored!", "success");
            }

            setIsConnected(connected);

            Animated.timing(opacity, {
                toValue: connected ? 0 : 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });

        return () => unsubscribe();
    }, []);

    if (isConnected) return null;

    return (
        <Modal
            transparent
            visible={!isConnected}
            animationType="fade"
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="wifi-outline" size={50} color="#1978BD" />
                        <View style={styles.slash} />
                    </View>
                    <Text style={styles.title}>No Internet Connection</Text>
                    <Text style={styles.message}>
                        Please check your network settings and try again.
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => NetInfo.fetch()}
                    >
                        <Text style={styles.buttonText}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        width: '100%',
        maxWidth: 340,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    iconContainer: {
        marginBottom: 20,
        position: 'relative',
    },
    slash: {
        position: 'absolute',
        width: 60,
        height: 4,
        backgroundColor: '#1978BD',
        top: '50%',
        left: '50%',
        marginLeft: -30,
        marginTop: -2,
        transform: [{ rotate: '135deg' }],
        borderRadius: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1C1C1E',
        marginBottom: 10,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        color: '#8E8E93',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#1978BD',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        width: '100%',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default NoInternet;

// Categories.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CategoryButton = ({ text, image, colors, width, marginLeft, borderColor, onPress }) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.touchable, { width, marginLeft: marginLeft, borderColor: borderColor }]}
        >
            <LinearGradient
                colors={colors}
                style={[styles.gradient]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }}
            >
                <Image source={image} style={styles.icon} />
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        height: 40,
        borderRadius: 20,
        marginBottom: 10,
        borderWidth: 0.5,
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    text: {
        color: '#333333',
        fontSize: 14,
        marginLeft: 10,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default CategoryButton;

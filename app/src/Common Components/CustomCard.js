import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ht, vt } from '../utils/normalize';

const CustomCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topRightImagesContainer}>
                <Image
                    source={require('../Assets/vector1.png')}
                    style={styles.topRightImage }
                />
               
            </View>

            <View style={styles.content}>
                <View style={styles.imagePlaceholder}></View>

                {/* Text content */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Now share the Construction Sectors with your anyone and can save it as bookmark
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.updatedTime}>Updated | 06:30 AM</Text>
                    <TouchableOpacity style={styles.exploreButton}>
                    <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>
                </View>
                </View>

                {/* Explore Button */}
                
            </View>

            <View style={styles.bottomLeftImagesContainer}>
             
                <Image
                    source={require('../Assets/vector4.png')}
                    style={styles.bottomLeftImage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f0f3ff',
        borderRadius: 16,
        padding: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: vt(20)
        // top:
        // position: 'absolute',
    },
    topRightImagesContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        flexDirection: 'row',
    },
    topRightImage: {
        width: ht(64),
        height: vt(64),
        // backgroundColor: '#D1BCE3', // Approximate color
        // margin: 4,
        borderRadius: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    imagePlaceholder: {
        width: ht(84),
        height: vt(81),
        backgroundColor: '#FFC5C5',
        borderRadius: 8,
    },
    textContainer: {
        // width: 186,
        flex:1,
        paddingLeft: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: '800',
        color: '#060047',
        width:190
    },
    updatedTime: {
        fontSize: 12,
        color: '#060047',
        fontWeight:'400'
        // marginTop: 4,
    },
    exploreButton: {
        backgroundColor: '#995BFF',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf:'flex-end'
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    exploreButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bottomLeftImagesContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        // flexDirection: 'row',
    },
    bottomLeftImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: ht(20),
        height: vt(30),
        // backgroundColor: '#A1D2CE', // Approximate color
        // margin: 4,
        borderRadius: 16,
    },
});

export default CustomCard;

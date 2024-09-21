import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ht, vt } from '../utils/normalize';

const CustomCard2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topRightImagesContainer}>
                {/* Top right corner images */}
                {/* <View style={styles.topRightImage}></View> */}
                <Image
                    source={require('../Assets/vector5.png')}
                    style={styles.topRightImage }
                />
                {/* <Image
                    source={require('../Assets/vector2.png')}
                    style={styles.topRightImage}
                /> */}
                {/* <View style={styles.topRightImage}></View> */}
            </View>

            <View style={styles.content}>
                {/* Placeholder for the pink image */}
<Image
                    source={require('../Assets/face.png')}
                    style={styles.imagePlaceholder}
                /> 
                {/* Text content */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                    Rohit Singhania
                    </Text>
                    <View style={{alignItems:'center'}}>
                    <Text style={styles.updatedTime}>
                        Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                        </Text>
                        <TouchableOpacity style={styles.exploreButton}>
                    <Text style={styles.exploreButtonText}>Know More</Text>
                </TouchableOpacity>
                    
                </View>
                </View>

                {/* Explore Button */}
                
            </View>

            <View style={styles.bottomLeftImagesContainer}>
                {/* Bottom left corner images */}
                {/* <Image
                    source={require('../Assets/vector3.png')}
                    style={{ width: ht(20), height: vt(17) }}
                /> */}
                <Image
                    source={require('../Assets/vector6.png')}
                    style={styles.bottomLeftImage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFE7EA',
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
        width: ht(59),
        height: vt(58),
        // backgroundColor: '#D1BCE3',
        // margin: 4,
        borderTopRightRadius: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft:ht(10)
    },
    imagePlaceholder: {
        width: ht(58),
        height: vt(58),
        // backgroundColor: '#FFC5C5',
        // borderRadius: 8,
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
        color: 'black',
        fontWeight:'400',
        alignSelf:'flex-start',
        width:ht(220)

        // marginTop: 4,
    },
    exploreButton: {
        backgroundColor: '#CF76DD',
        borderRadius: 8,
        // paddingVertical: 8,
        // paddingHorizontal: 16,
        alignSelf:'flex-start',
        width:ht(66),
        height:vt(26),
        marginTop:vt(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    exploreButtonText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
        textAlign:'center'
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
        width: ht(41),
        height: vt(58),
        // backgroundColor: '#A1D2CE', // Approximate color
        // margin: 4,
        borderRadius: 16,
    },
});

export default CustomCard2;

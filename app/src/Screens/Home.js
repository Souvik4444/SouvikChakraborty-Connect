import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import {lin}
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { ht, vt } from '../utils/normalize';
import CategoryButton from '../Common Components/Categories';
import CustomCard from '../Common Components/CustomCard';
import { useNavigation } from '@react-navigation/native';




const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <LinearGradient
                colors={['#9766FF', '#F7F3FF']}
                style={[styles.LinearContainer]}

            >
                <View style={[styles.headerContainer]}>
                        <Image
                            source={require('../Assets/menu.png')}
                            style={{width:24,height:24}}
                        />

                        <Image
                            source={require('../Assets/logo.png')}
                            style={{ width: 33, height: 16 }}
                        />
                       
                    </View>
            </LinearGradient>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerView}>
                    <View>
                        <Text style={styles.headerText}>Welcome,</Text>

                        <Text style={styles.headerSubText}>Find Your</Text>
                        <Text style={styles.headerSubText}>Dream Sector!</Text>
                    </View>
                    <Image
                        source={require('../Assets/header.png')} // For local image
                        style={styles.headerImage}
                    />
                </View>

                <View style={styles.searchContainer}>
                    <Image
                        source={require('../Assets/search.png')}
                        style={styles.searchImage}
                    />
                    <TextInput style={styles.searchInput} placeholder="What are you looking for?" />
                </View>
            </View>

            {/* <ScrollView> */}

            {/* Categories */}
            <View style={styles.categories}>
                <View style={styles.h2}>
                    <Text style={styles.sectionTitle}>Explore Categories</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/dots.png')}
                            style={{ width: ht(20), height: vt(17) }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <CategoryButton
                        text={'Construction'}
                        colors={['#FFFFFF', '#CBE0FF']}
                        width={ht(134)}
                        image={require('../Assets/construction.png')}
                        borderColor={'#CBE0FF'}
                    />
                    <CategoryButton
                        text={'Entertainment'}
                        colors={['#FFFFFF', '#FFE9BE']}
                        width={ht(142)}
                        image={require('../Assets/film.png')}
                        marginLeft={ht(5)}
                        borderColor={'#FFE9BE'}
                    />
                </View>
                <View style={styles.categoryRow}>
                    <CategoryButton
                        text={'Pet Care'}
                        colors={['#FEF2F3', '#FFB0DD']}
                        width={ht(106)}
                        image={require('../Assets/pets.png')}
                        borderColor={'#FFB0DD'}
                        onPress={()=>{navigation.navigate('Sector')}}
                    // marginLeft={ht(5)}

                    />
                    <CategoryButton
                        text={'Home Care'}
                        colors={['#FFFFFF', '#C0FCF6']}
                        width={ht(123)}
                        image={require('../Assets/home.png')}
                        borderColor={'#C0FCF6'}
                        marginLeft={ht(5)}
                    />
                    <CategoryButton
                        text={'Events'}
                        colors={['#FFFFFF', '#FFC8AB']}
                        width={ht(95)}
                        image={require('../Assets/events.png')}
                        borderColor={'#FFC8AB'}
                        marginLeft={ht(5)}
                    />
                </View>
                <View style={styles.categoryRow}>
                    <CategoryButton
                        text={'Healthcare'}
                        colors={['#FEF2F3', '#CFCFFF']}
                        width={ht(106)}
                        image={require('../Assets/health.png')}
                        borderColor={'#CFCFFF'}
                    // marginLeft={ht(5)}
                    />
                </View>
            </View>

            {/* Popular Sectors */}
            <View style={styles.popularSectors}>
                <View style={styles.h2}>
                    <Text style={styles.sectionTitle}>Popular Sectors</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/dots.png')}
                            style={{ width: ht(20), height: vt(17) }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.sectorRow}>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/homeservice.png')}
                            style={{ width: ht(163), height: vt(140) }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/healthcare.png')}
                            style={{ width: ht(163), height: vt(140) }}
                        />
                    </TouchableOpacity>
                    {/* <View style={styles.sector}>
                        <Text>Home Services</Text>
                    </View>
                    <View style={styles.sector}>
                        <Text>Healthcare</Text>
                    </View> */}
                </View>
            </View>

             {/* Popular Sectors */}
             <View style={[styles.popularSectors]}>
                <View style={styles.h2}>
                    <Text style={styles.sectionTitle}>Recommended for you</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/dots.png')}
                            style={{ width: ht(20), height: vt(17) }}
                        />
                    </TouchableOpacity>
                </View>
               <CustomCard/>
               <CustomCard/>

            </View>

            {/* </ScrollView> */}
            </ScrollView>
        </SafeAreaView>
    );
};

// const ScreenTwo = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.headerTwo}>
//         <Text style={styles.headerText}>Hello,</Text>
//         <Text style={styles.headerSubText}>Fancy for a wash today?</Text>
//         <View style={styles.searchContainer}>
//           <TextInput style={styles.searchInput} placeholder="What are you looking for?" />
//         </View>
//       </View>

//       {/* Featured Banner */}
//       <View style={styles.banner}>
//         <Text style={styles.bannerText}>All-New Groomers in Town!</Text>
//         <Text style={styles.bannerSubText}>BOOK NOW! -20%</Text>
//       </View>

//       {/* Popular Services */}
//       <View style={styles.popularServices}>
//         <Text style={styles.sectionTitle}>Popular Services</Text>
//         <View style={styles.serviceRow}>
//           <View style={styles.service}>
//             <Text>Pet Grooming</Text>
//           </View>
//           <View style={styles.service}>
//             <Text>Pet Walking</Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // padding: 20,
    },
    LinearContainer: {
        width: '100%',
        height: vt(186),
        borderBottomRightRadius: 20,
        borderTBottomLeftRadius: 20,
    },
    header: {
        position: 'absolute',
        backgroundColor: '#EDFFCE',
        top: vt(94),
        height: vt(202),
        width: ht(296),
        paddingLeft: ht(24),
        // padding: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerImage: {
        width: ht(102),
        height: vt(72)
    },
    headerTwo: {
        position: 'absolute',
        top: vt(296),
        backgroundColor: '#FFEBEB',
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
        marginTop: '10%',
    },
    headerText: {
        marginTop: vt(25),
        fontSize: 16,
        fontWeight: '400',
        // marginBottom: vt(5)


    },
    headerSubText: {
        fontSize: 26,
        // marginTop: 5,
        fontWeight: '700'
    },
    searchContainer: {
        width: ht(248),
        height: vt(46),
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: ht(15),
        // justifyContent:'center',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: vt(40),
        paddingHorizontal: ht(24)
    },
    searchImage: {
        width: ht(20),
        height: vt(20),
        marginRight: ht(10)
    },
    searchInput: {
        backgroundColor: 'transparent',
        // borderRadius: 30,
        padding: 10,
        // shadowColor: '#000',
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
        // elevation: 3,
    },
    categories: {
        // position: 'absolute',
        // top: vt(40),
        paddingHorizontal: 24,
        // width:ht(400),
        marginTop:vt(130),
        // backgroundColor:'red',
        marginBottom: vt(20),
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '800',
        marginBottom: 10,
    },
    h2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vt(10)
    },
    categoryRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    category: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        padding: 10,
        width: '30%',
        alignItems: 'center',
    },
    popularSectors: {
        // position: 'absolute',
        // top: vt(507),
        // marginTop: vt(20),
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 24,
    },
    sectorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sector: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        padding: 20,
        width: '45%',
        alignItems: 'center',
    },
    banner: {
        backgroundColor: '#FFDDDD',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    bannerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bannerSubText: {
        fontSize: 16,
        color: '#FF6666',
        marginTop: 5,
    },
    popularServices: {
        marginBottom: 20,
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    service: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        padding: 20,
        width: '45%',
        alignItems: 'center',
    },
});

export default Home;

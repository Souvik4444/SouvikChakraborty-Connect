import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import {lin}
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { ht, vt } from '../utils/normalize';
import CategoryButton from '../Common Components/Categories'
import CustomCard from '../Common Components/CustomCard'
import CustomCard2 from '../Common Components/CustomCard2'
import ReviewComponent from '../Common Components/reviewCard'






const Sector = () => {
    return (
        <LinearGradient style={styles.container} colors={['#FFB5B1', '#CD7ED9']}
        >
            <SafeAreaView>
                <ScrollView>

                    <View style={[styles.headerContainer]}>
                        <Image
                            source={require('../Assets/menu2.png')}
                            style={styles.headerImage1}
                        />

                        <Image
                            source={require('../Assets/logo.png')}
                            style={{ width: 33, height: 16 }}
                        />
                        <Image
                            source={require('../Assets/bell.png')}
                            style={styles.headerImage1}
                        />
                    </View>
                    <View style={[styles.headerContainer, { marginTop: 0, paddingHorizontal: 0 }]}>
                        <View style={{ paddingLeft: 24 }}>
                            <Text style={styles.headerText}>Hello,</Text>
                            <Text style={styles.headerSubText}>Fancy for a wash today!</Text>
                            <Image
                                source={require('../Assets/group.png')}
                                style={{ width: ht(29.99), height: vt(40.5), marginTop: vt(10) }}
                            />
                        </View>
                        <Image
                            source={require('../Assets/group1.png')}
                            style={{ width: ht(28.94), height: vt(29.4), alignSelf: 'flex-start', marginTop: 16 }}
                        />
                    </View>

                    <View style={styles.ViewContainer}>
                        <View style={styles.petContainer}>
                            <Image
                                source={require('../Assets/dog1.png')}
                                style={{ width: ht(63), height: vt(83) }}
                            />
                            <Image
                                source={require('../Assets/dog2.png')}
                                style={{ width: ht(75), height: vt(90) }}
                            />
                            <Image
                                source={require('../Assets/dog3.png')}
                                style={{ width: ht(64), height: vt(75) }}
                            />
                        </View>
                        <View style={{ paddingHorizontal: ht(24) }}>

                            <View style={styles.searchContainer}>
                                <Image
                                    source={require('../Assets/search2.png')}
                                    style={styles.searchImage}
                                />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="What are you looking for?"
                                    placeholderTextColor={'#FF6694'}
                                />
                                <Image
                                    source={require('../Assets/icon.png')}
                                    style={styles.searchImage}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={{paddingHorizontal:ht(24),marginTop:vt(30)}}>
                        <Image
                                    source={require('../Assets/allnew.png')}
                                    style={{width:'100%',height:vt(127)}}
                                />
                        </TouchableOpacity>

                        {/* <ScrollView> */}

                        {/* Categories */}
                        <View style={styles.categories}>
                            <View style={styles.h2}>
                                <Text style={styles.sectionTitle}>Popular Services</Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/dots.png')}
                                        style={{ width: ht(20), height: vt(17) }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.categoryRow}>
                            <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/grooming.png')}
                                        style={{ width: ht(162), height: vt(193) }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/walking.png')}
                                        style={{ width: ht(162), height: vt(140) }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.categoryRow,{marginTop:vt(-16)}]}>
                            <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/dating.png')}
                                        style={{ width: ht(162), height: vt(140) }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/training.png')}
                                        style={{ width: ht(162), height: vt(193) }}
                                    />
                                </TouchableOpacity>
            
                            </View>
                            <View style={[styles.categoryRow,{marginTop:vt(-16)}]}>
                            <TouchableOpacity>
                            <Image
                                        source={require('../Assets/adoption.png')}
                                        style={{ width: ht(162), height: vt(193) }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Popular Sectors */}
                        <View style={styles.popularSectors}>
                            <View style={styles.h2}>
                                <Text style={styles.sectionTitle}>Service Providers</Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/dots.png')}
                                        style={{ width: ht(20), height: vt(17) }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                        <CustomCard2/>
                        <CustomCard2/>
                        <CustomCard2/>


                            </View>
                        </View>

                        {/* Popular Sectors */}
                        <View style={[styles.popularSectors]}>
                            <View style={styles.h2}>
                                <Text style={styles.sectionTitle}>Ratings</Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/dots.png')}
                                        style={{ width: ht(20), height: vt(17) }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.h2}>
                                <Text style={[styles.sectionTitle,{color:'#FF6694'}]}>13 Reviews</Text>
                                <View style={styles.h2}>
                                <Text 
                                style={[styles.sectionTitle,{marginBottom:0,paddingRight:6,color:'#FF6694'}]}>
                                    write a Review
                                    </Text>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../Assets/edit.png')}
                                        style={{ width: ht(20), height: vt(17) }}
                                    />
                                </TouchableOpacity>
                                </View>
                            </View>

                            <ReviewComponent
                            reviewerImage={require('../Assets/profilepic.png')}
                            />
                            <ReviewComponent
                            reviewerImage={require('../Assets/profilepic2.png')}
                            />
                            {/* <CustomCard />
                            <CustomCard /> */}

                        </View>

                        {/* </ScrollView> */}
                    </View>
                </ScrollView>
            </SafeAreaView>

        </LinearGradient>
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
    ViewContainer: {
        width: '100%',
        marginTop: vt(20),
        backgroundColor: 'white',
        // height: vt(186),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: vt(40),
        paddingHorizontal: ht(24)
    },
    petContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 24,
        marginTop: vt(-80)
    },
    headerImage1: { width: 24, height: 24 },
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
        marginTop: vt(16),
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
        // marginBottom: vt(5)


    },
    headerSubText: {
        fontSize: 16,
        // marginTop: 5,
        fontWeight: '500',
        color: 'black'
    },
    searchContainer: {
        width: '100%',
        alignSelf: 'center',
        // marginHorizontal:ht(24)
        height: vt(46),
        marginTop: 15,
        backgroundColor: '#FFEDF2',
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: ht(15),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchImage: {
        width: ht(20),
        height: vt(20),
        // marginRight: ht(10)
    },
    searchInput: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        // backgroundColor:"white",
        width: '60%',
        color: '#FF6694',
        fontWeight: '400'
        // alignSelf:'flex-start'
        // borderRadius: 30,
        // padding: 10,
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
        marginTop: vt(30),
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
        justifyContent: 'space-between',
        alignItems:'center'
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

export default Sector;

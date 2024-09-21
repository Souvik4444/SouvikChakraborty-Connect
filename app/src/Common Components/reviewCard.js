import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ht, vt } from '../utils/normalize';

// import { vt } from '../utils/normalize';

const ReviewComponent = ({ reviewerImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.text1}>Pooja Jain</Text>
        <Image 
          source={require('../Assets/bone.png')} // Add your line image
          style={styles.lineImage}
        />
        <Text style={styles.text2}>Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.</Text>
      </View>
      <Image 
        source={reviewerImage} // Dynamic reviewer image
        style={styles.reviewerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingLeft: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: vt(99),
    borderColor:'#FFCCD2',
    borderWidth:1,
    borderRadius:15,
    marginBottom:vt(15)
  },
  leftContainer: {
    flexDirection: 'column',
    paddingVertical: 12,
    justifyContent:'space-between',
    // paddingRight: 10
  },
  text1: {
    fontSize: 16,
    color: 'black',
    // marginBottom: 5,
    fontWeight:'700'
  },
  text2: {
    fontSize: 12,
    color: 'black',
    // marginBottom: 5,
    fontWeight:'400',
    width:220,
  },
  lineImage: {
    width: ht(108),
    height: vt(20),
    marginBottom: 5,
  },
  reviewerImage: {
    width: ht(100),
    height: vt(99),
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf:'center'
    // borderRadius: 25,
  },
});

export default ReviewComponent;

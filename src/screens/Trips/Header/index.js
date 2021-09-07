//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResponsiveText from "../../../components/ResponsiveText";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../../../theme/icons';
// create a component
const index = () => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
          <View>
          <Icon.bell size={25} color={'#000'} />
          </View>
          <View>
            <ResponsiveText style={{fontSize: 5, fontWeight: 'bold'}}>
                tralley
            </ResponsiveText>
          </View>
          <View>
          <Icon.IconSearch size={25} color={'#000'} />
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default index;

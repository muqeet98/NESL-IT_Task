import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containe1: {
        borderColor: 'green', width: wp('45%'), height: hp('40%')
    },

    container2:{
        borderColor: 'red', width: wp('45%'), height: hp('30%'), borderRadius: 20
    },

    imagebackground:{
         width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden'
    },
    rowcontainer:{
        flexDirection: 'row', justifyContent: 'space-between', margin: 10
     }

});

export default styles;
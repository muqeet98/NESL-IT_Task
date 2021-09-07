//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import saved from "../../assets/Icons/saved.png";
import ResponsiveText from "../../components/ResponsiveText";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../../theme/icons';
import Header from "../Trips/Header";
import { useSelector, useDispatch } from 'react-redux';
import { userData } from "../../redux/actions/userdataAction";
import styles from './styles';
// create a component
const index = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userdataReducer.userData)
    // const data2 = useSelector((state)=>state.saveReducer.saveData)
    const itemlist = (item) => {
        return (
            <View style={{ margin: 10 }}>

<View style={styles.container1}>
                    <View style={styles.container2}>
                        <ImageBackground
                            style={styles.imagebackground}
                            source={{
                                uri: item.item.image
                            }}
                        >
                            <View style={styles.rowcontainer}>
                                <View>
                                    <ResponsiveText style={{ fontSize: 4, color:'#fff' }}>{item.item.city_name}</ResponsiveText>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        data.push({
                                            isExpanded: false,
                                            city_name: item.item.city_name,
                                            price: item.item.price,
                                            county: item.item.county,
                                            hours: item.item.hours,
                                            image: item.item.image,
                                            selected: item.item.selected
                                        })
                                        dispatch(userData(data))
                                    }} >
                                        <Icon.saved size={25} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ResponsiveText style={{ fontSize: 5, fontWeight: 'bold' }}>
                            {item.item.city_name}
                        </ResponsiveText>
                        <ResponsiveText style={{ fontSize: 5, fontWeight: 'bold' }}>
                            {item.item.price}
                        </ResponsiveText>
                    </View>
                    <View>
                        <ResponsiveText style={{ fontSize: 4 }}>
                            {item.item.county}
                        </ResponsiveText>
                        <ResponsiveText style={{ fontSize: 4 }}>
                            {item.item.hours}
                        </ResponsiveText>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={data}
                renderItem={itemlist}
                numColumns={2}
            //   ItemSeparatorComponent={seperator}
            />

        </View>
    );
};

// define your styles

//make this component available to the app
export default index;

const CONTENT = [
    {
        isExpanded: false,
        city_name: 'Ancient Rome',
        price: '10$',
        county: 'spain',
        hours: '1Hour',
        image: 'https://dbcms.docubay.com/featured-images/1567509843-theheritageofkashmirimage01-256x256.jpg',
        selected: false
    },
    {
        isExpanded: false,
        city_name: 'Madrid',
        price: '15$',
        county: 'spain',
        hours: '2Hour',
        image: 'https://commenthol.github.io/leaflet-rastercoords/example/tiles/4/6/4.png',
        selected: false
    },

]

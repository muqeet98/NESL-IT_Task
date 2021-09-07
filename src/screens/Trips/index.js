//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import saved from "../../assets/Icons/saved.png";
import ResponsiveText from "../../components/ResponsiveText";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../../theme/icons';
import Header from "./Header";
import { useSelector, useDispatch } from 'react-redux';
import { userData } from "../../redux/actions/userdataAction";
import styles from "./styles";
// create a component
const index = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.userdataReducer.userData)
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
                data={CONTENT}
                renderItem={itemlist}
                numColumns={2}
            />

        </View>
    );
};


//make this component available to the app
export default index;

const CONTENT = [

    {
        isExpanded: false,
        city_name: 'Dehli',
        price: '15$',
        county: 'India',
        hours: '2Hour',
        image: 'https://commenthol.github.io/leaflet-rastercoords/example/tiles/4/6/4.png',
        selected: false
    },
    {
        isExpanded: false,
        city_name: 'Madrid',
        price: '15$',
        county: 'Pakistan',
        hours: '2Hour',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HIhyeJ3_6efM4MnUMuZBWE2yK6X1StnAdw&usqp=CAU',
        selected: false
    },
    {
        isExpanded: false,
        city_name: 'Islamabad',
        price: '15$',
        county: 'China',
        hours: '2Hour',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-eFX-YUs0q6KaURYRANTjw_y4cdm7oQHiA&usqp=CAU',
        selected: false
    },
    {
        isExpanded: false,
        city_name: 'Madrid',
        price: '15$',
        county: 'spain',
        hours: '2Hour',
        image: 'https://artbreeder.b-cdn.net/imgs/e8fc873295a5a2c678078c80.jpeg?width=256',
        selected: false
    },
    {
        isExpanded: false,
        city_name: 'Islamabad',
        price: '15$',
        county: 'Islamabad',
        hours: '2Hour',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Faisal_Mosque%2C_Islamabad_III.jpg/220px-Faisal_Mosque%2C_Islamabad_III.jpg',
        selected: false
    },
    {
        isExpanded: false,
        city_name: 'Ancient Rome',
        price: '10$',
        county: 'spain',
        hours: '1Hour',
        image: 'https://dbcms.docubay.com/featured-images/1567509843-theheritageofkashmirimage01-256x256.jpg',
        selected: false
    },
]

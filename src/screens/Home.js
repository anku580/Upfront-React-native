import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    View,
    Image,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Promotion from '../components/Promotion';
import DealCard from '../components/DealCard';
import DishCard from '../components/DishCard';
import AddButton from '../components/AddButton'
// import Tab from './Tabs';
import StarRating from 'react-native-star-rating'

const { height, width } = Dimensions.get('window');

export default class Home extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    {/* <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Promotions
                    </Text>
                        </View>
                    </ScrollView> */}
                </View>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ height: 180, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Promotion imageUri={require('../assets/promotion_1.png')}
                            />
                            <Promotion imageUri={require('../assets/promotion_2.png')}
                            />
                            <Promotion imageUri={require('../assets/promotion_1.png')}
                            />
                        </ScrollView>
                    </View>
                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>
                                TOP
                        </Text>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>
                                DEALS TODAY
                        </Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <DealCard imageUri={require('../assets/dish_1.png')} width={width} dishName="Choco Lava" dishPrice="124" location="Hot Choclate, Indiranagar"></DealCard>

                            <DealCard imageUri={require('../assets/dish_2.png')} width={width} dishName="Choco Lava" dishPrice="124" location="Hot Choclate, Indiranagar"></DealCard>

                            <DealCard imageUri={require('../assets/dish_1.png')} width={width} dishName="Choco Lava" dishPrice="124" location="Hot Choclate, Indiranagar"></DealCard>

                            <DealCard imageUri={require('../assets/dish_2.png')} width={width} dishName="Choco Lava" dishPrice="124" location="Hot Choclate, Indiranagar"></DealCard>
                        </ScrollView>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', flex: 1 }}>
                            <Text style={{ fontSize: 23, color: '#000000', flexDirection: 'column', flex: 1 }}>
                                Burma
                            </Text>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-end' }} >
                                <Text style={{
                                    backgroundColor: '#F1EFEF', color: 'black', fontSize: 12,
                                    height: 24, width: '50%', textAlign: 'center', borderRadius: 50,
                                    paddingTop: 3
                                }}>See More</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <DishCard imageUri={require('../assets/dish_1.png')} style={{ marginRight: 10 }}  restaurantName="Starbucks" width={width} dishName="Bluberry Cake" price="124"></DishCard>

                            <DishCard imageUri={require('../assets/dish_1.png')} width={width} restaurantName="Starbucks" dishName="Bluberry Cake" price="124"></DishCard>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', flex: 1 }}>
                            <Text style={{ fontSize: 23, color: '#000000', flexDirection: 'column', flex: 1 }}>
                                North Indian
                            </Text>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-end' }} >
                                <Text style={{
                                    backgroundColor: '#F1EFEF', color: 'black', fontSize: 12,
                                    height: 24, width: '50%', textAlign: 'center', borderRadius: 50,
                                    paddingTop: 3
                                }}>See More</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <DishCard imageUri={require('../assets/dish_2.png')} style={{ marginRight: 10 }} width={width} restaurantName="Starbucks" dishName="Bluberry Cake" price="124"></DishCard>

                            <DishCard imageUri={require('../assets/dish_1.png')} width={width} restaurantName="Starbucks" dishName="Bluberry Cake" price="124"></DishCard>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import AddButton from './AddButton';

class DishCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    ToggleClick = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <View style={{ marginLeft: 10, width: this.props.width / 2 - 15, height: this.props.width / 1.5, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 10 }}
                        source={this.props.imageUri} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>{this.props.dishName}</Text>
                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Sambar</Text> */}
                    <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                                <Text style={{fontSize : 10}}>{this.props.restaurantName}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                                <Image source={require('../assets/star.png')} style={{ height: 16, width: 17 }} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                                <Image source={require('../assets/clock.png')} style={{ height: 16, width: 17 }} />
                            </View>
                        </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{ fontSize: 10, color: 'black', flexDirection: 'row', textDecorationLine: 'line-through' }}>₹ 140</Text>
                            <Text style={{ fontSize: 15, color: 'black', flexDirection: 'row' }}>₹ {this.props.price}</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Text style={{ fontSize: 10, color: 'black', flexDirection: 'row' }}></Text>
                            {this.state.show ? <TouchableOpacity onPress={this.ToggleClick}>
                                <Text style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#F1EFEF', color: 'black', fontSize: 12,
                                    height: 24, width: '100%', textAlign: 'center', borderRadius: 50,
                                    paddingTop: 3
                                }}>Add</Text>
                            </TouchableOpacity> :
                                <AddButton></AddButton>
                            }

                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

export default DishCard;

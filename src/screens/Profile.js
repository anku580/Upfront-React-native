import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

class Profile extends Component {
    
    render() {
        return(
            <View style={{ flexDirection: 'row'}}>            
                <View style={{ flexDirection: 'column', flex: 1}}>
                    <Image source={require('../assets/dish_1.png')} style={{ height: 150, width: 150, borderRadius: 150, justifyContent: 'center'}} />
                </View>
            </View>
        )
    }
}

export default Profile;
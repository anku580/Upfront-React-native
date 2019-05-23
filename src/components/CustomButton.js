import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

class CustomButton extends Component {
    
    render() {
        return(
            <View style={{ flexDirection : 'row'}}>
                 <Text style={{
                            backgroundColor: '#FF9500', color: 'white', fontSize: 15,
                            height: 40, width: this.props.width, textAlign: 'center', borderRadius: 50, paddingTop: 10
                        }}>{this.props.text}</Text>
            </View>
        )
    }
}

export default CustomButton;
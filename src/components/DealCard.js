import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

class DealCard extends Component {
    
    render() {
        return(
            <View style={{ flexDirection: 'row', marginLeft: 10, width: this.props.width / 2, height: this.props.width / 4, borderWidth: 0.5, borderColor: '#dddddd', borderRadius: 10 }}>            
                <View style={{ flexDirection: 'column', flex: 1}}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', marginLeft : 10, marginTop: 10, marginBottom : 10}}
                        source={this.props.imageUri} />
                </View>
                <View style={{ flexDirection: 'column', flex: 1,marginLeft : 10, marginTop: 10, marginBottom : 10}}>
                    <Text style={{ paddingLeft: 5, fontSize: 14, fontWeight: '400', color: '#000000' }}>{this.props.dishName}</Text>
                    <Text style={{ paddingLeft: 5, fontSize: 20, fontWeight: '800', color: '#16D900' }}>₹ {this.props.dishPrice}</Text>
                    <Text style={{ paddingLeft: 5, fontSize: 10, fontWeight: '400', color: '#000000' }}>{this.props.location}</Text>
                </View>
            </View>
        )
    }
}

export default DealCard;
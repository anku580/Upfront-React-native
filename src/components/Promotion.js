import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Promotion extends Component {
    render() {
        return (
            <View style={{ height: 180, width: 180, marginLeft: 10, borderWidth: 0.5, borderRadius: 20, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }}
                    />
                </View>
                {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View> */}
            </View>
        );
    }
}
export default Promotion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
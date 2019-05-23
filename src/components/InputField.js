    
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

class InputField extends Component {
    
    render() {
        return(
            <View style={{ flexDirection: 'row', height: 70 }}>
                <TextInput
                    style={styles.inputbox}
                    keyboardType={this.props.keyboardType}
                    placeholder={this.props.placeholder}
                >
                </TextInput>
            </View>
        );
    }
}
// const renderField = ({ placeholder, keyboardType, name }) => {
//     return (
//         );
// };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    inputbox: {
        borderRadius: 50,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        height: 50,
        width: '100%',
        paddingLeft: 20
    },
});
export default InputField;
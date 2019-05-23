import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import BottomSheet from '../components/Bottomsheet';
import InputField from '../components/InputField';
import CustomButtom from '../components/CustomButton';


const SignupComponent = props => {
    const { handleSubmit } = props;
    const { navigate } = this.props.navigation;
    return (

        <View style={styles.container}>

            <View style={styles.logoCenter}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>

            <View style={styles.nested_container}>
                <View>
                    <Text style={styles.text}>
                        Signup
                    </Text>
                </View>
                <View style={styles.topspace}>

                </View>
                <View>
                    <InputField keyboardType="default" placeholder="Name" name="Name" />
                    <InputField keyboardType="email-address" placeholder="abc@upfront" name="Email" />

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 1 }}>

                            <InputField keyboardType="phone-pad" placeholder="+91" name="Country_code" />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 4 }}>

                            <InputField keyboardType="phone-pad" placeholder="98XXXXXXXX" name="Mobile" />
                        </View>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <View>
                            <CustomButtom text='Submit' width={'100%'} />
                        </View>
                    </TouchableOpacity>
                    <BottomSheet />
                </View>
                <View style={styles.textcenter}>
                    <Text style={{ fontSize: 15 }}>Already a user?</Text>
                    <TouchableOpacity onPress={()=> { navigate('login')}}>
                            <Text>  
                                Login
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}



// const SignupForm = reduxForm({
//     form: 'signup'
// })(SignupComponent);

export default SignupComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    logoCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textcenter: {
        marginTop: 20,
        alignItems: 'center',
        fontSize: 20
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
    topspace: {
        paddingTop: 40
    },
    logo: {
        height: 60,
        width: 60,
    },
    text: {
        fontSize: 30,
        paddingTop: 10,
        fontFamily: 'Futura',
        color: '#FF9500'
    },
    headerText: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nested_container: {
        padding: 30,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    button: {
        color: 'black'
    }
});


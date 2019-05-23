import React, { Component } from 'react';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
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

const options = [
]  

class BottomSheet extends React.Component {

    constructor() {
        super();
        this.showActionSheet = this.showActionSheet.bind(this);
    }

    showActionSheet = () => {
        this.ActionSheet.show()
      }
      render() {
        return (
          <View>
            <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
            <ActionSheet styles={{titleBox: { height: 200 }}}
              ref={o => this.ActionSheet = o}
              title={<Text style={{color: '#000', fontSize: 24, margin: 40}}>Please verify your email to proceed with login</Text>}
              options={options}
              cancelButtonIndex={0}
              onPress={(index) => { /* do something */ }}
            />
          </View>
        )
    }
}

// const bottomSheetObj = new BottomSheet();

export default BottomSheet;
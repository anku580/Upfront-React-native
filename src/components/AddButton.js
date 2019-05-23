import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity
} from "react-native";

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row', backgroundColor: '#F1EFEF',
                borderRadius: 50, fontSize: 12,
                height: 24
            }}>
                <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.DecreaseItem}>
                        <Text style={{
                            color: 'black', fontSize: 20,
                            height: 50, width: '100%', textAlign: 'center', borderRadius: 50, paddingTop: 10
                        }}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black'}}>
                        {this.state.clicks}
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.IncrementItem}>
                        <Text style={{
                            color: 'black', fontSize: 20,
                            height: 50, width: '100%', textAlign: 'center', borderRadius: 50, paddingTop: 10
                        }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddButton;
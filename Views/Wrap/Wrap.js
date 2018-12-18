import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Image from 'react-native-web/dist/exports/Image';


class Wrap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        this.data = [
            {
                backgroundColor: '#F00',
                text: '红',
            },
            {
                backgroundColor: '#0F0',
                text: '绿',
            },
            {
                backgroundColor: '#00F',
                text: '蓝',
            },
        ];
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: 344 }}>
                    <View
                        style={{ borderRadius: 5 }}
                        data={this.data}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{ backgroundColor: item.backgroundColor, width: 344, height: 186, borderRadius: 5 }}
                                >
                                    <Text>{item.text}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}
export default Wrap;

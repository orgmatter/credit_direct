import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class PageSelector extends Component {
    
    componentWillReceiveProps(nextProps) {
        this.scrollView.scrollTo({x: nextProps.currentIndex * 40, y: 0, animated: true});
    }
    
    render() {
        return (
            <ScrollView
                ref={ref => this.scrollView = ref}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                overScrollMode={'never'}
            >

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {renderBubbles(this.props.labels, this.props.currentIndex, this.props.onBubblePress, this.props.arrowIcon)}
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        {renderLabels(this.props.labels)}
                    </View>

                </View>
            </ScrollView>
        );
    }
}


const renderBubbles = (array, activeIndex, handler, arrowIcon) => {

    let output = [];

    array.map((item, index, array) => {

        output.push(
            <TouchableWithoutFeedback key={item} onPress={() => { handler(index) }}>
                <View style={{ width: 90, alignItems: 'center' }}>
                    <View style={{ height: 38, width: 38, borderRadius: 35, backgroundColor: index == activeIndex ? 'rgba(255,183,23,0.25)' : 'rgba(255,183,23,0)', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 24, width: 24, borderRadius: 21, backgroundColor: index <= activeIndex ? 'rgba(255,183,23,1)' : '#41536e', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', fontSize: 14 }}>{index + 1}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );

        if (index < array.length - 1) {
            output.push(
                <View key={item + '->'} style={{ width: 26, height: 26, justifyContent: 'center', alignItems: 'center' }}>
                    {arrowIcon}
                </View>
            );
        }
    });

    return output;
}

const renderLabels = (array) => {
    let output = [];

    array.map((item, index, array) => {

        output.push(
            <View key={item} style={{ justifyContent: 'center', alignItems: 'center', width: 90 }}>
                <Text style={{ color: '#ffffff', textAlign: 'center', lineHeight: 20, fontSize: 13 }}>{item}</Text>
            </View>
        );

        if (index < array.length - 1) {
            output.push(
                <View key={item + '_spacer'} style={{ width: 26, height: 26 }}></View>
            );
        }
    });

    return output;
}


export default PageSelector;
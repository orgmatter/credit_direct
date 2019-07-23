import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

class TipScrollview extends Component {

    constructor() {
        super();

        this.onScroll = this.onScroll.bind(this);

        this.state = {
            showTopTip: false,
            showBottomTip: true
        }

    }

    render() {
        return (
            <View style={[{ flex: 1 }, { ...this.props.style }]}>


                <View style={{ height: 25, justifyContent: 'flex-start', alignItems: 'center' }}>
                    {this.state.showTopTip && (
                        <View>
                            {this.props.topIndicator}
                        </View>
                    )}
                </View>


                <ScrollView
                    overScrollMode='never'
                    style={{ flex: 1 }}
                    onScroll={this.onScroll}
                >
                    {this.props.children}
                </ScrollView>


                <View style={{ height: 25, justifyContent: 'flex-end', alignItems: 'center' }}>
                    {this.state.showBottomTip && (
                        <View>
                            {this.props.bottomIndicator}
                        </View>
                    )}
                </View>



            </View>
        );
    }


    onScroll(evt) {
        let { layoutMeasurement, contentOffset, contentSize } = evt.nativeEvent;

        let percentageScrolledTop = (contentOffset.y / contentSize.height) * 100;
        let percentageScrolledBot = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

        let showTopTip = true;
        let showBottomTip = true;

        if (percentageScrolledTop < 10) {
            showTopTip = false
        }

        if (percentageScrolledBot > 90) {
            showBottomTip = false;
        }


        this.setState({
            showTopTip: showTopTip,
            showBottomTip: showBottomTip
        })

    }

}

export default TipScrollview;
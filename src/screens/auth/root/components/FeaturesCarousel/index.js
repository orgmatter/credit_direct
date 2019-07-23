import React, { Component } from 'react';

import { View, Text, Image, Dimensions, Modal } from 'react-native';

import AppIntroSlider from '../../../../../components/AppIntroSlider/AppIntroSlider.js';

import { Constants } from 'expo';

const entries = [
    {
        key: '1',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        titleTop: 'Flexible',
        titleBottom: 'Payment Plan',
        descriptionTop: 'Spread your payment over a period of',
        descriptionBottom: 'months, making it easy on your pocket',
        image_index: 0
    },
    {
        key: '2',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        titleTop: 'Low',
        titleBottom: 'Interest Rates',
        descriptionTop: 'Spread your payment over a period of',
        descriptionBottom: 'months, making it easy on your pocket',
        image_index: 1
    },
    {
        key: '3',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        titleTop: 'Loans & Investments',
        titleBottom: 'for Everyone',
        descriptionTop: 'Spread your payment over a period of',
        descriptionBottom: 'months, making it easy on your pocket',
        image_index: 2
    },
]


class FeaturesScreen extends Component {

    constructor() {
        super();

        this.state = {
            activeSlide: 0

        }

    }

    render() {

        if(!this.props.show) {
            return null;
        }

        let height = Dimensions.get('window').height ;

        let deviceHeight = Dimensions.get('window').height - Constants.statusBarHeight;
        let deviceWidth = Dimensions.get('window').width;

        let imageHeight = deviceWidth * 1.48;

        let curveImageHeight = deviceWidth * 0.73;

        let curveImageHeightOffset = curveImageHeight * (1 - 0.72);

        let curveImageTop = imageHeight - curveImageHeightOffset;


        let curveImageVisibleHeight = deviceHeight - curveImageTop;
        if (curveImageVisibleHeight < 255) {
            curveImageTop = deviceHeight - 255;
        }

        let textContainerTop = curveImageTop + curveImageHeightOffset;

        let sizeData = {
            curveImageTop: curveImageTop,
            textContainerTop: textContainerTop
        }

        return (
            // <Modal animationType={"fade"} transparent={false} onRequestClose={() => { }} visible={this.props.show} style={{backgroundColor: 'yellow'}}>

                <View style={{ height: height,  position: 'absolute', top: -Constants.statusBarHeight, left: 0, right: 0, backgroundColor: '#1D3252', zIndex: 9999999 }}>

                    <AppIntroSlider
                        slides={entries}
                        onDone={this.props.onDone}
                        renderItem={(item) => {
                            return renderEntry(item, sizeData)
                        }}

                        paginationContainerStyle={{ height: 50 }}
                        dotStyle={{ width: 13, height: 6, backgroundColor: 'rgba(178, 199, 219, 0.34)', borderRadius: 8, marginHorizontal: 3 }}
                        activeDotStyle={{ backgroundColor: '#fff', width: 24, height: 6 }}
                    />


                </View>

            // </Modal>
        );
    }
}

const renderEntry = (data, sizeData) => {

    let images = [
        <Image source={require('../../../../../../assets/screens/login/intro_1.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.48, backgroundColor: 'rgba(32, 54, 89, 1)', alignSelf: 'stretch' }} />,
        <Image source={require('../../../../../../assets/screens/login/intro_2.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.48, backgroundColor: 'rgba(32, 54, 89, 1)', alignSelf: 'stretch' }} />,
        <Image source={require('../../../../../../assets/screens/login/intro_3.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 1.48, backgroundColor: 'rgba(32, 54, 89, 1)', alignSelf: 'stretch' }} />
    ];

    return (
        <View style={{ backgroundColor: '#1d3252', flex: 1, justifyContent: 'flex-start' }}>

            {images[data.image_index]}

            <View style={{ marginLeft: 20, position: 'absolute', top: sizeData.textContainerTop, zIndex: 1 }}>
                <Text style={{ color: '#ffffff', fontSize: 26, lineHeight: 28, fontWeight: 'bold', marginBottom: 5 }}>{data.titleTop}</Text>
                <Text style={{ color: '#ffffff', fontSize: 26, lineHeight: 28, fontWeight: 'bold' }}>{data.titleBottom}</Text>

                <View style={{ marginTop: 12 }}>
                    <Text style={{ color: '#ffffff', fontSize: 16 }}>{data.descriptionTop}</Text>
                    <Text style={{ color: '#ffffff', fontSize: 16 }}>{data.descriptionBottom}</Text>
                </View>

            </View>



            <View style={{ left: 0, top: sizeData.curveImageTop, right: 0, position: 'absolute', }}>
                <Image source={require('../../../../../../assets/screens/login/features_bottom.png')} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width * 0.73 }} />
            </View>

            <View></View>
        </View>
    );
}


export default FeaturesScreen;
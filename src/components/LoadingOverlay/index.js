import React, { Component } from 'react';

import { View, Image, Animated, Text } from 'react-native';

class LoadingOverlay extends Component {

    constructor() {
        super();

        this.state = {
            opacity: new Animated.Value(1)
        }

        this.animateImage = this.animateImage.bind(this);
    }



    render() {

        if(this.props.show === false) {
            return null;
        }

        return (
            <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.95)', zIndex: 200 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ backgroundColor: 'rgba(255,255,255,0)', width: 70, height: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 23 }}>
                        <Animated.Image
                            onLoad={this.animateImage}
                            source={require('../../../assets/logo.png')}
                            style={{
                                position: 'absolute',
                                height: 32,
                                width: 32 * 1.49,
                                opacity: this.state.opacity,
                                transform: [
                                    {
                                        scale: this.state.opacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1.7, 1]
                                        })
                                    }
                                ]
                            }}
                        />

                        <Image
                            source={require('../../../assets/logo.png')}
                            style={{ position: 'absolute', height: 32, width: 32 * 1.49, opacity: 1 }}
                        />
                    </View>


                    <View style={{ position: 'absolute', bottom: 0, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#aaa', fontSize: 12 }}>Processing</Text>
                    </View>

                </View>

            </View>
        );
    }

    animateImage() { 
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            this.setState({ opacity: new Animated.Value(1) }, this.animateImage)
        });
    }
}

export default LoadingOverlay;
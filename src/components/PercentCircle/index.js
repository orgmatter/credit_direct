import React, { Component } from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';

class PercentCircle extends Component {

    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', width: this.props.size, height: this.props.size }}>
                <Svg height={this.props.size} width={this.props.size} viewBox='0 0 36 36'>


                    <Svg.Path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="5"
                        fill='none'
                        strokeDasharray='100 100'
                    />

                    <Svg.Path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke={this.props.fillColor}
                        strokeWidth="5"
                        fill='none'
                        strokeDasharray={this.props.percent + ' 100'}
                    />
                </Svg>


            </View>
        )
    }
}

export default PercentCircle;
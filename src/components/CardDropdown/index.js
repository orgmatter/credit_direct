import React, { Component } from 'react';

import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';



class CardDropdown extends Component {
    render() {

        let rotate = '0deg';
        if(this.props.showOptions) {
            rotate = '90deg';
        }

        return (
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', flex: 1, borderRadius: 4 }}>


                <TouchableWithoutFeedback onPress={this.props.onToggleHandler}>

                    <View style={{ height: 80, paddingLeft: 15, paddingRight: 15, flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 48, width: 48, borderRadius: 50, backgroundColor: 'rgba(255, 255, 255, 0.14)', marginRight: 30 }}>
                            {this.props.icon}
                        </View>

                        <Text style={{ flex: 1, fontSize: 17, color: '#FFFFFF', fontWeight: 'bold' }}>{this.props.title}</Text>


                        <Image source={require('../../../assets/components/CardDropdown/arrow.png')} style={{ height: 13, width: 13 * 0.61, transform: [{ rotate: rotate}] }} />

                    </View>

                </TouchableWithoutFeedback>




                {this.props.showOptions && (

                    <View style={{ marginLeft: 40, paddingBottom: 20, marginRight: 20 }}>

                        {this.props.options.map((item, index) => {
                            return (

                                <TouchableWithoutFeedback key={index} onPress={() => { this.props.onSelectHandler(item.value) }}>
                                    <View key={item.value} style={{ flexDirection: 'row', alignItems: 'center', marginTop: index == 0 ? 10 : 25 }}>

                                        {this.props.activeValue == item.value && (
                                            <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#61DADA' }}>
                                                <Image source={require('../../../assets/components/CardDropdown/checked.png')} style={{ width: 20, height: 20 }} tintColor={'#364760'} />
                                            </View>
                                        )}


                                        {this.props.activeValue != item.value && (
                                            <View style={{ width: 30, height: 30, borderRadius: 50, borderWidth: 1, borderColor: '#FFFFFF' }}>
                                            </View>
                                        )}

                                        <Text NumberOfLines={3} style={{ marginLeft: 15, fontSize: 15, color: '#FFFFFF' }}>{item.label}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })}

                    </View>

                )}



            </View>
        );
    }
}

export default CardDropdown;
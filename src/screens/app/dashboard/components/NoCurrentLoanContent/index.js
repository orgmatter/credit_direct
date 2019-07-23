import React, { Component } from 'react';

import { Text, View, Image, ActivityIndicator } from 'react-native';

import Button from '../../../../../components/Button/index.js';

import SharedStyles from '../../../../../styles/SharedStyles.js';

class NoLoanContent extends Component {

    constructor() {
        super();

        this.renderButtonContent = this.renderButtonContent.bind(this);
    }

    render() {

        let content = null;

        return (
            <View style={{ flex: 1, backgroundColor: '#203659', paddingTop: 20 }}>



                <View style={{ paddingLeft: 20, height: 25 }}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Overview</Text>
                </View>

                {this.renderMidContent()}

                <View style={{ justifyContent: 'flex-end', padding: 20, height: 60 }}>
                    {this.renderButtonContent()}
                </View>

            </View>
        );
    }


    renderMidContent() {
        let { loading, error } = this.props;

        if (loading) {

            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={{ marginLeft: 10, color: '#fff', fontSize: 18 }}>Fetching Loan Status</Text>
                    </View>
                </View>
            );

        } else if (!loading && error) {

            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    < Image source={require('../../../../../../assets/screens/dashboard/cards_error.png')} style={{ width: 70, height: 70 }} tintColor={'#fff'} />
                    <Text style={{ color: '#F3F7FA', fontSize: 14, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Couldn't Get Loan Status</Text>
                    <Text style={{ color: '#d9dfe6', fontSize: 14 }}>We could not retrieve the status of</Text>
                    <Text style={{ color: '#d9dfe6', fontSize: 14 }}>your loan.Please try again by hitting refresh below.</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                < Image source={require('../../../../../../assets/screens/dashboard/cards.png')} style={{ width: 120, height: 120 * 1.2 }} />
                <Text style={{ color: '#F3F7FA', fontSize: 14, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>No Active Loans</Text>
                <Text style={{ color: '#d9dfe6', fontSize: 14 }}>There are no active loans running</Text>
                <Text style={{ color: '#d9dfe6', fontSize: 14 }}>at the moment. Why not get started now?</Text>
            </View>
        );
    }

    renderButtonContent() {
        let { loading, error } = this.props;

        if (loading) {

            return null;

        } else if (!loading && error) {

            return (
                <Button
                    containerStyle={SharedStyles.button.containerStyle}
                    textStyle={SharedStyles.button.textStyle}
                    colors={['#097fbd', '#43ace2']}
                    text={'Refresh'}
                    onPress={() => { }}
                />
            );
        }

        return (
            <Button
                containerStyle={SharedStyles.button.containerStyle}
                textStyle={SharedStyles.button.textStyle}
                colors={['#097fbd', '#43ace2']}
                text={'Request a new Loan'}
                onPress={() => { this.props.navigation.navigate('NewLoan') }}
            />
        );

    }
}

export default NoLoanContent;

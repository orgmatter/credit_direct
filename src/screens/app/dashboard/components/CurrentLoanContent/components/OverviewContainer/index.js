import React, { Component } from 'react';
import { View } from 'react-native';
import AppIntroSlider from '../../../../../../../components/AppIntroSlider/AppIntroSlider.js';

import ArrowButton from '../../../../../../../components/ArrowButton/index.js';

import OverviewPane from './components/OverviewPane/index.js';
import RepaymentPane from './components/RepaymentsPane/index.js';

const entries = [
    {
        key: 'OverviewPane',
        component: OverviewPane
    },
    {
        key: 'RepaymentPane',
        component: RepaymentPane
    }
]

class OverviewContainer extends Component {

    constructor() {
        super();

        this.viewDetailsButtonHandler = this.viewDetailsButtonHandler.bind(this);
    }

    render() {

        return (
            <View style={{ backgroundColor: '#203659' }}>
                <View style={{ height: 300, backgroundColor: '' }}>
                    <View style={{ position: 'absolute', top: 0, left: 0, height: 285, width: 30, backgroundColor: 'rgba(0,0,0,0)', zIndex: 999 }}></View>
                    <AppIntroSlider
                        slides={entries}
                        renderItem={(item) => {
                            return this.renderItem(item)
                        }}
                        dotStyle={{ width: 7, height: 7, backgroundColor: '#FFFFFF', borderRadius: 8, marginHorizontal: 3 }}
                        activeDotStyle={{ backgroundColor: '#61DADA', width: 7, height: 7 }}
                        paginationContainerStyle={{ height: 60 }}

                        renderNextButton={() => { return null }}
                        renderDoneButton={() => { return null }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.15)', height: 60 }}>
                    <View style={{ marginRight: 15 }}>
                        <ArrowButton
                            text={'Top-up Loan'}
                            textStyle={{ color: '#61DADA' }}
                            containerStyle={{height: 32}}
                        />
                    </View>

                    <ArrowButton
                        text={'View Details'}
                        textStyle={{ color: '#FFFFFF' }}
                        onPress={this.viewDetailsButtonHandler}
                        containerStyle={{height: 32}}
                    />
                </View>

            </View>
        );
    }

    renderItem(item) {
        let PaneComponent = item.component;

        return <PaneComponent />;
    }

    viewDetailsButtonHandler() {
        this.props.navigation.navigate('LoanDetails')
    }
}

export default OverviewContainer;
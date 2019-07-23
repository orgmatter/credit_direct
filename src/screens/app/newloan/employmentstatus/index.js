import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Navbar from '../../../../components/Navbar/index.js';
import Button from '../../../../components/Button/index.js';
import CardDropdown from '../../../../components/CardDropdown/index.js';
import SharedStyles from '../../../../styles/SharedStyles.js';

import {employmentStatusTypes, setEmploymentStatusType} from '../../../../store/actions/NewLoanRequestActions.js';
import { productsByType } from '../../../../store/actions/ProductsByTypeActions.js';

const professionalOptions = [
    { label: 'Working for the Government', value: employmentStatusTypes.PROFESSIONAL_GOVERNMENT },
    { label: 'Working for a Private Company', value: employmentStatusTypes.PROFESSIONAL_PRIVATE },
];

const corperOptions = [
    { label: 'Working for the Government', value: '3' },
    { label: 'Working for a Private Company', value: '4' },
];

class EmploymentStatusScreen extends Component {

    constructor() {
        super();

        this.state = {
            showProfessionalOptions: false,
            activeProfessionalOption: null,
        }

        this.toggleShowProfessionalOptions = this.toggleShowProfessionalOptions.bind(this);
        this.selectActiveProfessionalOption = this.selectActiveProfessionalOption.bind(this);

        this.toggleShowCorperOptions = this.toggleShowCorperOptions.bind(this);

        this.submitHandler = this.submitHandler.bind(this);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#203659' }}>

                <Navbar title={'Request New Loan'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.screenProps.parentNavigator.goBack() }}
                    containerStyle={{}}
                />

                <View style={{ marginTop: 50, flex: 1 }}>

                    <Text style={{ fontSize: 20, lineHeight: 28, color: '#FFFFFF', fontWeight: '100', paddingLeft: 20, paddingRight: 20 }}>
                        What best describes your employment status?
                    </Text>

                    <ScrollView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>

                        <CardDropdown
                            title={'Professional'}
                            icon={
                                <Image source={require('../../../../../assets/screens/newloan/professional_icon.png')} style={{ height: 30, width: 30 * 0.65 }} />
                            }
                            onToggleHandler={this.toggleShowProfessionalOptions}
                            showOptions={this.state.showProfessionalOptions}
                            options={professionalOptions}
                            activeValue={this.state.activeProfessionalOption}
                            onSelectHandler={this.selectActiveProfessionalOption}
                        />

                        <View style={{ height: 15 }}></View>

                        <CardDropdown
                            title={'NYSC Corper'}
                            icon={
                                <Image source={require('../../../../../assets/screens/newloan/corper_icon.png')} style={{ height: 30, width: 30 * 0.8 }} />
                            }
                            onToggleHandler={this.toggleShowCorperOptions}
                        />

                    </ScrollView>

                    <View style={{ padding: 20 }}>
                        <Button
                            onPress={this.submitHandler}
                            containerStyle={SharedStyles.button.containerStyle}
                            textStyle={SharedStyles.button.textStyle}
                            colors={['#097fbd', '#43ace2']}
                            text={'Continue'}
                        />
                    </View>

                </View>

            </View>
        );
    }

    toggleShowProfessionalOptions() {
        let {showProfessionalOptions} = this.state;
        this.setState({showProfessionalOptions: !showProfessionalOptions});
    }

    selectActiveProfessionalOption(value) {
        this.props.setEmploymentStatusType(value);
        this.props.productsByType(value);
        
        this.setState({
            activeProfessionalOption: value,
            activeCorperOption: null
        });
    }

    toggleShowCorperOptions() {
        this.props.setEmploymentStatusType(employmentStatusTypes.NYSC);
        this.props.productsByType(employmentStatusTypes.NYSC);

        this.setState({
            activeProfessionalOption: null
        }, () => {
            this.props.navigation.navigate('BvnValidate');
        });
    }


    submitHandler() {
        if(this.state.activeProfessionalOption == null) {
            return;
        }
        this.props.navigation.navigate('BvnValidate');
    }
}

 

const mapStateToProps = (state) => {
    return {
        currentLoan: state.currentLoan,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmploymentStatusType: (value) => dispatch(setEmploymentStatusType(value)),
        productsByType: (value) => dispatch(productsByType(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentStatusScreen);




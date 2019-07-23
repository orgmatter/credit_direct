import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';

//components
import PageSelector from '../../../../components/PageSelector/index.js';
import SharedStyles from '../../../../styles/SharedStyles.js';
import Navbar from '../../../../components/Navbar/index.js';

import PersonalDetailsForm from './components/PersonalDetailsForm/index.js';

import EmploymentDetailsForm_Professional from './components/EmploymentDetailsForm/Professional.js';
import EmploymentDetailsForm_Nysc from './components/EmploymentDetailsForm/Nysc.js';

import AdditionalDetailsForm_Professional from './components/AdditionalDetailsForm/Professional.js';
import AdditionalDetailsForm_Nysc from './components/AdditionalDetailsForm/Nysc.js';

import BankDetailsForm from './components/BankDetailsForm/index.js';


//redux actions
import { setLoadingOverlayShowing } from '../../../../store/actions/LoadingOverlayActions.js';
import {employmentStatusTypes} from '../../../../store/actions/NewLoanRequestActions.js';


class CreateLoanScreen extends Component {

    constructor() {
        super();

        this.state = {
            formData: {
                personalDetails: null,
                employmentDetails: null,
                additionalDetails: null,
                bankDetails: null,
            },
            showSuccessPopup: false,
            activePageIndex: 0
        }

        this.navbarBackButtonHandler = this.navbarBackButtonHandler.bind(this);

        this.personalDetailsFormSubmitHandler = this.personalDetailsFormSubmitHandler.bind(this);
        this.employmentDetailsFormSubmitHandler = this.employmentDetailsFormSubmitHandler.bind(this);
        this.additionalDetailsFormSubmitHandler = this.additionalDetailsFormSubmitHandler.bind(this);
        this.bankDetailsFormSubmitHandler = this.bankDetailsFormSubmitHandler.bind(this);

        this.setActivePageIndex = this.setActivePageIndex.bind(this);
    }

    render() {
        const { navigation } = this.props;
        const bvNumberData = navigation.getParam('bvnData', 'No-Bvn-Data');
        const bvNumber = navigation.getParam('bvn', 'No-Bvn');
        console.log(bvNumber);

        let EmploymentDetailsForm = EmploymentDetailsForm_Professional;
        let AdditionalDetailsForm = AdditionalDetailsForm_Professional;

        if(this.props.employmentStatusType == employmentStatusTypes.NYSC) {
            EmploymentDetailsForm = EmploymentDetailsForm_Nysc;
            AdditionalDetailsForm = AdditionalDetailsForm_Nysc;
        }

        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26', justifyContent: 'flex-start' }}>


                <Navbar title={'New Loan'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={this.navbarBackButtonHandler}
                />


                <View style={{ paddingTop: 20, paddingBottom: 20, marginBottom: 0, paddingLeft: 0, paddingRight: 0, backgroundColor: '#203659' }}>
                    <PageSelector
                        labels={['Personal\nDetails', 'Employment\nDetails', 'Additional\nDetails', 'Bank\nDetails']}
                        currentIndex={this.state.activePageIndex}
                        onBubblePress={this.setActivePageIndex}
                        arrowIcon={<Image source={require('../../../../../assets/common/caret_right.png')} style={{ height: 20, width: 20 * 0.54 }} />}
                    />
                </View>



                <View style={{ flex: 1, padding: 0, paddingTop: 0, paddingBottom: 0 }}>


                    {this.state.activePageIndex == 0 && (
                        <PersonalDetailsForm
                            formData={this.state.formData.personalDetails}
                            submitHandler={this.personalDetailsFormSubmitHandler}
                            bvnData={bvNumberData}
                            bvn={bvNumber}
                        />
                    )}
                    {this.state.activePageIndex == 1 && (
                        <EmploymentDetailsForm
                            formData={this.state.formData.employmentDetails}
                            submitHandler={this.employmentDetailsFormSubmitHandler}
                        />
                    )}
                    {this.state.activePageIndex == 2 && (
                        <AdditionalDetailsForm
                            formData={this.state.formData.additionalDetails}
                            submitHandler={this.additionalDetailsFormSubmitHandler}
                        />
                    )}
                    {this.state.activePageIndex == 3 && (
                        <BankDetailsForm
                            formData={this.state.formData.bankDetails}
                            submitHandler={this.bankDetailsFormSubmitHandler}
                        />
                    )}
                </View>


            </View>
        );
    }

    navbarBackButtonHandler() {
        let {activePageIndex}  = this.state;

        if(activePageIndex > 0) {
            this.setState({
                activePageIndex: activePageIndex - 1
            });
            return;
        } 
        this.props.navigation.goBack();
    }

    setActivePageIndex(value, formTriggered) {

        let {activePageIndex} = this.state;
        if (value >= activePageIndex && !formTriggered) {
            return;
        }

        this.setState({
            activePageIndex: value
        });

    }


    personalDetailsFormSubmitHandler(data) {
        let formData = this.state.formData;
        formData.personalDetails = data;

        this.setState({
            formData: formData
        });
        this.setActivePageIndex(1, true);
    }

    employmentDetailsFormSubmitHandler(data) {
        let formData = this.state.formData;
        formData.employmentDetails = data;

        this.setState({
            formData: formData
        });
        this.setActivePageIndex(2, true);
    }

    additionalDetailsFormSubmitHandler(data) {
        let formData = this.state.formData;
        formData.additionalDetails = data;

        this.setState({
            formData: formData
        });
        this.setActivePageIndex(3, true);
    }

    bankDetailsFormSubmitHandler(data) {
        let formData = this.state.formData;
        formData.bankDetails = data;

        this.setState({
            formData: formData
        });
        
        this.props.navigation.navigate('UploadDocuments');
    }



}

const mapStateToProps = (state) => {
    return {
        employmentStatusType: state.newLoanRequest.employmentStatusType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingOverlayShowing: (value) => dispatch(setLoadingOverlayShowing(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLoanScreen);







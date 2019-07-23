import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Navbar from '../../../../components/Navbar/index.js';
import Button from '../../../../components/Button/index.js';
import SuccessPopup from '../../../../components/SuccessPopup/index.js';
import LabelFilePicker from '../../../../components/LabelFilePicker/index.js';

import SharedStyles from '../../../../styles/SharedStyles.js';

import UploadDocumentsForm_Professional from './components/ProfessionalForm.js';
import UploadDocumentsForm_Nysc from './components/NyscForm.js';

import { setLoggedInState } from '../../../../store/actions/AuthActions.js';
import { setCurrentLoanData } from '../../../../store/actions/CurrentLoanActions.js';
import { employmentStatusTypes } from '../../../../store/actions/NewLoanRequestActions.js';

const currentLoanData = {
    amountPaid: '',
    amountRemaining: '',
    startDate: '',
    endDate: '',
    entries: [
        {
            id: 48732719843,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'debit'
        },
        {
            id: 787398127983,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'credit'
        },
        {
            id: 4234324231423,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'credit'
        },
        {
            id: 42312313131423,
            amount: '155,000.00',
            title: 'October Salary',
            date: '28th Oct, 2018',
            time: '10:10am',
            type: 'debit'
        }
    ]
};


class UploadDocumentsScreen extends Component {

    constructor() {
        super();

        this.state = {
            showSuccessPopup: false,
        }




        this.submitHandler = this.submitHandler.bind(this);
        this.successPopupButtonHandler = this.successPopupButtonHandler.bind(this);


    }

    render() {
        let UploadDocumentsForm = UploadDocumentsForm_Professional;
        if (this.props.employmentStatusType == employmentStatusTypes.NYSC) {
            UploadDocumentsForm = UploadDocumentsForm_Nysc;
        }

        return (
            <View style={{ flex: 1, backgroundColor: '#b2c7db26' }}>

                {this.state.showSuccessPopup && (
                    <SuccessPopup show={true}
                        title={'Congratulations'}
                        message={'Your Loan Application was Successful!'}
                        button={
                            <Button
                                containerStyle={SharedStyles.button.containerStyle}
                                textStyle={SharedStyles.button.textStyle}
                                colors={['#097fbd', '#43ace2']}
                                text={'Continue'}
                                onPress={this.successPopupButtonHandler}
                            />
                        }
                    />
                )}

                <Navbar title={'Upload Documents'}
                    leftButton={<Image source={require('../../../../../assets/common/back_button.png')} style={{ height: 14, width: 14 * 1.36 }} />}
                    leftButtonHandler={() => { this.props.navigation.goBack() }}
                    containerStyle={{}}
                />

                <View style={{ flex: 1 }}>
                    <UploadDocumentsForm submitHandler={this.submitHandler} />
                </View>

            </View>
        );
    }




    submitHandler() {
        this.setState({ showSuccessPopup: true });
    }

    successPopupButtonHandler() {
        this.setState({ showSuccessPopup: false });
        this.props.setCurrentLoanData(currentLoanData);

        if (!this.props.loggedIn) {
            this.props.setLoggedInState(true);
        } else {
            setTimeout(() => {
                this.props.screenProps.parentNavigator.goBack();
            }, 0);
        }


    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        employmentStatusType: state.newLoanRequest.employmentStatusType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedInState: (value) => dispatch(setLoggedInState(value)),
        setLoadingOverlayShowing: (value) => dispatch(setLoadingOverlayShowing(value)),
        setCurrentLoanData: (value) => dispatch(setCurrentLoanData(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadDocumentsScreen);
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { AppLoading, Asset, Font } from 'expo';
import RootReducer from './src/store/index.js';

import RootScreen from './src/index.js';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

//const store = createStore(RootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, initialState, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    }
  }

  render() {

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResources}
          onFinish={() => this.setState({ isReady: true })}
          onError={() => { console.log('App caching failed') }}
        />
      )

    }

    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }

  async cacheResources() {
    const images = [


      require('./assets/logo.png'),

      //COMMON IMAGES[START]
      require('./assets/common/back_button.png'),
      require('./assets/common/camera.png'),
      require('./assets/common/caret_right.png'),
      require('./assets/common/chevron_left.png'),
      require('./assets/common/chevron_right.png'),
      //COMMON IMAGES[END]




      //COMPONENTS IMAGES[START]

      //LabelDatePicker
      require('./assets/components/LabelDatePicker/calendar.png'),
      require('./assets/components/LabelDatePicker/close_button.png'),


      //LabelFIlePicker

      //LabelPassportPicker
      require('./assets/components/LabelPassportPicker/placeholder.png'),
      require('./assets/components/LabelPassportPicker/plus_icon.png'),

      //PickerModal
      require('./assets/components/PickerModal/camera.png'),
      require('./assets/components/PickerModal/folder.png'),

      //SuccessPopup
      require('./assets/components/SuccessPopup/balloons.png'),
      require('./assets/components/SuccessPopup/confetti.png'),
      require('./assets/components/SuccessPopup/icon.png'),

      //COMPONENTS IMAGES[END]


      //SCREENS IMAGES[START]


      //dashboard
      require('./assets/screens/dashboard/arrow_right.png'),
      require('./assets/screens/dashboard/arrow_right_dashed.png'),
      require('./assets/screens/dashboard/box_dashed.png'),
      require('./assets/screens/dashboard/calendar.png'),
      require('./assets/screens/dashboard/cards.png'),
      require('./assets/screens/dashboard/cards_error.png'),
      require('./assets/screens/dashboard/curves.png'),
      require('./assets/screens/dashboard/dashboard.png'),
      require('./assets/screens/dashboard/extras.png'),
      require('./assets/screens/dashboard/logout.png'),
      require('./assets/screens/dashboard/new_loan.png'),
      require('./assets/screens/dashboard/settings.png'),
      require('./assets/screens/dashboard/support.png'),


      //login
      require('./assets/screens/login/intro_1.png'),
      require('./assets/screens/login/intro_2.png'),
      require('./assets/screens/login/intro_3.png'),
      require('./assets/screens/login/features_bottom.png'),
      require('./assets/screens/login/login_top.png'),
      require('./assets/screens/login/login_bottom.png'),
      require('./assets/screens/login/lock.png'),
      require('./assets/screens/login/user.png'),


      //support
      require('./assets/screens/support/call.png'),
      require('./assets/screens/support/complaint.png'),
      require('./assets/screens/support/email.png'),


      //newloan
      require('./assets/screens/newloan/picture_icon.png'),

      //settings
      require('./assets/screens/settings/bank.png'),
      require('./assets/screens/settings/profile.png'),

      //support
      require('./assets/screens/support/call.png'),
      require('./assets/screens/support/complaint.png'),
      require('./assets/screens/support/email.png'),


      //SCREENS IMAGES[END]
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    const fontNunito = await Expo.Font.loadAsync({
      Nunito: require('./assets/fonts/Nunito-Regular.ttf')
    });

    const fontOpenSans = await Expo.Font.loadAsync({
      OpenSans: require('./assets/fonts/OpenSans-Regular.ttf')
    });

    return Promise.all(cacheImages, fontNunito, fontOpenSans);
  }
}

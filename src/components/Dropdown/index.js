import React, { Component } from 'react';

import {
  Text,
  View,
  Modal,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  PanResponder
} from 'react-native';

class Dropdown extends Component {

  constructor(props) {

    super(props);

    this.state = {
      showModal: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.setValue = this.setValue.bind(this);
  }

  render() {

    let optionItems = [];
    if (this.props.options) {
      optionItems = this.props.options.map((item) => {
        //console.log(item.value);
        return (
          <TouchableHighlight key={item.value} underlayColor="#f7f7f7" activeOpacity={0.75} onPress={() => { this.setValue(item) }}>
            <View style={{ marginLeft: 15, marginRight: 15, paddingTop: 18, paddingBottom: 18 }}>
              <Text style={[styles.options, {...this.props.optionsStyle}]}>{item.label}</Text>
            </View>
          </TouchableHighlight>
        );
      });
    }


    let text = "";
    let textColor = "";
    
    if (this.props.value.label == "" && this.props.placeholder) {
      text = this.props.placeholder;
      textColor = this.props.placeholderColor ? this.props.placeholderColor : "#aaa";
    } else if (this.props.value.label == "") {
      text = "";
      textColor = "#666"
    } else {
      text = this.props.value.label;
      if (this.props.textStyle) {
        textColor = this.props.textStyle.color ? this.props.textStyle.color : "#666";
      } else {
        textColor = "#666";
      }
      
    }

    let textStyle = {...this.props.textStyle};
    textStyle.color = textColor;

    return (
      <View style={{}}>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View style={[styles.container, {...this.props.containerStyle}]}>
            <Text style={{...styles.text ,...textStyle}}>{text}</Text>
            <Image source={require('./icons/dropdown_arrow_64.png')} style={[styles.image, {...this.props.caretStyle}]} />
          </View>
        </TouchableWithoutFeedback>

        <Modal animationType={"fade"} transparent={true} onRequestClose={this.closeModal} visible={this.state.showModal} style={{}}>
          <TouchableWithoutFeedback onPress={this.closeModal}>
            <View style={{ backgroundColor: "rgba(0,0,0, 0.75)", flex: 1, justifyContent: "center" }}>

            </View>
          </TouchableWithoutFeedback>

          <View style={{ padding: 10, backgroundColor: "rgba(0,0,0, 0.75)" }}>
            <ScrollView style={{ maxHeight: 300, backgroundColor: "white", borderRadius: 0, elevation: 2 }}>
              {optionItems}
            </ScrollView>
          </View>

          <TouchableWithoutFeedback onPress={this.closeModal}>
            <View style={{ backgroundColor: "rgba(0,0,0, 0.75)", flex: 1, justifyContent: "center" }}>

            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  setValue(valueObj) {
    this.setState({
      showModal: false
    })

    if (this.props.onChange) {
      this.props.onChange(valueObj);
    }
  }

  openModal() {
    this.setState({
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }
}


let styles = {
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    flex: 1,
    fontSize: 16
  },
  options: {
    fontSize: 16,
    color: '#666'
  },
  image: {
    height: 8,
    width: 8,
    tintColor: 'white',
    marginRight: 10
  }
}


export default Dropdown; 
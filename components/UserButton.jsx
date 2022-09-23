import { Text, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { Component } from 'react'
import styles from '../styles'
import variables from '../styles/variables';

export default class CategoryCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: this.props.buttonText,
      buttonIcon: this.props.buttonIcon,
      navigation: this.props.navigation,
      screenName: this.props.screenName
    }
  }
  render({ buttonText, buttonIcon, navigation, screenName } = this.state) {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate(screenName)} style={styles.userScreenButton}>
          <View style={styles.userScreenButtonContainer}>
            <MaterialCommunityIcons name={buttonIcon} size={23} color={variables.colors.primary} />
            <Text style={{ ...styles.userScreenButtonText }}>
              {buttonText}
            </Text>
          </View>
          <AntDesign name="right" size={17} color={variables.colors.primary} />
        </TouchableOpacity>
      </>
    )
  }
}
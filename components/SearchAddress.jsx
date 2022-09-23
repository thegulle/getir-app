import { Text, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react'
import styles from '../styles/';
import variables from "../styles/variables";

export default class SearchAddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigation: this.props.navigation
    }
  }
  render({ navigation } = this.state) {
    return (
      <View style={styles.sub_header}>
        <Pressable style={styles.select_address_box} onPress={() => navigation.jumpTo('UserStack')}>
          <Text style={styles.select_address_box_text}>
            Select Delivery Address
          </Text>
          <View style={styles.select_address_box_icon}>
            <Icon name="angle-right" size={25} color={variables.colors.primary} />
          </View>
        </Pressable>
        <View style={styles.estimated_box_time}>
          <Text style={styles.estimated_box_time_main_text}>
            TVS
          </Text>
          <Text style={styles.estimated_box_time_sub_text}>
            <Text style={{ ...styles.estimated_box_time_sub_text, fontSize: 17 }}>24</Text>m
          </Text>
        </View>
      </View >
    )
  }
}
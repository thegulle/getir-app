import { Text, View, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { Component } from 'react'
import styles from '../styles'

export default class CategoryCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      navigation: this.props.navigation
    }
  }
  render({ data, navigation } = this.state) {
    return (
      <View style={styles.campaignCardContainer}>
        <Image
          style={styles.campaignCardImg}
          source={{ uri: data.image }}
        />
        <View style={styles.campaignCardContent}>
          <Text style={styles.campaignCardTextTitle}>
            {data.title}
            <Text style={styles.campaignCardText}>
              {'\n'}
              {data.description}
            </Text>
          </Text>
          <TouchableOpacity style={styles.campaignCardIcon} onPress={() => navigation.jumpTo('HomeStack')}>
            <AntDesign name="right" color={'#000'} size={12} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
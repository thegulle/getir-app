import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import styles from '../styles'

export default class CategoryCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
    }
  }
  render({ data } = this.state) {
    return (
      <TouchableOpacity>
        <View style={styles.category_card}>
          <Image
            style={styles.category_card_img}
            source={data.image}
          />
        </View>
        <Text style={styles.category_card_text}>{data.title}</Text>
      </TouchableOpacity>
    )
  }
}
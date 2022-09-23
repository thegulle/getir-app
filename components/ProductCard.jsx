import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import styles from '../styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import variables from '../styles/variables';

export default class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      gridColumns: this.props.gridColumns || 4,
      addCart: this.props.addCart
    }
  }
  render({ data, gridColumns, addCart } = this.state) {
    const windowWidth = Dimensions.get('window').width;
    return (
      <>
        <View style={{ ...styles.productCard, width: windowWidth / (gridColumns + 1) }}>
          <View style={styles.productImgContainer}>
            <TouchableOpacity style={styles.productImgPlusIcon} onPress={() => addCart()}>
              <MaterialCommunityIcons
                name='plus'
                size={20}
                color={variables.colors.primary}
              />
            </TouchableOpacity>
            <Image
              style={styles.productCardImg}
              source={{ uri: data.image }}
            />
          </View >
          <View style={styles.productCardPriceContainer}>
            {data.oldPrice && <Text style={styles.productCardPriceTextOld}>{data.oldPrice} TL</Text>}
            <Text style={styles.productCardPriceText}>
              {data.price} $
            </Text>
          </View>
          <Text style={styles.productCardNameText}>
            {data.title}
          </Text>
          <Text style={styles.productCardSubText}>
            {data.subTitle}
          </Text>
        </View>
      </>
    )
  }
}
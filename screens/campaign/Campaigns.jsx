import React from 'react'
import { View, ScrollView } from 'react-native'
import CampaignCard from '../../components/CampaignCard'

export default function Campaigns({ navigation }) {
  const data = [
    {
      title: 'Campaign 1',
      description: 'Lorem ipsmı dolor sit amet',
      image: 'http://cdn.getir.com/misc/62a0cbe978ab4566649da256_banner_tr_1654705156487.jpeg',
    },
    {
      title: 'Campaign 2',
      description: 'Lorem ipsmı dolor sit amet',
      image: 'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg',
    },
    {
      title: 'Campaign 3',
      description: 'Lorem ipsmı dolor sit amet',
      image: 'https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png',
    }
  ]
  return (
    <ScrollView>
      <View>
        {data.map((item, index) => (
          <CampaignCard data={item} key={index} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  )
}
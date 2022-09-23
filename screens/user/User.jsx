import React from 'react'
import { View, Pressable, Text } from 'react-native'
import styles from "../../styles/";
import UserButton from "../../components/UserButton";

export default function User({ navigation }) {
  return (
    <View style={styles.userScreenContainer}>
      <View style={{ marginBottom: 40 }}>
        <UserButton
          buttonText="Login"
          buttonIcon="account"
          navigation={navigation}
          screenName="SignIn"
        />
      </View>
      <UserButton
        buttonText="Adresses"
        buttonIcon="map-marker-radius"
        screenName="SignIn"
        navigation={navigation}
      />
      <UserButton
        buttonText="Favourite Products"
        buttonIcon="heart"
        screenName="SignIn"
        navigation={navigation}
      />
      <UserButton
        buttonText="Live Support"
        buttonIcon="chat-processing"
        screenName="SignIn"
        navigation={navigation}
      />
      <UserButton
        buttonText="Support"
        buttonIcon="help-circle-outline"
        screenName="SignIn"
        navigation={navigation}
      />
    </View>
  )
}
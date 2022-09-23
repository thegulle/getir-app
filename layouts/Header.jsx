import React from 'react'
import { Image } from 'react-native';

export default function Header() {
  return (
    <Image source={require('../assets/logo.png')}
      style={{ transform: [{ scale: 0.25 }] }} />
  )
}
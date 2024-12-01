import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Text} from './Themed'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Action = ({name, color, text, navigation}) => {
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('ComingSoon')}>
    <View style={styles.action}>
      <View style={[styles.actionButton, {backgroundColor: color}]}>
        <MaterialCommunityIcons name={name} color='white' size={34} />
      </View>
      <Text>{text}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Action

const styles = StyleSheet.create({
  action: {
    alignItems: 'center'
  },
  actionButton: {
    borderRadius: 52,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  }
})
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from './Themed'
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons'

interface setRowProps {
    icon: any,
    bgColor: string,
    text: string,
    marginTop?: number,
    marginBottom?: number,
    iconFamily?: string,
    link?: string | undefined, 
    navigation?: any,
    screen?: string
}

const SettingsRow: React.FC<setRowProps> = ({icon, bgColor, text, marginTop, marginBottom, iconFamily, link, navigation, screen}) => {
  return (
    <View style={{marginTop: marginTop, marginBottom: marginBottom}}>
      <TouchableOpacity onPress={()=> link ?  Linking.openURL(link) : navigation.navigate('ComingSoon')}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: bgColor, padding: 10, borderRadius: 5, marginRight: 15}}>
                   {iconFamily == 'FontAwesome5' ? <FontAwesome5 name={icon} size={20} color='white' />
                   : iconFamily == 'FontAwesome' ? <FontAwesome name={icon} size={20} color='white' />
                   : iconFamily == 'AntDesign' ? <AntDesign name={icon} siz={20} color='white' /> 
                   : <FontAwesome5 name={icon} size={20} color='white' />}
                </View>
                <Text style={{fontSize: 20, fontWeight: '500'}}>{text}</Text>
            </View>
            <AntDesign name='right' color='white' size={30} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsRow

const styles = StyleSheet.create({})
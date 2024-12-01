import { FlatList, StyleSheet, Platform, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import Header from '../components/Header'
import { AntDesign } from '@expo/vector-icons'
import { crypto } from '../data'

const Wallet = ({navigation}) => {

  const [Value, setValue] = useState('')
  const [searchParam] = useState(['name'])
  const [results, setResults] = useState()

const ios = Platform.OS === 'ios'
  useEffect(()=>{
    const result =  crypto.filter((item: any) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(Value.toLowerCase()) > -1
        )
      })
    })

    setResults(result)
  }, [Value])

  const ChangeText = (text) => {
    setValue(text);

    

  }
  return (
    <SafeAreaView style={styles.wallet}>
      <View style={{flex: 1, paddingTop: 25}}>
        <Header navigation={navigation} title='Wallet' headerStyle={{paddingHorizontal: 22}} styleProps={{fontWeight: '600', fontSize: 24, lineHeight: 29}} />
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 15}}>
            <AntDesign name='search1' size={30} color='white' style={{marginRight: 20}} />
            <TextInput value={Value} placeholderTextColor='white' onChangeText={(text)=>ChangeText(text)} placeholder='Search Tokens...' style={{ fontSize: 25, width: '100%', color: 'white'}} />
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 20}}></View>
        <FlatList style={{marginBottom: ios ? 60 : 85}} showsVerticalScrollIndicator={false} ItemSeparatorComponent={()=> (
          <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginVertical: 20}}></View>
            )}  data={Value ? results : crypto}
          renderItem={({item, index}) => {
            return (
            <TouchableOpacity>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 22}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image transition={false} source={item.icon} style={{width:40, height:40, marginRight: 20}} />
                    <Text style={{fontSize: 18, fontWeight: '700'}}>{item.name}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>{item.amount} {item.shortName}</Text>
                </View>
              </View>
            </TouchableOpacity>
            )
          }}
              />
      </View>
    </SafeAreaView>
  )
}

export default Wallet

const styles = StyleSheet.create({
    wallet: {
        flex: 1
    }
})
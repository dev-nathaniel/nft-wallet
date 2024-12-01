import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { LineChart } from 'react-native-chart-kit';
import { Text } from './Themed';
import { Dimensions } from "react-native";


interface tokenProps  {
    iconName: any,
    price: string,
    percentage: number,
    shortName: string,
    cryptoName: string,
    nft?: string
}

const TokenRow: React.FC<tokenProps> = ({ iconName, price, percentage, shortName, cryptoName, nft}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
                <Image source={iconName} style={{width: !nft?40:70, height:nft?70:40, borderRadius: nft?10:0 }} />
            </View>
          {/*<View style={{borderRadius: '50%', paddingVertical: 14, backgroundColor: bgColor, paddingHorizontal: 18}}>
            {f5 ? <FontAwesome5 name={iconName} size={30} color='white' /> : <FontAwesome name={iconName} size={30} color='white' />}
  </View>*/}
          <View style={{ marginLeft: 13}}>
            <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700', marginBottom: 4}}>{shortName}</Text>
            <Text style={{fontSize: 12, fontWeight: '500', lineHeight: 14, color: '#a0a0a0'}}>{cryptoName}</Text>
          </View>
          </View>
          
          {!nft ? <View>
            <LineChart
              data={{
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={95} // from react-native
              withDots={false}
              withShadow={false}
              withInnerLines={false}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              withVerticalLines={false}
              withOuterLines={false}
              height={60}
              chartConfig={{
                color: () => percentage < 1 ? 'red' : 'green',
                backgroundGradientFrom: "#000000",
                backgroundGradientTo: "#000000",
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0
              }}
              bezier
              style={{
                paddingRight: 0,
                paddingLeft: 0,
                marginRight: 0,
                marginLeft: 0,
                paddingBottom: 2,
                paddingTop: 2,
                marginTop: 0,
                marginBottom: 0
              }}
            />
          </View> : null}
          <View style={{}}>
            <Text style={{fontSize: 14, fontWeight: '600', lineHeight: 17}}>${price}</Text>
            {nft ? <View style={{flexDirection:"row", alignItems:'center', alignSelf: 'flex-end', marginTop: 2}}>
                <FontAwesome5 name='ethereum' color='white' />
                
                <Text style={{textAlign: 'right', fontSize: 12, fontWeight: '600', lineHeight: 14, marginLeft: 5}}>{percentage}</Text>
            </View>: 
            <Text style={{textAlign: 'right', color: percentage < 1 ? '#ff002e' : '#0aff96', fontSize: 12, fontWeight: '600', lineHeight: 14, marginTop: 2}}>{percentage}%</Text>}
          </View>
        </View>
    </View>
  )
}

export default TokenRow

const styles = StyleSheet.create({})
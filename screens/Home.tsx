import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Image, FlatList, Platform, TouchableOpacity } from 'react-native';

import { Text, SafeAreaView } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from '../components/Header';
import WalletBalance from '../components/WalletBalance';
import Action from '../components/Action';
import { Dimensions, PixelRatio } from 'react-native';
import { homeTabs } from '../data';
import Animated, {useSharedValue, interpolate, useAnimatedStyle, withTiming, useAnimatedScrollHandler} from 'react-native-reanimated';


import TokenRow from '../components/TokenRow';
import { useEffect, useRef, useState } from 'react';



const TabIndicator = ({progress, translateX, layoutWidth}) => {

  const {width} = Dimensions.get('window')
  
  const reanimatedStyle = useAnimatedStyle(()=> {
    'worklet'

    const left = interpolate(translateX.value, [0, width - 28], [0, layoutWidth/2])
    return {
      left: layoutWidth? left : 0,
    }
  }, [])

  
  


  return (
    <Animated.View style={[{width: '50%', height: '100%', position: 'absolute', backgroundColor: '#3B3F58', borderRadius: 100}, reanimatedStyle]} />

  )
}


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const AnimatedFlatlist  = Animated.createAnimatedComponent(FlatList)
  const [layoutWidth, setLayoutWidth] = useState()
const ios = Platform.OS === 'ios'
  const ref = useRef()

  const progress = useSharedValue(0)
  const translateX = useSharedValue(0)



  const rightPress = () => {
    progress.value = withTiming('50%')
    ref.current.scrollToEnd()
  }

  const scrollX = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x 
  })


  const leftPress = () => {
    progress.value = withTiming(0)
    ref.current.scrollToOffset(0)
  }

  /*const scrollHandler = useAnimatedScrollHandler((event) => {
    console.log(event.contentOffset.x)
  })

  const rightPress = () => {
    progress.value = withSpring('50%')
  }

  

  useEffect(()=> {

  })

  console.log(progress.value)*/
  const {width, height} = Dimensions.get("window")

  const getLayout = (event) => {
    const {x, y, height, width} = event.nativeEvent.layout;
    const layoutWidth = width;

    setLayoutWidth(layoutWidth)
  }
  

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.container}>
        <Header navigation={navigation} image styleProps={{marginLeft: 13, fontWeight: '600', fontSize: 16, lineHeight: 19}} title='Olowoo' />
        <WalletBalance />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
          <Action navigation={navigation} color='#2A3547' name='bank-transfer-out' text='Send' />
          <Action navigation={navigation} color='blue' name='plus' text='Buy' />
          <Action navigation={navigation} color='#2A3547' name='bank-transfer-in' text='Receive' />
        </View>
        <View onLayout={(event)=>getLayout(event)} style={{marginTop: 34, flexDirection: 'row', borderRadius: 100, backgroundColor: '#212436', position: 'relative'}}>
          <TabIndicator progress={progress} translateX={translateX} layoutWidth={layoutWidth} />
          <TouchableOpacity onPress={leftPress} style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%',  paddingVertical: 14, zIndex: 10}}>
            <Text>Tokens</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={rightPress} style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 10}}>
            <Text>NFTs</Text>
          </TouchableOpacity>
        </View>
        <AnimatedFlatlist onScroll={scrollX} scrollEventThrottle={16} ref={ref} ItemSeparatorComponent={()=> (
          <View style={{width: 20}}></View>
  )} horizontal data={homeTabs} snapToAlignment='center'
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1, width: width - 48}}>
              <FlatList showsVerticalScrollIndicator={false}  style={{ marginBottom: ios ? 65 : 85, marginRight: 10 }} data={item.cryptoData}
                renderItem={({ item, index}) => {
                  return (
                    <TokenRow key={index} {...item} />
                )
              }}
              />
              {/*{cryptoData.map((data, index)=> (
                  <TokenRow key={index} bgColor={data.bgColor} iconName={data.iconName} price={data.price} percentage={data.percentage} shortName={data.shortName} cryptoName={data.cryptoName} />
                ))}*/}
              </View>
            )
          }} />
          
          
        
        
        
        
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    paddingTop: 22,
    paddingHorizontal: 24,
    flex: 1
  },
  
});

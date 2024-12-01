import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Header from '../components/Header';
import NftCard from '../components/NftCard';
import { Text, SafeAreaView } from '../components/Themed';
import { market } from '../data';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({navigation}: RootTabScreenProps<'TabTwo'>) {

  const ios = Platform.OS === 'ios'

  const [categoryState, setCategoryState] = useState('Art');
  return (
    <SafeAreaView style={styles.market}>
      <View style={styles.container}>
        <Header navigation={navigation} title='Market' headerStyle={{paddingHorizontal: 22}} styleProps={{fontWeight: '600', fontSize: 24, lineHeight: 29}} />
        <View style={{marginTop: 24, marginLeft: 20}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
             <TouchableOpacity onPress={()=>setCategoryState('Art')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Art' ? 2 : 0}}>
                <Text>Art</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Collectibles')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Collectibles' ? 2 : 0}}>
                <Text>Collectibles</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Music')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Music' ? 2 : 0}}>
                <Text>Music</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Sports')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Sports' ? 2 : 0}}>
                <Text>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setCategoryState('Photography')} style={{paddingVertical: 8, paddingHorizontal: 19, borderRadius: 50, backgroundColor: '#2f2f34', marginRight: 15, borderColor: '#0aff96', borderWidth: categoryState=='Photography' ? 2 : 0}}>
                <Text>Photography</Text>
              </TouchableOpacity>
          </ScrollView>
        
        </View>
        <View style={{flex: 1, marginHorizontal: 20, marginTop: 21, marginBottom: ios ? 60 : 85}}>
        <FlatList showsVerticalScrollIndicator={false} numColumns={2}
          data={market.find(({category})=> category == categoryState)?.nftData}
          renderItem={({item, index}) => {
            return (
              <NftCard index={index} {...item} />
            )
          }}

        />
        </View>
        
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  market: {
    flex: 1,
  },
  container: {
    paddingTop: 25,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#fff'
  },
});

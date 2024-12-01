import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import Header from '../components/Header'
import SettingsRow from '../components/SettingsRow'

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.profile}>
        <Header navigation={navigation} title='Settings' headerStyle={{paddingHorizontal: 22}} styleProps={{fontWeight: '600', fontSize: 24, lineHeight: 29}} />
        <View style={{marginTop: 40, flex: 1}}>
            <ScrollView style={{marginBottom: 60}} showsVerticalScrollIndicator={false}>
                <SettingsRow navigation={navigation}  text='My Profile' bgColor='red' icon='user-alt' />
                <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginVertical: 30}}></View>
                <SettingsRow navigation={navigation} text='Security' bgColor='grey' icon='lock' marginBottom={30} />
                <SettingsRow navigation={navigation} text='Privacy' bgColor='green' icon='shield-alt' marginBottom={30} />
                <SettingsRow navigation={navigation} text='Notificationss' bgColor='blue' icon='bell' iconFamily='FontAwesome' />
                <View style={{width: '100%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginVertical: 30}}></View>
                <Text style={{marginHorizontal: 22, fontSize: 18,}}>Community</Text>
                <SettingsRow navigation={navigation} text='Help' bgColor='purple' icon='info-circle' marginTop={30} marginBottom={30} />
                <SettingsRow link='https://www.twitter.com/olowoo_a' text='Twitter' bgColor='#1da1f1' icon='twitter' marginBottom={30} />
                <SettingsRow link='https://www.linkedin.com/in/adebayo-olowofoyeku-0930a3230' text='Linked In' bgColor='#0e76a8' icon='linkedin' marginBottom={30} />
                <SettingsRow link='https://www.instagram.com/s.m.a.r.t.dev' text='Instagram' bgColor='#fd1d1d' icon='instagram' marginBottom={30} />
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        paddingTop: 25
    }
})
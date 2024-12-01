import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './Themed'
import { FontAwesome } from '@expo/vector-icons'

const WalletBalance = () => {
  return (
    <View>
      <View style={styles.walletBalance}>
          <Text style={styles.title}>Current Wallet Balance</Text>
          <Text style={styles.balance}>$ 5,300.00</Text>
          <View style={styles.currency}>
            <Text>BTC : 0.24</Text>
            <View style={styles.profit}>
              <FontAwesome name='caret-down' color='#ff002e' size={20} />
              <Text style={styles.profitText}>0.1%</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

export default WalletBalance

const styles = StyleSheet.create({
    walletBalance: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 38,
      },
      title: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.02,
        marginBottom: 9
      },
      balance: {
        fontSize: 40,
        lineHeight: 48,
        fontWeight: '600'
      },
      currency: {
        backgroundColor: '#2f2f34',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 12
      },
      profit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 11,
      },
      profitText: {
        color: '#ff002e',
        marginLeft: 6
      }
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BcoinKeypad = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 1)} >
                    <Image source={_1BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 5)} >
                    <Image source={_5BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 10)} >
                    <Image source={_10BCoin} style={styles.image2} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 20)} >
                    <Image source={_20BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 50)} >
                    <Image source={_50BCoin} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setNumber(parseFloat(number) + 100)} >
                    <Image source={_100BCoin} style={styles.image2} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20, marginBottom: 20 }} >
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.01)} >
                    <Image source={_1BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.05)} >
                    <Image source={_5BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.1)} >
                    <Image source={_10BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.2)} >
                    <Image source={_20BCent} style={styles.bCents} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(parseFloat(number) + 0.5)} >
                    <Image source={_50BCent} style={styles.bCents} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BcoinKeypad

const styles = StyleSheet.create({})

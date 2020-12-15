import React from 'react'
import { TouchableOpacity, View, Text, Linking, StyleSheet } from 'react-native'
import { COLORS, _scaleText, ROUTES, TEXT_CONST } from '../../../shared'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTestItem = ({ _id, _name, _price, _timestamp, _startDate, _endDate, _timetable, navigation, purchased }) => {
    return (
        <View
            style={{
                shadowColor: '#b2b2b2',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1, borderRadius: 10, marginHorizontal: 10, marginVertical: 5, padding: 20, elevation: 5, backgroundColor: COLORS.WHITE
            }}>
            <Text style={styles.fontItem}><Text style={styles.fontBold}>Name: </Text>{_name}</Text>
            <Text style={styles.fontItem}><Text style={styles.fontBold}>Price: </Text>{`₹${_price}`}</Text>
            <Text style={styles.fontItem}><Text style={styles.fontBold}>Start Date: </Text>{_startDate}</Text>
            <Text style={styles.fontItem}><Text style={styles.fontBold}>End Date: </Text>{_endDate}</Text>
            {!!_timetable && <TouchableOpacity onPress={() => {
                try {
                    Linking.openURL(_timetable)
                } catch (error) {

                    console.log("error", error)
                }
            }}><Text style={styles.fontItem}><Text style={styles.fontBold}>Timetable: </Text><Text style={styles.fontBlue}>{"Timetable"}</Text></Text>
            </TouchableOpacity>}
            <Text style={{ textAlign: 'right', bottom: 5, right: 10, position: 'absolute', marginTop: 20, fontSize: 10 }}>{_timestamp}</Text>
            {!purchased &&
                <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center' }}>
                    <Text style={[styles.fontBlue, { textAlign: 'right', marginRight: _scaleText(5).fontSize }]}>{TEXT_CONST.PURCHASE}</Text>
                    <Ionicons name="arrow-forward-circle-outline" size={18} color='blue' />
                </TouchableOpacity>}
        </View>
    )
}
export default CustomTestItem
const styles = StyleSheet.create({
    fontBold: {
        fontWeight: 'bold'
    },
    fontItem: {
        fontWeight: '500', fontSize: 14, marginTop: 10, marginBottom: 10
    },
    fontBlue: {
        color: 'blue'
    }
})
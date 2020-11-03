import React, { useState, useRef } from 'react';
import { Text, UIManager, View, StyleSheet, Dimensions, SafeAreaView, ScrollView, Alert, FlatList } from 'react-native';
import { ScreenHOC, CustomButton, CustomDatePicker, CustomMCQModal } from '../../../../../components';
import { COLORS, ICONS, _scaleText, TEXT_CONST, ROUTES } from '../../../../../shared';
import styles from './styles';
import { isTablet } from 'react-native-device-info';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FastImage from 'react-native-fast-image'
export const { width, height } = Dimensions.get('window');

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const FriendsScreen = ({
    navigation
}) => {
    const [showDate, updateShowDate] = useState(false)
    const selectDate = (date) => {
        console.log("hete", date)
    }
    return (
        <ScreenHOC
            headerTitle={'Daily MCQ'}
            showHeader
            showMenuIcon
            onBackPress={navigation.toggleDrawer}
            containerStyle={{ backgroundColor: COLORS.GREY.LIGHT, borderWidth: 10 }}
        >
            <View style={styles.dailyMcqContainer}>

                <FastImage
                    style={styles.mcqImage}
                    resizeMode={'cover'}
                    source={{ uri: 'https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png' }}
                />

                <CustomButton onPress={() => navigation.navigate(ROUTES.DAILY_MCQ.QUIZ_SCREEN)} label={TEXT_CONST.START_DAILY_QUIZ} labelSize={_scaleText(14).fontSize} labelStyle={styles.mcqLabel} container={styles.mcqButton}></CustomButton>

            </View>
        </ScreenHOC >
    );
}

export default FriendsScreen;
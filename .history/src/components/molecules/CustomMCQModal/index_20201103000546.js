import React, { useState, useRef, useEffect } from 'react';
import { Text, UIManager, View, StyleSheet, Dimensions, SafeAreaView, ScrollView, Alert, FlatList } from 'react-native';
import { ScreenHOC, CustomButton } from '../../';
import { COLORS, ICONS, _scaleText, TEXT_CONST, TEXT_STYLES, pad } from '../../../shared';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import WebView from 'react-native-webview';
import FastImage from 'react-native-fast-image';
import HTMLView from 'react-native-htmlview';
import Countdown from "react-countdown";
export const { width, height } = Dimensions.get('window');

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const CustomMCQModal = ({
    questionsObj,
    testTime = 120
}) => {
    const [option, updateOption] = useState(null);
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 })
    const questionsRef = useRef();
    const foo = useRef();
    const [seconds, setSeconds] = useState(testTime);
    useEffect(() => {
        function tick() {
            setSeconds(prevSeconds => prevSeconds - 1)
        }
        foo.current = setInterval(() => tick(), 1000)
    }, []);
    useEffect(() => {
        if (seconds === 0) {
            setTime(secondsToTime(seconds))
            clearInterval(foo.current);

        }
        else {
            setTime(secondsToTime(seconds))
        }
    }, [seconds])

    useEffect(() => {
        return () => {
            clearInterval(foo.current)
        }
    }, [])

    const secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    const onPressOption = (option, questionIndex) => {
        console.log("questionIndex", questionIndex)
        if (questionIndex < questionsObj.length - 1) {
            updateOption(option)
            setTimeout(() => {
                updateOption(null)
                questionsRef.current.scrollToIndex({ index: questionIndex + 1, animated: true })
            }, 200)
        }
        else {
            updateOption(option)
        }

    }


    const renderOption = (buttonOption, index, buttonStyles) => {
        return (<CustomButton
            left={<MaterialCommunityIcons name={option === buttonOption ? "checkbox-marked-circle" : "checkbox-blank-circle"}
                color={option === buttonOption ? COLORS.GREEN : '#c2c2c2'} size={20} />}
            container={buttonStyles}
            label={buttonOption}
            labelStyle={styles.optionLabel}
            onPress={() => onPressOption(buttonOption, index)}

        />)
    }

    const renderQuestionitem = ({ item, index }) => {
        const { _imgUrl = 'https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg', _quest, _opt1, _opt2, _opt3, _opt4, _remark, _id } = item
        // console.log("_quest", _quest)
        return (
            <View >
                <ScrollView key={_id} style={[styles.child]} showsVerticalScrollIndicator={false}>
                    <View style={styles.innerContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.headerText}>{'Q.' + (index + 1)}</Text>
                        </View>
                        {!!_imgUrl && <FastImage
                            style={styles.optionImage}
                            resizeMode={'contain'}
                            source={{ uri: _imgUrl }}
                        />}
                        <View style={styles.htmlContainer}>
                            <HTMLView value={_quest} />
                        </View>
                        <View style={styles.optionsContainer}>
                            {_remark ? <Text style={styles.remarkText}>{_remark}</Text> : null}
                            <View style={{ borderWidth: 0, }}>
                                {renderOption(_opt1, index, [styles.optionButton])}
                                {renderOption(_opt2, index, [styles.optionButton, styles.buttonTop])}
                                {renderOption(_opt3, index, [styles.optionButton, styles.buttonTop])}
                                {renderOption(_opt4, index, [styles.optionButton, styles.buttonTop])}
                            </View>
                        </View>
                    </View>
                </ScrollView >
            </View>
        )
    }
    return (
        <View style={[TEXT_STYLES.FLEX, { borderWidth: 5 }]}>
            <View style={styles.timerContainer}>
                <View style={styles.timer}>
                    <Text>
                        {TEXT_CONST.TIME_LEFT}
                    </Text>
                    <Text>
                        {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton label={"Submit"} labelSize={_scaleText(12).fontSize} labelStyle={styles.buttonText} container={styles.submitButton}></CustomButton>
                </View>
            </View>

            <FlatList
                keyExtractor={(item, index) => item._id + '' + index}
                initialScrollIndex={0}
                initialNumToRender={1}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                horizontal
                pagingEnabled
                data={questionsObj}
                extraData={questionsObj}
                disableGesture
                ref={questionsRef}
                renderItem={(item) => renderQuestionitem(item)}
            />
        </View >
    );
}

export default CustomMCQModal;

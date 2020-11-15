import React, { useState, useEffect } from 'react';
import { Text, UIManager, FlatList, ActivityIndicator, RefreshControl, SafeAreaView, Linking, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenHOC, EmptyDataUI, CustomMCQModal } from '../../../../../../../components';
import { COLORS, TEXT_CONST, _scaleText, _showCustomToast, ROUTES } from '../../../../../../../shared';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const TestQuestions = ({
    navigation,
    netConnected,
    testQuestionsRequest,
    route: { name, params: { id } = {} }
}) => {
    const [data, updateData] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [refreshing, toggleRefreshing] = useState(true);
    const [isTestStarted, updateIsTestStarted] = useState(false)

    useEffect(() => { fetchData(true) }, [id])
    const fetchData = (refresh = false) => {
        console.log("_id_id_id", id)
        toggleLoading(!refresh);
        let payload = {
            netConnected,
            id: id,
            success: (response = []) => {
                console.log("response", response)
                updateData([...data, ...response])
                toggleLoading(false);
            },
            fail: (message = '') => {
                _showCustomToast({ message });
                toggleLoading(false);
            }
        }
        console.log("payload sub cat", payload)
        testQuestionsRequest(payload)
    }

    const _renderListEmptyComponent = () => (<EmptyDataUI
        title={TEXT_CONST.NO_DATA_FOUND}
    // subTitle1={TEXT_CONST.NO_USER_FOUND_WITH_THIS_NAME}
    />)

    const testStarted = (value) => {
        updateIsTestStarted(value)
    }
    const exitTest = () => {
        if (isTestStarted) {
            Alert.alert(
                'Exit Test',
                'If you exit the test will be submitted',
                [
                    {
                        text: 'Yes',
                        onPress: () => navigation.goBack()
                    },
                    {
                        text: 'No',
                        style: 'cancel',
                    },
                ],
                { cancelable: false },
            );
        } else {
            navigation.goBack()
        }
    }

    const submitTest = (answersList) => {

    }

    return (
        <ScreenHOC
            bottomSafeArea
            headerTitle={'Test Questions'}
            showHeader
            showBackIcon
            onBackPress={exitTest}
        >

            { loading ? <ActivityIndicator size={'large'} color={COLORS.GREY._2} /> :
                <CustomMCQModal testStarted={testStarted} questionsObj={data} />}
        </ScreenHOC>
    );
}

export default TestQuestions;
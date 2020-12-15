import React, { useState, useEffect } from 'react';
import { Text, UIManager, FlatList, ActivityIndicator, RefreshControl, SafeAreaView, Linking, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenHOC, EmptyDataUI, CustomTestItem } from '../../../../../../../components';
import { COLORS, TEXT_CONST, _scaleText, _showCustomToast, ROUTES } from '../../../../../../../shared';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const TestSeriesList = ({
    navigation,
    netConnected,
    testSeriesListRequest,
    route: { params: { _id, _category, _price } = {} },
    generatePaymentLinkRequest,
    sId
}) => {
    const [data, updateData] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [refreshing, toggleRefreshing] = useState(true);
    useEffect(() => { fetchData(true) }, [])
    const fetchData = (refresh = false) => {
        console.log("_id_id_id", _id)
        toggleLoading(!refresh);
        toggleRefreshing(false);
        let payload = {
            netConnected,
            catId: _id,
            success: (response = []) => {
                console.log("response", response)
                !response.length
                updateData(refresh ? [...response] : [...data, ...response])
                toggleLoading(false);
                toggleRefreshing(false);
            },
            fail: (message = '') => {
                _showCustomToast({ message });
                toggleLoading(false);
                toggleRefreshing(false);
            }
        }
        console.log("payload sub cat", payload)
        testSeriesListRequest(payload)
    }

    const fetchPaymentPage = (paymentObj) => {
        toggleLoading(true);
        let payload = {
            netConnected,
            amount: paymentObj.amount,
            purpose: paymentObj.purpose.replace(/\s+/g, ''),
            sId,
            type: paymentObj.type,
            productId: paymentObj.productId,
            success: (response = []) => {
                console.log("response", response.status)
                let res = response && response.length && response[0]
                if (res && res.status && res.status == 1) {
                    let _webPage = res && res.response
                    console.log("_webPage", _webPage)
                    navigation.navigate(ROUTES.TEST.PAYMENT_SCREEN, { _webPage: _webPage })
                }

                toggleLoading(false);
            },
            fail: (message = '') => {
                _showCustomToast({ message });
                toggleLoading(false);
                toggleRefreshing(false);
            }
        }
        console.log("payload payment", payload)
        generatePaymentLinkRequest(payload)
    }

    const _renderListEmptyComponent = () => (<EmptyDataUI
        title={TEXT_CONST.NO_DATA_FOUND}
    // subTitle1={TEXT_CONST.NO_USER_FOUND_WITH_THIS_NAME}
    />)

    return (
        <ScreenHOC
            bottomSafeArea
            containerStyle={{ backgroundColor: COLORS.GREY.LIGHT, }}
            headerTitle={_category}
            showHeader
            showBackIcon
            onBackPress={navigation.goBack}
        >
            <View style={{ backgroundColor: 'white', padding: _scaleText(10).fontSize, flexDirection: 'row', justifyContent: 'space-between' }}><Text>{_category}</Text>
                {parseInt(_price) ?
                    <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center' }}>
                        <Text style={[styles.fontBlue, { textAlign: 'right', marginRight: _scaleText(5).fontSize }]}>{TEXT_CONST.PURCHASE}</Text>
                        <Ionicons name="arrow-forward-circle-outline" size={18} color='blue' />
                    </TouchableOpacity> : null}
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                extraData={data}
                keyExtractor={(item, index) => item._id + ''}
                ListEmptyComponent={!refreshing && _renderListEmptyComponent()}
                ListFooterComponent={loading && <ActivityIndicator size={'large'} color={COLORS.GREY._2} />}
                refreshControl={<RefreshControl
                    colors={[COLORS.GREY._2]}
                    onRefresh={() => fetchData(true)}
                    refreshing={refreshing}
                    tintColor={COLORS.GREY._2}
                    title={TEXT_CONST.PULL_TO_REFRESH}
                    titleColor={COLORS.GREY._2}
                />}
                style={{ marginVertical: 5 }}
                renderItem={({ item, index }) => {
                    return (<CustomTestItem fetchPaymentPage={fetchPaymentPage} {...item} navigation={navigation} />)
                }}
            />
            <SafeAreaView style={{ backgroundColor: 'white', }} />
        </ScreenHOC>
    );
}

export default TestSeriesList;
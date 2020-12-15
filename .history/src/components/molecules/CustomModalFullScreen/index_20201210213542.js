import React, { useEffect, useRef } from 'react';
import { Text, View, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { CustomTouchableIcon, CustomButton, CustomImage, ScreenHOC, CustomFloatButton } from '../../../components';
import { ICONS, ILLUSTRATIONS, _scaleText, COLORS, BASE_URL, TEXT_CONST } from '../../../shared';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HTMLView from 'react-native-htmlview';

const CustomModal = ({
    buttonLabel,
    icon = ILLUSTRATIONS.FRIEND_MOVED(150, 120),
    onButtonPress = () => { },
    onButtonPress2 = () => { },
    onClose = () => { },
    visible,
    showExit,
    children,
    _toggleFilterModal,
    answersListObj,
    data,
    goToQuestion
}) => {
    const questionRef = useRef();
    const renderQuestionitem = ({ item, index }) => {
        const { qId, _quest, answer } = item
        return (
            <TouchableOpacity onPress={() => {
                _toggleFilterModal()
                try {
                    goToQuestion(index)
                } catch (e) {

                }
            }} style={{ flexDirection: 'row', marginVertical: _scaleText(5).fontSize, marginHorizontal: _scaleText(10).fontSize, borderWidth: _scaleText(0.5).fontSize, padding: _scaleText(5).fontSize, borderRadius: _scaleText(5).fontSize }}>
                <MaterialCommunityIcons name={answer ? "checkbox-marked-circle" : "checkbox-blank-circle"}
                    color={answer ? COLORS.GREEN : '#c2c2c2'} size={20} />
                <Text style={{ marginLeft: _scaleText(5).fontSize }}>{'Q'}{ }</Text>{<HTMLView style={{ flex: 1 }} value={_quest.replace(/(\r\n|\n|\r)/gm, "")} />}
            </TouchableOpacity>
        )
    }
    return (
        <Modal
            animated
            animationType='slide'
            onRequestClose={onClose}
            // statusBarTranslucent
            // transparent
            visible={visible}

        >
            <ScreenHOC
                bottomSafeArea
                headerTitle={'Filters'}
                showHeader
                showBackIcon
                backIcon={ICONS.CLOSE_WHITE(30)}
                onBackPress={_toggleFilterModal}
            >


                <View style={{ flex: 1 }}>
                    <FlatList
                        ref={questionRef}
                        keyExtractor={(item, index) => item.qId + '' + index}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={true}
                        data={answersListObj}
                        extraData={answersListObj}
                        renderItem={(item) => renderQuestionitem(item)}
                    />
                </View>
                <CustomFloatButton
                    icon={ICONS.UP_ARROW(30)}
                    style={{ zIndex: 10000000000 }}
                    onPress={() => questionRef.current.scrollToIndex(0)}
                />
            </ScreenHOC>
        </Modal >
    );
}

export default CustomModal;

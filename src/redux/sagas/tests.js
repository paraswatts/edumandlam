import { takeLatest, all, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { startLoading, stopLoading, TEST_CAT_REQUEST, TEST_SERIES_LIST_REQUEST, testSeriesListSuccess, testCatListSuccess, purchasedTestSeriesListSuccess, PURCHASED_TEST_SERIES_LIST_REQUEST } from "../actions"
import { API } from "../../shared/constants/api"
import { postRequest, getRequest } from "../../shared/services/axios"
import { TEXT_CONST } from "../../shared"


function* getTestCatListSaga({ payload: { netConnected, _id, date, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_TEST_CATEGORIES(`?streamId=${_id}&date=${date}`)
            })
            console.log(data, "===========");
            if (status == 200) {
                yield put(testCatListSuccess(data))
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        console.log("hereee", error)
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* getTestSeriesListSaga({ payload: { netConnected, catId, success = () => { }, fail = () => { } } = {} }) {
    try {
        console.log("netConnected", netConnected)
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_TEST_LIST(`?catId=${catId}`)
            })
            console.log(API.GET_TEST_LIST(`?catId=${catId}`))
            console.log(data, "===========");
            if (status == 200) {
                yield put(testSeriesListSuccess(data))
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        console.log("hereee", error)
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* getPurchasedTestSeriesListSaga({ payload: { netConnected, sId, success = () => { }, fail = () => { } } = {} }) {
    try {
        console.log("netConnected", netConnected)
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_PURCHASED_TEST_LIST(`?sId=${sId}`)
            })
            console.log(API.GET_PURCHASED_TEST_LIST(`?sId=${sId}`))
            console.log(data, "===========");
            if (status == 200) {
                yield put(purchasedTestSeriesListSuccess(data))
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        console.log("hereee", error)
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}




function* FriendsSaga() {
    yield all([
        takeEvery(TEST_CAT_REQUEST, getTestCatListSaga),
        takeEvery(TEST_SERIES_LIST_REQUEST, getTestSeriesListSaga),
        takeEvery(PURCHASED_TEST_SERIES_LIST_REQUEST, getPurchasedTestSeriesListSaga)

    ]);
}

export default FriendsSaga;
import { takeLatest, all, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { startLoading, stopLoading, TEST_CAT_REQUEST, TEST_SERIES_LIST_REQUEST, testSeriesListSuccess, testCatListSuccess, purchasedTestSeriesListSuccess, PURCHASED_TEST_SERIES_LIST_REQUEST, TEST_QUESTIONS_REQUEST, TEST_LIST_REQUEST, DAILY_QUIZ_REQUEST, TEST_RESULT_SUBMIT_REQUEST, GENERATE_PAYMENT_LINK_REQUEST, QUIZ_RESULT_SUBMIT_REQUEST } from "../actions"
import { API } from "../../shared/constants/api"
import { postRequest, getRequest, postRequestWithParams } from "../../shared/services/axios"
import { TEXT_CONST } from "../../shared"


function* getTestCatListSaga({ payload: { netConnected, _id, date, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_TEST_CATEGORIES(`?streamId=${_id}&date=${date}`)
            })
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
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* getTestSeriesListSaga({ payload: { netConnected, catId, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_TEST_SERIES(`?catId=${catId}`)
            })
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
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* getPurchasedTestSeriesListSaga({ payload: { netConnected, sId, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_PURCHASED_TEST_LIST(`?sId=${sId}`)
            })
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
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* getTestQuestionsSaga({ payload: { netConnected, id, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_TEST_QUESTIONS(`?id=${id}`)
            })
            if (status == 200) {
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* getDailyQuizSaga({ payload: { netConnected, date, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GET_DAILY_QUIZ(`?date=${date}`)
            })
            if (status == 200) {
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}


function* getTestListSaga({ payload: { netConnected, sId, catId, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            let apiUrl = API.GET_TEST_LIST(`?sId=${sId}`)
            if (catId) {
                apiUrl = API.GET_TEST_LIST(`?sId=${sId}&testSeriesId=${catId}`)
            }
            console.log("apiUrl", apiUrl)
            const { data = {}, status } = yield getRequest({
                API: apiUrl
            })
            if (status == 200) {
                success(data.data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}

function* postTestResultSaga({ payload: { netConnected, json, success = () => { }, fail = () => { } } = {} }) {
    try {
        let jsonPayload = JSON.stringify(json)
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield postRequestWithParams({
                API: API.SUBMIT_TEST(`?json=${jsonPayload}`)
            })

            if (status == 200) {
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}


function* postDailyQuizSaga({ payload: { netConnected, json, success = () => { }, fail = () => { } } = {} }) {
    try {
        let jsonPayload = JSON.stringify(json)
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield postRequestWithParams({
                API: API.SUBMIT_DAILY_QUIZ(`?json=${jsonPayload}`)
            })
            if (status == 200) {
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
        fail(JSON.stringify(error));
    }
    finally {
        yield put(stopLoading());
    }
}



function* generatePaymentLink({ payload: { netConnected, amount, purpose, sId, type, productId, success = () => { }, fail = () => { } } = {} }) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { data = {}, status } = yield getRequest({
                API: API.GENERATE_PAYMENT_LINK(`?amount=${amount}&purpose=${purpose}&sId=${sId}&type=${type}&productId=${productId}`)
            })

            if (status == 200) {
                success(data);
            } else {
                fail(data.msg);
            }
        } else {
            fail(TEXT_CONST.INTERNET_ERROR)
        }
    }
    catch (error) {
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
        takeEvery(PURCHASED_TEST_SERIES_LIST_REQUEST, getPurchasedTestSeriesListSaga),
        takeEvery(TEST_QUESTIONS_REQUEST, getTestQuestionsSaga),
        takeEvery(TEST_LIST_REQUEST, getTestListSaga),
        takeEvery(DAILY_QUIZ_REQUEST, getDailyQuizSaga),
        takeEvery(TEST_RESULT_SUBMIT_REQUEST, postTestResultSaga),
        takeEvery(GENERATE_PAYMENT_LINK_REQUEST, generatePaymentLink),
        takeEvery(QUIZ_RESULT_SUBMIT_REQUEST, postDailyQuizSaga)
    ]);
}

export default FriendsSaga;
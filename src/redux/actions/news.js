
export const NEWS_CAT_REQUEST = 'NEWS_CAT_REQUEST';
export const NEWS_CAT_SUCCESS = 'NEWS_CAT_SUCCESS';

export const NEWS_SUB_CAT_REQUEST = 'NEWS_SUB_CAT_REQUEST';
export const NEWS_SUB_CAT_SUCCESS = 'NEWS_SUB_CAT_SUCCESS';

export const NEWS_DETAIL_REQUEST = 'NEWS_DETAIL_REQUEST';
export const NEWS_DETAIL_SUCCESS = 'NEWS_DETAIL_SUCCESS';
export const newsCatListRequest = payload => {
    console.log("here", payload)
    return {
        type: NEWS_CAT_REQUEST,
        payload
    }
}

export const newsCatListSuccess = payload => {
    return {
        type: NEWS_CAT_SUCCESS,
        payload
    }
}

export const newsSubCatListRequest = payload => {
    console.log("here", payload)
    return {
        type: NEWS_SUB_CAT_REQUEST,
        payload
    }
}

export const newsSubCatListSuccess = payload => {
    return {
        type: NEWS_SUB_CAT_SUCCESS,
        payload
    }
}



export const newsDetailRequest = payload => {
    console.log("here", payload)
    return {
        type: NEWS_DETAIL_REQUEST,
        payload
    }
}

export const newsDetailSuccess = payload => {
    return {
        type: NEWS_DETAIL_SUCCESS,
        payload
    }
}



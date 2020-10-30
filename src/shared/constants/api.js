const STAGING_URL = 'http://sdemo.in/coaching/api/';

export const BASE_URL = STAGING_URL;

const PREFIX_URL = BASE_URL;

export const API = {
    ADD_FRIEND: (params = '') => `${PREFIX_URL}/api/AddFriend${params}`,
    REQUEST_VERIFICATION: (params = '') => `${PREFIX_URL}/api/RequestVerification${params}`,
    CHECK_CONTACT_DETAILS_MULTIPLE: (params = '') => `${PREFIX_URL}/api/checkContactDetailsMultiple${params}`,
    CURRENT_FRIENDS: (params = '') => `${PREFIX_URL}/api/CurrentFriends${params}`,
    FAVORITE_FRIEND: (params = '') => `${PREFIX_URL}/api/FavoriteFriend${params}`,
    HELP_CATEGORIES: (params = '') => `${PREFIX_URL}/api/userHelpCategories${params}`,
    MOVED: PREFIX_URL + '/api/Moved',
    NEIGHBORHOOD_USERS: (params = '') => `${PREFIX_URL}/api/NeighborhoodUsers${params}`,
    ACCEPT_DENY_REQUEST: (params = '') => `${PREFIX_URL}/api/AcceptDenyFriendRequest${params}`,
    NEIGHBORHOOD: (params = '') => `${PREFIX_URL}/api/neighborhood${params}`,
    ONB_STEPS: PREFIX_URL + '/api/userONBSteps',
    PENDING_REQUESTS: (params = '') => `${PREFIX_URL}/api/PendingFriendRequests${params}`,
    HELP_REQUESTS: (params = '') => `${PREFIX_URL}/api/helpRequests${params}`,
    POTENTIAL_MATCHES_FOR_HELPER: (params = '') => `${PREFIX_URL}/api/potentialMatchesForHelper${params}`,
    HELP_RESPONSES: (params = '') => `${PREFIX_URL}/api/helpResponses${params}`,
    TASK_DETAILS: (params = '') => `${PREFIX_URL}/api/taskDetails${params}`,
    PHONE_UPDATE_OTP: PREFIX_URL + '/auth/requestOTPAccountUpdate',
    PHONE_UPDATE: PREFIX_URL + '/auth/updateUserAccount',
    PROFILE_WITH_PHOTO: PREFIX_URL + '/api/profilewithphoto',
    PROFILE: (params = '') => `${PREFIX_URL}/api/profile${params}`,
    TASK_HELP_ITEMS: (params = '') => `${PREFIX_URL}/api/helpItems${params}`,
    USER_ADDRESSES: (params = '') => `${PREFIX_URL}/api/alladdresses${params}`,
    ADD_NEW_ADDRESSES: (params = '') => `${PREFIX_URL}/api/newaddress${params}`,
    CREATE_TASK: (params = '') => `${PREFIX_URL}/api/newHelpRequest${params}`,
    REFERAL_REQUEST: (params = '') => `${PREFIX_URL}/api/ReferralRequest${params}`,
    HOURS_POINTS: (params = '') => `${PREFIX_URL}/api/hoursAndPoints${params}`,
    REQUEST_OTP: PREFIX_URL + '/auth/requestOTP',
    REQUEST_VERIFICATION: (params = '') => `${PREFIX_URL}/api/RequestVerification${params}`,
    RESET_MOVE: PREFIX_URL + '/api/ResetMove',
    SEARCH_FRIENDS: (params = '') => `${PREFIX_URL}/api/searchFriend${params}`,
    SIGNIN_WITH_OTP: PREFIX_URL + '/auth/signin',
    SUGGESTED: (params = '') => `${PREFIX_URL}/api/Suggestion${params}`,
    TYPE_AHEAD_ADDRESS: (params = '') => `${PREFIX_URL}/api/completeAddress${params}`,
    USER_AVAILABILITY: PREFIX_URL + '/api/userAvailability',
    VERIFIED_COUNT: (params = '') => `${PREFIX_URL}/api/verifiedcount${params}`,
    USER_INTERESTS: (params = '') => `${PREFIX_URL}/api/userInterests${params}`,
    USER_STATS: (params = '') => `${PREFIX_URL}/api/userstats${params}`,
    MUTUAL_FRIENDS: (params = '') => `${PREFIX_URL}/api/MutualFriend${params}`,
    VERIFY_ADDRESS: (params = '') => `${PREFIX_URL}/api/VerifyAddress${params}`,
    REMOVE_FRIEND: (params = '') => `${PREFIX_URL}/api/RemoveFriend${params}`,
    SEND_EMAIL_TO_VERIFY: PREFIX_URL + '/api/sendEmailtoVerify',
    UPLOAD_PROFILE_PIC: PREFIX_URL + '/api/profilepic',
    PREFERENCES: PREFIX_URL + '/api/userPreferences',
    UPDATE_USER_ADDRESS: PREFIX_URL + '/api/address',
    REQUEST_MOVE: PREFIX_URL + '/api/RequestMove',
    CANCEL_TASK_REQUESTER: PREFIX_URL + '/api/requesterCancelsTask',
    PROVIDER_OFFER_HELP: PREFIX_URL + '/api/providerOffersHelp',
    POTENTIAL_MATCHES_OF_TASK: PREFIX_URL + '/api/potentialMatchesforProvider',
    CONFIRMED_HELPERS: PREFIX_URL + '/api/confirmedHelpersList',
    GET_COMMUNITY_HELP_REQ: PREFIX_URL + '/api/communityHelpRequests',
    INTERESTED_TO_HELP: PREFIX_URL + '/api/interestedToHelp',
    ADD_HELP_CATEGORY: PREFIX_URL + '/api/addHelpCategory',
    CONFIRM_MY_MATCH: PREFIX_URL + '/api/confirmMyMatch',
    DENY_MY_MATCH: PREFIX_URL + '/api/denyMyMatch',
    TASK_PEOPLE: PREFIX_URL + '/api/taskPeople',
    ACTIVITY_DETAILS: PREFIX_URL + '/api/activityDetails',
    PROVIDER_REMOVE_HELP: PREFIX_URL + '/api/providerRemovesHelp',
    PROVIDER_CANCEL_HELP: PREFIX_URL + '/api/providerCancelsHelp',
    OTHER_FILTERS: PREFIX_URL + '/api/otherFilter',
    COMPLETE_MY_CHECK_IN: PREFIX_URL + '/api/completeMyCheckin',
    COMPLETE_MY_CHECK_OUT: PREFIX_URL + '/api/completeMyCheckout',
    DENY_CHECK_OUT: PREFIX_URL + '/api/denyCheckout',
    REQUEST_CHECK_IN: PREFIX_URL + '/api/requestCheckin',
    CONFIRM_CHECK_IN: PREFIX_URL + '/api/confirmCheckin',
    REQUEST_CHECK_OUT: PREFIX_URL + '/api/requestCheckout',
    CONFIRM_CHECK_OUT: PREFIX_URL + '/api/confirmCheckout',
    DENIAL_REASON_CODES: PREFIX_URL + '/api/denialReasonCodes',
    PROVIDE_FEEDBACK: PREFIX_URL + '/api/provideFeedback',
    HELP_ITEMS_FILTER: PREFIX_URL + '/api/helpItemsFilter',
    // new api's
    GET_IMPORTANT_CATEGORIES: (params = '') => PREFIX_URL + `importantCategoryJson.php${params}`,
    GET_IMPORTANT_SUB_CATEGORIES: (params = '') => PREFIX_URL + `importantListJson.php${params}`,
    GET_IMPORTANT_DETAIL: (params = '') => PREFIX_URL + `importantFullJson.php${params}`,
    GET_NEWS_CATEGORIES: (params = '') => PREFIX_URL + `newsCategoryJson.php${params}`,
    GET_NEWS_SUB_CATEGORIES: (params = '') => PREFIX_URL + `newsListJson.php${params}`,
    GET_NEWS_DETAIL: (params = '') => PREFIX_URL + `newsFullJson.php${params}`,
    SIGNIN: (params = '') => PREFIX_URL + `loginCheckJson.php${params}`,
    SIGNUP: (params = '') => PREFIX_URL + `insertStudentJson.php${params}`,
    GET_STREAM_LIST: 'streamListJson.php',
    GET_TEST_CATEGORIES: (params = '') => PREFIX_URL + `testSeriesCategoryJson.php${params}`,
    GET_TEST_LIST: (params = '') => PREFIX_URL + `/testSeriesListJson.php${params}`,
    GET_PURCHASED_TEST_LIST: (params = '') => PREFIX_URL + `/testSeriesPurchasedListJson.php${params}`,
    GET_VIDEO_LIST: (params = '') => PREFIX_URL + `/youtubeVideoListJson.php${params}`,
    GET_USER_PROFILE: (params = '') => PREFIX_URL + `/profileDataJson.php${params}`
}
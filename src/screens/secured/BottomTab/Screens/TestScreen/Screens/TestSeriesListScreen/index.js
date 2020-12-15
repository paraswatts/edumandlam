import TestSeriesList from './screen';
import { connect } from 'react-redux';
import { testSeriesListRequest, generatePaymentLinkRequest } from '../../../../../../../redux/actions';

const mapStateToProps = state => {
    return {
        netConnected: state.common.netConnected,
        sId: state.common.authToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testSeriesListRequest: (payload) => dispatch(testSeriesListRequest(payload)),
        generatePaymentLinkRequest: (payload) => dispatch(generatePaymentLinkRequest(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSeriesList)


import { connect } from 'react-redux'
import Ads from '../components/Ads/Ads'
import { getAds } from '../actions'

const mapStateToProps = state => ({
    ads: state.ads.list,
    isFetching: state.ads.isFetching,
    token: state.auth.token
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAds: (token) => {
            dispatch(getAds(token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ads)
import { connect } from 'react-redux'
import NavBar from '../components/NavBar/NavBar'
import { logout } from '../actions'

const mapStateToProps = (state) => {
    return {
        token: state.auth.token ? true : false,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)
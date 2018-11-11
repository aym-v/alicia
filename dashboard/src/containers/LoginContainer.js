import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import { login } from '../actions'

const mapStateToProps = state => ({
    isFetching: state.auth.isFetching,
    token: state.auth.token,
    error: state.auth.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
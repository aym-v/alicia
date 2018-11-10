import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import { login } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)
import { connect } from 'react-redux';
import { fetchRequests, clearRequests } from '../../actions/request_actions';
import RequestIndex from './request_index';

const msp = state => ({
  requests: Object.values(state.entities.requests)
})

const mdp = dispatch => ({
  fetchRequests: () => dispatch(fetchRequests()),
  clearRequests: () => dispatch(clearRequests())
})

const RequestIndexContainer = connect(msp, mdp)(RequestIndex);
export default RequestIndexContainer;
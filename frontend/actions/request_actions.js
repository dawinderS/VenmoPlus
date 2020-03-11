import * as RequestAPIUtil from '../util/request_api_util';

export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";
export const CLEAR_REQUESTS = "CLEAR_REQUESTS";

const receiveRequests = requests => ({
  type: RECEIVE_REQUESTS,
  requests
});

const receiveRequest = request => ({
  type: RECEIVE_REQUEST,
  request
});

const receiveRequestErrors = errors => ({
  type: RECEIVE_REQUEST_ERRORS,
  errors
});

export const clearRequests = () => ({
  type: CLEAR_REQUESTS
});

export const fetchRequests = () => dispatch => (
  RequestAPIUtil.fetchRequests().then(
    requests => dispatch(receiveRequests(requests)),
    errors => dispatch(receiveRequestErrors(errors))
  )
);

export const fetchRequest = requestId => dispatch => (
  RequestAPIUtil.fetchRequest(requestId).then(
    request => dispatch(receiveRequest(request)),
    errors => dispatch(receiveRequestErrors(errors))
  )
);

export const createRequest = request => dispatch => (
  RequestAPIUtil.createRequest(request).then(
    request => dispatch(receiveRequest(request)),
    errors => dispatch(receiveRequestErrors(errors))
  )
);
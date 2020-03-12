import React from 'react';
import RequestIndexItem from './request_index_item';

class RequestIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRequests()
  }

  render() {
    if (!this.props.requests) return null

    const requests = this.props.requests.map(request => (
      <RequestIndexItem request={request} key={request.id} />
    ));

    return (
      <div>
        <ul>{requests}</ul>
      </div>
    )
  }
}

export default RequestIndex;
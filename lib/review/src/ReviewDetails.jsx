import * as React from 'react';
import ReviewDetail from './ReviewDetail';
import faker from 'faker';

class ReviewDetails extends React.Component {
  render() {
    const { deployment } = this.props;

    return (
      <div>
        <ReviewDetail
          label="Name"
          content={deployment.name}
        />
        <ReviewDetail
          label="ID"
          content={deployment._id}
        />
        <ReviewDetail
          label="Description"
          content={deployment.description}
        />
        <ReviewDetail
          label="Status"
          content={deployment.status}
        />

        {deployment.steps.map(step => <ReviewDetail
          label="Step Type"
          content={step.type}
        />)}

      </div>
    );
  }
}

export default ReviewDetails;

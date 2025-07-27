import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const getTitleColor = (status) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'green';
      case 'scheduled':
        return 'blue';
      default:
        return 'black';
    }
  };

  return (
    <div className={styles.box}>
      <h3 style={{ color: getTitleColor(cohort.status) }}>{cohort.name}</h3>
      <p><strong>Started On</strong><br />{cohort.startDate}</p>
      <p><strong>Current Status</strong><br />{cohort.status}</p>
      <p><strong>Coach</strong><br />{cohort.coach}</p>
      <p><strong>Trainer</strong><br />{cohort.trainer}</p>
    </div>
  );
}

export default CohortDetails;

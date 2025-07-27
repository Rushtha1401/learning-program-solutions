import React from 'react';
import CohortDetails from './Components/CohortDetails';
import styles from './App.module.css';

function App() {
  const cohorts = [
    {
      name: 'INTADMDF10 -.NET FSD',
      startDate: '2022-02-22',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      name: 'ADM21JF014 - Java FSD',
      startDate: '2021-09-10',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith'
    },
    {
      name: 'CDBJF21025 - Java FSD',
      startDate: '2021-12-24',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cohorts Details</h1>
      <div className={styles.cohortContainer}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
     <h1 className={styles.title}>Statistics</h1>
                <p className={styles.stats}>Good: {good}</p>
                <p className={styles.stats}>Neutral: {neutral}</p>
                <p className={styles.stats}>Bad: {bad}</p>
                <p className={styles.stats}>Total: {total}</p>
        <p className={styles.stats}>Positive feedback: {positivePercentage}%</p>
        </>
)

Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
};


export default Statistics;
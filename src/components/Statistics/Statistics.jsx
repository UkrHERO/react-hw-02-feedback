import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, goodPercent }) => (
<>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {goodPercent}%</p>
</>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPercent: PropTypes.number.isRequired,

};

export default Statistics;
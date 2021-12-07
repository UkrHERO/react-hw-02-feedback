import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({ onIncrement }) => (
  <div className="Counter__btns">
    <button type="button" data-name="good" onClick={onIncrement}>
      Good
    </button>
    <button type="button" data-name="neutral" onClick={onIncrement}>
      Neutral
    </button>
    <button type="button" data-name="bad" onClick={onIncrement}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;

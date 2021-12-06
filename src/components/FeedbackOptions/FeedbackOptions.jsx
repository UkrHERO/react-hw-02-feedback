const FeedbackOptions = ({ onIncrement }) => (
<div className="Counter__controls">
<button type="button" data-name="good" onClick={onIncrement}>Good</button>
<button type="button" data-name="neutral" onClick={onIncrement}>Neutral</button>
<button type="button" data-name="bad" onClick={onIncrement}>Bad</button>
</div>
);

export default FeedbackOptions;
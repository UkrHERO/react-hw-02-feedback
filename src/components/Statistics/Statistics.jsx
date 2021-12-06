const Statistics = ({ good, neutral, bad, total, goodPercent }) => (
<>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {goodPercent}%</p>
</>
);

export default Statistics;
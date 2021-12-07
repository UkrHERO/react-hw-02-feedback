import PropTypes from 'prop-types';

const Section = ({ title }) => <h3>{title}</h3>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;

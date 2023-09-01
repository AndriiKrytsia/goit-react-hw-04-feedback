import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClick, options }) => {
  return (
    <>
      <ul>
        {options.map(id => {
          return (
            <li key={id}>
              <button type="button" onClick={() => onClick(id)}>
                {id}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

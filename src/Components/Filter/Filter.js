import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.Label}>
      Фильтр по имени:
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={evt => {
          dispatch(action.changeFilterValue(evt.target.value));
        }}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return {
//     value: state.filter,
//   };
// };

// const mapDispatchToProp = dispatch => {
//   return {
//     onChange: evt => dispatch(action.changeFilterValue(evt.target.value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProp)(Filter);

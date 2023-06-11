import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { Input} from '@chakra-ui/react';
import shortid from 'shortid';
import css from './search.module.css';

export const Search = () => {
  const searchId = shortid.generate();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  
  const filterHandler = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  }
    return (
      <label htmlFor={searchId} className={css.searchLabel}>
        Find contacts by name
        <Input
          id={searchId}
          type="text"
          name="filter"
          value={filter}
          onChange={filterHandler}
          color="teal"
        />
      </label>
    );
};


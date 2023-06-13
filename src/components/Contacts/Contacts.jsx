import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, deleteContact } from 'redux/operations';
import authSelectors from 'redux/Auth/AuthSelectors';
import { Button, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';
import css from './contacts.module.css';

export default function Contacts() {
  const onContactDelete = event => {
    contactDeleteHandler(event.currentTarget.dataset.id);
  };

  const { contacts, isLoading } = useSelector(state => state.contacts);

  const dispatch = useDispatch();  

  const filter = useSelector(state => state.filter);
  const token = useSelector(authSelectors.getToken);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  useEffect(() => {
      dispatch(getContacts());
    }, [dispatch]);

  const filterToLowercase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterToLowercase);
  });

  const contactDeleteHandler = idToDelete => {

    dispatch(deleteContact(idToDelete));
  };

  const contactsArray = visibleContacts;
  return (
    <List className={css.contactsList}>
      {contactsArray.map(contact => {
        return (
          <ListItem key={contact.id} className={css.contactsListItems__item}>
            {contact.name}: {contact.number}{' '}
            <Button
              type="button"
              disabled={isLoading}
              data-id={contact.id}
              onClick={onContactDelete}
              className={css.deleteButton}
              colorScheme="teal"
              size="md"
            >
              delete
            </Button>{' '}
          </ListItem>
        );
      })}
    </List>
  );
}

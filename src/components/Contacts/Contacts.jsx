import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, deleteContact } from 'redux/operations';
import { Button, List, ListItem } from '@chakra-ui/react';
import authSelectors from 'redux/Auth/AuthSelectors';
import css from './contacts.module.css';

export default function Contacts() {
  const onContactDelete = event => {
    contactDeleteHandler(event.currentTarget.dataset.id);
  };

  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();  

  const filter = useSelector(state => state.filter);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
      dispatch(getContacts(token));
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
          <ListItem key={contact.id} className={css.contactsListItemst__item}>
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

import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Register from './Register/Register';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import PublicRoute from './Routes/PublicRoute';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/AuthSelectors';
import PrivateRoute from './Routes/PrivateRoute';
import { auth } from 'redux/Auth/AuthOperations';
import { Search } from './Search/Search';
import { ChakraBaseProvider, extendBaseTheme} from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const {
  Button,
  Input,
  FormLabel,
  Tabs,
  TabList,
  TabIndicator,
  Flex,
  List,
  ListItem,
  Spacer,
  Box,
  Heading,
} = chakraTheme.components;

const formTheme = extendBaseTheme({
  components: {
    Button,
    Input,
    FormLabel,
  },
});

const headerTheme = extendBaseTheme({
  components: {
    Tabs,
    TabList,
    TabIndicator,
    Flex,
    List,
    Spacer,
    Button,
    Box,
    ListItem,
  },
});

const contactsTheme = extendBaseTheme({
  components: {
    Button,
    List,
    ListItem,
  },
});

const homePageTheme = extendBaseTheme({
  components: {
    Heading,
  },
});

export default function App() {

  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(auth.getCurrent(token));
    }
  }, [dispatch, token]);

  return (
    <div>
      <ChakraBaseProvider theme={headerTheme}>
        <Header />
      </ChakraBaseProvider>

      <Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute exact>
                <ChakraBaseProvider theme={homePageTheme}>
                  <HomePage />
                </ChakraBaseProvider>
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute exact restricted>
                <ChakraBaseProvider theme={formTheme}>
                  <Register />
                </ChakraBaseProvider>
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute exact restricted>
                <ChakraBaseProvider theme={formTheme}>
                  <Login />
                </ChakraBaseProvider>
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute exact>
                <ChakraBaseProvider theme={formTheme}>
                  <ContactsForm />
                  <Search />
                </ChakraBaseProvider>
                <ChakraBaseProvider theme={contactsTheme}>
                  <Contacts />
                </ChakraBaseProvider>
              </PrivateRoute>
            }
          />
        </Routes>
      </Fragment>
    </div>
  );
}

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/AuthSelectors';
import {
  Tabs,
  TabList,
  TabIndicator,
  Flex,
  List,
  ListItem,
  Box,
} from '@chakra-ui/react';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <nav>
          <List>
            {isLoggedIn ? (
              <Flex>
                <ListItem>
                  <NavLink to="/">
                    <Box p={4}>Home page</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/contacts">
                    <Box p={4}>Contacts</Box>
                  </NavLink>
                </ListItem>
              </Flex>
            ) : (
              <Flex>
                <ListItem>
                  <NavLink to="/register">
                    <Box p={4}>Sign up</Box>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/login">
                    <Box p={4}>Log in</Box>
                  </NavLink>
                </ListItem>
              </Flex>
            )}
          </List>
        </nav>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
    </Tabs>
  );
}

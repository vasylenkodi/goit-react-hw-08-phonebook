import { useSelector, useDispatch } from 'react-redux';
import { auth } from 'redux/Auth/AuthOperations';
import authSelectors from 'redux/Auth/AuthSelectors';
import { Flex, Button, Spacer, Box } from '@chakra-ui/react';

export default function UserMenu() {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(auth.logOut());
  };
  return isLoggedIn ? (
    <Flex align="baseline" justify="space-between">
      <Box mr='20px'>
        <p>{userEmail}</p>
      </Box>
      <Spacer />
      <Button onClick={handleLogOut} colorScheme="teal" size="md">
        Logout
      </Button>
    </Flex>
  ) : (
    <div>Please, sign up or log in</div>
  );
}

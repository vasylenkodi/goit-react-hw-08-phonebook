import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/Auth/AuthOperations';
import { Button, Input, FormLabel, FormControl } from '@chakra-ui/react';

export default function Login() {
  const initialState = {
    email: '',
    password: '',
  };
  const [data, setData] = useState(initialState);

    const dispatch = useDispatch();
    
  const handleChange = event => {
    const enteredValue = event.target.value;
      const type = event.target.name;

    setData({
      ...data,
      [type]: enteredValue,
    });
  };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(auth.logIn({ ...data }));
        setData(initialState);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="email">
        Email
        <Input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
          color="teal"
        />
      </FormLabel>
      <FormLabel htmlFor="password">
        Password
        <Input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
          color="teal"
        />
      </FormLabel>
      <Button type="submit" colorScheme="teal" size="md">
        log in
      </Button>
    </form>
  );
}

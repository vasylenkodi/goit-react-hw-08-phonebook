import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'redux/Auth/AuthOperations';
import { Button, Input, FormLabel } from '@chakra-ui/react';

const Register = () => {
  const initialState = {
    name: '',
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
    dispatch(auth.register({ ...data }));
    setData(initialState);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Login
        <Input
          type="text"
          name="name"
          value={data.name}
          id="name"
          onChange={handleChange}
          color="teal"
        />
      </FormLabel>
      <FormLabel htmlFor="email">
        Email
        <Input
          type="email"
          name="email"
          value={data.email}
          id="email"
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
        Sign up
      </Button>
    </form>
  );
};

export default Register;

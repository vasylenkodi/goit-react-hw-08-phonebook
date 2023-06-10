import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { Flex, Spacer } from '@chakra-ui/react';

export default function Header() {
    return (
      <header>
        <Flex alignItems="space-between">
          <Navigation />
          <Spacer />
          <UserMenu />
        </Flex>
      </header>
    );
}
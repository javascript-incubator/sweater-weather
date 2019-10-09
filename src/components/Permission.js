/* eslint-disable jsx-a11y/accessible-emoji */
import { Flex, Image, Text } from '@elementary/components';
import Permission from '../permission.gif';

export default ({ onClick }) => (
  <Flex
    w="100%"
    h="100%"
    justifyContent="center"
    alignItems="center"
    onClick={onClick}
  >
    <Flex
      style={{
        background:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==',
      }}
      alignItems="center"
      direction="column"
      p="30px"
    >
      <Image src={Permission} style={{ objectFit: 'none' }} />
      <Text border="solid 1px black" p="10px" bg="white" mt="20px">
        This App needs to access to your Location, <br />
        so make sure GPS is enabled and <br />
        then click here to continue 🌍
      </Text>
    </Flex>
  </Flex>
);

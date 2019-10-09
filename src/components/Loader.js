import { Flex, Image, Text } from '@elementary/components';

const Awk =
  'https://media.giphy.com/media/l3yDGoJS5eVnErm9qW/giphy-downsized.gif';

const Loading = 'https://media.giphy.com/media/fwEVUFkDc66xA7mXBc/source.gif';

export default ({ error }) => (
  <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
    <Flex
      style={{
        background:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==',
      }}
      alignItems="center"
      direction="column"
      p="30px"
    >
      <Image
        src={error ? Awk : Loading}
        style={{ objectFit: 'cover' }}
        width="200px"
      />
      {error && (
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <Text
          border="solid 1px black"
          p="10px"
          bg="white"
          mt="20px"
          width="200px"
        >
          Unable to get your location 🤷🏻‍♂️
        </Text>
      )}
    </Flex>
  </Flex>
);

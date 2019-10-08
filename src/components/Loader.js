import { Flex, Image } from '@elementary/components';
import Loading from '../source.gif';

export default () => (
  <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
    <Flex
      style={{
        background:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==',
      }}
      w="300px"
      h="300px"
      justifyContent="center"
    >
      <Image src={Loading} style={{ objectFit: 'none' }} />
    </Flex>
  </Flex>
);

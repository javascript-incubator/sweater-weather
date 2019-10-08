import { Flex } from '@elementary/components';

export default ({ ...props }) => (
  <>
    <Flex
      style={{
        background:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==',
      }}
      w="100%"
      h="100px"
    ></Flex>
    <Flex
      py={({ theme }) => theme.breakpoints([theme.margins.moby, '30px'])}
      direction="column"
      {...props}
    />
  </>
);

import { Text, Image, Flex } from '@elementary/components';
import { Tooltip } from 'react-tippy';

export default ({ text, image }) => (
  <Flex>
    <Tooltip
      html={
        <Flex
          style={{
            background:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==',
          }}
          direction="column"
          p="30px"
        >
          <Image src={image} height="300px" width="200px" className="contain" />
        </Flex>
      }
    >
      <Text f="36px" className="hoverable cursive" fontWeight="700">
        {text}
      </Text>
    </Tooltip>
  </Flex>
);

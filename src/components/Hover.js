import { Text, Image, Flex, Relative, Absolute } from '@elementary/components';
import { Tooltip } from 'react-tippy';

export default ({ text, image }) => (
  <Flex>
    <Tooltip
      html={
        <Relative>
          <Flex
            style={{
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==',
            }}
            direction="column"
            height="300px"
            width="200px"
          >
            <Absolute zIndex={1} top="10px" left="10px">
              <Image
                src={image}
                height="300px"
                width="200px"
                className="contain"
              />
            </Absolute>
          </Flex>
        </Relative>
      }
    >
      <Text f="36px" className="hoverable cursive" fontWeight="700">
        {text}
      </Text>
    </Tooltip>
  </Flex>
);

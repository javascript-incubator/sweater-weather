import { Text, Image, Flex, Relative, Absolute } from '@elementary/components';
import Tooltip from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

export default ({ text, image }) => (
  <Flex>
    <Tooltip
      placement="right"
      arrow={false}
      distance={30}
      animation="shift-away"
      content={
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
      <div>
        <Text f="36px" className="hoverable cursive" fontWeight="700">
          {text}
        </Text>
      </div>
    </Tooltip>
  </Flex>
);

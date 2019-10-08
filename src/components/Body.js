import { Flex } from '@elementary/components';

export default ({ ...props }) => (
  <Flex
    px={({ theme }) =>
      theme.breakpoints([theme.margins.mobx, theme.margins.des])
    }
    direction="column"
    {...props}
  />
);

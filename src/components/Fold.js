import { Flex } from '@elementary/components';

export default ({ withHeader, ...props }) => (
  <Flex
    py={({ theme }) =>
      theme.breakpoints([theme.margins.moby, theme.margins.des])
    }
    direction="column"
    borderTop={withHeader && 'solid 5px black'}
    {...props}
  />
);

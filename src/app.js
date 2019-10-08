import { Text } from '@elementary/components';
import { Motion, spring } from 'react-motion';
import { useState } from 'react';

import Fold from './components/Fold';
import useLocation from './useLocation';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Body from './components/Body';

import './style.css';

function getSweaterText(temp) {
  if (temp > 5 && temp <= 20) {
    return 'Woolen & Body Warmers recommended, you need your Coat if you are heading out';
  }
  if (temp > 20 && temp <= 25) {
    return 'Light woolens recommended, like Hoodie, and yeah you guessed it: a Sweater maybe';
  }
  if (temp > 25) {
    return 'Cottons recommended, like a T-Shirt would do... maybe';
  }
  return 'Where the Fuck are you?';
}

const swtext = [
  'When your torso feels like a cat’s tongue: warm but slightly scratchy.',
  'A very nostalgic time for sheep.',
  'A song by The Neighbourhood',
  'Antarctica in a few years, at this rate.',
  'This WebApp, duh',
  'The time of year where the seasons transition from summer to fall and then winter.',
];

function App() {
  const { data, error } = useLocation();
  const [state, setState] = useState(Math.floor(Math.random() * swtext.length));

  if (!data || error) {
    return <Loader error={error} />;
  }

  return (
    <>
      <Header
        headerData={{ ...data.current_observation, location: data.location }}
      />
      <Body>
        <Fold>
          <Text
            fontWeight="900"
            f={({ theme }) => theme.breakpoints(['70px', '90px'])}
            className="roboto"
          >
            <Motion
              defaultStyle={{ x: 0 }}
              style={{
                x: spring(data.current_observation.condition.temperature),
              }}
            >
              {({ x }) => (
                <span>
                  {x.toFixed(0)}°C in {data.location.city}
                </span>
              )}
            </Motion>
          </Text>
          <Text f="30px" pt="20px">
            {getSweaterText(
              Number(data.current_observation.condition.temperature),
            )}
          </Text>
        </Fold>
        <Fold withHeader>
          <Text
            fontWeight="900"
            f={({ theme }) => theme.breakpoints(['50px', '70px'])}
            className="roboto"
            fontStyle="italic"
          >
            What is Sweater Weather?
          </Text>
          <Text
            f="30px"
            pt="20px"
            onClick={_ => setState(Math.floor(Math.random() * swtext.length))}
            className="changable"
          >
            {swtext[state]}
          </Text>
        </Fold>
        <Footer>
          <Text fontWeight="900" f="24px">
            Written with Hearts and Lambdas by Rajat Sharma
          </Text>
        </Footer>
      </Body>
    </>
  );
}

export default App;

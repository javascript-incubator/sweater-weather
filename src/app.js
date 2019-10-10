import { Text, Grid } from '@elementary/components';
import { Motion, spring } from 'react-motion';

import Fold from './components/Fold';
import useLocation from './useLocation';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Permission from './components/Permission';

import Body from './components/Body';
import Hover from './components/Hover';

import './style.scss';

function getSweaterText(temp) {
  if (temp > 5 && temp <= 20) {
    return {
      title:
        'Woolen & Body Warmers recommended, you need your Coat if you are heading out',
    };
  }
  if (temp > 20 && temp <= 25) {
    return {
      title: 'Light woolens recommended, like:',
      styles: [
        {
          name: 'Cropped Sweaters',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRc8WimEhRpIuzDzxKE5CV0ucqjbg_uRE_r6-l54ije_0lsARhw',
        },
        {
          name: 'Light Scarves',
          image:
            'https://images.unsplash.com/photo-1480607891196-1cae9c7827e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        },
        {
          name: 'Suede Shoes',
          image:
            'https://images.asos-media.com/products/selected-homme-suede-shoes-in-tan/12951564-1-sand?$XXL$&wid=513&fit=constrain',
        },
        {
          name: 'Hoodies',
          image:
            'https://images.unsplash.com/photo-1558547484-ecee6e67c86b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
      ],
    };
  }
  if (temp > 25) {
    return {
      title: 'Cottons recommended, like:',
      styles: [
        {
          name: 'T shirts',
          image:
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        },
        {
          name: 'Polos',
          image:
            'https://images.unsplash.com/photo-1563450222998-1321529cc839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
          name: 'Shorts',
          image:
            'https://images.unsplash.com/photo-1545922996-cb0da7a16c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80',
        },
        {
          name: 'Shirts',
          image:
            'https://images.unsplash.com/photo-1543471432-2702be025c10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1460&q=80',
        },
        {
          name: 'Chinos',
          image:
            'https://images.unsplash.com/photo-1499202977705-65f436dac18a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
        },
      ],
    };
  }
  return { title: 'Where the Fuck are you?' };
}

function App() {
  const { data, error, permitted, trackMe } = useLocation();

  if (!permitted) {
    return <Permission onClick={trackMe} />;
  }

  if (!data || error) {
    return <Loader error={error} />;
  }

  const collection = getSweaterText(
    Number(data.current_observation.condition.temperature),
  );

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
            {`Looks like it's ${data.current_observation.condition.text.toLowerCase()} right now, it will ${
              data.current_observation.condition.text.toLowerCase() !==
              data.forecasts[0].text.toLowerCase()
                ? 'evolve to'
                : 'stay'
            } ${data.forecasts[0].text.toLowerCase()}, with a maximum temperature of ${
              data.forecasts[0].high
            }°C. ${collection.title}`}
          </Text>
          {collection.styles && (
            <Grid
              gridTemplateColumns={({ theme }) =>
                theme.breakpoints(['1fr', '1fr 1fr'])
              }
              gridRowGap="30px"
              mt="50px"
            >
              {collection.styles.map((style, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Hover text={style.name} image={style.image} key={i} />
              ))}
            </Grid>
          )}
          <Text f="24px" pt="70px">
            Its Fall time. An excuse for a delightful thrifting jaunt to collect
            seasonal staples that you wear twice and that then take up half your
            drawer space for the rest of the year. Yayy!
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

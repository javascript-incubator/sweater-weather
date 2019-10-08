import { Text, Grid } from '@elementary/components';
import { Motion, spring } from 'react-motion';
import { useState } from 'react';

import Fold from './components/Fold';
import useLocation from './useLocation';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
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
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QBqa9Y-qvED5CJjXXztexCMBifllBfh7S1DkM_0iAaBJHRRzeQ',
        },
        {
          name: 'Suede Shoes',
          image:
            'https://images.asos-media.com/products/selected-homme-suede-shoes-in-tan/12951564-1-sand?$XXL$&wid=513&fit=constrain',
        },
        {
          name: 'Hoodies',
          image:
            'https://lsco.scene7.com/is/image/lsco/levis/clothing/194910037-front-pdp-lse.jpg?$grid_desktop_full$',
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
            'https://s3.thcdn.com/productimg/300/300/11863818-1524626802125162.jpg',
        },
        {
          name: 'Polo',
          image:
            'https://cdn.shopify.com/s/files/1/0014/6217/3742/products/113044-8800A.2.INTERNATIONAL_BLUE_2d9858b1-c307-4d67-8a7d-f60ae41cf5c4_2000x.jpg?v=1558619132',
        },
        {
          name: 'Shorts',
          image:
            'https://i1.adis.ws/i/lucky/7M20810_340_1/Saturday-Stretch-10-Short-340?$productMainDesktop$',
        },
        {
          name: 'Shirts',
          image:
            'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg',
        },
      ],
    };
  }
  return { title: 'Where the Fuck are you?' };
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
            Its Fall time. An excuse for a delightful thrifting jaunt to collect
            seasonal staples that you wear twice and that then take up half your
            drawer space for the rest of the year.
          </Text>
          <Text f="30px" pt="20px">
            {collection.title}
          </Text>
          {collection.styles && (
            <Grid
              gridTemplateColumns={({ theme }) =>
                theme.breakpoints(['1fr', '1fr 1fr'])
              }
              gridRowGap="30px"
              mt="30px"
            >
              {collection.styles.map(style => (
                <Hover text={style.name} image={style.image} />
              ))}
            </Grid>
          )}
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

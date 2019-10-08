import Helmet from 'helmet';
import { Provider } from '@elementary/components';

function App({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="A webapp to help you decide if you need to wear a sweater or not"
        />
        <meta property="og:title" content="Sweater Weather" />
        <meta
          property="og:description"
          content="A webapp to help you decide if you need to wear a sweater or not"
        />
        <meta
          property="og:image"
          content="https://static.thenounproject.com/png/3777-200.png"
        />
        <link
          rel="canonical"
          href="https://rajatsharma.github.io/sweater-weather"
        />
        <title>Sweater Weather</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Provider
        theme={{
          font: "'Roboto Mono', monospace",
          breakpoints: ['@media(min-width: 540px)'],
          margins: {
            mobx: '30px',
            des: '90px',
            moby: '60px',
          },
        }}
        className="provider"
      >
        {children}
      </Provider>
    </>
  );
}

export default App;

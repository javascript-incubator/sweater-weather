import { useState } from 'react';
import axios from 'axios';
import CryptoJs from 'crypto-js';

const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
const consumerKey =
  'dj0yJmk9OFFKdWtZZ1g1OVBjJmQ9WVdrOVJGQnVNbWxvTlRZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWJj';
const consumerSecret = '936be438d568d975f5116bf1ff56c279b93c2f40';

function createAuthHash(query) {
  const concat = '&';
  const oauth = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: Math.random()
      .toString(36)
      .substring(2),
    oauth_signature_method: 'HMAC-SHA1',
    // eslint-disable-next-line radix
    oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
    oauth_version: '1.0',
  };

  const merged = { ...query, ...oauth };

  // Note the sorting here is required
  const mergedArr = Object.keys(merged)
    .sort()
    .map(k => [`${k}=${encodeURIComponent(merged[k])}`]);

  const signatureBaseStr =
    // eslint-disable-next-line prefer-template
    'GET' +
    concat +
    encodeURIComponent(url) +
    concat +
    encodeURIComponent(mergedArr.join(concat));

  const compositeKey = encodeURIComponent(consumerSecret) + concat;
  const hash = CryptoJs.HmacSHA1(signatureBaseStr, compositeKey);
  const signature = hash.toString(CryptoJs.enc.Base64);

  oauth.oauth_signature = signature;
  return `OAuth ${Object.keys(oauth)
    .map(k => [`${k}="${oauth[k]}"`])
    .join(',')}`;
}

export default () => {
  const [data, setData] = useState(null);
  const [permitted, setPermission] = useState(null);
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    const query = {
      lat: coords.latitude,
      lon: coords.longitude,
      format: 'json',
      u: 'c',
    };

    if (data) {
      return;
    }

    axios
      .get(url, {
        headers: {
          Authorization: createAuthHash(query),
          'x-yahoo-app-id': 'DPn2ih56',
        },
        params: query,
      })
      .then(result => {
        setData(result.data);
      });
  };

  const onError = err => {
    setError(err.message);
  };

  const trackMe = () => {
    // eslint-disable-next-line no-undef
    const geo = window.navigator.geolocation;
    setPermission(true);
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    geo.getCurrentPosition(onChange, onError);
  };

  return { data, error, trackMe, permitted };
};

import React, {
  useEffect,
  useState
} from 'react'

import axios from 'axios'

const getAllHeroes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://express-mlbb-api.vercel.app/mobile-legends/hero');
        setData(response.data.data)
        // console.log(response.data)
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default getAllHeroes


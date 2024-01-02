import React, {
    useEffect,
    useState
  } from 'react'
  
  import axios from 'axios'

const getHeroByRole = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      let mounted = true
      const fetchData = async () => {
        try {
          const response = await axios.get(url)

          if (mounted) {
            setData(response.data)
          }
        } catch (error) {
          if (mounted) {
            console.error('Terjadi kesalahan:', error)
          }
        }
      };
  
      fetchData()

      return () => {
        mounted = false;
      }

    }, [url]);
  
    return data;
  }

  export default getHeroByRole
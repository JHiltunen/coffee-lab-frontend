import {useEffect, useState} from 'react';
import {doFetch} from '../utils/http';
import {baseUrl} from '../utils/variables';

const useMedia = () => {
    const [coffeeArray, setCoffeeArray] = useState([]);
  
    useEffect(() => {
      (async () => {
        setCoffeeArray(await loadCoffees());
      })();
    }, []);
  
    const loadCoffees = async () => {
        try {
            const response = await doFetch(baseUrl + 'coffees/');
            return response;
          } catch (e) {
            console.log('Error:', e.message);
          }
    };
  
    const uploadNewCoffee = async (jsonData) => {
      try {
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(jsonData),
        };
        console.log('formSSSS', jsonData);
        const result = await doFetch(baseUrl + 'coffees', options);
        return result;
      } catch (e) {
        console.log('uploadMedia error', e);
        throw new Error(e.message);
      }
    }

    return {coffeeArray, loadCoffees, uploadNewCoffee};
  };
  
  export {useMedia};
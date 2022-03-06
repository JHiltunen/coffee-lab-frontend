import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {baseUrl} from '../utils/variables';
import ListItem from './ListItem';

const List = (props) => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
        const url = baseUrl + 'coffees';
      try {
        const response = await fetch(baseUrl + 'coffees/');
        const json = await response.json();
        
        setMediaArray(json);
      } catch (e) {
        console.log('Error:', e.message);
      }
    };
    loadMedia();
  }, []);
  console.log('List: mediaArray', mediaArray);

  return (
    <FlatList
      data={mediaArray.coffees}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default List;

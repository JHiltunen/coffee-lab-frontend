import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import {baseUrl} from '../utils/variables';
import ListItem from './ListItem';

const List = (props) => {
  const {coffeeArray} = useMedia();

  return (
    <FlatList
      data={coffeeArray.coffees}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { uploadsUrl } from '../utils/variables';

const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.name}</Text>
        <Text>{(parseInt(singleMedia.price) / 100)} €</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 6,
    flex: 1,
  },

  imagebox: {
    flex: 1,
  },

  image: {
    flex: 1,
    borderRadius: 6,
  },

  textbox: {
    flex: 2,
    padding: 10,
  },

  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
};

export default ListItem;

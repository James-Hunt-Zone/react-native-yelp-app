import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  const { name, price, image_url, rating, review_count } = result;

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, Reviews {review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 15,
  },
  name: {
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultDetail;

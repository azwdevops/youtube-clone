import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={{ marginBottom: 10 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{ width: "100%", height: 200 }}
        />
        <View style={{ flexDirection: "row", margin: 5 }}>
          <MaterialIcons name="account-circle" size={40} color="#212121" />

          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                color: textColor,
                fontSize: 20,
                width: Dimensions.get("screen").width - 100,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {props.title}
            </Text>
            <Text style={{ color: textColor }}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

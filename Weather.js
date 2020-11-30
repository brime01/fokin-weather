import React from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "이거 아이콘 맞냐?."
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "무슨 날씨지?."
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "비다!! 집에만 있어야 하는날!"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "눈이다!! 집에만 있어야 하는날!"
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "무슨 날씨인지 모름.."
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "날씨가 좋다! 집에서 게임하기 좋은날!."
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "흐림"
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "맞는 아이콘이 없나봄."
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "맞는 아이콘이 없나봄."
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "어떤상태의 날씨인지 모름"
      }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}℃</Text> 
        </View>
        <View style={styles.halfContainer}>
        </View>
        <View style={{...styles.container, ... styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize: 36,
        color: "white"
    },

    title:{
        color:"white",
        fontSize: 54,
        fontWeight: "300",
        marginBottom: 10
    },

    subtitle:{
        color:"white",
        fontWeight: "600",
        fontSize: 24
    },

    textContainer:{
        paddingHorizontal: 20
    }
});
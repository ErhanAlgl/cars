import React from 'react';
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    const { buttonStyle , textStyle} = styles;

    return (
    <TouchableOpacity
        onPress={props.buttonPress}
        style={buttonStyle}
    >
        <Text style={textStyle} >Detaylı Bilgi İçin Tıklatın</Text>
    </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
      fontSize: 16,
      fontWeight: '500',
      paddingTop: 6,
      paddingBottom: 6,
      color: 'white',
    },
    buttonStyle: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffb600",
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7,

    }

};


export default Button;
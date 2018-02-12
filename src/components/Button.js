import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {
  const {buttonContainerStyle, buttonTextStyle} = styles;
  return(
    <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonContainerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextStyle: {
    color: '#007aff',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Button;

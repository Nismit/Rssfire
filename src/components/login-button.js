import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export const LoginButton = ({type, onPress}) => {
    let title = 'Login with ';
    let backgroundColor = '#f0ad4e';
    let textColor = '#fff';

    switch(type.toLowerCase()) {
      case 'facebook':
        title += 'Facebook';
        backgroundColor = '#3b5998';
        break;
      case 'twitter':
        title += 'Twitter';
        backgroundColor = '#1da1f2';
        break;
      case 'google':
        title += 'Google';
        backgroundColor = '#dd4b39';
        break;
      default:
        title += type;
    }

  return (
    <Button
      // raised
      // large
      // iconRight
      // icon={{name: 'cached'}}
      buttonStyle={styles.buttonStyle}
      backgroundColor={`${backgroundColor}`}
      // borderRadius={`${this.props.backgroundColor}`}
      // color={`${this.props.backgroundColor}`}
      // textStyle={}
      onPress={onPress}
      fontSize={19}
      underlayColor="transparent"
      title={`${title}`}
    />
  );
}

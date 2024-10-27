import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ImageBackground, Image } from 'react-native';

const Footer: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assests/footer.png')} // Update with your image path
      style={styles.footer}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        {/* Logo and Description */}
        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => Linking.openURL('#')}>
            <Text style={styles.footerLogo}>Exclusive</Text>
          </TouchableOpacity>
          <Text style={styles.footerDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga harum voluptate?
          </Text>
        </View>

        {/* Support Section */}
        <View style={styles.footerItem}>
          <Text style={styles.footerTitle}>Support</Text>
          <View style={styles.footerList}>
            <View style={styles.footerListItem}>
              <Image source={require('../assests/location.png')} style={styles.icon} />
              <Text style={styles.footerListText}>Stockholm, Sweden</Text>
            </View>
            <View style={styles.footerListItem}>
              <Image source={require('../assests/email.png')} style={styles.icon} />
              <Text style={styles.footerListText}>email@gmail.com</Text>
            </View>
            <View style={styles.footerListItem}>
              <Image source={require('../assests/telephone.png')} style={styles.icon} />
              <Text style={styles.footerListText}>+46 123 456 78 | +46 72 345 67</Text>
            </View>

          </View>
        </View>

        {/* Account Section */}
        <View style={styles.footerItem}>
          <Text style={styles.footerTitle}>Account</Text>
          <View style={styles.footerList}>
            <Text style={styles.footerListItem}>Account</Text>
            <Text style={styles.footerListItem}>Login / Register</Text>
            <Text style={styles.footerListItem}>Cart</Text>
            <Text style={styles.footerListItem}>Shop</Text>
          </View>
        </View>

        {/* Legal Section */}
        <View style={styles.footerItem}>
          <Text style={styles.footerTitle}>Legal</Text>
          <View style={styles.footerList}>
            <Text style={styles.footerListItem}>Privacy policy</Text>
            <Text style={styles.footerListItem}>Terms of use</Text>
            <Text style={styles.footerListItem}>FAQ's</Text>
            <Text style={styles.footerListItem}>Contact</Text>
          </View>
        </View>
      </View>

      {/* Footer Bottom */}
      <View style={styles.footerBottom}>
        <View style={styles.container}>
          <Text style={styles.footerCopy}>
            Copyright Exclusive 2023. All rights reserved.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
  },
  backgroundImage: {
    opacity: 0.7,
  },
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  footerItem: {
    paddingVertical: 10,
  },
  footerLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',

  },
  footerDescription: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold', // Make the text bold

  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  footerList: {
    paddingTop: 5,
    fontWeight: 'bold', // Make the text bold

  },
  footerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    fontWeight: 'bold', // Make the text bold

  },
  footerListText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold', // Make the text bold
  },
  icon: {
    width: 20, // Adjust size as needed
    height: 20,
  },
  footerBottom: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 10,
  },
  footerCopy: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',

  },
});

export default Footer;

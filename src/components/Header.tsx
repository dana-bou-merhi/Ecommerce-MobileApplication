import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// Define the type for your navigation stack

interface HeaderProps {
  navigation: NativeStackNavigationProp<any>; // Use 'any' to skip defining a StackParamList
  onSearch: (query: string) => void; // Function to handle search
}

const Header: React.FC<HeaderProps> = ({ navigation, onSearch }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery(''); // Clear the search input after searching
  };

  return (
    <View style={styles.headerContainer}>
        <Image
          source={require('../assests/logo.png')} // Replace with your logo image
          style={styles.logo}
        />
      

      <View style={styles.iconContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search"
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
            <Image
              source={require('../assests/search.png')} // Replace with your search icon
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleMenuToggle} style={styles.menuButton}>
          <View style={styles.hamburgerIcon}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../assests/cart.png')} // Replace with your cart icon
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('Profile')}>
          <Image
            source={require('../assests/user.png')} // Replace with your profile icon
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      <Modal
        transparent={true}
        visible={isMenuVisible}
        animationType="slide"
        onRequestClose={handleMenuToggle} // Handle back button press
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Menu</Text>
            <Pressable onPress={() => { navigation.navigate('Home'); handleMenuToggle(); }}>
  <Text style={styles.menuItem}>Home</Text>
</Pressable>
<Pressable onPress={() => { navigation.navigate('Profile'); handleMenuToggle(); }}>
  <Text style={styles.menuItem}>Profile</Text>
</Pressable>
<Pressable onPress={() => { navigation.navigate('Contact'); handleMenuToggle(); }}>
  <Text style={styles.menuItem}>Contact</Text>
</Pressable>

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logo: {
    width: 90,
    height: 30,
  },
  menuButton: {
    padding: 10,
  },
  hamburgerIcon: {
    width: 25,
    height: 18,
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    borderRadius: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  searchContainer: {
    position: 'relative',
    width: '51%', // Adjust width as needed
    marginRight: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft:25,
  },
  searchIconContainer: {
    position: 'absolute',
    top: 10, // Center the icon vertically
    right: 10, // Adjust to position the icon closer to the input
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 250,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  menuItem: {
    fontSize: 20,
    marginVertical: 10,
    color: '#4a4de9',
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default Header;
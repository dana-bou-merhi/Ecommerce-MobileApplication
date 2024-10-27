import React, { useState } from 'react'
import { Text, View,Image,TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Slideshow from '../components/SlideShow';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../services/types';

const dress = require('../assests/dress.png');
const jacket = require('../assests/jacket.png');
const phone = require('../assests/phone.png');
const blazer = require('../assests/blazer.png');
const heel = require('../assests/heel.png');
const gucci = require('../assests/gucci.png');
const jbl = require('../assests/jbl.png');
const men1 = require('../assests/men1.png');
const men2 = require('../assests/men2.png');
const men3 = require('../assests/men3.png');
const elec1 = require('../assests/watch.png');
const elec2 = require('../assests/elec2.png');
const elec3 = require('../assests/elec3.png');
const med1 = require('../assests/med1.png');
const med2 = require('../assests/med2.png');
const med3 = require('../assests/med3.png');
const sport1 = require('../assests/sport1.png');
const sport2 = require('../assests/sport2.png');
const sport3 = require('../assests/sport3.png');
const toy1 = require('../assests/toy1.png');
const toy2 = require('../assests/toy2.png');
const toy3 = require('../assests/toy3.png');
const ad = require('../assests/ad.png');
const ad1 = require('../assests/ad1.png');
const pet1 = require('../assests/pet1.png');
const pet2 = require('../assests/pet2.png');
const pet3 = require('../assests/pet3.png');
const health1 = require('../assests/health1.png');
const health2 = require('../assests/health2.png');
const health3 = require('../assests/health3.png');
const shopping = require('../assests/shopping.png');


const HomePage = () => {
    //const { addToCart } = useCart(); // Use the addToCart function from context
    const [searchQuery, setSearchQuery] = useState('');
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList,'Home'>>();

    const products = [
      { id: 1, name: 'Dress for her', price: 29.99, image: dress, originalPrice: 59.99, discount: '20% OFF', rating: '★★★★☆' },
      { id: 2, name: 'Cozy Jacket', price: 39.99, image: jacket, originalPrice: 79.99, discount: '15% OFF', rating: '★★★★★' },
      { id: 3, name: 'iPhone16-Pro', price: 1000.99, image: phone, originalPrice: 1300.99, discount: '10% OFF', rating: '★★★☆☆' },
      { id: 4, name: 'Baige Blazer', price: 149.99, image: blazer, originalPrice: 200.00, discount: '25% OFF', rating: '★★★★☆' },
      { id: 5, name: 'Gucci Bag', price: 800.99, image: gucci, originalPrice: 1000.00, discount: '20% OFF', rating: '★★★★★' },
      { id: 6, name: 'Yves Heels', price: 900.99, image: heel, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 7, name: 'casual set', price: 1200.99, image: men1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 8, name: 'Brunello shoe', price: 800.99, image: men2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 9, name: 'Sum-pyjama', price: 100.99, image: men3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 10, name: 'Apple watch', price: 1000.99, image: elec1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 11, name: 'Headphones', price: 300.99, image: elec2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 12, name: 'Mouse', price: 100.99, image: elec3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 13, name: 'Vitamins', price: 50.99, image: med1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 14, name: 'Bioniq', price: 70.99, image: med2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 15, name: ' Omega 3', price: 40.99, image: med3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 16, name: ' Camp-Tent', price: 20.99, image: sport1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 17, name: ' Sleeping bag', price: 10.99, image: sport2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 18, name: ' Water Bottle', price: 7.99, image: sport3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 19, name: ' Balance Bike', price: 30.99, image: toy1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 20, name: ' Balance Board', price: 20.99, image: toy2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 21, name: ' Wood-Blocks', price: 7.50, image: toy3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 22, name: ' Pet Spray', price: 7.50, image: pet1, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 23, name: ' Cat Food', price: 7.50, image: pet2, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 24, name: ' Groom-Tools', price: 13.50, image: pet3, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 25, name: ' Skincare-set', price: 10.50, image: health1, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 26, name: ' Kopari-set', price: 11.50, image: health2, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
      { id: 27, name: ' ikeike-set', price: 12.50, image: health3, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
  
    ];
    const handleSearch = (query: string) => {
        setSearchQuery(query);
      };
    
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return (
        <View style={styles.container}>
        <ScrollView>
          {/* Nested Menu above Flash Sales */}
          <Header 
            onSearch={handleSearch} // Pass the search handler
            navigation={navigation} // Pass the navigation handler
  
          />
          {/* Nested Menu above Flash Sales */}
          
          {/* Slideshow before Flash Sales */}
          <Slideshow />
  
          {/* Flash Sales Section */}
          <View style={styles.headingContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.heading}>Flash Sales</Text>
          </View>
  
          {/* Timer below the Flash Sales heading */}
          <Timer />
  
          <View style={styles.section}>
            <View style={styles.productContainer}>
              {filteredProducts.map((product) => (
                <View key={product.id} style={styles.product}>
                  <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
        
        <TouchableOpacity 
          //onPress={() => addToCart(product)} 
          style={styles.shoppingContainer}
        >
          <Image source={shopping} style={styles.shopping} />
        </TouchableOpacity>
        
        <Text style={styles.productName}>{product.name}</Text>
      </View>
                  <View style={styles.priceWrapper}>
    <Text style={styles.originalPrice}>${product.originalPrice.toFixed(2)}</Text>
    <Text style={styles.discountedPrice}>${product.price.toFixed(2)}</Text>
  </View>
  
                  <Text style={styles.rating}>{product.rating}</Text>
  
                </View>
              ))}
            </View>
          </View>
  
          <Footer />
        </ScrollView>
      </View>
  
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    bullet: {
      width: 20,
      height: 25,
      backgroundColor: '#4a4de9',
      borderRadius: 5,
      marginLeft: 20,
      marginTop: 20,
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
      padding: 10,
      paddingTop: 30,
    },
    section: {
      padding: 20,
    },
    productContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    product: {
      width: '46%',
      marginBottom: 40,
      padding: 10,
      alignItems: 'center',
    },
    imageContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      alignItems: 'center',
      padding: 10,
      width: '100%',
      height: 190, // Set your desired fixed height here
    },
    
    productImage: {
      width: '100%',
      height: 170,
      borderRadius: 8,
    },
    productName: {
      paddingTop: 10,
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    priceWrapper: {
      width: '100%',
      marginVertical: 10,
      alignItems: 'center', // Center align the prices
    },
    
    originalPrice: {
      paddingTop: 30,
  marginRight:60,
      fontSize: 15,
      color: '#888',
      textDecorationLine: 'line-through',
    },
    discountedPrice: {
      paddingTop: 5,
      marginRight:50,
  
      fontSize: 18,
      color: 'red',
      fontWeight: 'bold',
    },
    rating: {
      fontSize: 20,
      color: '#ffa500',
      marginTop:-10,
  
    },
    addToCartButton: {
      backgroundColor: '#4a4de9',
      padding: 10,
      borderRadius: 5,
      width: '90%',
      alignItems: 'center',
      marginVertical: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    shoppingContainer: {
      position: 'absolute',
      bottom: 80, // Adjust to position it correctly
      left: 130, // Adjust to position it correctly
      backgroundColor: '#d3d3d3', // Lighter grey background
      borderRadius: 25, // Make it circular
      padding: 5, // Add some padding
      elevation: 5, // Add shadow for hover effect (Android)
      shadowColor: 'black', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 }, // Shadow offset
      shadowOpacity: 0.3, // Shadow opacity
      shadowRadius: 2, // Shadow radius
    },
    
    
    shopping: {
      width: 30,  // Adjust size as needed
      height: 30, // Adjust size as needed
    },
    
    
  });
  
  export default HomePage;
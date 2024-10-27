import React, { useState, useEffect } from 'react'; 
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Import images
const electronics =require('../assests/electronics.png')
const garden=require('../assests/garden.png')
const men=require('../assests/men.png')
const women=require('../assests/women.png')

// Get screen width for responsive design
const screenWidth = Dimensions.get('window').width;

interface Slide {
  url: any;  // You may want to replace `any` with a more specific type if you have defined one for images.
  alt: string;
}

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0); // Explicitly type state

  const slides: Slide[] = [
    { url: electronics, alt: 'Electronics' },
    { url: garden, alt: 'Garden' },
    { url: men, alt: 'Men' },
    { url: women, alt: 'Women' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <View style={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <View
          key={index}
          style={[
            styles.slide,
            { opacity: index === currentSlide ? 1 : 0 }, // Set opacity based on current slide
          ]}
        >
          <Image
            source={slide.url}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      ))}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotClick(index)}>
            <View
              style={[styles.dot, index === currentSlide && styles.activeDot]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideshowContainer: {
    width: '100%', // Make it responsive to screen width
    height: 200, // Increased height for the slideshow
    overflow: 'hidden',
    alignSelf: 'center', // Center the slideshow on the screen
  },
  slide: {
    width: screenWidth, // Use full width
    height: '100%', // Full height of the container
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 180,
  },
  dot: {
    height: 10,
    width: 10,
    margin: 2,
    backgroundColor: '#bbb',
    borderRadius: 50,
  },
  activeDot: {
    backgroundColor: '#4a4de9',
  },
});

export default Slideshow;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2024-11-10') - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.timeUnit}>
        <Text style={styles.label}>Days</Text>
        <Text style={styles.value}>{timeLeft.days}</Text>
      </View>
      <Text style={styles.separator}>:</Text>
      <View style={styles.timeUnit}>
        <Text style={styles.label}>Hours</Text>
        <Text style={styles.value}>{timeLeft.hours}</Text>
      </View>
      <Text style={styles.separator}>:</Text>
      <View style={styles.timeUnit}>
        <Text style={styles.label}>Minutes</Text>
        <Text style={styles.value}>{timeLeft.minutes}</Text>
      </View>
      <Text style={styles.separator}>:</Text>
      <View style={styles.timeUnit}>
        <Text style={styles.label}>Seconds</Text>
        <Text style={styles.value}>{timeLeft.seconds}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeUnit: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000', // Set timer value color to black
  },
  separator: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4a4de9', // Set separator color
    marginHorizontal: 5,
    marginBottom: -20,
  },
});

export default Timer;

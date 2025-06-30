import React from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const height = 70;
const curveRadius = 40;

export default function CustomTabBar({ state, descriptors, navigation }) {
  const tabWidth = width / state.routes.length;

  const getIcon = (route, index, isFocused) => {
    const { options } = descriptors[route.key];
    const color = isFocused ? 'black' : '#b5b5b5';

    return options.tabBarIcon ? options.tabBarIcon({ focused: isFocused, color }) : null;
  };

  return (
    <View style={{ position: 'absolute', bottom: 0, width, height, backgroundColor: 'transparent' }}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Path
          d={`
            M0 0 
            H${(width - 150) / 2} 
            C${(width - 150) / 2 + 20} 0, ${(width - 150) / 2 + 35} ${curveRadius}, ${width / 2} ${curveRadius}
            C${(width + 150) / 2 - 35} ${curveRadius}, ${(width + 150) / 2 - 20} 0, ${(width + 150) / 2} 0
            H${width} 
            V${height} 
            H0 
            Z
          `}
          fill="#fff"
        />
      </Svg>

      <View style={styles.iconContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          // Center tab logic
          const isCenter = index === Math.floor(state.routes.length / 2);

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={[
                styles.tabButton,
                {
                  top: isCenter ? -curveRadius / 2 : 0,
                  zIndex: isCenter ? 10 : 1,
                },
              ]}
            >
              {getIcon(route, index, isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: 60,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});

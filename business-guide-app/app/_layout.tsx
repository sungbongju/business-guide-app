import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#8E8E93' : '#999999',
        headerShown: true,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#ffffff',
          borderTopColor: colorScheme === 'dark' ? '#38383a' : '#e5e5ea',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#ffffff',
        },
        headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="research"
        options={{
          title: '연구분야',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flask" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          title: '통합교육',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-variant" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="career"
        options={{
          title: '취업전망',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="briefcase" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="specialization"
        options={{
          title: '세부전공',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="future"
        options={{
          title: '미래가치',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="crystal-ball" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teamwork"
        options={{
          title: '팀프로젝트',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bio"
        options={{
          title: '바이오융합',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dna" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cha-advantage"
        options={{
          title: '차대강점',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graduates"
        options={{
          title: '졸업생진로',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-tie" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="arts"
        options={{
          title: '예술경영',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="palette" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="digital-ai"
        options={{
          title: '디지털AI',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="robot" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: '미디어융합',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="television" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="math-ok"
        options={{
          title: '수포자OK',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="video-ad"
        options={{
          title: '영상광고',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
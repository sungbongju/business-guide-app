import { View, StyleSheet, useColorScheme } from 'react-native';
import { Text } from 'react-native';
import { ReactNode } from 'react';

interface InfoCardProps {
  title?: string;
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
}

export default function InfoCard({ 
  title, 
  children, 
  variant = 'info' 
}: InfoCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const variantColors = {
    info: { bg: isDark ? '#1c3a5e' : '#e3f2fd', border: '#2196F3' },
    success: { bg: isDark ? '#1e4620' : '#e8f5e9', border: '#4CAF50' },
    warning: { bg: isDark ? '#4d3800' : '#fff3e0', border: '#FF9800' },
    error: { bg: isDark ? '#4d1f1f' : '#ffebee', border: '#F44336' },
  };

  return (
    <View 
      style={[
        styles.card,
        { 
          backgroundColor: variantColors[variant].bg,
          borderColor: variantColors[variant].border,
        }
      ]}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  content: {
    gap: 8,
  },
});
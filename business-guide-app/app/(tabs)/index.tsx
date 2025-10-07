import { ScrollView, StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// AIAssistant and InfoCard components are assumed to be in these paths
// import AIAssistant from '@/components/AIAssistant';
// import InfoCard from '@/components/InfoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Mock components for demonstration purposes if the original components are not available.
const AIAssistant = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>AI Assistant</Text>
        <Text>Ask me anything about the business program!</Text>
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

const InfoCard = ({ children }) => {
  return <View style={styles.infoCard}>{children}</View>;
};


export default function HomeScreen() {
  const [showAI, setShowAI] = useState(false);

  const menuItems = [
    { title: '🔬 연구분야', route: 'research', icon: 'flask' },
    { title: '🤝 통합교육', route: 'education', icon: 'book-open-variant' },
    { title: '💼 취업전망', route: 'career', icon: 'briefcase' },
    { title: '📚 세부전공', route: 'specialization', icon: 'school' },
    { title: '🔮 미래가치', route: 'future', icon: 'crystal-ball' },
    { title: '👥 팀프로젝트', route: 'teamwork', icon: 'account-group' },
    { title: '🧬 바이오융합', route: 'bio', icon: 'dna' },
    { title: '🏥 차대강점', route: 'cha-advantage', icon: 'star' },
    { title: '🎓 졸업생진로', route: 'graduates', icon: 'account-tie' },
    { title: '🎨 예술경영', route: 'arts', icon: 'palette' },
    { title: '🤖 디지털AI', route: 'digital-ai', icon: 'robot' },
    { title: '📺 미디어융합', route: 'media', icon: 'television' },
    { title: '😊 수포자OK', route: 'math-ok', icon: 'calculator' },
    { title: '🎬 영상광고', route: 'video-ad', icon: 'video' },
  ];

  return (
    // The 'edges' prop has been removed to apply safe area insets to all sides, fixing the cutoff issue.
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>🎓 경영학전공 완전정복 가이드</Text>
          <Text style={styles.subtitle}>
            미래융합대학 헬스케어융합학부 | 박대근 교수
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>
            차의과학대학교 경영학과의 모든 정보를 한눈에!
          </Text>
          
          <InfoCard>
            <Text style={styles.infoText}>
              💡 궁금한 주제를 선택하거나 AI 어시스턴트에게 질문하세요!
            </Text>
          </InfoCard>

          {/* Main Section Cards */}
          <View style={styles.cardGrid}>
            {menuItems.map((item, index) => (
              <Pressable 
                key={index}
                style={styles.menuCard}
                onPress={() => {
                  // Navigation logic to be implemented later
                }}
              >
                <MaterialCommunityIcons 
                  name={item.icon as any} 
                  size={32} 
                  color="#007AFF" 
                />
                <Text style={styles.menuText}>{item.title}</Text>
              </Pressable>
            ))}
          </View>

          {/* Stats Summary */}
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>📊 주요 통계</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>88.7%</Text>
                <Text style={styles.statLabel}>취업률</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>24.9%</Text>
                <Text style={styles.statLabel}>바이오헬스케어</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>221명</Text>
                <Text style={styles.statLabel}>졸업생</Text>
              </View>
            </View>
          </View>
        </View>

        {/* AI Assistant Button */}
        <Pressable 
          style={styles.aiButton}
          onPress={() => setShowAI(true)}
        >
          <MaterialCommunityIcons name="robot" size={24} color="#ffffff" />
          <Text style={styles.aiButtonText}>AI 어시스턴트와 대화하기</Text>
        </Pressable>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            📧 문의: 미래융합대학 헬스케어융합학부 박대근 교수
          </Text>
          <Text style={styles.footerText}>
            🌐 전공 홈페이지: biz.cha.ac.kr
          </Text>
        </View>
      </ScrollView>

      {/* AI Assistant Modal */}
      <AIAssistant 
        visible={showAI} 
        onClose={() => setShowAI(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  infoCard: {
    backgroundColor: '#e7f3ff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    borderLeftColor: '#007AFF',
    borderLeftWidth: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#00529B',
    lineHeight: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  statsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#333',
  },
  aiButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  aiButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  // Mock Modal Styles
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
import { Modal, View, StyleSheet, Pressable, Platform } from 'react-native';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface AIAssistantProps {
  visible: boolean;
  onClose: () => void;
}

export default function AIAssistant({ visible, onClose }: AIAssistantProps) {
  const didHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        html, body { 
          margin: 0; 
          padding: 0; 
          width: 100%;
          height: 100%;
          background: white;
          overflow: hidden;
        }
        #did-agent-container {
          width: 100%;
          height: 100%;
          display: block;
        }
      </style>
    </head>
    <body>
      <div id="did-agent-container"></div>
      <script type="module"
        src="https://agent.d-id.com/v2/index.js"
        data-mode="full"
        data-client-key="Z29vZ2xlLW9hdXRoMnwxMTI3NjQ3MzA0NTM3NjA0MTgyMTI6d01EN0x6bFFFMmlZSk9nUHNacXll"
        data-agent-id="v2_agt_80jV_9EA"
        data-name="did-agent"
        data-monitor="true"
        data-target-id="did-agent-container">
      </script>
    </body>
    </html>
  `;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>🤖 AI 어시스턴트</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <MaterialCommunityIcons name="close" size={24} color="#000" />
          </Pressable>
        </View>
        
        <WebView
          source={{ html: didHTML }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 8,
  },
  webview: {
    flex: 1,
  },
});
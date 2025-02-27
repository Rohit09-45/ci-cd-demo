import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function UserProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" }} // Replace with your dummy image
              style={styles.profileImage}
            />
          </View>
          <ThemedText type="title" style={styles.name}>
            John Doe
          </ThemedText>
          <ThemedText type="subtitle" style={styles.jobTitle}>
            Software Engineer
          </ThemedText>
        </View>

        {/* Collapsible Sections */}
        <View style={styles.sectionsContainer}>
          <View style={styles.card}>
            <Collapsible title="About">
              <ThemedText>
                John Doe is a software engineer with 5 years of experience in the industry. He has
                worked on a variety of projects, ranging from mobile applications to web-based
                platforms.
              </ThemedText>
            </Collapsible>
          </View>

          <View style={styles.card}>
            <Collapsible title="Skills">
              <ThemedText>
                - React Native{'\n'}
                - JavaScript{'\n'}
                - TypeScript{'\n'}
                - Node.js{'\n'}
                - SQL
              </ThemedText>
            </Collapsible>
          </View>

          <View style={styles.card}>
            <Collapsible title="Experience">
              <ThemedText>
                Software Engineer, ABC Company{'\n'}
                - Developed and maintained mobile applications for both iOS and Android platforms.
              </ThemedText>
            </Collapsible>
          </View>

          <View style={styles.card}>
            <Collapsible title="Education">
              <ThemedText>
                Bachelor of Science in Computer Science{'\n'}
                - University of Example{'\n'}
                - Graduated: May 2020
              </ThemedText>
            </Collapsible>
          </View>

          <View style={styles.card}>
            <Collapsible title="Contact">
              <ThemedText>
                Email: john.doe@example.com{'\n'}
                Phone: (123) 456-7890{'\n'}
                LinkedIn: linkedin.com/in/johndoe
              </ThemedText>
            </Collapsible>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#4A90E2',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 16,
    marginTop:20
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  jobTitle: {
    fontSize: 16,
    color: '#d9e6f2',
  },
  sectionsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
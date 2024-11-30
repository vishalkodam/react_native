import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import { router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import CustomButton from "../components/CustomButton";

const { height } = Dimensions.get('window'); 

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View 
          style={{
            width: '100%', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: height * 0.95,
            paddingHorizontal: 16
          }}
        >
          <Image 
            source={images.logo}
            style={{ width: 130, height: 84 }}
            resizeMode="contain"
          />
          <Image 
            source={images.cards}
            style={{ width: '100%', maxWidth: 380, height: 300 }}
            resizeMode="contain"
          />

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
              Discover Endless Possibilities with <Text style={{ color: '#FFD700' }}>VK</Text>
            </Text>
          </View>
        
          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import WelcomeSection from './First_Page/WelcomSection';
import MasterCard from './First_Page/Card';
import ActionButtonSection from './First_Page/ActionButtons';
import TransactionSection from './First_Page/Transaction';
import { useTheme } from './ThemeContext'; 

export default function PageOne() {
  const { theme } = useTheme(); 

  return (
    <ScrollView style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <SafeAreaView>
        <View style={theme === 'dark' ? { backgroundColor: 'black', padding: 20, paddingTop: 30 } : { backgroundColor: 'white', padding: 20, paddingTop: 30 }}>
          <WelcomeSection mode={theme} />
          <MasterCard mode={theme} />
          <ActionButtonSection mode={theme} />
          <TransactionSection mode={theme} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

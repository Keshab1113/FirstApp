import React from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native'
import FlatCards from './components/FlatCards';
import ElivatedCards from './components/ElivatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import GithubDetails from './components/GithubDetails';

function App() {
  return (
    <SafeAreaView >
      <ScrollView >
        <FlatCards />
        <ElivatedCards />
        <FancyCard />
        <GithubDetails/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
};


export default App;
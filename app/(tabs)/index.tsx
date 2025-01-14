import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styled from 'styled-components/native';

const Layout = styled.View`
  width: 100%;
  height: 100%;
  background-color: lightGray;
  align-items: center;
  display: flex;
`;
const Header = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #a167a5;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 500;
`;

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: .5rem;
  width: 3rem;
  height: 2rem;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};

`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const FlexContainer = styled.View`
  width: 100%;
  height: ${props => (props.height ? props.height : `100%`)};
  display: flex;
  align-items: center;
  justify-content: center;

`;
const ButtonAddNew = ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default function HomeScreen() {
  return (
    <Layout>
      <Header>
        <FlexContainer height={'50%'}>
          <Text>Today</Text>
        </FlexContainer>
        <FlexContainer height={'50%'}>

          <ButtonAddNew
            onPress={() => true}
            title='Add New'
            bgColor='white'
          />
        </FlexContainer>
      </Header>
    </Layout>


  );
}



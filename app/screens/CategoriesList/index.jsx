import React from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { MainBody } from '../NewTaskScreen/styled'
import { CategoryList } from '../../library/constants'
import { CategoryText, CategoryButton, CategoryTitle, AddCategoryButton } from './styled'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../../library/colors'
import { FlexContainer } from '../HomeScreen/styled'
import { useRouter } from 'expo-router'

const CategoriesList = () => {
    const handleCategoryPress = (categoryName) => {
        return true;
      };
    const router = useRouter();

  return (
    <Layout>
        <Header screenTitle={'Choose Category'} headerTitle={'Categories'}/>
        <MainBody>
            <FlexContainer height={'85%'} justify={'space-between'}>
                <FlexContainer height={'100%'} justify={'flex-start'}>
                    {CategoryList.map((category) => (
                        <CategoryButton key={category.id} onPress={() => handleCategoryPress(category.name)}>
                            <CategoryTitle>{category.name}</CategoryTitle>
                            <FontAwesome5 name="angle-right" size={35} color={colors.lightPurple} />
                        </CategoryButton>
                    ))}
                </FlexContainer>
                <AddCategoryButton onPress={() => router.push('/screens/CreateCategoryScreen')}>
                    <FontAwesome5 name="plus" size={30} color={colors.white} />
                </AddCategoryButton>
            </FlexContainer>
        </MainBody>
    </Layout>
  )
}

export default CategoriesList
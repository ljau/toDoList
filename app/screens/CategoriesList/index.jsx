import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Header from '../../components/Header'
import { MainBody } from '../NewTaskScreen/styled'
import { CategoryList } from '../../library/constants'
import { CategoryText, CategoryButton, CategoryTitle, AddCategoryButton } from './styled'
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from '../../library/colors'
import { FlexContainer } from '../HomeScreen/styled'
import { useRouter } from 'expo-router'
import { getCategories } from '../../library/storage'
import { ListContainer } from '../TasksList/styled'
import { FlatList } from 'react-native'

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const categoriesFromStorage = await getCategories();
          setCategories(categoriesFromStorage); // Save to state
          console.log('categories:', categories);
          
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);

    const handleCategoryPress = (catName, catId, catDescription) => {
      // console.log( '\n Name: ', catName, '\n ID: ', catId, '\n Description: ', catDescription );
      router.push({ pathname: '/screens/TasksList/', params: {id: catId, name: catName, description: catDescription} })
    };
    const router = useRouter();

  return (
    <Layout>
        <Header screenTitle={'Welcome'} headerTitle={'Categories'}/>
        <MainBody>
            <FlexContainer height={'85%'} justify={'space-between'}>
                <FlexContainer height={'85%'} justify={'flex-start'}>
                    {/* {categories.map((category) => (
                        <CategoryButton key={category.id} onPress={() => handleCategoryPress(category.name, category.id, category.description)}>
                            <CategoryTitle>{category.name}</CategoryTitle>
                            <FontAwesome5 name="angle-right" size={35} color={colors.lightPurple} />
                        </CategoryButton>
                    ))} */}
                  <ListContainer>
                    <FlatList
                      data={categories}
                      keyExtractor={(item) => item.id}
                      style={{ width: "100%" }}
                      renderItem={({ item }) => (
                        <CategoryButton onPress={() => handleCategoryPress(item.name, item.id, item.description)}>
                          <CategoryTitle>{item.name}</CategoryTitle>
                          <FontAwesome5 name="angle-right" size={35} color={colors.lightPurple} />
                        </CategoryButton>
                      )}
                      showsVerticalScrollIndicator={false}  // Hide the scrollbar
                    />
                  </ListContainer>
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
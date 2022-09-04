import { useState } from 'react';

import { Card, CategoriesList, Container } from "./styles";

import { categoriesList } from '../../utils/categoriesList';

export function SearchCategory() {
  const [categories, setCategories] = useState(categoriesList);

  return (
    <>

      <Container>
        <h2 id='searchCategory'>Procure por categoria</h2>
        <CategoriesList>
          {categories.map((category) => {
            return (
              <Card style={{ backgroundColor: category.backgroundColor }} >
                <img src={category.imgSrc} alt="" />

                <div className='card-texts-container'>
                  <p className='title'>{category.title}</p>
                  <p className='description'>{category.description}</p>
                </div>
              </Card>
            )
          })}
        </CategoriesList>
      </Container >
    </>
  )
}
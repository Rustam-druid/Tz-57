import React, { useState } from 'react';
import Toolbal from '../../components/Toolbar/Toolbal.tsx';
import DishForm from '../../components/DishForm/DishForm.tsx';
import Dishes from '../../components/Dishes/Dishes.tsx';
import { IDish } from '../../types';



const Plovo = () => {
  const category: { title: string, color: string }[] = [
    {title: 'пользователь', color: 'user'},
    {title: 'редактор', color: 'editor'},
    {title: 'администратор', color: 'admin'},
  ]

  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: '1',
      category: 'администратор',
      name: 'Патррик',
      email: 'Taste@mqil.ru',
    },

  ]);

  const addNewDish = (newDish: IDish) => {
    console.log(newDish);
    setDishes((prevState) => [...prevState, newDish]);
  };

  return (
    <>
      <header>
        <Toolbal/>
      </header>

      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm category={category} addNewDish={addNewDish}/>

          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Plovo;

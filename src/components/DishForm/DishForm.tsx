import React, { useState } from 'react';
import { IDish, IDishMutation } from '../../types';


interface Props {
  addNewDish: (newDish: IDish) => void;
  category: { title: string, color: string }[];
}

const DishForm: React.FC<Props> = ({addNewDish , category}) => {
  const [Active, setActive] = useState(false)
  const [newDish, setNewDish] = useState<IDishMutation>({
    name: '',
    email: '',
    urlImage: '',
category: '',
  });

  const changeDish = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewDish((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newDish.name.trim().length === 0 &&
      newDish.email.trim().length === 0 &&
      newDish.email.trim().length === 0
    ) {
      alert('Заполните поля');
    } else {
      addNewDish({
        id: String(new Date()),
        ...newDish,
      });

      setNewDish({
        name: '',
        email: '',
        urlImage: '',
        category:'',
      });
    }
  };


  const changeActive = (e: React.ChangeEvent<HTMLInputElement>) => {
setActive(e.target.checked);
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new dish</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">Title</label>
        <input
          required
          onChange={changeDish}
          value={newDish.name}
          type="text"
          id="name"
          name="name"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="email">email</label>
        <input
          required
          onChange={changeDish}
          value={newDish.email}
          type="email"
          id="email"
          name="email"
          className="form-control"
        />
      </div>


      <div className="form-group mb-2">
        <label htmlFor="checkbox">Активен:</label>
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          className="checkbox ms-2"
          checked={Active}
          onChange={changeActive}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="category">Роль</label>
        <select
          id="category"
          name="category"
          value={newDish.category}
          onChange={changeDish}
          className="form-control"
        >
          <option value="" disabled>Выберите категорию</option>
          {category.map((c, i) => (
            <option
              key={c.title + i}
              value={c.title}
              style={{backgroundColor: c.color}}
            >
              {c.title}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default DishForm;

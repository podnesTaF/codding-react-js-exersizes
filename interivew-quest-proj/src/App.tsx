import React, {useEffect} from 'react';
import {countedCategories, defineClass, getCorrectNum, getData, randomCategories} from "./utils/data";
import './App.css';

export enum Status {
    correct= 'CORRECT',
    incorrect = 'INCORRECT',
    partially = 'PARTIALLY_CORRECT'
}
export interface IElement {
    id: string;
    category: string;
    name: string;
    status?: Status;
}

export interface ICategory {
    name: string,
    content: IElement[];
}

function App() {
    const [elements, setElements] = React.useState<IElement[]>([]);
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [groupRandom, setGroupRandom] = React.useState(false)

  useEffect(() => {
      getData().then((data) => {
          setElements(data)
      }).catch((error) => console.log(error))
  }, [])

    useEffect(() => {
        setCategories(countedCategories(elements))
    }, [elements])

  return (
    <div className="wrapper">
        <h1>Interview Questions</h1>
        <div className="button-wrapper">
            <button onClick={() => {
                setCategories(countedCategories(elements))
                setGroupRandom(false)
            }} className={`btn ${!groupRandom ? 'active': ''}`}>
                Group by category
            </button>
            <button onClick={() => {
                setCategories(randomCategories(elements))
                setGroupRandom(true)
            }} className={`btn ${groupRandom ? 'active' : ''}`}>
                Group Randomly
            </button>
        </div>
        <div className="elements">
            {categories.map((category) => {
                return (
                    <div className='category' key={category.name}>
                        <h2>{category.name} - {getCorrectNum(category.content)}/{category.content.length}</h2>
                        {category.content.map((element: IElement) => {
                            return (
                              <div className='question' key={element.id}>
                                  <div className={`status ${defineClass(element.status)}`}></div>
                                  <h3>{element.name}</h3>
                              </div>
                          )
                        })}
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default App;

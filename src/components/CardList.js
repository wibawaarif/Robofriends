import React from 'react';
import Card from './Card';
const CardList = ({robots, showSearch}) => {
  return (
    <div>
      {
        robots.map((item, i) => {
          return (
            <Card key={i} 
            id={robots[i].id} 
            name={robots[i].name}
            username={robots[i].username} 
            email={robots[i].email}
            />
          );
        })
      }
  </div>
  );
}

export default CardList;
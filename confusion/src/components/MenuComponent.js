import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({dish, onClick}) => {
  return(
    <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <CardImg width="100%" object src={dish.image} alt={dish.name}/>
      <CardImgOverlay>
        <CardTitle heading>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <MenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="row">
      {menu}
    </div>
  );
}

export default Menu;
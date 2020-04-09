import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 mt-1" key={dish.id}>
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="row">
        {menu}
      </div>
    );
  }
}

export default Menu;

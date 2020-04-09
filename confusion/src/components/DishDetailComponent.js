import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    return comments ? (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li>
                {comment.comment}
                <br />
                <strong>{comment.author}</strong> - {comment.date}
              </li>
            );
          })}
        </ul>
      </div>
    ) : (
      <div />
    );
  }

  render() {
    const { dish } = this.props;

    return dish ? (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dish.comments)}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default DishDetail;

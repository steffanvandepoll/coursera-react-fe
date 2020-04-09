import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Dish = ({dish}) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};

const Comments = ({comments}) => {
  return comments ? (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {comments.map(comment => {
          return (
            <li key={comment.id}>
              {comment.comment}
              <br />
              <strong>{comment.author}</strong> -{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div />
  );
};

const DishDetail = props => {
  return (
      <div className="container">
      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>
      </div>
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <Dish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
              <Comments comments={props.comments} />
          </div>
      </div>
      </div>
  );
};

export default DishDetail;

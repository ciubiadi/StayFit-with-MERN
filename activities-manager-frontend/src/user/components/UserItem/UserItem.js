import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/components/UIElements/Avatar/Avatar';
import Card from '../../../shared/components/UIElements/Card/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.user.id}/activities`}>
          <div className="user-item__image">
            <Avatar image={props.user.image} alt={props.user.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.user.name}</h2>
            <h3>
              {props.user.activities} {props.user.activities === 1 ? 'Activity' : 'Activities'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
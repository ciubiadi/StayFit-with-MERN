import React, { useState } from 'react';
// import Card from '../../shared/components/UIElements/Card';
import Card from '../../../shared/components/UIElements/Card/Card';
import Button from '../../../shared/components/FormElements/Button/Button';
import Modal from '../../../shared/components/UIElements/Modal/Modal';
import Map from '../../../shared/components/UIElements/Map/Map';
import './ActivityItem.css';

const ActivityItem = props => {
  console.log('ActiviyItem props: ', props);
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="activity-item__modal-content"
        footerClass="activity-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          {/* <Map center={props.coordinates} zoom={16} /> */}
          <h1 style={{textAlign: 'center'}}>Activity details</h1>
        </div>
      </Modal>
      <li className="activity-item">
        <Card className="activity-item__content">
          <div className="activity-item__image">
            <img src={props.imageURL} alt={props.title} />
          </div>
          <div className="activity-item__info">
            <h2>{props.title}</h2>
            <h3>{props.duration}</h3>
            <p>{props.distance}</p>
          </div>
          <div className="activity-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/activities/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ActivityItem;
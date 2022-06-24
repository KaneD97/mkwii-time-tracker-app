import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const { Link } = require('react-router-dom');

const TrackLinksList = ({ tracks }) => {
  return tracks?.map((track) => {
    const { name, id, track_time_count } = track;
    return (
      <div className="card" key={id} data-cy="track-link">
        <Link to={`/track/${id}`}>
          <Card>
            <Image src={require(`../data/images/track_${id}.png`)} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="time" />
                {track_time_count} {track_time_count === 1 ? 'time' : 'times'} recorded
              </a>
            </Card.Content>
          </Card>
        </Link>
      </div>
    );
  });
};

export default TrackLinksList;

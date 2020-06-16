import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SensorModal({title, connected, resourceId, handleConnection, value, unit})
{
    return (
    <Card>
        <Card.Body>
            <Card.Title>Indicator for : {title}</Card.Title>
            <Card.Text><b>Value : </b>{value ? `${value} ${unit}` : "Please connect to see" } </Card.Text>

            <Button 
                variant={connected ? "outline-danger" : "outline-primary"}
                onClick={(e) => handleConnection(resourceId, connected)}>
                {connected ? "Disconnect" : "Connect"}
            </Button>
        </Card.Body>
    </Card>
    );
}
SensorModal.propTypes = {
    title: PropTypes.string.isRequired,
    connected: PropTypes.bool.isRequired,
    handleConnection: PropTypes.func.isRequired,
    resourceId: PropTypes.string.isRequired,
    value: PropTypes.oneOfType(['string', 'undefined']).isRequired,
    unit: PropTypes.oneOfType(['string', 'undefined']).isRequired
}
export default SensorModal;
import React from 'react';
import PropTypes from 'prop-types';

const SoapType = (props) => {

        let type = null;

    switch (this.props.type) {
        case 'body':
            type = <div />;
            break;
        case 'hair':
            type = (
                <div>
                    type = <div />;
                    type = <div />;
                </div>
            );
            break;
        case 'face':
            type = <div />;
            break;
        case 'shave':
            type = <div />;
            break;
        default:
            type = null;
    }

    return type;

};

SoapType.propTypes = {
    type: PropTypes.string.isRequired
};


export default SoapType;

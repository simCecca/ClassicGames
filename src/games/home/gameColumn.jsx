import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class GameColumn extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                <p className="card-text">{ this.props.description }</p>
                            </Tooltip>
                        }>
                        <a href= { this.props.link }>
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                <rect width="100%" height="100%" fill="aliceblue"/>
                                <image href= { this.props.linkImage } height="100%" width="100%"/>
                            </svg>
                        </a>
                    </OverlayTrigger>
                    <h3>{ this.props.name }</h3>
                </div>
            </div>
        );
    }
}

export default GameColumn;
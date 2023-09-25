import React from 'react';

import { entityName } from './../db/db';

const Initialization = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Importing SoftwareEngineer class</h2>
                <h2>
                    <span className="keyword"> import </span>
                    <span className="class-name"> SoftwareEngineer </span>
                    <span className="keyword"> from </span>
                    <span className="string">'SoftwareEngineer'</span>
                    ;
                </h2>
                <br />
                <h2 className="comment">// Initialization</h2>
                <h2><span className="keyword"> const </span>
                    <span className="variable"> {entityName} </span>
                    <span className="operator"> = </span>
                    <span className="keyword"> new </span>
                    <span className="class-name">SoftwareEngineer()</span>
                    ;
                </h2>
            </code>
        </div>
    );
};

export default Initialization;

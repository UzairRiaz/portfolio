import React from 'react';

import { about, entityName } from './../db/db';

const About = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// About</h2>
                <h2>
                    <span className="keyword"> {entityName}</span>
                    .<span className="property">setAbout(</span>
                    <br />
                    <span className="string">
                        "{about}"
                    </span>
                    <br />
                    <span className="property">)</span>
                    ;
                </h2>
            </code>
        </div>
    );
};

export default About;

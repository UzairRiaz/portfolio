import React from 'react';

import { entityName, skills } from './../db/db';


const Skills = () => {

    return (
        <div className="section-div">
            <code>
                <h2 className="comment" >//Skills</h2>
                <h2>
                    <span className="keyword">var </span>
                    <span className="variable">skills </span>
                    <span className="operator"> = </span>
                    <span className="operator"> [ </span>
                    {skills.map((skills) => <>
                        <br />
                        &emsp; &emsp;&emsp;&emsp;
                        <span className="string">{skills}, </span>
                    </>)}
                    <br />
                    <span className="operator"> ] </span>
                    <span className="operator">;</span>
                </h2>
                <h2>
                    <span className="keyword">{entityName}</span>
                    <span className="operator">.</span>
                    <span className="property">setSkills(</span>
                    <span className="variable">skills</span>
                    <span className="property">)</span>
                    <span className="operator">;</span>
                </h2>
            </code>
        </div>
    );
};

export default Skills;

import React from 'react';

import { entityName, experience } from './../db/db';

const Experience = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Experiences</h2>
                <h2><span className="keyword"> var </span>
                    <span className="variable"> experience </span>
                    <span className="operator"> = </span>
                    <span className="operator"> [ </span>
                    <br />
                    <span className="operator"> {'{'} </span>
                    {
                        experience.map((experience) => (<>
                            <br />
                            <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                            <span className="keyword">company: </span>
                            <span className="string">'{experience.company}'</span>
                            <span className="operator">,</span>
                            <br />
                            <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                            <span className="keyword">title: </span>
                            <span className="string">'{experience.title}'</span>
                            <span className="operator">,</span>
                            <br />
                            <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                            <span className="keyword">startDate: </span>
                            <span className="string">'{experience.startDate}'</span>
                            <span className="operator">,</span>
                            <br />
                            <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                            <span className="keyword">endDate: </span>
                            <span className="string">'{experience.endDate}'</span>
                            <span className="operator">,</span>
                            <br />
                            <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                            <span className="keyword">description: </span>
                            <span className="string">'{experience.task}'</span>
                            <span className="operator">,</span>
                            <br />
                            <span className="operator">{`}`}</span>
                            <span className="operator">,</span>
                            <br />
                        </>))
                    }

                    <span className="operator">{`]`}</span>
                    ;
                </h2>
                <h2>
                    <span className="variable"> {entityName}</span>
                    .<span className="property">setExperience(</span>
                    <span className="variable">experience</span>
                    <span className="property">)</span>
                    ;
                </h2>
            </code>
        </div>);
};

export default Experience;

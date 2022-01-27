import React from 'react';

import { entityName, education } from './../db/db';

const Education = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Education</h2>
                <h2>
                    <span className="keyword">var </span>
                    <span className="variable"> education </span>
                    <span className="operator"> = </span>
                    <span className="operator"> [ </span>
                    {education.map((education) => (<>
                        <br />
                        <span className="operator"> {'{'} </span>
                        <br />
                        <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                        <span className="keyword">institute: </span>
                        <span className="string">'{education.institute}'</span>
                        <span className="operator">,</span>
                        <br />
                        <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                        <span className="keyword">degree: </span>
                        <span className="string">'{education.degree}'</span>
                        <span className="operator">,</span>
                        <br />
                        <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                        <span className="keyword">startYear: </span>
                        <span className="string">'{education.startYear}'</span>
                        <span className="operator">,</span>
                        <br />
                        <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                        <span className="keyword">endDate: </span>
                        <span className="string">'{education.endYear}'</span>
                        <span className="operator">,</span>
                        <br />
                        <span className="tab">&emsp;&emsp;&emsp;&emsp;</span>
                        <br />
                        <span className="operator"> {'}'}</span>
                        <span className="operator">,</span>
                    </>))}
                    <br />
                    <span className="operator">{`]`}</span>
                    ;
                </h2>
                <h2>
                    <span className="variable">{entityName}</span>
                    .<span className="property">setEducation(</span>
                    <span className="variable">education</span>
                    <span className="property">)</span>
                    ;
                </h2>
            </code>
        </div>
    );
};

export default Education;

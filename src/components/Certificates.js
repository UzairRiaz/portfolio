import React from 'react';

import { entityName, certifications } from './../db/db';

const Certificates = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Certificates</h2>
                <h2>
                    <span className="keyword">var </span>
                    <span className="variable">certificates</span>
                    <span className="operator"> = </span>
                    <span className="operator">[</span>
                    {certifications.map((certificate) => <>
                        <br />
                        &emsp;&emsp;&emsp;&emsp;
                        <span className="string">'{certificate}'</span>,
                    </>)}
                    <br />
                    <span className="operator">];</span>
                </h2>
                <h2>
                    <span className="variable">{entityName}</span>
                    <span className="operator">.</span>
                    <span className="property">setCertificates(</span>
                    <span className="variable">certificates</span>
                    <span className="property">)</span>
                    ;
                </h2>
            </code>
        </div>
    );
};

export default Certificates;

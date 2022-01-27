import React from 'react';

import { address, email, entityName, fullName, phone } from './../db/db';

const PersonalInfo = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Personal Information</h2>
                <h2>
                    <span className="keyword"> {entityName}</span>
                    .<span className="property">setFullName(</span>
                    <span className="string">'{fullName}'</span>
                    <span className="property">)</span>
                    ;
                </h2>
                <h2>
                    <span className="keyword"> {entityName}</span>
                    .<span className="property">setEmail(</span>
                    <span className="string"><a href={`mailto:${email}`} >'{email}'</a></span>
                    <span className="property">)</span>
                    ;
                </h2>
                <h2>
                    <span className="keyword"> {entityName}</span>
                    .<span className="property">setPhone(</span>
                    <span className="string">'{phone}'</span>
                    <span className="property">)</span>
                    ;
                </h2>
                <h2>
                    <span className="keyword"> {entityName}</span>
                    .<span className="property">setHomeddress(</span>
                    <span className="string">'{address}'</span>
                    <span className="property">)</span>
                    ;
                </h2>
            </code>
        </div>
    );
};

export default PersonalInfo;

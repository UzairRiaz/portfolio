import React from 'react';

import { entityName, connect } from './../db/db';

const Connect = () => {
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Connect on Social Media</h2>
                <h2>
                    <span className="keyword">var </span>
                    <span className="variable">Connect</span>
                    <span className="operator"> = </span>
                    <span className="operator">{`{`}</span>
                    <br />
                    {connect.map((connect) => {
                        return (
                            <>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="string">{connect.name}</span>
                                <span className="operator"> : </span>
                                <span className="string"><a href={connect.url} target="_blank">'{connect.url}'</a></span>,
                                <br />
                            </>
                        );
                    })}
                    <span className="operator">{'}'}</span>
                </h2>
                <h2>
                    <span className="variable">{entityName}</span>
                    <span className="operator">.</span>
                    <span className="property">setConnect(</span>
                    <span className="variable">connect</span>
                    <span className="property">)</span>
                    ;
                </h2>
            </code>
        </div>
    );
};

export default Connect;

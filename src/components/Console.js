import React from 'react';

import { entityName } from './../db/db';

const Console = () => {
    const [showConsole, setShowConsole] = React.useState(false);
    return (
        <div className="section-div">
            <code>
                <h2 className="comment">// Printing Object</h2>
                <h2>
                    <span className="variable"> {entityName}</span>
                    <span className="operator">.</span>
                    <span className="property">print()</span>
                    ;
                </h2>
            </code>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px'
                }}
            >
                <button onClick={() => setShowConsole(!showConsole)}>
                    {showConsole ? 'Hide' : 'Show'} Console
                </button>
            </div>
            {showConsole && (
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '20px'
                        }}
                    >
                        <pre
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '20px'
                            }}
                        >
                            <code
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '20px'
                                }}
                            >
                                {`
        {
            "name": "Uzair Riaz",
            "email": "{entityName}.pk@gmail.com"
            "phone": "0300-1234567",
            "address": "House #1, Road #1, Block #1, Gulshan-e-Iqbal, Karachi, Pakistan",
            "website": "https://{entityName}.com",
            "connect": {
                "linkedin": "https://www.linkedin.com/in/{entityName}pk/",
                "github": "https://github.com/{entityName}",
                }
            "education": [
                {
                    "institute": "University of Karachi",
                    "degree": "Bachelor of Engineering",
                    "field": "Computer Science",
                    "startYear": "2015",
                    "endYear": "2019",
                },
            ],
            "experience": [
                {
                    "company": "{entityName}",
                    "position": "Full Stack Developer",
                    "startYear": "2019",
                    "endYear": "Present",
                },
            ],
            "skills": [
            "ReactJS", "NodeJS", "SwiftUI"
            ],
            "certificates": [
                "NAVTTC Cloud Computing",
                "HCIA Cloud Computing",
                "HCIA R & S",
            ]
        }
        `}
                            </code>
                        </pre>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Console;

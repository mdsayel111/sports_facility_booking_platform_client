import { Steps } from "antd";
import Title from "../../shared/title/Title";
import React, { useState } from 'react';
import { Button, message, theme } from 'antd';

const steps = [
    {
        title: 'First',
        content: (<div className="flex flex-col items-center gap-4 w-full lg:w-1/3">
            <img src="/how-it-works1.jpg" className="h-30 w-30" />
            <h3 className="text-primary text-lg font-bold">LogIn</h3>
            <p>Log in to your account on the platform.</p>
        </div>),
    },
    {
        title: 'Second',
        content: (<div className="flex flex-col items-center gap-4 w-full lg:w-1/3">
            <img src="/how-it-works2.jpg" className="h-30 w-30" />
            <h3 className="text-primary text-lg font-bold">Booking</h3>
            <ol type="1" style={{listStyle: "en", textAlign: "start"}}>
                <li>Select the facility you wish to book.</li>
                <li>Choose your desired date and time slot.</li>
                <li>Confirm availability of the facility</li>
            </ol>
        </div>),
    },
    {
        title: 'Last',
        content: (<div className="flex flex-col items-center gap-4 w-full lg:w-1/3">
            <img src="/how-it-works3.jpg" className="h-30 w-30" />
            <h3 className="text-primary text-lg font-bold">Join</h3>
            <p>Join us in the field.</p>
        </div>),
    },
];

const HowItWorks = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
        // lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: "white",
        borderRadius: token.borderRadiusLG,
        border: `2px dashed ${token.colorPrimary}`,
        marginTop: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0px",
    };

    return (
        <div>
            <Title title="How It Works" />
            <div>
                <Steps current={current} items={items} />
                <div style={contentStyle}>{steps[current].content}</div>
                <div style={{ marginTop: 24 }}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
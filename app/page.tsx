import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <h1 style={{ fontSize: '48px', color: '#333' }}>Coming Soon!</h1>
            <p style={{ fontSize: '24px', color: '#666' }}>We are working hard to launch our new website.</p>
            <p style={{ fontSize: '18px', color: '#999' }}>Stay tuned for updates!</p>
        </div>
    );
};

export default ComingSoon;
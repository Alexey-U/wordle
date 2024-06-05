import React, { useState } from 'react';

const Settings = () => {
  const [mode, setMode] = useState('dark');
  
  return (<>
    <div className="settings">
      <button className="btn-mode">{mode === 'dark' ? 'Light mode' : 'Dark mode'}</button>
    </div>
    
  </>);
}

export default Settings;
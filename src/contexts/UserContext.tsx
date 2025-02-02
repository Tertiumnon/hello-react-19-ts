import React from 'react';

const UserContext = React.createContext({ userName: '', setUserName: (name: string) => {} });

export default UserContext;

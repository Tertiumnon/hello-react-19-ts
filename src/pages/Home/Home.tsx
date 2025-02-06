import React, { useEffect, useId } from 'react';
import UserContext from '../../contexts/UserContext';
import type { UserContextType } from '../../contexts/UserContextType';

function HomePage() {
  const { setUserName } = React.useContext(UserContext) as UserContextType;
  // user
  const userNameInpRef = React.useRef<HTMLInputElement | null>(null);
  const userNameInpId = useId();
  const [userNameInpVal, setUserNameInpVal] = React.useState('');
  //
  const onSaveBtnClick = () => {
    if (!userNameInpVal) alert('Please enter your name!');
    setUserName(userNameInpVal);
  };
  // renders
  useEffect(() => {
    userNameInpRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Welcome to the home page!</h1>
      <p>
        Your name:{' '}
        <input
          type="text"
          id={userNameInpId}
          value={userNameInpVal}
          ref={userNameInpRef}
          onChange={(e) => setUserNameInpVal((e.target as HTMLInputElement).value)}
        />{' '}
        <button type="button" onClick={onSaveBtnClick}>
          Save
        </button>
      </p>
    </div>
  );
}

export default HomePage;

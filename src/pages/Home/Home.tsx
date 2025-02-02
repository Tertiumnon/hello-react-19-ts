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
    setUserName(userNameInpVal);
  };
  // renders
  const renderCountRef = React.useRef(0);
  useEffect(() => {
    userNameInpRef.current?.focus();
    renderCountRef.current += 1;
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
      <p>Render count: {renderCountRef.current}</p>
    </div>
  );
}

export default HomePage;

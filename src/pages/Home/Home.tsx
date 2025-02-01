import React, { useId } from 'react';
import UserContext from '../../contexts/UserContext';
import type { UserContextType } from '../../contexts/UserContextType';

function HomePage() {
  const { setName } = React.useContext(UserContext) as UserContextType;
  const userId = useId();
  const [name, setFieldName] = React.useState('');
  const onSaveBtnClick = () => {
    setName(name);
  };

  return (
    <div>
      <h1>Welcome to the home page!</h1>
      <p>
        Your name:{' '}
        <input type="text" id={userId} value={name} onInput={(e) => setFieldName((e.target as HTMLInputElement).value)} />{' '}
        <button type="button" onClick={onSaveBtnClick}>
          Save
        </button>
      </p>
    </div>
  );
}

export default HomePage;

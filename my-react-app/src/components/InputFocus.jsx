import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // directly accesses the DOM element
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
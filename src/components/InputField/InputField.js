export const InputField = ({
  input,
  placeholder,
  setInput,
  label,
  type,
  id,
  focus,
  blur,
}) => {
  const randomId = Math.random().toString();
  return (
    <div className="field">
      <input
        className="field__input"
        placeholder={placeholder}
        onFocus={focus}
        onBlur={() => blur(label)}
        value={input}
        type={type}
        id={id + randomId}
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor={id + randomId} className="field__label">
        {label}
      </label>
    </div>
  );
};

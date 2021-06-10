export const InputField = ({
  input,
  placeholder,
  setInput,
  setPlaceholder,
  label,
  type,
  id,
}) => {
  const randomId = Math.random().toString();
  return (
    <div className="field">
      <input
        className="field__input"
        placeholder={placeholder}
        onFocus={() => setPlaceholder('')}
        onBlur={() => setPlaceholder(label)}
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

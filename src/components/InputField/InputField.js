export const InputField = ({
  input,
  placeholder,
  setInput,
  setPlaceholder,
  label,
  type,
  id,
}) => {
  return (
    <div className="field">
      <input
        className="field__input"
        placeholder={placeholder}
        onFocus={() => setPlaceholder('')}
        onBlur={() => setPlaceholder(label)}
        value={input}
        type={type}
        id={id}
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor={id} className="field__label">
        {label}
      </label>
    </div>
  );
};

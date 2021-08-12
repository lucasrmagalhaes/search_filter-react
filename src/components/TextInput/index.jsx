import './styles.css';

export const TextInput = ({ value, onChange }) => {
  return (
    <input
      className="text-input"
      value={value}
      onChange={onChange}
      type="search"
      placeholder="Type your search"
    />
  )
}
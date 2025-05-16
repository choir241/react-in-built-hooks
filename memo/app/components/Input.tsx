export default function Input({
  label,
  defaultValue,
  onChange,
  type,
  name,
}: {
  label: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name?: string;
}) {
  return (
    <label>
      {label}
      <input
        name={name}
        className="mediaInput"
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
      />
    </label>
  );
}

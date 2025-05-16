export default function TextArea({
  label,
  defaultValue,
  onChange,
  name,
}: {
  label: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
}) {
  return (
    <label>
      {label}
      <textarea
        name={name}
        className="textbox"
        rows={10}
        cols={50}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </label>
  );
}

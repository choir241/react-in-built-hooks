export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return <button onClick={onClick}>{label}</button>;
}

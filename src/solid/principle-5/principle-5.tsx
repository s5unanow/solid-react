const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue', color: 'white' }}>
      {label}
    </button>
  );
};

type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <h1>{title}</h1>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default ActionBar;

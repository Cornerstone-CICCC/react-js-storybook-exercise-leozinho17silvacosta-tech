type Status = "success" | "warning" | "error";

interface CustomToastProps {
  status: Status;
  text: string;
  hasIcon: boolean;
}

function CustomToast({ status, text, hasIcon }: CustomToastProps) {
  const styles = {
    success: {
      backgroundColor: "lightgreen",
      emoji: "✅",
    },
    warning: {
      backgroundColor: "#fbc788",
      emoji: "⚠️",
    },
    error: {
      backgroundColor: "#ff9292",
      emoji: "❌",
    },
  };

  return (
    <div
      style={{
        backgroundColor: styles[status].backgroundColor,
        padding: "1rem",
        borderRadius: "8px",
        minWidth: "250px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {hasIcon && <span>{styles[status].emoji}</span>}
      <span>{text}</span>
    </div>
  );
}

export default CustomToast;

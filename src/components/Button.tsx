import "../styles/Button.css";

interface ButtonProps {
  children: string;
  imageUrl: string;
  onHover?: () => void;
  onLeave?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  imageUrl,
  onHover,
  onLeave,
}) => {
  const buttonStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <button
      className="zoom-button"
      style={buttonStyle}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="button-text">{children}</div>
    </button>
  );
};

export default Button;

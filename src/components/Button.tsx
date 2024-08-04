import "../styles/Button.css";

interface ButtonProps {
  children: string;
  imageUrl: string;
}

const Button: React.FC<ButtonProps> = ({ children, imageUrl }) => {
  const buttonStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <button className="zoom-button" style={buttonStyle}>
      <div className="button-text">{children}</div>
    </button>
  );
};

export default Button;

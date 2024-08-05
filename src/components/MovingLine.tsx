import "../styles/MovingCircle.css";

interface Props {
  className: string;
}

const MovingLine = ({ className }: Props) => {
  return (
    <div className="circle-container">
      <svg width="50" height="50" viewBox="-3 -3 106 106">
        <circle cx="50" cy="50" r="45" className={className} />
      </svg>
    </div>
  );
};

export default MovingLine;

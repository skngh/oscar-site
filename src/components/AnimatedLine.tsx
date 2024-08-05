import "../styles/AnimatedLine.css";

interface Props {
  className?: string;
  containerClassName?: string;
}

const AnimatedLine = ({
  className = "hide-line",
  containerClassName = "animated-line-image",
}: Props) => {
  return (
    <>
      <div className="container">
        <div className={containerClassName}>
          <svg preserveAspectRatio="xMidYMax meet" viewBox="-5 -5 125.8 64.89">
            <path
              className={className}
              d="M1.19,63.57c-1.1-3.74-2-9.52,0-15.88,2.38-7.55,9.12-16.8,20.26-18.04,8.27-.92,17.08,3.06,21.42,9.67,1.45,2.2,1.87,3.93,2.18,5.18.21.85.33,1.3.58,1.53.4.36,3,1.76,15.49-6.08,11.55-7.26,28.89-20.7,51.53-39.95l1.21,1.42.73.86c-22.75,19.34-40.2,32.87-51.87,40.21-10.41,6.54-16.31,8.32-19.11,5.76-.94-.86-1.2-1.92-1.47-3.04-.28-1.16-.6-2.48-1.77-4.25-3.75-5.7-11.39-9.13-18.58-8.33-9.71,1.08-15.62,9.27-17.74,15.96-1.78,5.63-.98,10.79,0,14.12l-2.88.85Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AnimatedLine;

type BackgroundCircleType = {
  color: string;
  className: string;
};

const BackgroundCircle: React.FC<BackgroundCircleType> = ({
  color,
  className,
}) => {
  return (
    <div className={className}>
      <div
        style={{ backgroundColor: color }}
        className="rounded-full h-[540px] w-[540px] blur-[100px] opacity-50"
      />
    </div>
  );
};

export default BackgroundCircle;

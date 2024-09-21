type Props = {};

const AmbientBackground = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 w-scren h-screen pointer-events-none select-none">
      <div className="isolate inset-0 z-[calc(var(--layer-header)_-_1)]">
        <div className="ambient-light-a absolute rounded-full top-0 left-0 h-[1380px]"></div>
        <div className="ambient-light-b absolute rounded-full top-0 left-0 h-[1380px]"></div>
        <div className="ambient-light-c"></div>
      </div>
    </div>
  );
};

export default AmbientBackground;

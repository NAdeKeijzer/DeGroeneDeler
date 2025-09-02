const Icon = ({ svg }: { svg: string }) => {
  return (
    <img src={svg} style={{ height: "24px", width: "24px" }} aria-hidden />
  );
};

export default Icon;

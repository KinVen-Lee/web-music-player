import "./index.less";
const SingerTarget = (props: any) => {
  const { data, className, currentActive, customFunction, stateType } = props;

  const handleClick = (item: string) => {
    customFunction(stateType, item);
  };

  return (
    <>     
      <div className={`singer-tag-list ${className}`}>
        <ul className="">
          {data &&
            data.map((item: { data: string; key: string }) => (
              <li
                key={item.key}
                className={currentActive === item.key ? "active" : ""}
                onClick={handleClick.bind({}, item.key)}
              >
                ​ {item.data}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default SingerTarget;

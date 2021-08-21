export const Todo = () => {
  const { title, userid } = props;
  return <p>{`${title}(ユーザー:${userid})`}</p>;
};

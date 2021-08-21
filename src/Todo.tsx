type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  //completedはない場合もあるから　初期値としてfalseを設定する
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};

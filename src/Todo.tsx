import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  //completedはない場合もあるから　初期値としてfalseを設定する
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};

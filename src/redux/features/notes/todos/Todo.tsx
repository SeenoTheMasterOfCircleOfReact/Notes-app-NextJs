import { TodoType } from '../notesSlice';

type TodoPropsType = {
  noteId: string;
  todo: TodoType;
};

export default function Todo({ noteId, todo }: TodoPropsType) {
  return (
    <div className="shadow-md border-b border-slate-800 py-4 px-2">
      <div></div>
      {todo.text}
    </div>
  );
}

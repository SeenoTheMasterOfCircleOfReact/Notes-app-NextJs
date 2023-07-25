import { useState } from 'react';

import { removeTodo, TodoType, updateTodo } from '../notesSlice';

import { useAppDispatch } from '@/redux/hooks';
import Button from '@/UI/Button';
import { DeleteIcon, SaveIcon } from '@/UI/Icons';

type TodoPropsType = {
  noteId: string;
  todo: TodoType;
};

export default function Todo({ noteId, todo }: TodoPropsType) {
  const dispatch = useAppDispatch();

  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [text, setText] = useState(todo.text);

  //check to see if we've changed the content to save or not
  const isChanged = !(isCompleted === todo.completed && text === todo.text);

  return (
    <div className="shadow-md border-b border-slate-800 py-4 px-2 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div
          className="w-8 h-8 bg-slate-300 rounded-md cursor-pointer flex items-center justify-center"
          onClick={() => setIsCompleted(prev => !prev)}
        >
          {isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              className="w-6 h-6 stroke-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
        </div>
        <input
          className="flex-1 h-full bg-transparent p-2 outline-none decoration-amber-500"
          value={text}
          placeholder="فعالیت خودرا وارد کنید"
          onChange={e => setText(e.target.value)}
          style={{
            color: isCompleted ? '#555' : '#ffff',
            textDecoration: isCompleted ? '1px line-through #fff' : 'none',
          }}
        />
      </div>
      <div className="w-max border-2float-left flex gap-2">
        {isChanged && (
          <Button
            variant="save"
            circular
            onClick={() =>
              dispatch(
                updateTodo({
                  noteId,
                  todo: { id: todo.id, text, completed: isCompleted },
                })
              )
            }
          >
            <SaveIcon />
          </Button>
        )}
        <Button
          variant="delete"
          circular
          onClick={() =>
            dispatch(
              removeTodo({
                noteId,
                todo: { id: todo.id, text, completed: isCompleted },
              })
            )
          }
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
  //rgb(251, 191, 36)
}

import { useState } from 'react';

import { removeTodo, TodoType, updateTodo } from '../notesSlice';
import { useAppDispatch } from '@/redux/hooks';
import Button from '@/UI/Button';

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
            variant="secondary"
            style={{
              borderRadius: '100%',
              padding: 0,
              width: '3rem',
              height: '3rem',
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={() =>
              dispatch(
                updateTodo({
                  noteId,
                  todo: { id: todo.id, text, completed: isCompleted },
                })
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
          </Button>
        )}
        <Button
          variant="secondary"
          style={{
            borderRadius: '100%',
            padding: 0,
            width: '3rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={() =>
            dispatch(
              removeTodo({
                noteId,
                todo: { id: todo.id, text, completed: isCompleted },
              })
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
  //rgb(251, 191, 36)
}

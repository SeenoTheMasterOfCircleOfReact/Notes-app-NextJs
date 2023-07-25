import { useState } from 'react';

import { TodoType } from '../notesSlice';
import { useAppDispatch } from '@/redux/hooks';

type TodoPropsType = {
  noteId: string;
  todo: TodoType;
};

export default function Todo({ noteId, todo }: TodoPropsType) {
  const dispatch = useAppDispatch();

  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [text, setText] = useState(todo.text);

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
    </div>
  );
  //rgb(251, 191, 36)
}

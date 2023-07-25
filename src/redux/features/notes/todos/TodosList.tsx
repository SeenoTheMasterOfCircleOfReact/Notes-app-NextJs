import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addTodo, selectNoteList } from '../notesSlice';
import Todo from './Todo';

export default function TodosList({ noteId }: { noteId: string }) {
  const dispatch = useAppDispatch();
  // we select the list manually with it's own selector
  const list = useAppSelector(state => selectNoteList(state, noteId));
  // adding newTodo to our note
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        noteId,
        todo: { id: nanoid(), text: 'hi', completed: false },
      })
    );
  };
  return (
    <div className="h-full">
      {list.map(todo => (
        <Todo key={todo.id} todo={todo} noteId={noteId} />
      ))}
      <div
        className="px-4 py-2 my-4 mx-8 w-max rounded-md flex gap-4 items-center border-2 border-slate-400 cursor-pointer"
        onClick={handleAddTodo}
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        افزودن فعالیت
      </div>
    </div>
  );
}

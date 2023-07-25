'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addTodo,
  selectNote,
  selectNoteList,
  updateNote,
} from '@/redux/features/notes/notesSlice';

import Button from '@/UI/Button';
import TodosList from '@/redux/features/notes/todos/TodosList';

export default function Page({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  // using the custom selectNote selector to get the needed note
  const note = useAppSelector(state => selectNote(state, params.id));

  // if there is no note with the given id we get a 404 page
  if (!note) notFound();

  const [title, setTitle] = useState(note.title);
  const [type, setType] = useState(note.type);
  const [content, setContent] = useState(note.content);

  // check to see if the note is a todoList or not
  const isTodoList = type === 'todo';

  //check to see if we've changed the content to save or not
  const isChanged = !(
    title === note.title &&
    content === note.content &&
    type === note.type
  );

  return (
    <div className="h-full flex flex-col">
      <input
        type="text"
        className="w-full bg-transparent py-8 px-8 text-xl font-semibold focus:outline-none border-b-2 border-slate-800"
        placeholder="عنوان یادداشت"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <div className="flex-1">
        {!isTodoList && (
          <textarea
            className="w-full h-full bg-transparent py-8 px-8 focus:outline-none"
            placeholder="متن یادداشت"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        )}
        {isTodoList && <TodosList noteId={params.id} />}
      </div>

      <div className="flex items-center justify-between">
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
          onClick={() => setType(isTodoList ? 'text' : 'todo')}
        >
          {isTodoList ? (
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          ) : (
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </Button>
        {isChanged && (
          <Button
            onClick={() =>
              dispatch(updateNote({ id: params.id, title, content, type }))
            }
          >
            ‌ذخیره
          </Button>
        )}
      </div>
    </div>
  );
}

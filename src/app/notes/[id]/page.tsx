'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectNote, updateNote } from '@/redux/features/notes/notesSlice';

import TodosList from '@/redux/features/notes/todos/TodosList';
import { CheckboxIcon, DocumentIcon } from '@/UI/Icons';
import Button from '@/UI/Button';

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
    <div className="pt-24 flex flex-col">
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

      <div className="flex items-center justify-between py-2">
        <Button
          variant="secondary"
          circular
          onClick={() => setType(isTodoList ? 'text' : 'todo')}
        >
          {isTodoList ? <CheckboxIcon /> : <DocumentIcon />}
        </Button>
        {isChanged && (
          <Button
            onClick={() =>
              dispatch(
                updateNote({
                  id: params.id,
                  title,
                  content,
                  type,
                  list: note.list,
                })
              )
            }
          >
            ‌ذخیره
          </Button>
        )}
      </div>
    </div>
  );
}

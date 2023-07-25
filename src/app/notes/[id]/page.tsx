'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';

import { useAppSelector } from '@/redux/hooks';
import { TodoType, selectNote } from '@/redux/features/notes/notesSlice';

export default function Page({ params }: { params: { id: string } }) {
  // using the custom selectNote selector to get the needed note
  const note = useAppSelector(state => selectNote(state, params.id));
  // if there is no note with the given id we get a 404 page

  const [title, setTitle] = useState(note?.title);
  const [type, setType] = useState(note?.type);
  const [content, setContent] = useState(note?.content);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState();

  // useEffect(() => {}, []);
  // if (!note) notFound();

  console.log(note);

  const isStringContent = (
    content: string | TodoType[] | undefined
  ): content is string => {
    return typeof content === 'string';
  };

  return (
    <div className="h-full flex flex-col">
      <input
        type="text"
        className="w-full bg-transparent block py-8 px-8 text-xl font-semibold focus:outline-none "
        placeholder="عنوان یادداشت"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className="flex-1">
        {isStringContent(content) && (
          <textarea
            className="w-full h-full bg-transparent py-8 px-8 focus:outline-none border-t-2 border-slate-800"
            placeholder="متن یادداشت"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        )}
      </div>
    </div>
  );
}

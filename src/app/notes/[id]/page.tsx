'use client';

import { useMemo, useState } from 'react';
import { notFound } from 'next/navigation';

import { useAppSelector } from '@/redux/hooks';
import { TodoType, selectNote } from '@/redux/features/notes/notesSlice';

type ContentType = string | TodoType[] | undefined;

export default function Page({ params }: { params: { id: string } }) {
  // using the custom selectNote selector to get the needed note
  const note = useAppSelector(state => selectNote(state, params.id));
  // if there is no note with the given id we get a 404 page

  const [title, setTitle] = useState(note?.title);
  const [type, setType] = useState(note?.type);
  const [content, setContent] = useState(note?.content);

  let prevContent: ContentType;

  // useEffect(() => {}, []);
  // if (!note) notFound();

  console.log(note);

  // const isTodoContent = (
  //   content: string | TodoType[] | undefined
  // ): content is string => {
  //   return typeof content === 'string';
  // };

  // checks if the type of content is an array of todos or not
  function isTodoArray(content: ContentType): content is TodoType[] {
    return (
      Array.isArray(content) &&
      content.every(
        item =>
          typeof item === 'object' &&
          item !== null &&
          'id' in item &&
          'text' in item &&
          'completed' in item
      )
    );
  }

  console.log(isTodoArray(content));

  return (
    <div className="h-full flex flex-col">
      <input
        type="text"
        className="w-full bg-transparent block py-8 px-8 text-xl font-semibold focus:outline-none border-b-2 border-slate-800"
        placeholder="عنوان یادداشت"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className="flex-1">
        {!isTodoArray(content) && (
          <textarea
            className="w-full h-full bg-transparent py-8 px-8 focus:outline-none"
            placeholder="متن یادداشت"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        )}
        {isTodoArray(content) && (
          {content.map()}
        )}
      </div>
    </div>
  );
}

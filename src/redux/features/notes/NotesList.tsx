'use Client';

import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';

export default function NotesList() {
  const notes = useAppSelector(state => state.notes);
  return (
    <>
      {notes.map(note => (
        <Link key={note.id} href={`notes/${note.id}`}>
          <div className="border-2 my-2 py-4">{note.title}</div>
        </Link>
      ))}
    </>
  );
}

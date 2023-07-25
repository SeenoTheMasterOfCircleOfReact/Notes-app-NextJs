'use Client';

import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Button from '@/UI/Button';
import { DeleteIcon } from '@/UI/Icons';
import { NoteType, removeNote } from './notesSlice';

export default function NotesList() {
  const notes = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  return (
    <>
      {notes.map(note => (
        <div
          key={note.id}
          className="border-2 my-2 p-4 flex justify-between items-center rounded-lg"
        >
          <Link key={note.id} href={`notes/${note.id}`}>
            {note.title}
          </Link>

          <Button
            circular
            variant="delete"
            onClick={() => dispatch(removeNote(note))}
          >
            <DeleteIcon />
          </Button>
        </div>
      ))}
    </>
  );
}

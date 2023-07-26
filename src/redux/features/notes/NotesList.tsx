'use Client';

import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import Button from '@/UI/Button';
import { DeleteIcon } from '@/UI/Icons';
import { removeNote } from './notesSlice';

export default function NotesList() {
  const notes = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // reordering the notes. new notes should be on top of the page
  const orderedNotes = [...notes].reverse();
  return (
    <>
      {orderedNotes.length > 0 ? (
        <>
          {orderedNotes.map(note => (
            <div
              key={note.id}
              className="border-2 my-2 px-2 py-2 flex justify-between items-center rounded-lg"
            >
              <Link
                key={note.id}
                href={`notes/${note.id}`}
                className="h-12 flex-1 flex items-center"
              >
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
      ) : (
        <div>یادداشت های شما خالی است</div>
      )}
    </>
  );
}

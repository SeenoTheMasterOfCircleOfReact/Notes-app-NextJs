'use Client';

import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import Button from '@/UI/Button';
import { DeleteIcon } from '@/UI/Icons';

export default function NotesList() {
  const notes = useAppSelector(state => state.notes);
  return (
    <>
      {notes.map(note => (
        <Link key={note.id} href={`notes/${note.id}`}>
          <div className="border-2 my-2 p-4 flex justify-between items-center rounded-lg">
            {note.title}
            <Button circular variant="delete">
              <DeleteIcon />
            </Button>
          </div>
        </Link>
      ))}
    </>
  );
}

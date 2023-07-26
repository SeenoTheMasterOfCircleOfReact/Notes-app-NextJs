import Link from 'next/link';

import { useAppDispatch } from '@/redux/hooks';
import { NoteType, removeNote } from './notesSlice';

import Button from '@/UI/Button';
import { DeleteIcon } from '@/UI/Icons';

type NotePropsType = {
  note: NoteType;
};

export default function Note({ note }: NotePropsType) {
  const dispatch = useAppDispatch();

  // we're limiting the displaying characters for title
  const title =
    note.title.length > 40 ? note.title.slice(0, 40) + '...' : note.title;

  return (
    <div
      key={note.id}
      className="border-2 my-2 px-2 py-2 flex justify-between items-center rounded-lg"
    >
      <Link
        key={note.id}
        href={`notes/${note.id}`}
        className="h-12 flex-1 flex items-center"
      >
        {title}
      </Link>

      <Button
        circular
        variant="delete"
        onClick={() => dispatch(removeNote(note))}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}

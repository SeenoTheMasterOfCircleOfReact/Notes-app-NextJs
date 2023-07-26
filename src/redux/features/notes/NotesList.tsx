'use Client';

import { useAppSelector } from '@/redux/hooks';

import Note from './Note';

export default function NotesList() {
  const notes = useAppSelector(state => state.notes);

  // reordering the notes. new notes should be on top of the page
  const orderedNotes = [...notes].reverse();
  return (
    <>
      {orderedNotes.length > 0 ? (
        <>
          {orderedNotes.map(note => (
            <Note key={note.id} note={note} />
          ))}
        </>
      ) : (
        <div className="text-center pt-8">یادداشت های شما خالی است</div>
      )}
    </>
  );
}

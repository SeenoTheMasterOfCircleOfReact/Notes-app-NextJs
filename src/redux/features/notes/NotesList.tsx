'use Client';

import { useAppSelector } from '@/redux/hooks';

import Note from './Note';

export default function NotesList() {
  const notes = useAppSelector(state => state.notes);

  // reordering the notes. new notes should be on top of the page
  const orderedNotes = [...notes].reverse();
  return (
    <div className="pt-24">
      {orderedNotes.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {orderedNotes.map(note => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="text-center pt-8">یادداشت های شما خالی است</div>
      )}
    </div>
  );
}

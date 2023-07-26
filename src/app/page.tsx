'use client';

import NotesList from '@/redux/features/notes/NotesList';

export default function Home() {
  return (
    <div className="pt-20">
      <NotesList />
    </div>
  );
}

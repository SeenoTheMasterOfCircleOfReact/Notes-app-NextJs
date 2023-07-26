'use client';

import NotesList from '@/redux/features/notes/NotesList';

export default function Home() {
  return (
    <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <NotesList />
    </div>
  );
}

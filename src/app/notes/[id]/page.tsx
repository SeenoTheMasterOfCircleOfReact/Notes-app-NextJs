'use client';

import { useAppSelector } from '@/redux/hooks';
import { selectNote } from '@/redux/features/notes/notesSlice';

export default function Page({ params }: { params: { id: string } }) {
  // using the custom selectNote selector to get the needed note
  const note = useAppSelector(state => selectNote(state, params.id));

  console.log(note);

  return <main>{params.id}</main>;
}

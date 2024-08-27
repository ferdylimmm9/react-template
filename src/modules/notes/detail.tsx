import { useGetNote } from '@/api-hooks/notes/query';
import { useParams } from 'react-router-dom';

export default function NoteDetailPage() {
  const params = useParams();
  const id = params.id!;
  const queryNote = useGetNote({ id });
  console.log(queryNote.data);
  return <>Note</>;
}

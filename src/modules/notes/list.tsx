import { useGetArchivedNotes, useGetNotes } from '@/api-hooks/notes/query';

import { Loader } from '@mantine/core';

interface NotesListPageProps {
  isArchived?: boolean;
}

export default function NotesListPage(props: NotesListPageProps) {
  const queryArchivedNotes = useGetArchivedNotes({
    enabled: !!props.isArchived,
  });

  const queryNotes = useGetNotes({
    enabled: !props.isArchived,
  });

  const query = props.isArchived ? queryArchivedNotes : queryNotes;

  if (query.isPending) return <Loader />;

  console.log(query.data);

  return <>{JSON.stringify(query.data)}</>;
}

import { useGetMe } from '@/api-hooks/auth/query';

export default function ProfilePage() {
  const { data } = useGetMe();
  console.log(data);
  return <>tes</>;
}

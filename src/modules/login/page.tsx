import { Button } from '@mantine/core';
import { useLogin } from '@/api-hooks/auth/mutation';
import { Token } from '@/constants/token';
import { useNavigate } from 'react-router-dom';
import RouteEnum from '@/constants/route/enum';
import queryClient from '@/constants/api/query-client';

export default function LoginPage() {
  const { mutateAsync, isPending } = useLogin();

  const push = useNavigate();

  const onClickLogin = async () => {
    const data = await mutateAsync({
      email: 'admin@springkraf.com',
      password: 'secret',
    });
    Token.setToken(data.data.accessToken);
    queryClient.invalidateQueries();
    push(RouteEnum.Profile);
  };

  return (
    <Button onClick={onClickLogin} loading={isPending}>
      Login
    </Button>
  );
}

import { Button } from '@mantine/core';
import { useRegister } from '@/api-hooks/auth/mutation';

export default function RegisterPage() {
  const { mutateAsync, isPending, error } = useRegister();
  const onClickRegister = async () => {
    mutateAsync({
      name: 'Ferdy JR',
      email: 'admin@springkraf.com',
      password: 'secret',
    });
  };
  console.log(error);
  return (
    <Button onClick={onClickRegister} loading={isPending}>
      Register
    </Button>
  );
}

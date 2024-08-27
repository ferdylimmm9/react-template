import { getMe } from '@/api-hooks/auth/query';
import { Token } from '../token';

export async function isAuthenticated() {
  try {
    const me = await getMe();
    return !!me;
  } catch (e) {
    Token.clearToken();
    return false;
  }
}

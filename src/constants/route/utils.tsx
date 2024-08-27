import { Token } from '../token';

export async function isAuthenticated() {
  try {
    return true;
  } catch (e) {
    Token.clearToken();
    return false;
  }
}

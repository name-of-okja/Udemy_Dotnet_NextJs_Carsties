export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/session'],
  pagese: {
    signIn: '/api/auth/signin',
  },
};

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiResponse, NextApiRequest } from 'next';

const options = {
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
  ],
  pages: {
    signIn: `/`,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

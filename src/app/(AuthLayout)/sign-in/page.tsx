import React from 'react';
import { Metadata } from 'next';
import SignInForm from '@/components/pages/signIn/SignInForm';

export const metadata: Metadata = {
  title: "ZENVY | Sign In",
  description: "Users sign in page. user can sign in or login there account",
};

const SignInPage = () => {
    return (
        <div >
            <SignInForm />
        </div>
    );
};

export default SignInPage;
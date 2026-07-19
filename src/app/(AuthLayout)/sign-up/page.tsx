import React from 'react';
import { Metadata } from 'next';
import SignUpForm from '@/components/pages/signUp/SignUpForm';

export const metadata: Metadata = {
  title: "ZENVY | Sign Up",
  description: "Sign up page of ZENVY. New users can sign up or register in this page.",
};

const SignUpPage = () => {
    return (
        <div className= "">
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
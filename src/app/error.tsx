'use client'
import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react'

type ErrorComponentProps = {
    error: Error;
    reset: () => void
};

const ErrorComponent = ({ error, reset }: ErrorComponentProps) => {
    return (
      <div>
            <p>{`Something went wrong. ${error.message}`}</p>
            <Button onClick={() => reset()}>Попробовать еще раз</Button>
            <p>Или</p>
        <Link href="/">Вернуться на главную</Link>
      </div>
    );
};

export default ErrorComponent
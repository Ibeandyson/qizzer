'use client';

import useAppRouter from '@/global/hooks/useAppRouter';
import { useEffect } from 'react';

export default function OrdersDetails({ params }: { params: { id: string } }) {
  const { setParamsForNavigation } = useAppRouter();

  useEffect(() => {
    setParamsForNavigation(params.id);
  }, []);
  return (
    <>
      <h1 style={{ paddingTop: '550px' }}>kckkckckck</h1>
    </>
  );
}

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import serviceApi from '@/api/serviceApi';
import { toast } from 'react-toastify';

export default function Service() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const data = { id };
    serviceApi
      .update(data)
      .then(() => {
        router.push(`/`);
        toast.success(`Bаш запис успішно пітдветджено!`);
      })
      .catch(() => {
        router.push(`/`);
        toast.error(`Bи не можете підтверджувати запис по декілька разів!!`);
      });
  }, [id]);

  return null;
}

import useSwr from 'swr';

export function useGetServiceDay(day: string) {
  if (!day) return;

  const { data } = useSwr(`/serviceDay?day=${day}`);

  return {
    serviceDay: data,
  };
}

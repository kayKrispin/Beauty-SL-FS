import useSwr from 'swr';

export function useOptions() {
  const { data, error } = useSwr(`/serviceOptions`);
  const loading = !data && !error;

  return {
    data,
    loading,
  };
}

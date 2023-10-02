import {useState} from 'react';

type UsePaginationSettings = {
  pageSize: number;
  initialPage: number;
  data: any[];
};

const usePagination = ({
  pageSize,
  initialPage,
  data,
}: UsePaginationSettings) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [renderedData, setRenderedData] = useState<any[]>(
    data.slice(0, pageSize),
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const paginate = (database: any[], current: number, size: number) => {
    const start = (current - 1) * size;
    const end = start + size;

    return database.slice(start, end);
  };

  const fetchNextPage = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const nextPageData = paginate(data, currentPage + 1, pageSize);

      if (nextPageData.length > 0) {
        setRenderedData(prev => [...prev, ...nextPageData]);
        setCurrentPage(currentPage + 1);
      }
      setIsLoading(false);
    }, 2000);
  };

  return {
    renderedData,
    fetchNextPage,
    isLoading,
  };
};

export default usePagination;

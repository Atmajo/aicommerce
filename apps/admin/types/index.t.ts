interface MainlayoutProps {
  children: React.ReactNode;
  className?: string;
}

interface AuthlayoutProps {
  children: React.ReactNode;
  className?: string;
}

interface ProductProps {
  params: {
    productId: string;
  };
}

interface PathlinkProps {
  title: string;
  url?: string;
}

interface ReviewstarsProps {
  review: number;
}

interface ProductfaqsProps {
  q: string;
  a: string;
}

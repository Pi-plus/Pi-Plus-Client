'use client';

import Button from '@/components/Button';
import Typography from '@/components/Typography';

const PreviewPage = () => {
  return (
    <div className="w-full flex-1 flex flex-col">
      <Typography className="pt-4">버튼 컴포넌트</Typography>
      <Button className="my-5">버튼</Button>
      <Button className="my-5" disabled>
        버튼
      </Button>
      <Button className="my-5" loading>
        버튼
      </Button>
      <Button className="my-5" type="default">
        버튼
      </Button>
      <Typography className="pt-4">버튼 컴포넌트</Typography>
    </div>
  );
};
export default PreviewPage;

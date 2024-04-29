'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Typography from '@/components/Typography';
import { useInput } from '@/hooks';

const PreviewPage = () => {
  const { onChange, value } = useInput('');
  return (
    <div className="w-full flex-1 flex flex-col px-2">
      <Typography className="pt-4">button 컴포넌트</Typography>
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
      <Typography className="pt-4">input 컴포넌트</Typography>
      <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" />
      <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" type="secondary" />

      <Input placeholder="adsg" value={value} onChange={onChange} errorMessage="에러!" />
    </div>
  );
};
export default PreviewPage;

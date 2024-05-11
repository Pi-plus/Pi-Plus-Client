/**
 *
 * @returns 수학 문제 답안 입력 컴포넌트
 */

import Input from '@/components/Input';
import MathTitle from '@/components/MathTitle';

interface IMathResponse {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  title: string;
}
const MathResponse = ({ value, onChange, title }: IMathResponse) => {
  return (
    <div className="w-full">
      <MathTitle type="secondary" title={title} />
      <div className="border border-gray-10 rounded-b-xl py-16 px-12">
        <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" type="secondary" />
      </div>
    </div>
  );
};
export default MathResponse;

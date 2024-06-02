import Button from '@/components/Button';
import Select from '@/components/Select';

const MathSelectOptions = () => {
  return (
    <div className="w-full flex justify-end mb-10 pr-10 mt-14">
      <div className="flex gap-4 items-center">
        <Select value="" placeholder="난이도" options={[]} onChange={() => {}} />
        <Select value="" placeholder="난이도" options={[]} onChange={() => {}} />
        <Select value="" placeholder="난이도" options={[]} onChange={() => {}} />
        <Button className="px-6 py-3">문제 검색</Button>
      </div>
    </div>
  );
};
export default MathSelectOptions;

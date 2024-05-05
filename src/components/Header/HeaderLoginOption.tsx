import Typography from '../Typography';

const HeaderLoginOption = () => {
  return (
    <div className="flex items-center mb-5">
      <Typography label="caption1" color="gray60" className="cursor-pointer" onClick={() => {}}>
        회원가입
      </Typography>
      <Typography label="caption1" color="gray60" className="mx-4">
        |
      </Typography>
      <Typography label="caption1" color="gray60" className="cursor-pointer" onClick={() => {}}>
        로그인
      </Typography>
    </div>
  );
};
export default HeaderLoginOption;

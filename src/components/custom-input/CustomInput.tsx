import { ChangeEvent, DetailedHTMLProps, FC } from "react";

type TCustomInput = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  handleChnage: (value: string) => void;
};

const CustomInput: FC<TCustomInput> = ({ handleChnage, ...rest }) => {
  const onChnage = (e: ChangeEvent<HTMLInputElement>) => {
    handleChnage(e.target.value);
  };
  return <input type="text" onChange={onChnage} {...rest} />;
};

export default CustomInput;

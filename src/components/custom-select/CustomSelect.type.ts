export interface IProps {
  options: string[];
  value: string;
  onClickOption: (value: any) => void;
}

export type TProps<T> = {
  options: T[];
  value: T;
  onClickOption: (value: T) => void;
};

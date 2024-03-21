import { ChangeEvent, ComponentType } from "react";
import classNames from "classnames";

export interface InputGroupProps {
  label?: string;
  name: string;
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  shadow?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
}

export const InputGroup = (props: InputGroupProps) => (
  <div
    className={classNames("relative rounded-md", { "shadow-md": props.shadow })}
  >
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      {props.Icon ? (
        <props.Icon className="h-5 w-5 flex-shrink-0 text-blue-800" />
      ) : (
        <></>
      )}
    </div>
    <input
      autoFocus={props.autoFocus}
      type="text"
      name={props.name}
      className="block w-full rounded-full bg-gray-100 py-1.5 pl-10 pr-5 text-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-300"
      placeholder={props.placeholder ?? "One little turtle-neck"}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

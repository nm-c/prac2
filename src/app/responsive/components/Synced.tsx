import { SyncedValue } from './type';
import { toFixed } from './util';

export default function Synced({ value, postfix, convert = toFixed() }: { value: SyncedValue, postfix?: string | undefined, convert?: ((value: string) => string) }) {
  const converted_value = convert(value.value);
  if (value.synced)
    return (<>{converted_value}{ postfix && <span className="text-sm ml-0.5 text-slate-700">{postfix}</span> }</>);

  return (
    <span title={value.ts} className="line-through text-slate-400 text-sm">
      &#x26A0;{converted_value}{postfix}
    </span>
  );
}
;

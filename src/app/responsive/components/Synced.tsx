import { SyncedValue } from './type';
import { toFixed } from './util';

export default function Synced({ value, convert = toFixed() }: { value: SyncedValue; convert?: ((value: string) => string); }) {
  const converted_value = convert(value.value);
  if (value.synced)
    return (<>{converted_value}</>);

  return (
    <span title={value.ts} className="line-through text-slate-400 text-xs">
      &#x26A0;{converted_value}
    </span>
  );
}
;

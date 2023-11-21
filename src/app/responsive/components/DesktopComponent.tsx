import Synced from './Synced';
import { Etf } from './type';
import { toLocale } from './util';

export default function Home({data}: {data: Etf[]}) {

  return (
    <>
    <div>
      <h1 className="my-10 mx-auto w-fit font-gaegu font-bold text-slate-700 text-3xl tracking-wide">Card & Table Responsive Test</h1>
    </div>
    <table className="mx-auto table w-[700px] border-solid border border-slate-700 bg-slate-50">
      <thead className="table-header-group border bg-slate-200">
        <tr className="table-row">
          <td className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-full">Name</td>
          <td className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit text-sm">YTM</td>
          <td className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit text-xs">Duration</td>
          <td className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit text-xs">MarketCap</td>
          <td className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit">Fee</td>
        </tr>
      </thead>
      <tbody className="table-row-group">
        {
          data.map((item, idx) => (
            <tr key={idx} className="table-row m-0 p-0 border-none shadow-none even:bg-slate-100 hover:bg-slate-200">
              <td className="m-0 table-cell px-2 py-2 border border-slate-300">
                <div className="block">
                  <div className="hidden">Name:</div>
                  <div className="m-0">{item.name}</div>
                </div>
              </td>
              <td className="m-0 table-cell px-2 py-2 border border-slate-300">
                <div className="block">
                  <div className="hidden">YTM:</div>
                  <div className="m-0"><Synced value={item.ytm}/></div>
                </div>
              </td>
              <td className="m-0 table-cell px-2 py-2 border border-slate-300">
                <div className="block">
                  <div className="hidden">Duration:</div>
                  <div className="m-0"><Synced value={item.duration}/></div>
                </div>
              </td>
              <td className="m-0 table-cell px-2 py-2 border border-slate-300">
                <div className="block">
                  <div className="hidden">MarketCap:</div>
                  <div className="m-0"><Synced value={item.marketcap} convert={toLocale}/></div>
                </div>
              </td>
              <td className="m-0 table-cell px-2 py-2 border border-slate-300">
                <div className="block">
                  <div className="hidden">Fee:</div>
                  <div className="m-0"><Synced value={item.fundfee}/></div>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  );
}
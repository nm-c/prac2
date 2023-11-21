/* eslint-disable @next/next/no-img-element */

import Synced from './Synced';
import { Etf } from './type';
import { toLocale } from './util';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Home({ data }: { data: Etf[]}) {
  return (
    <>
    <div>
      <h1 className="my-10 mx-auto w-fit font-gaegu text-2xl font-bold tracking-tight text-slate-700">Card & Table Responsive Test</h1>
    </div>
    <div className="mx-auto px-5 my-10 flex flex-wrap justify-center gap-7">
      {
        data.map((item, idx) => (
          <div key={idx} className="group w-[350px] bg-white rounded-3xl shadow-md overflow-hidden hover:bg-slate-50">
            <div className="w-full bg-slate-50 pt-6 pb-4 group-hover:bg-slate-200">
              <div className="text-bold tracking-tighter text-slate-700 text-center">{item.name}</div>
            </div>
            <div className="my-6 flex flex-wrap justify-center mx-4 gap-4">
              <div className="">
                <div className="text-xs text-slate-500 tracking-wide">YTM</div>
                <div className="text-xl"><Synced value={item.ytm} postfix="%"/></div>
              </div>
              <div className="">
                <div className="text-xs text-slate-500 tracking-wide">Duration</div>
                <div className="text-xl"><Synced value={item.duration}/></div>
              </div>
              <div className="">
                <div className="text-xs text-slate-500 tracking-wide">MarketCap</div>
                <div className="text-xl"><Synced value={item.marketcap} postfix="억원" convert={toLocale}/></div>
              </div>
              <div className="">
                <div className="text-xs text-slate-500 tracking-wide">FundFee</div>
                <div className="text-xl"><Synced value={item.fundfee} postfix="%"/></div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </>
  );
}
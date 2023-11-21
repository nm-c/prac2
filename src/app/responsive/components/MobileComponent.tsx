/* eslint-disable @next/next/no-img-element */

import Synced from './Synced';
import { Etf } from './type';
import { toLocale } from './util';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="flex">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={imageUrl} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-c1 font-semibold">{title}</div>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Home({ data }: { data: Etf[]}) {
  return (
    <>
    <div>
      <h1 className="my-10 mx-auto w-fit font-gaegu text-2xl font-bold tracking-tight text-slate-700">Card & Table Responsive Test</h1>
    </div>
    <div className="mx-auto w-[500px] flex flex-wrap justify-center gap-7">
      {
        data.map((item, idx) => (
          <div key={idx} className="w-[300px] bg-white rounded-3xl shadow-md overflow-hidden hover:bg-slate-50">
            <div className="w-full bg-slate-50 p-5">
              <div className="text-bold tracking-tighter text-slate-700 text-center">{item.name}</div>
            </div>
            <div className="p-8 flex flex-wrap justify-center gap-4">
              <div className="">
                <div className="text-xs text-slate-500">YTM</div>
                <div className="text-lg"><Synced value={item.ytm}/></div>
              </div>
              <div className="">
                <div className="text-xs text-slate-500">Duration</div>
                <div className="text-lg"><Synced value={item.duration}/></div>
              </div>
              <div className="">
                <div className="text-xs text-slate-500">MarketCap</div>
                <div className="text-lg"><Synced value={item.marketcap} convert={toLocale}/></div>
              </div>
              <div className="">
                <div className="text-xs text-slate-500">Fee</div>
                <div className="text-lg"><Synced value={item.fundfee}/></div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </>
  );
}
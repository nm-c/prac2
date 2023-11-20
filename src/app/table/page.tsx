"use client";

import React, { useEffect, useState } from 'react';

interface SyncedValue {
  value: string,
  synced: boolean,
  ts: string,
}

interface Etf {
  name: string;
  code: string;
  ytm: SyncedValue;
  duration: SyncedValue;
  marketcap: SyncedValue;
  fundfee: SyncedValue;
}

function toFixed(fractionDigits: number | undefined = 2): (value: string) => string {
  return (value) => parseFloat(value).toFixed(fractionDigits);
}

function toLocale(value: string): string {
  return parseFloat(value).toLocaleString();
}

function Synced({ value, convert = toFixed() }: { value: SyncedValue, convert?: ((value: string) => string) }) {
  const converted_value = convert(value.value);
  if (value.synced)
    return (<>{ converted_value }</>);
  
  return (
    <span title={value.ts} className="line-through text-slate-300">
      &#x26A0;{ converted_value }
    </span>
  );
};

export default function Home() {
  const [data, setData] = useState<Etf[]>([]);

  useEffect(() => {
    fetch('https://carrotade.com/ytmscanner/published/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <div>
      <h1 className="my-10 mx-auto w-fit font-gaegu text-2xl font-bold tracking-tight text-slate-700 md:text-3xl md:tracking-wide">Card & Table Responsive Test</h1>
    </div>
    <div className="block mx-auto w-fit border-none md:table md:w-[700px] md:border-solid md:border md:border-slate-700 md:bg-slate-50">
      <div className="hidden md:table-header-group md:border md:bg-slate-200">
        <div className="table-row">
          <div className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-full">Name</div>
          <div className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit text-sm">YTM</div>
          <div className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit text-xs">Duration</div>
          <div className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit text-xs">MarketCap</div>
          <div className="table-cell px-2 py-2 border border-b-slate-700 border-slate-300 w-fit">Fee</div>
        </div>
      </div>
      <div className="block md:table-row-group">
        {
          data.map((item, idx) => (
            <div key={idx} className="flex flex-wrap w-[300px] m-5 p-5 bg-slate-50 border border-solid rounded-3xl shadow-md shadow-gray-300 marker:text-slate-500 border-slate-700 hover:bg-slate-100 md:table-row md:m-0 md:p-0 md:border-none md:shadow-none md:even:bg-slate-100 md:hover:bg-slate-200">
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-2 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">Name:</div>
                  <div className="block m-2 md:m-0">{item.name}</div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-2 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">YTM:</div>
                  <div className="block m-2 md:m-0"><Synced value={item.ytm}/></div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-2 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">Duration:</div>
                  <div className="block m-2 md:m-0"><Synced value={item.duration}/></div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-2 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">MarketCap:</div>
                  <div className="block m-2 md:m-0"><Synced value={item.marketcap} convert={toLocale}/></div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-2 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">Fee:</div>
                  <div className="block m-2 md:m-0"><Synced value={item.fundfee}/></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  );
}
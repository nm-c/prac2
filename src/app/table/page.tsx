interface Etf {
  name: string;
  ytm: number;
  duration: number;
  marketcap: number;
  fundfee: number;
}

export default function Home() {
  const data: Etf[] = [
    {
      name: "ABCDE 24-12 국고채액티브",
      ytm: 3.5,
      duration: 1.1,
      marketcap: 10000,
      fundfee: 0.05,
    },
    {
      name: "ABCDE 25-06 회사채(A+이상)액티브",
      ytm: 4.6,
      duration: 1.5,
      marketcap: 1000,
      fundfee: 0.05,
    },
    {
      name: "ABCDE 24-06 회사채(AA-이상)액티브",
      ytm: 4.2,
      duration: 0.5,
      marketcap: 5000,
      fundfee: 0.1,
    },
  ];
  return (
    <>
    <div>
      <h1 className="my-10 mx-auto w-fit font-gaegu text-2xl font-bold tracking-tight text-slate-700 md:text-3xl md:tracking-wide">Card & Table Responsive Test</h1>
    </div>
    <div className="block mx-auto w-fit border-none md:table md:w-[600px] md:border-solid md:border md:border-slate-500">
      <div className="hidden md:table-header-group">
        <div className="table-row">
          <div className="table-cell px-4 py-2 border border-slate-300 w-full">Name</div>
          <div className="table-cell px-4 py-2 border border-slate-300 w-fit">YTM</div>
          <div className="table-cell px-4 py-2 border border-slate-300 w-fit text-sm">Duration</div>
          <div className="table-cell px-4 py-2 border border-slate-300 w-fit text-sm">MarketCap</div>
          <div className="table-cell px-4 py-2 border border-slate-300 w-fit">Fee</div>
        </div>
      </div>
      <div className="block md:table-row-group">
        {
          data.map((item, idx) => (
            <div key={idx} className="flex flex-wrap m-5 p-5 border border-solid rounded-3xl shadow-md marker:text-slate-500 shadow-gray-300 w-[300px] border-slate-700 md:table-row md:m-0 md:p-0 md:border-none md:shadow-none">
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-4 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">Name:</div>
                  <div className="block m-2 md:m-0">{item.name}</div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-4 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">YTM:</div>
                  <div className="block m-2 md:m-0">{item.ytm}</div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-4 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">Duration:</div>
                  <div className="block m-2 md:m-0">{item.duration}</div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-4 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">MarketCap:</div>
                  <div className="block m-2 md:m-0">{item.marketcap}</div>
                </div>
              </div>
              <div className="list-item ml-7 md:m-0 md:table-cell md:px-4 md:py-2 md:border md:border-slate-300">
                <div className="flex md:block">
                  <div className="block m-2 md:hidden">Fee:</div>
                  <div className="block m-2 md:m-0">{item.fundfee}</div>
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
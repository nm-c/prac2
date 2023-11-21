"use client";
export interface SyncedValue {
  value: string;
  synced: boolean;
  ts: string;
}
export interface Etf {
  name: string;
  code: string;
  ytm: SyncedValue;
  duration: SyncedValue;
  marketcap: SyncedValue;
  fundfee: SyncedValue;
}

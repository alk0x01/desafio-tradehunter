export default class InfoTicker {
  logo: string;
  name: string;
  country: string;
  industry: string;
  sector: string
  employees: number;
  ceo: string;
  url: string;
  description: string;
  exchangeSymbol: string;
  hq_address: string;
  tags: string[]
}

export interface ITicker{
  logo: string;
  name: string;
  country: string;
  industry: string;
  sector: string
  employees: number;
  ceo: string;
  url: string;
  description: string;
  exchangeSymbol: string;
  hq_address: string;
  tags: string[]
}
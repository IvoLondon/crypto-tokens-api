export type TransactionsType = {
  price: string;
  quantity: string;
  wallet?: string;
};

export type ChargesType = string[];
export interface ITokens {
  id: string;
  symbol: string;
  token: string;
  active?: boolean;
  balance: string;
  backgroundColor: string;
  transactions?: TransactionsType[];
  charges?: ChargesType;
}

// This file is auto-generated. Do not edit manually.

export type RetailAccountBalancePreviewFlatL = {
  KEY_COLUMN: string;
  AccountNumber: string;
  AccountType: string;
  CurrencyCode: string;
  Balance: string;
  AvailableBalance: string;
  LastChangeAmount: string;
  LastChangeDate: string;
  IsEbankingAccount: string;
  LastChangeType: string;
  AccountOwner: string;
  BlockedAmount: string;
  AccountID: string;
  ProductCodeCore: string;
  CurrencyCodeNumber: string;
  Alias: string;
  IsBlocked: string;
  IsOwner: string;
  ProductOrder: string;
};

export type RetailAccountReservedFundsPreviewFlat = {
  KEY_COLUMN: string;
  ReservationDate: string;
  Note: string;
  Amount: string;
  CurrencyCode: string;
  CurrencyCodeNumber: string;
  ProductCodeCore: string;
  AccountCustomName: string;
  AccountID: string;
};

export type RetailAccountTurnoverTransactionPreviewMasterDetailS = {
  KEY_COLUMN: string;
  CurrencyCodeNumber: string;
  CurrencyCode: string;
  ValueDate: string;
  ProcessedDate: string;
  ChequeCardNumber: string;
  TransactionBeneficiary: string;
  Reference: string;
  DebitAmount: string;
  CreditAmount: string;
  AmountTotal: string;
  Note: string;
  TransactionID: string;
  TransactionType: string;
  Description: string;
  BeneficiaryAccount: string;
};

export type GridRow = {
  'RetailAccountBalancePreviewFlat-L': RetailAccountBalancePreviewFlatL;
  'RetailAccountReservedFundsPreviewFlat': RetailAccountReservedFundsPreviewFlat;
  'RetailAccountTurnoverTransactionPreviewMasterDetail-S': RetailAccountTurnoverTransactionPreviewMasterDetailS;
};

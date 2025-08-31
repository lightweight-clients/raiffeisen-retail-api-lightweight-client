// This file is auto-generated. Do not edit manually.

export const RetailAccountBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'AccountNumber', 'AccountType', 'CurrencyCode', 'Balance', 'AvailableBalance', 'LastChangeAmount', 'LastChangeDate', 'IsEbankingAccount', 'LastChangeType', 'AccountOwner', 'BlockedAmount', 'AccountID', 'ProductCodeCore', 'CurrencyCodeNumber', 'Alias', 'IsBlocked', 'IsOwner', 'ProductOrder' ] as const;

export type RetailAccountBalancePreviewFlatLColumn = typeof RetailAccountBalancePreviewFlatLColumns[number];

export const RetailAccountBalancePreviewFlatL: { name: string, columns: readonly RetailAccountBalancePreviewFlatLColumn[] } = { name: 'RetailAccountBalancePreviewFlat-L', columns: RetailAccountBalancePreviewFlatLColumns } as const;

export const RetailAccountBalanceTransactionPreviewFlatLColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'LastPayoffAmount', 'LastPaymentAmount', 'AccountNumber', 'CurrencyCodeNumber', 'LastPaymentDate', 'LastPayoffDate', 'AccountOwner' ] as const;

export type RetailAccountBalanceTransactionPreviewFlatLColumn = typeof RetailAccountBalanceTransactionPreviewFlatLColumns[number];

export const RetailAccountBalanceTransactionPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceTransactionPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceTransactionPreviewFlat-L', columns: RetailAccountBalanceTransactionPreviewFlatLColumns } as const;

export const RetailAccountBalanceTransactionDetailFlatColumns = [ 'KEY_COLUMN', 'Balance', 'AvailableBalance', 'OverdraftAmount', 'OverdraftExpirationDate', 'UndueLiabilities', 'UnusedCheques', 'LastPaymentAmount', 'LastPaymentDate', 'LastPayoffAmount', 'LastPayoffDate', 'ReservedFunds', 'CurrencyCode', 'AccountOwner', 'BalanceWithoutOverdraft' ] as const;

export type RetailAccountBalanceTransactionDetailFlatColumn = typeof RetailAccountBalanceTransactionDetailFlatColumns[number];

export const RetailAccountBalanceTransactionDetailFlat: { name: string, columns: readonly RetailAccountBalanceTransactionDetailFlatColumn[] } = { name: 'RetailAccountBalanceTransactionDetailFlat', columns: RetailAccountBalanceTransactionDetailFlatColumns } as const;

export const RetailAccountBalanceTransactionUnusedChequesPreviewFlatColumns = [ 'KEY_COLUMN', 'ChequeSerialNumber' ] as const;

export type RetailAccountBalanceTransactionUnusedChequesPreviewFlatColumn = typeof RetailAccountBalanceTransactionUnusedChequesPreviewFlatColumns[number];

export const RetailAccountBalanceTransactionUnusedChequesPreviewFlat: { name: string, columns: readonly RetailAccountBalanceTransactionUnusedChequesPreviewFlatColumn[] } = { name: 'RetailAccountBalanceTransactionUnusedChequesPreviewFlat', columns: RetailAccountBalanceTransactionUnusedChequesPreviewFlatColumns } as const;

export const RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetailColumns = [ 'KEY_COLUMN', 'TransactionDate', 'OriginalCurrencyCode', 'DueDate', 'SalesLocation', 'Amount', 'OriginalCurrencyAmount' ] as const;

export type RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetailColumn = typeof RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetailColumns[number];

export const RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetail: { name: string, columns: readonly RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetailColumn[] } = { name: 'RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetail', columns: RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetailColumns } as const;

export const RetailAccountBalanceTransactionShortDetailFlatColumns = [ 'KEY_COLUMN', 'Balance', 'AvailableBalance', 'UndueLiabilities', 'LastPaymentAmount', 'LastPaymentDate', 'LastPayoffAmount', 'LastPayoffDate', 'ReservedFunds', 'CurrencyCode', 'AccountOwner', 'OverdraftAmount', 'OverdraftExpirationDate', 'UnusedCheques' ] as const;

export type RetailAccountBalanceTransactionShortDetailFlatColumn = typeof RetailAccountBalanceTransactionShortDetailFlatColumns[number];

export const RetailAccountBalanceTransactionShortDetailFlat: { name: string, columns: readonly RetailAccountBalanceTransactionShortDetailFlatColumn[] } = { name: 'RetailAccountBalanceTransactionShortDetailFlat', columns: RetailAccountBalanceTransactionShortDetailFlatColumns } as const;

export const RetailAccountBalanceTransactionTurnoverPreviewFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'BeneficiaryAccount' ] as const;

export type RetailAccountBalanceTransactionTurnoverPreviewFlatLColumn = typeof RetailAccountBalanceTransactionTurnoverPreviewFlatLColumns[number];

export const RetailAccountBalanceTransactionTurnoverPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverPreviewFlat-L', columns: RetailAccountBalanceTransactionTurnoverPreviewFlatLColumns } as const;

export const RetailAccountTurnoverTransactionPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount', 'IsInvestOrder' ] as const;

export type RetailAccountTurnoverTransactionPreviewMasterDetailLColumn = typeof RetailAccountTurnoverTransactionPreviewMasterDetailLColumns[number];

export const RetailAccountTurnoverTransactionPreviewMasterDetailL: { name: string, columns: readonly RetailAccountTurnoverTransactionPreviewMasterDetailLColumn[] } = { name: 'RetailAccountTurnoverTransactionPreviewMasterDetail-L', columns: RetailAccountTurnoverTransactionPreviewMasterDetailLColumns } as const;

export const RetailAccountBalanceTransactionTurnoverForeignPreviewFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'Description', 'ProcessedDate', 'CurrencyCodeNumber', 'TransactionDescription', 'Reference', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal' ] as const;

export type RetailAccountBalanceTransactionTurnoverForeignPreviewFlatLColumn = typeof RetailAccountBalanceTransactionTurnoverForeignPreviewFlatLColumns[number];

export const RetailAccountBalanceTransactionTurnoverForeignPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverForeignPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverForeignPreviewFlat-L', columns: RetailAccountBalanceTransactionTurnoverForeignPreviewFlatLColumns } as const;

export const RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'BeneficiaryAccount', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'Note' ] as const;

export type RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatLColumn = typeof RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatLColumns[number];

export const RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverDomesticPreviewFlat-L', columns: RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatLColumns } as const;

export const RetailAccountTurnoverTransactionDomesticPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTransactionDomesticPreviewMasterDetailLColumn = typeof RetailAccountTurnoverTransactionDomesticPreviewMasterDetailLColumns[number];

export const RetailAccountTurnoverTransactionDomesticPreviewMasterDetailL: { name: string, columns: readonly RetailAccountTurnoverTransactionDomesticPreviewMasterDetailLColumn[] } = { name: 'RetailAccountTurnoverTransactionDomesticPreviewMasterDetail-L', columns: RetailAccountTurnoverTransactionDomesticPreviewMasterDetailLColumns } as const;

export const RetailAccountBalanceTimeDepositDomesticDetailFlatColumns = [ 'KEY_COLUMN', 'Balance', 'DepositTime', 'DepositExpirationDate', 'CurrencyCode', 'DepositTimeIndicator', 'AccountOwner' ] as const;

export type RetailAccountBalanceTimeDepositDomesticDetailFlatColumn = typeof RetailAccountBalanceTimeDepositDomesticDetailFlatColumns[number];

export const RetailAccountBalanceTimeDepositDomesticDetailFlat: { name: string, columns: readonly RetailAccountBalanceTimeDepositDomesticDetailFlatColumn[] } = { name: 'RetailAccountBalanceTimeDepositDomesticDetailFlat', columns: RetailAccountBalanceTimeDepositDomesticDetailFlatColumns } as const;

export const RetailAccountBalanceTimeDepositForeignDetailFlatColumns = [ 'KEY_COLUMN', 'Balance', 'CurrencyCode', 'DepositTime', 'DepositExpirationDate', 'DepositTimeIndicator', 'AccountOwner' ] as const;

export type RetailAccountBalanceTimeDepositForeignDetailFlatColumn = typeof RetailAccountBalanceTimeDepositForeignDetailFlatColumns[number];

export const RetailAccountBalanceTimeDepositForeignDetailFlat: { name: string, columns: readonly RetailAccountBalanceTimeDepositForeignDetailFlatColumn[] } = { name: 'RetailAccountBalanceTimeDepositForeignDetailFlat', columns: RetailAccountBalanceTimeDepositForeignDetailFlatColumns } as const;

export const RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Description', 'BeneficiaryAccount', 'Reference', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'CurrencyCodeNumber' ] as const;

export type RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatLColumn = typeof RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatLColumns[number];

export const RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlat-L', columns: RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatLColumns } as const;

export const RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'TransactionDescription', 'BeneficiaryAccount', 'Reference', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'CurrencyCodeNumber' ] as const;

export type RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatLColumn = typeof RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatLColumns[number];

export const RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlat-L', columns: RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatLColumns } as const;

export const RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailLColumn = typeof RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailLColumns[number];

export const RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailL: { name: string, columns: readonly RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailLColumn[] } = { name: 'RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetail-L', columns: RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailLColumns } as const;

export const RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailLColumn = typeof RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailLColumns[number];

export const RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailL: { name: string, columns: readonly RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailLColumn[] } = { name: 'RetailAccountTurnoverTimeDepositForeignPreviewMasterDetail-L', columns: RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailLColumns } as const;

export const RetailAccountStatementTransactionListPreviewFlatColumns = [ 'KEY_COLUMN', 'StatementNumber', 'StatementYear', 'StatementDate', 'CurrencyCode', 'MinValueDate', 'MaxValueDate', 'StatementID', 'AccountNumber', 'CurrencyCodeNumber' ] as const;

export type RetailAccountStatementTransactionListPreviewFlatColumn = typeof RetailAccountStatementTransactionListPreviewFlatColumns[number];

export const RetailAccountStatementTransactionListPreviewFlat: { name: string, columns: readonly RetailAccountStatementTransactionListPreviewFlatColumn[] } = { name: 'RetailAccountStatementTransactionListPreviewFlat', columns: RetailAccountStatementTransactionListPreviewFlatColumns } as const;

export const RetailAccountStatementTransactionPreviewMasterDetailColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'PreviousStatementDate', 'Description', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal' ] as const;

export type RetailAccountStatementTransactionPreviewMasterDetailColumn = typeof RetailAccountStatementTransactionPreviewMasterDetailColumns[number];

export const RetailAccountStatementTransactionPreviewMasterDetail: { name: string, columns: readonly RetailAccountStatementTransactionPreviewMasterDetailColumn[] } = { name: 'RetailAccountStatementTransactionPreviewMasterDetail', columns: RetailAccountStatementTransactionPreviewMasterDetailColumns } as const;

export const RetailCardListPreviewFlatLColumns = [ 'KEY_COLUMN', 'Alias', 'CardTypeDescription', 'StatusShort', 'PrimarySupplementary', 'ValidTo', 'AccountStatus', 'CardCategoryCode', 'CardStatus', 'IsEbankingCard', 'CardCustomType', 'CardType', 'CardID', 'CardCategoryID', 'HasDomesticAccountFlag', 'HasForeignAccountFlag', 'CreditCardFlag', 'BusinessCardFlag', 'ProtectedCardID', 'CardBalance', 'CardBalanceCurrency', 'UsedAmount', 'PlasticStatus', 'CardStatus', 'MinimumPaymentAmount', 'DateOfLastStatement', 'MaturityDate', 'CardType', 'AllowedBlockadeDeblockade', 'StatusID' ] as const;

export type RetailCardListPreviewFlatLColumn = typeof RetailCardListPreviewFlatLColumns[number];

export const RetailCardListPreviewFlatL: { name: string, columns: readonly RetailCardListPreviewFlatLColumn[] } = { name: 'RetailCardListPreviewFlat-L', columns: RetailCardListPreviewFlatLColumns } as const;

export const RetailCardBalanceDetailFlatColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'Balance', 'AvailableBalance', 'OverdraftAmount', 'OverdraftExpirationDate', 'UndueLiabilities', 'UnusedCheques', 'LastPaymentAmount', 'LastPayoffAmount', 'InitialBalance', 'MinimalPaymentAmount', 'ReservedFunds', 'ProductCodeCore', 'CurrencyCodeNumber', 'LastPaymentDate', 'AccountNumber', 'LastPayoffDate', 'ExpiryDate', 'ClientName', 'OverdraftAmount' ] as const;

export type RetailCardBalanceDetailFlatColumn = typeof RetailCardBalanceDetailFlatColumns[number];

export const RetailCardBalanceDetailFlat: { name: string, columns: readonly RetailCardBalanceDetailFlatColumn[] } = { name: 'RetailCardBalanceDetailFlat', columns: RetailCardBalanceDetailFlatColumns } as const;

export const RetailCardBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'AccountType', 'Balance', 'CurrencyCode', 'LastChangeDate', 'ContractType', 'CurrencyCodeNumber', 'AccountNumber', 'ProductCodeCore', 'ExpiryDate', 'ClientName', 'OverdraftAmount', 'AccountAlias', 'AvailableBalance', 'CardStatus', 'MinimumPaymentAmount', 'DateOfLastStatement', 'MaturityDate', 'PlasticStatus', 'CardType' ] as const;

export type RetailCardBalancePreviewFlatLColumn = typeof RetailCardBalancePreviewFlatLColumns[number];

export const RetailCardBalancePreviewFlatL: { name: string, columns: readonly RetailCardBalancePreviewFlatLColumn[] } = { name: 'RetailCardBalancePreviewFlat-L', columns: RetailCardBalancePreviewFlatLColumns } as const;

export const RetailSupplementaryCardListPreviewFlatLColumns = [ 'KEY_COLUMN', 'Name', 'ProtectedCardID', 'Status', 'ValidFrom', 'ValidTo', 'StatusIndicator', 'CardStatusCoreID', 'CardNumber' ] as const;

export type RetailSupplementaryCardListPreviewFlatLColumn = typeof RetailSupplementaryCardListPreviewFlatLColumns[number];

export const RetailSupplementaryCardListPreviewFlatL: { name: string, columns: readonly RetailSupplementaryCardListPreviewFlatLColumn[] } = { name: 'RetailSupplementaryCardListPreviewFlat-L', columns: RetailSupplementaryCardListPreviewFlatLColumns } as const;

export const RetailCardBalanceUnusedChequesPreviewFlatColumns = [ 'KEY_COLUMN', 'ChequeSerialNumber' ] as const;

export type RetailCardBalanceUnusedChequesPreviewFlatColumn = typeof RetailCardBalanceUnusedChequesPreviewFlatColumns[number];

export const RetailCardBalanceUnusedChequesPreviewFlat: { name: string, columns: readonly RetailCardBalanceUnusedChequesPreviewFlatColumn[] } = { name: 'RetailCardBalanceUnusedChequesPreviewFlat', columns: RetailCardBalanceUnusedChequesPreviewFlatColumns } as const;

export const RetailCardBalanceUndueLiabilitiesPreviewMasterDetailColumns = [ 'KEY_COLUMN', 'TransactionDate', 'DueDate', 'SalesLocation', 'Amount', 'OriginalCurrencyAmount', 'OriginalCurrencyCode' ] as const;

export type RetailCardBalanceUndueLiabilitiesPreviewMasterDetailColumn = typeof RetailCardBalanceUndueLiabilitiesPreviewMasterDetailColumns[number];

export const RetailCardBalanceUndueLiabilitiesPreviewMasterDetail: { name: string, columns: readonly RetailCardBalanceUndueLiabilitiesPreviewMasterDetailColumn[] } = { name: 'RetailCardBalanceUndueLiabilitiesPreviewMasterDetail', columns: RetailCardBalanceUndueLiabilitiesPreviewMasterDetailColumns } as const;

export const RetailCardTurnoverPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'AmountTotal', 'CardCustomName', 'CreditAmount', 'OriginalCurrencyCode', 'CurrencyCode', 'InstallmentCount', 'OriginalCurrencyAmount', 'InstallmentOrderNumber', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCardTurnoverPreviewMasterDetailLColumn = typeof RetailCardTurnoverPreviewMasterDetailLColumns[number];

export const RetailCardTurnoverPreviewMasterDetailL: { name: string, columns: readonly RetailCardTurnoverPreviewMasterDetailLColumn[] } = { name: 'RetailCardTurnoverPreviewMasterDetail-L', columns: RetailCardTurnoverPreviewMasterDetailLColumns } as const;

export const RetailCardSpendingPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'OriginalCurrencyAmount', 'CardCustomName', 'OriginalCurrencyCodeNumber', 'OriginalCurrencyCode', 'TransactionType', 'TransactionBeneficiary' ] as const;

export type RetailCardSpendingPreviewMasterDetailLColumn = typeof RetailCardSpendingPreviewMasterDetailLColumns[number];

export const RetailCardSpendingPreviewMasterDetailL: { name: string, columns: readonly RetailCardSpendingPreviewMasterDetailLColumn[] } = { name: 'RetailCardSpendingPreviewMasterDetail-L', columns: RetailCardSpendingPreviewMasterDetailLColumns } as const;

export const RetailCardStatementPreviewFlatColumns = [ 'KEY_COLUMN', 'StatementNumber', 'StatementDate', 'DueDate', 'StatementID', 'BtnPreview' ] as const;

export type RetailCardStatementPreviewFlatColumn = typeof RetailCardStatementPreviewFlatColumns[number];

export const RetailCardStatementPreviewFlat: { name: string, columns: readonly RetailCardStatementPreviewFlatColumn[] } = { name: 'RetailCardStatementPreviewFlat', columns: RetailCardStatementPreviewFlatColumns } as const;

export const RetailCardStatementDetailMasterDetailColumns = [ 'KEY_COLUMN', 'TransactionDate', 'CurrencyDate', 'CardNumber', 'Description', 'OriginalCurrencyAmount', 'ReferenceCurrencyAmount', 'AnnuityNo', 'Reference', 'AccountingCurrencyAmount', 'CreditAmount', 'Sort', 'ComplainNumber', 'OriginalCurrencyCode', 'AccountingCurrencyCode' ] as const;

export type RetailCardStatementDetailMasterDetailColumn = typeof RetailCardStatementDetailMasterDetailColumns[number];

export const RetailCardStatementDetailMasterDetail: { name: string, columns: readonly RetailCardStatementDetailMasterDetailColumn[] } = { name: 'RetailCardStatementDetailMasterDetail', columns: RetailCardStatementDetailMasterDetailColumns } as const;

export const RetailLoanListPreviewFlatLColumns = [ 'KEY_COLUMN', 'LoanType', 'LoanAccountNumber', 'LoanAmount', 'Details', 'LoanIssueDate', 'PaymentPeriod', 'InstallmentAmount', 'RemainingDebt', 'CreditDebit', 'CurrencyCode', 'PeriodIndicator', 'InstallmentCurrencyCodeNumeric', 'InstallmentCurrencyCode', 'RemainingDebtCurrencyCodeNumeric', 'RemainingDebtCurrencyCode', 'CreditDebitCurrencyCodeNumeric', 'CreditDebitCurrencyCode', 'AdministrativeBan', 'SocialIdentityNumber', 'NextInstallmentDate', 'LoanMaturityDate', 'PauseInstallmentMonth', 'EffectiveInterestRate', 'NominalInterestRate' ] as const;

export type RetailLoanListPreviewFlatLColumn = typeof RetailLoanListPreviewFlatLColumns[number];

export const RetailLoanListPreviewFlatL: { name: string, columns: readonly RetailLoanListPreviewFlatLColumn[] } = { name: 'RetailLoanListPreviewFlat-L', columns: RetailLoanListPreviewFlatLColumns } as const;

export const RetailLoanDetailFlatColumns = [ 'KEY_COLUMN', 'LoanAmount', 'InterestRate', 'InstallmentCount', 'DueInstallmentCount', 'NextInstallmentDate', 'LiquidationAmount', 'OutstandingDebtAmount', 'InterestRateIndicator' ] as const;

export type RetailLoanDetailFlatColumn = typeof RetailLoanDetailFlatColumns[number];

export const RetailLoanDetailFlat: { name: string, columns: readonly RetailLoanDetailFlatColumn[] } = { name: 'RetailLoanDetailFlat', columns: RetailLoanDetailFlatColumns } as const;

export const RetailLoanPaymentPreviewFlatColumns = [ 'KEY_COLUMN', 'ValueDate', 'LoanAmount', 'CurrencyCode', 'AmountDomestic', 'CurrencyCodeDomestic', 'AccountClasification' ] as const;

export type RetailLoanPaymentPreviewFlatColumn = typeof RetailLoanPaymentPreviewFlatColumns[number];

export const RetailLoanPaymentPreviewFlat: { name: string, columns: readonly RetailLoanPaymentPreviewFlatColumn[] } = { name: 'RetailLoanPaymentPreviewFlat', columns: RetailLoanPaymentPreviewFlatColumns } as const;

export const RetailCreditCardTurnoverPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'InstallmentOrderNumber', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'CardCustomName', 'OriginalCurrencyCode', 'CurrencyCode', 'InstallmentCount', 'CreditAmount', 'OriginalCurrencyAmount', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCreditCardTurnoverPreviewMasterDetailLColumn = typeof RetailCreditCardTurnoverPreviewMasterDetailLColumns[number];

export const RetailCreditCardTurnoverPreviewMasterDetailL: { name: string, columns: readonly RetailCreditCardTurnoverPreviewMasterDetailLColumn[] } = { name: 'RetailCreditCardTurnoverPreviewMasterDetail-L', columns: RetailCreditCardTurnoverPreviewMasterDetailLColumns } as const;

export const RetailAuthorizedAccountsForOrderSendingDomesticFlatColumns = [ 'KEY_COLUMN', 'CustomName', 'AccountID', 'AccountNumber' ] as const;

export type RetailAuthorizedAccountsForOrderSendingDomesticFlatColumn = typeof RetailAuthorizedAccountsForOrderSendingDomesticFlatColumns[number];

export const RetailAuthorizedAccountsForOrderSendingDomesticFlat: { name: string, columns: readonly RetailAuthorizedAccountsForOrderSendingDomesticFlatColumn[] } = { name: 'RetailAuthorizedAccountsForOrderSendingDomesticFlat', columns: RetailAuthorizedAccountsForOrderSendingDomesticFlatColumns } as const;

export const RetailOrderTemplateListPreviewFlatColumns = [ 'KEY_COLUMN', 'OrderTemplateName', 'OrderTemplateID', 'OrderNumber', 'DebtorName', 'CurrencyCode', 'PaymentCode', 'PaymentPurpose', 'CreditorName', 'CreditAccount', 'CreditorModel', 'PBO', 'OrderStatus', 'CalculationMethod', 'Address', 'Locality' ] as const;

export type RetailOrderTemplateListPreviewFlatColumn = typeof RetailOrderTemplateListPreviewFlatColumns[number];

export const RetailOrderTemplateListPreviewFlat: { name: string, columns: readonly RetailOrderTemplateListPreviewFlatColumn[] } = { name: 'RetailOrderTemplateListPreviewFlat', columns: RetailOrderTemplateListPreviewFlatColumns } as const;

export const RetailDomesticPaymentCodeCodebookPreviewFlatColumns = [ 'KEY_COLUMN', 'PaymentCode', 'PaymentDescription' ] as const;

export type RetailDomesticPaymentCodeCodebookPreviewFlatColumn = typeof RetailDomesticPaymentCodeCodebookPreviewFlatColumns[number];

export const RetailDomesticPaymentCodeCodebookPreviewFlat: { name: string, columns: readonly RetailDomesticPaymentCodeCodebookPreviewFlatColumn[] } = { name: 'RetailDomesticPaymentCodeCodebookPreviewFlat', columns: RetailDomesticPaymentCodeCodebookPreviewFlatColumns } as const;

export const RetailCreditorTemplateListPreviewFlatColumns = [ 'KEY_COLUMN', 'CreditorTemplateName', 'CreditorTemplateID', 'DebtorName', 'PaymentCode', 'CreditAccount', 'Icon', 'PaymentPurpose', 'CreditorModel', 'PBO', 'Address', 'Locality', 'CreditorName', 'EditButton', 'DeleteButton', 'PayButton' ] as const;

export type RetailCreditorTemplateListPreviewFlatColumn = typeof RetailCreditorTemplateListPreviewFlatColumns[number];

export const RetailCreditorTemplateListPreviewFlat: { name: string, columns: readonly RetailCreditorTemplateListPreviewFlatColumn[] } = { name: 'RetailCreditorTemplateListPreviewFlat', columns: RetailCreditorTemplateListPreviewFlatColumns } as const;

export const RetailOrderPreviewListFlatLColumns = [ 'KEY_COLUMN', 'OrderDate', 'DebitAccount', 'Status', 'CreditorName', 'Amount', 'PaymentPurpose', 'Channel', 'Reference', 'Commission', 'PaymentCode', 'CommissionCurrencyCode', 'DebtorName', 'CreditAccount', 'CreditorModel', 'PBO', 'CurrencyCode', 'WithdrawalAllowed', 'Icon', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailOrderPreviewListFlatLColumn = typeof RetailOrderPreviewListFlatLColumns[number];

export const RetailOrderPreviewListFlatL: { name: string, columns: readonly RetailOrderPreviewListFlatLColumn[] } = { name: 'RetailOrderPreviewListFlat-L', columns: RetailOrderPreviewListFlatLColumns } as const;

export const RetailOrderPreviewDetailFlatColumns = [ 'KEY_COLUMN', 'OrderNumberCore', 'OrderDate', 'Amount', 'Commission', 'PaymentCode', 'DebitAccount', 'DebtorName', 'CreditAccount', 'CreditorModel', 'PBO', 'CreditorName', 'PaymentPurpose', 'CurrencyCode' ] as const;

export type RetailOrderPreviewDetailFlatColumn = typeof RetailOrderPreviewDetailFlatColumns[number];

export const RetailOrderPreviewDetailFlat: { name: string, columns: readonly RetailOrderPreviewDetailFlatColumn[] } = { name: 'RetailOrderPreviewDetailFlat', columns: RetailOrderPreviewDetailFlatColumns } as const;

export const RetailAuthorizedAccountsForOrderPreivewFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'Alias' ] as const;

export type RetailAuthorizedAccountsForOrderPreivewFlatColumn = typeof RetailAuthorizedAccountsForOrderPreivewFlatColumns[number];

export const RetailAuthorizedAccountsForOrderPreivewFlat: { name: string, columns: readonly RetailAuthorizedAccountsForOrderPreivewFlatColumn[] } = { name: 'RetailAuthorizedAccountsForOrderPreivewFlat', columns: RetailAuthorizedAccountsForOrderPreivewFlatColumns } as const;

export const RetailAuthorizedDebitAccountsForTransferFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'AccountID', 'AccountNumber', 'CurrencyCodeNumeric', 'ProductCodeCore' ] as const;

export type RetailAuthorizedDebitAccountsForTransferFlatColumn = typeof RetailAuthorizedDebitAccountsForTransferFlatColumns[number];

export const RetailAuthorizedDebitAccountsForTransferFlat: { name: string, columns: readonly RetailAuthorizedDebitAccountsForTransferFlatColumn[] } = { name: 'RetailAuthorizedDebitAccountsForTransferFlat', columns: RetailAuthorizedDebitAccountsForTransferFlatColumns } as const;

export const RetailAuthorizedCreditCardsForTransferFlatColumns = [ 'KEY_COLUMN', 'CardCustomName', 'CardNumber' ] as const;

export type RetailAuthorizedCreditCardsForTransferFlatColumn = typeof RetailAuthorizedCreditCardsForTransferFlatColumns[number];

export const RetailAuthorizedCreditCardsForTransferFlat: { name: string, columns: readonly RetailAuthorizedCreditCardsForTransferFlatColumn[] } = { name: 'RetailAuthorizedCreditCardsForTransferFlat', columns: RetailAuthorizedCreditCardsForTransferFlatColumns } as const;

export const RetailAuthorizedCreditAccountsForTransferFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'CurrencyCodeNumber' ] as const;

export type RetailAuthorizedCreditAccountsForTransferFlatColumn = typeof RetailAuthorizedCreditAccountsForTransferFlatColumns[number];

export const RetailAuthorizedCreditAccountsForTransferFlat: { name: string, columns: readonly RetailAuthorizedCreditAccountsForTransferFlatColumn[] } = { name: 'RetailAuthorizedCreditAccountsForTransferFlat', columns: RetailAuthorizedCreditAccountsForTransferFlatColumns } as const;

export const RetailAuthorizedAccountsForExchangeOfficeFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'AccountID', 'AccountNumber', 'CurrencyCodeNumeric', 'ProductCodeCore' ] as const;

export type RetailAuthorizedAccountsForExchangeOfficeFlatColumn = typeof RetailAuthorizedAccountsForExchangeOfficeFlatColumns[number];

export const RetailAuthorizedAccountsForExchangeOfficeFlat: { name: string, columns: readonly RetailAuthorizedAccountsForExchangeOfficeFlatColumn[] } = { name: 'RetailAuthorizedAccountsForExchangeOfficeFlat', columns: RetailAuthorizedAccountsForExchangeOfficeFlatColumns } as const;

export const RetailExchangeRateListMasterDetailColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'CurrencyCodeNumber', 'CountryCodeNumeric', 'Parity', 'NationalBankFrnCurrBuyingRate', 'NationalBankFrnCurrAvgRate', 'NationalBankFrnCurrSellingRate', 'NationalBankCashBuyingRate', 'NationalBankCashSellingRate', 'InternalFrnCurrBuyingRate', 'InternalFrnCurrAvgRate', 'InternalFrnCurrSellingRate', 'InternalCashBuyingRate', 'InternalCashSellingRate', 'MoneyMarketFrnCurrBuyingRate', 'MoneyMarketFrnCurrAvgRate', 'MoneyMarketFrnCurrSellingRate', 'MoneyMarketCashBuyingRate', 'MoneyMarketCashSellingRate', 'RelativeToEuro', 'CountryCode' ] as const;

export type RetailExchangeRateListMasterDetailColumn = typeof RetailExchangeRateListMasterDetailColumns[number];

export const RetailExchangeRateListMasterDetail: { name: string, columns: readonly RetailExchangeRateListMasterDetailColumn[] } = { name: 'RetailExchangeRateListMasterDetail', columns: RetailExchangeRateListMasterDetailColumns } as const;

export const RetailExchangeRateListShortFlatColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'InternalCashBuyingRate', 'InternalCashSellingRate', 'CountryCode', 'CurrencyCodeNumeric' ] as const;

export type RetailExchangeRateListShortFlatColumn = typeof RetailExchangeRateListShortFlatColumns[number];

export const RetailExchangeRateListShortFlat: { name: string, columns: readonly RetailExchangeRateListShortFlatColumn[] } = { name: 'RetailExchangeRateListShortFlat', columns: RetailExchangeRateListShortFlatColumns } as const;

export const RetailUserChannelItemMasterDetailColumns = [ 'KEY_COLUMN', 'UserChannelItemID', 'ItemValue' ] as const;

export type RetailUserChannelItemMasterDetailColumn = typeof RetailUserChannelItemMasterDetailColumns[number];

export const RetailUserChannelItemMasterDetail: { name: string, columns: readonly RetailUserChannelItemMasterDetailColumn[] } = { name: 'RetailUserChannelItemMasterDetail', columns: RetailUserChannelItemMasterDetailColumns } as const;

export const RetailIndividualDataPreviewFlatColumns = [ 'KEY_COLUMN' ] as const;

export type RetailIndividualDataPreviewFlatColumn = typeof RetailIndividualDataPreviewFlatColumns[number];

export const RetailIndividualDataPreviewFlat: { name: string, columns: readonly RetailIndividualDataPreviewFlatColumn[] } = { name: 'RetailIndividualDataPreviewFlat', columns: RetailIndividualDataPreviewFlatColumns } as const;

export const RetailAccountReservedFundsPreviewFlatColumns = [ 'KEY_COLUMN', 'ReservationDate', 'Note', 'Amount', 'CurrencyCode', 'CurrencyCodeNumber', 'ProductCodeCore', 'AccountCustomName', 'AccountID' ] as const;

export type RetailAccountReservedFundsPreviewFlatColumn = typeof RetailAccountReservedFundsPreviewFlatColumns[number];

export const RetailAccountReservedFundsPreviewFlat: { name: string, columns: readonly RetailAccountReservedFundsPreviewFlatColumn[] } = { name: 'RetailAccountReservedFundsPreviewFlat', columns: RetailAccountReservedFundsPreviewFlatColumns } as const;

export const RetailStepSavingsAccountThreadDetailFlatColumns = [ 'KEY_COLUMN', 'TransactionDate', 'DebitAmount', 'CreditAmount' ] as const;

export type RetailStepSavingsAccountThreadDetailFlatColumn = typeof RetailStepSavingsAccountThreadDetailFlatColumns[number];

export const RetailStepSavingsAccountThreadDetailFlat: { name: string, columns: readonly RetailStepSavingsAccountThreadDetailFlatColumn[] } = { name: 'RetailStepSavingsAccountThreadDetailFlat', columns: RetailStepSavingsAccountThreadDetailFlatColumns } as const;

export const RetailStepSavingsAccountThreadBalanceMasterDetailLColumns = [ 'KEY_COLUMN', 'ThreadNumber', 'ThreadLevel', 'PaymentDate', 'CurrencyCodeDetail', 'DebitAmount', 'CreditAmount', 'Balance' ] as const;

export type RetailStepSavingsAccountThreadBalanceMasterDetailLColumn = typeof RetailStepSavingsAccountThreadBalanceMasterDetailLColumns[number];

export const RetailStepSavingsAccountThreadBalanceMasterDetailL: { name: string, columns: readonly RetailStepSavingsAccountThreadBalanceMasterDetailLColumn[] } = { name: 'RetailStepSavingsAccountThreadBalanceMasterDetail-L', columns: RetailStepSavingsAccountThreadBalanceMasterDetailLColumns } as const;

export const RzbRetailAccountTurnoverTransactionPreviewMasterDetailColumns = [ 'KEY_COLUMN', 'DebitAmount', 'ComplaintNumber', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Reference', 'Description', 'Note', 'CreditAmount', 'AmountTotal' ] as const;

export type RzbRetailAccountTurnoverTransactionPreviewMasterDetailColumn = typeof RzbRetailAccountTurnoverTransactionPreviewMasterDetailColumns[number];

export const RzbRetailAccountTurnoverTransactionPreviewMasterDetail: { name: string, columns: readonly RzbRetailAccountTurnoverTransactionPreviewMasterDetailColumn[] } = { name: 'RzbRetailAccountTurnoverTransactionPreviewMasterDetail', columns: RzbRetailAccountTurnoverTransactionPreviewMasterDetailColumns } as const;

export const RetailCardListPreviewFlatSColumns = [ 'KEY_COLUMN', 'CardCustomName', 'CardTypeDescription', 'StatusShort', 'PrimarySupplementary', 'ValidTo', 'AccountStatus', 'CardCategoryCode', 'CardStatus', 'IsEbankingCard', 'CardCustomType', 'CardType', 'CardID', 'CardCategoryID', 'HasDomesticAccountFlag', 'HasForeignAccountFlag', 'CreditCardFlag', 'BusinessCardFlag', 'ProtectedCardID' ] as const;

export type RetailCardListPreviewFlatSColumn = typeof RetailCardListPreviewFlatSColumns[number];

export const RetailCardListPreviewFlatS: { name: string, columns: readonly RetailCardListPreviewFlatSColumn[] } = { name: 'RetailCardListPreviewFlat-S', columns: RetailCardListPreviewFlatSColumns } as const;

export const RetailAccountBalanceTransactionTurnoverPreviewFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'ValueDate', 'TransactionDescription', 'ProcessedDate', 'ChequeCardNumber', 'CurrencyCode', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionType', 'TransactionBeneficiary', 'TransactionID', 'BeneficiaryAccount', 'IsInvestOrder' ] as const;

export type RetailAccountBalanceTransactionTurnoverPreviewFlatSColumn = typeof RetailAccountBalanceTransactionTurnoverPreviewFlatSColumns[number];

export const RetailAccountBalanceTransactionTurnoverPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverPreviewFlat-S', columns: RetailAccountBalanceTransactionTurnoverPreviewFlatSColumns } as const;

export const RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'TransactionID', 'TransactionBeneficiary', 'TransactionType', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'BeneficiaryAccount', 'CurrencyCode' ] as const;

export type RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatSColumn = typeof RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatSColumns[number];

export const RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverDomesticPreviewFlat-S', columns: RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatSColumns } as const;

export const RetailAccountBalanceTransactionTurnoverForeignPreviewFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'ValueDate', 'TransactionDescription', 'ProcessedDate', 'Reference', 'CurrencyCode', 'DebitAmount', 'CurrencyCodeNumber', 'TransactionBeneficiary', 'AmountTotal', 'Description', 'CreditAmount', 'TransactionType', 'BeneficiaryAccount', 'TransactionID', 'IsInvestOrder' ] as const;

export type RetailAccountBalanceTransactionTurnoverForeignPreviewFlatSColumn = typeof RetailAccountBalanceTransactionTurnoverForeignPreviewFlatSColumns[number];

export const RetailAccountBalanceTransactionTurnoverForeignPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverForeignPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverForeignPreviewFlat-S', columns: RetailAccountBalanceTransactionTurnoverForeignPreviewFlatSColumns } as const;

export const RetailLoanListPreviewFlatSColumns = [ 'KEY_COLUMN', 'LoanType', 'LoanAccountNumber', 'LoanAmount', 'LoanIssueDate', 'PaymentPeriod', 'InstallmentAmount', 'RemainingDebt', 'CreditDebit', 'CurrencyCode', 'PeriodIndicator', 'InstallmentCurrencyCodeNumeric', 'InstallmentCurrencyCode', 'RemainingDebtCurrencyCodeNumeric', 'RemainingDebtCurrencyCode', 'CreditDebitCurrencyCodeNumeric', 'CreditDebitCurrencyCode', 'AdministrativeBan', 'SocialIdentityNumber' ] as const;

export type RetailLoanListPreviewFlatSColumn = typeof RetailLoanListPreviewFlatSColumns[number];

export const RetailLoanListPreviewFlatS: { name: string, columns: readonly RetailLoanListPreviewFlatSColumn[] } = { name: 'RetailLoanListPreviewFlat-S', columns: RetailLoanListPreviewFlatSColumns } as const;

export const RetailCardBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'AccountType', 'Balance', 'CurrencyCode', 'LastChangeDate', 'ContractType', 'CurrencyCodeNumber', 'AccountNumber', 'ProductCodeCore' ] as const;

export type RetailCardBalancePreviewFlatSColumn = typeof RetailCardBalancePreviewFlatSColumns[number];

export const RetailCardBalancePreviewFlatS: { name: string, columns: readonly RetailCardBalancePreviewFlatSColumn[] } = { name: 'RetailCardBalancePreviewFlat-S', columns: RetailCardBalancePreviewFlatSColumns } as const;

export const RetailSupplementaryCardListPreviewFlatSColumns = [ 'KEY_COLUMN', 'Name', 'ProtectedCardID', 'Status', 'ValidFrom', 'ValidTo', 'StatusIndicator', 'CardStatusCoreID', 'CardNumber' ] as const;

export type RetailSupplementaryCardListPreviewFlatSColumn = typeof RetailSupplementaryCardListPreviewFlatSColumns[number];

export const RetailSupplementaryCardListPreviewFlatS: { name: string, columns: readonly RetailSupplementaryCardListPreviewFlatSColumn[] } = { name: 'RetailSupplementaryCardListPreviewFlat-S', columns: RetailSupplementaryCardListPreviewFlatSColumns } as const;

export const RetailAccountTurnoverTransactionPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'TransactionBeneficiary', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'Description', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTransactionPreviewMasterDetailSColumn = typeof RetailAccountTurnoverTransactionPreviewMasterDetailSColumns[number];

export const RetailAccountTurnoverTransactionPreviewMasterDetailS: { name: string, columns: readonly RetailAccountTurnoverTransactionPreviewMasterDetailSColumn[] } = { name: 'RetailAccountTurnoverTransactionPreviewMasterDetail-S', columns: RetailAccountTurnoverTransactionPreviewMasterDetailSColumns } as const;

export const RetailAccountTurnoverTransactionDomesticPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'TransactionBeneficiary', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'Description', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTransactionDomesticPreviewMasterDetailSColumn = typeof RetailAccountTurnoverTransactionDomesticPreviewMasterDetailSColumns[number];

export const RetailAccountTurnoverTransactionDomesticPreviewMasterDetailS: { name: string, columns: readonly RetailAccountTurnoverTransactionDomesticPreviewMasterDetailSColumn[] } = { name: 'RetailAccountTurnoverTransactionDomesticPreviewMasterDetail-S', columns: RetailAccountTurnoverTransactionDomesticPreviewMasterDetailSColumns } as const;

export const RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'TransactionBeneficiary', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'Description', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailSColumn = typeof RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailSColumns[number];

export const RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailS: { name: string, columns: readonly RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailSColumn[] } = { name: 'RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetail-S', columns: RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailSColumns } as const;

export const RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'TransactionBeneficiary', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'Description', 'BeneficiaryAccount', 'AccountOwner' ] as const;

export type RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailSColumn = typeof RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailSColumns[number];

export const RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailS: { name: string, columns: readonly RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailSColumn[] } = { name: 'RetailAccountTurnoverTimeDepositForeignPreviewMasterDetail-S', columns: RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailSColumns } as const;

export const RetailCreditCardTurnoverPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'CardCustomName', 'OriginalCurrencyCode', 'CurrencyCode', 'InstallmentCount', 'CreditAmount', 'OriginalCurrencyAmount', 'InstallmentOrderNumber', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCreditCardTurnoverPreviewMasterDetailSColumn = typeof RetailCreditCardTurnoverPreviewMasterDetailSColumns[number];

export const RetailCreditCardTurnoverPreviewMasterDetailS: { name: string, columns: readonly RetailCreditCardTurnoverPreviewMasterDetailSColumn[] } = { name: 'RetailCreditCardTurnoverPreviewMasterDetail-S', columns: RetailCreditCardTurnoverPreviewMasterDetailSColumns } as const;

export const RetailCardTurnoverPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'AmountTotal', 'CardCustomName', 'CreditAmount', 'OriginalCurrencyCode', 'CurrencyCode', 'InstallmentCount', 'OriginalCurrencyAmount', 'InstallmentOrderNumber', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCardTurnoverPreviewMasterDetailSColumn = typeof RetailCardTurnoverPreviewMasterDetailSColumns[number];

export const RetailCardTurnoverPreviewMasterDetailS: { name: string, columns: readonly RetailCardTurnoverPreviewMasterDetailSColumn[] } = { name: 'RetailCardTurnoverPreviewMasterDetail-S', columns: RetailCardTurnoverPreviewMasterDetailSColumns } as const;

export const RetailOrderPreviewListFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'OrderDate', 'CreditorName', 'DebitAccount', 'PaymentPurpose', 'Status', 'TransactionBeneficiary', 'StatusID', 'Reference', 'Commission', 'PaymentCode', 'DebtorName', 'CreditAccount', 'CreditorModel', 'PBO', 'BtnWithdraw', 'BtnRepeat', 'WithdrawalAllowed', 'CommissionCurrencyCode', 'TransactionType', 'Amount', 'BeneficiaryAccount', 'IsInvestOrder', 'GlobalOrderTemplateContent', 'ProductID', 'GlobalOrderTemplateName', 'GlobalOrderTemplateTypeCode', 'GlobalOrderTemplateTypeID', 'GlobalOrderTemplateTypeName', 'OrderTypeCode', 'OrderTypeDescription', 'UserGroupID', 'UserID', 'OrderTypeID', 'ValueDate', 'ReceiverReference', 'End2endID', 'CurrencyCode', 'ReceiveDate', 'Channel' ] as const;

export type RetailOrderPreviewListFlatSColumn = typeof RetailOrderPreviewListFlatSColumns[number];

export const RetailOrderPreviewListFlatS: { name: string, columns: readonly RetailOrderPreviewListFlatSColumn[] } = { name: 'RetailOrderPreviewListFlat-S', columns: RetailOrderPreviewListFlatSColumns } as const;

export const RetailCardSpendingPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'TransactionBeneficiary', 'OriginalCurrencyAmount', 'CardCustomName', 'OriginalCurrencyCodeNumber', 'OriginalCurrencyCode', 'TransactionType', 'DebitAmount', 'CurrencyCode' ] as const;

export type RetailCardSpendingPreviewMasterDetailSColumn = typeof RetailCardSpendingPreviewMasterDetailSColumns[number];

export const RetailCardSpendingPreviewMasterDetailS: { name: string, columns: readonly RetailCardSpendingPreviewMasterDetailSColumn[] } = { name: 'RetailCardSpendingPreviewMasterDetail-S', columns: RetailCardSpendingPreviewMasterDetailSColumns } as const;

export const RetailAccountBalanceTransactionPreviewFlatSColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'LastPayoffAmount', 'LastPaymentAmount', 'AccountNumber', 'CurrencyCodeNumber', 'LastPaymentDate', 'LastPayoffDate' ] as const;

export type RetailAccountBalanceTransactionPreviewFlatSColumn = typeof RetailAccountBalanceTransactionPreviewFlatSColumns[number];

export const RetailAccountBalanceTransactionPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceTransactionPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceTransactionPreviewFlat-S', columns: RetailAccountBalanceTransactionPreviewFlatSColumns } as const;

export const RetailAccountBalanceTransactionTurnoverPreviewFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Description', 'BeneficiaryAccount', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note' ] as const;

export type RetailAccountBalanceTransactionTurnoverPreviewFlatMColumn = typeof RetailAccountBalanceTransactionTurnoverPreviewFlatMColumns[number];

export const RetailAccountBalanceTransactionTurnoverPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverPreviewFlat-M', columns: RetailAccountBalanceTransactionTurnoverPreviewFlatMColumns } as const;

export const RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Description', 'BeneficiaryAccount', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note' ] as const;

export type RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatMColumn = typeof RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatMColumns[number];

export const RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverDomesticPreviewFlat-M', columns: RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatMColumns } as const;

export const RetailAccountBalanceTransactionTurnoverForeignPreviewFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Reference', 'TransactionDescription', 'Description', 'CurrencyCodeNumber', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal' ] as const;

export type RetailAccountBalanceTransactionTurnoverForeignPreviewFlatMColumn = typeof RetailAccountBalanceTransactionTurnoverForeignPreviewFlatMColumns[number];

export const RetailAccountBalanceTransactionTurnoverForeignPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverForeignPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverForeignPreviewFlat-M', columns: RetailAccountBalanceTransactionTurnoverForeignPreviewFlatMColumns } as const;

export const RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'CurrencyCode', 'BeneficiaryAccount', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'CurrencyCodeNumber' ] as const;

export type RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatMColumn = typeof RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatMColumns[number];

export const RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlat-M', columns: RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatMColumns } as const;

export const RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'TransactionDescription', 'Reference', 'CurrencyCode', 'BeneficiaryAccount', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'CurrencyCodeNumber' ] as const;

export type RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatMColumn = typeof RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatMColumns[number];

export const RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlat-M', columns: RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatMColumns } as const;

export const RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'BeneficiaryAccount', 'CurrencyCodeNumber', 'TransactionType', 'TransactionBeneficiary', 'TransactionID' ] as const;

export type RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatSColumn = typeof RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatSColumns[number];

export const RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlat-S', columns: RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatSColumns } as const;

export const RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'ValueDate', 'ProcessedDate', 'TransactionDescription', 'Reference', 'CurrencyCode', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'BeneficiaryAccount', 'TransactionType', 'CurrencyCodeNumber', 'TransactionBeneficiary', 'TransactionID' ] as const;

export type RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatSColumn = typeof RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatSColumns[number];

export const RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlat-S', columns: RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatSColumns } as const;

export const RetailAccountTurnoverTransactionPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount', 'IsInvestOrder' ] as const;

export type RetailAccountTurnoverTransactionPreviewMasterDetailMColumn = typeof RetailAccountTurnoverTransactionPreviewMasterDetailMColumns[number];

export const RetailAccountTurnoverTransactionPreviewMasterDetailM: { name: string, columns: readonly RetailAccountTurnoverTransactionPreviewMasterDetailMColumn[] } = { name: 'RetailAccountTurnoverTransactionPreviewMasterDetail-M', columns: RetailAccountTurnoverTransactionPreviewMasterDetailMColumns } as const;

export const RetailAccountTurnoverTransactionDomesticPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTransactionDomesticPreviewMasterDetailMColumn = typeof RetailAccountTurnoverTransactionDomesticPreviewMasterDetailMColumns[number];

export const RetailAccountTurnoverTransactionDomesticPreviewMasterDetailM: { name: string, columns: readonly RetailAccountTurnoverTransactionDomesticPreviewMasterDetailMColumn[] } = { name: 'RetailAccountTurnoverTransactionDomesticPreviewMasterDetail-M', columns: RetailAccountTurnoverTransactionDomesticPreviewMasterDetailMColumns } as const;

export const RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailMColumn = typeof RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailMColumns[number];

export const RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailM: { name: string, columns: readonly RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailMColumn[] } = { name: 'RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetail-M', columns: RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailMColumns } as const;

export const RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailMColumn = typeof RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailMColumns[number];

export const RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailM: { name: string, columns: readonly RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailMColumn[] } = { name: 'RetailAccountTurnoverTimeDepositForeignPreviewMasterDetail-M', columns: RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailMColumns } as const;

export const RetailAccountBalanceTransactionPreviewFlatMColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'LastPayoffAmount', 'LastPaymentAmount', 'AccountNumber', 'CurrencyCodeNumber', 'LastPaymentDate', 'LastPayoffDate' ] as const;

export type RetailAccountBalanceTransactionPreviewFlatMColumn = typeof RetailAccountBalanceTransactionPreviewFlatMColumns[number];

export const RetailAccountBalanceTransactionPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceTransactionPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceTransactionPreviewFlat-M', columns: RetailAccountBalanceTransactionPreviewFlatMColumns } as const;

export const RetailCardListPreviewFlatMColumns = [ 'KEY_COLUMN', 'CardCustomName', 'CardTypeDescription', 'StatusShort', 'PrimarySupplementary', 'ValidTo', 'AccountStatus', 'CardCategoryCode', 'CardStatus', 'IsEbankingCard', 'CardCustomType', 'CardType', 'CardID', 'CardCategoryID', 'HasDomesticAccountFlag', 'HasForeignAccountFlag', 'CreditCardFlag', 'BusinessCardFlag', 'ProtectedCardID' ] as const;

export type RetailCardListPreviewFlatMColumn = typeof RetailCardListPreviewFlatMColumns[number];

export const RetailCardListPreviewFlatM: { name: string, columns: readonly RetailCardListPreviewFlatMColumn[] } = { name: 'RetailCardListPreviewFlat-M', columns: RetailCardListPreviewFlatMColumns } as const;

export const RetailCardBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'AccountType', 'Balance', 'CurrencyCode', 'LastChangeDate', 'ContractType', 'CurrencyCodeNumber', 'AccountNumber', 'ProductCodeCore' ] as const;

export type RetailCardBalancePreviewFlatMColumn = typeof RetailCardBalancePreviewFlatMColumns[number];

export const RetailCardBalancePreviewFlatM: { name: string, columns: readonly RetailCardBalancePreviewFlatMColumn[] } = { name: 'RetailCardBalancePreviewFlat-M', columns: RetailCardBalancePreviewFlatMColumns } as const;

export const RetailCardSpendingPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'OriginalCurrencyAmount', 'CardCustomName', 'OriginalCurrencyCodeNumber', 'OriginalCurrencyCode', 'TransactionType', 'TransactionBeneficiary' ] as const;

export type RetailCardSpendingPreviewMasterDetailMColumn = typeof RetailCardSpendingPreviewMasterDetailMColumns[number];

export const RetailCardSpendingPreviewMasterDetailM: { name: string, columns: readonly RetailCardSpendingPreviewMasterDetailMColumn[] } = { name: 'RetailCardSpendingPreviewMasterDetail-M', columns: RetailCardSpendingPreviewMasterDetailMColumns } as const;

export const RetailCardTurnoverPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'AmountTotal', 'CardCustomName', 'CreditAmount', 'OriginalCurrencyCode', 'CurrencyCode', 'InstallmentCount', 'OriginalCurrencyAmount', 'InstallmentOrderNumber', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCardTurnoverPreviewMasterDetailMColumn = typeof RetailCardTurnoverPreviewMasterDetailMColumns[number];

export const RetailCardTurnoverPreviewMasterDetailM: { name: string, columns: readonly RetailCardTurnoverPreviewMasterDetailMColumn[] } = { name: 'RetailCardTurnoverPreviewMasterDetail-M', columns: RetailCardTurnoverPreviewMasterDetailMColumns } as const;

export const RetailCreditCardTurnoverPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'CardCustomName', 'OriginalCurrencyCode', 'CurrencyCode', 'InstallmentCount', 'CreditAmount', 'OriginalCurrencyAmount', 'InstallmentOrderNumber', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCreditCardTurnoverPreviewMasterDetailMColumn = typeof RetailCreditCardTurnoverPreviewMasterDetailMColumns[number];

export const RetailCreditCardTurnoverPreviewMasterDetailM: { name: string, columns: readonly RetailCreditCardTurnoverPreviewMasterDetailMColumn[] } = { name: 'RetailCreditCardTurnoverPreviewMasterDetail-M', columns: RetailCreditCardTurnoverPreviewMasterDetailMColumns } as const;

export const RetailLoanListPreviewFlatMColumns = [ 'KEY_COLUMN', 'LoanType', 'LoanAccountNumber', 'LoanAmount', 'LoanIssueDate', 'PaymentPeriod', 'InstallmentAmount', 'RemainingDebt', 'CreditDebit', 'CurrencyCode', 'PeriodIndicator', 'InstallmentCurrencyCodeNumeric', 'InstallmentCurrencyCode', 'RemainingDebtCurrencyCodeNumeric', 'RemainingDebtCurrencyCode', 'CreditDebitCurrencyCodeNumeric', 'CreditDebitCurrencyCode', 'AdministrativeBan', 'SocialIdentityNumber' ] as const;

export type RetailLoanListPreviewFlatMColumn = typeof RetailLoanListPreviewFlatMColumns[number];

export const RetailLoanListPreviewFlatM: { name: string, columns: readonly RetailLoanListPreviewFlatMColumn[] } = { name: 'RetailLoanListPreviewFlat-M', columns: RetailLoanListPreviewFlatMColumns } as const;

export const RetailOrderPreviewListFlatMColumns = [ 'KEY_COLUMN', 'OrderDate', 'DebitAccount', 'Status', 'CreditorName', 'Amount', 'Description', 'Commission', 'PaymentCode', 'DebtorName', 'CreditAccount', 'CreditorModel', 'PBO', 'PaymentPurpose', 'CurrencyCode', 'WithdrawalAllowed', 'Channel', 'Reference', 'CommissionCurrencyCode', 'Icon', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailOrderPreviewListFlatMColumn = typeof RetailOrderPreviewListFlatMColumns[number];

export const RetailOrderPreviewListFlatM: { name: string, columns: readonly RetailOrderPreviewListFlatMColumn[] } = { name: 'RetailOrderPreviewListFlat-M', columns: RetailOrderPreviewListFlatMColumns } as const;

export const RetailAccountReservedFundsSecuritiesPreviewFlatColumns = [ 'KEY_COLUMN', 'ReservationDate', 'Note', 'OrderNumber', 'StockSymbol', 'RequestedQuantity', 'Amount', 'CurrencyCode', 'CurrencyCodeNumber', 'ProductCodeCore', 'AccountCustomName', 'AccountID' ] as const;

export type RetailAccountReservedFundsSecuritiesPreviewFlatColumn = typeof RetailAccountReservedFundsSecuritiesPreviewFlatColumns[number];

export const RetailAccountReservedFundsSecuritiesPreviewFlat: { name: string, columns: readonly RetailAccountReservedFundsSecuritiesPreviewFlatColumn[] } = { name: 'RetailAccountReservedFundsSecuritiesPreviewFlat', columns: RetailAccountReservedFundsSecuritiesPreviewFlatColumns } as const;

export const RetailLoanNoticeFlatColumns = [ 'KEY_COLUMN', 'AccountNumber', 'SocialIdentityNumber', 'CurrencyCodeNumeric', 'CurrencyCode', 'InstallmentAmount', 'DueDate', 'NoticeType', 'CurrencyCodeNumericDomestic', 'CurrencyCodeDomestic', 'InstallmentAmountDomestic' ] as const;

export type RetailLoanNoticeFlatColumn = typeof RetailLoanNoticeFlatColumns[number];

export const RetailLoanNoticeFlat: { name: string, columns: readonly RetailLoanNoticeFlatColumn[] } = { name: 'RetailLoanNoticeFlat', columns: RetailLoanNoticeFlatColumns } as const;

export const RetailStepSavingsAccountThreadBalanceMasterDetailSColumns = [ 'KEY_COLUMN', 'ThreadNumber', 'ThreadLevel', 'PaymentDate', 'CurrencyCodeDetail', 'DebitAmount', 'CreditAmount', 'Balance' ] as const;

export type RetailStepSavingsAccountThreadBalanceMasterDetailSColumn = typeof RetailStepSavingsAccountThreadBalanceMasterDetailSColumns[number];

export const RetailStepSavingsAccountThreadBalanceMasterDetailS: { name: string, columns: readonly RetailStepSavingsAccountThreadBalanceMasterDetailSColumn[] } = { name: 'RetailStepSavingsAccountThreadBalanceMasterDetail-S', columns: RetailStepSavingsAccountThreadBalanceMasterDetailSColumns } as const;

export const RetailStepSavingsAccountThreadBalanceMasterDetailMColumns = [ 'KEY_COLUMN', 'ThreadNumber', 'ThreadLevel', 'PaymentDate', 'CurrencyCodeDetail', 'DebitAmount', 'CreditAmount', 'Balance' ] as const;

export type RetailStepSavingsAccountThreadBalanceMasterDetailMColumn = typeof RetailStepSavingsAccountThreadBalanceMasterDetailMColumns[number];

export const RetailStepSavingsAccountThreadBalanceMasterDetailM: { name: string, columns: readonly RetailStepSavingsAccountThreadBalanceMasterDetailMColumn[] } = { name: 'RetailStepSavingsAccountThreadBalanceMasterDetail-M', columns: RetailStepSavingsAccountThreadBalanceMasterDetailMColumns } as const;

export const RetailLoanAnnuityPlanMasterDetailLColumns = [ 'KEY_COLUMN', 'SocialIdentityNumber', 'OtherPayoffsAmount', 'AnnuityAmount', 'AnnuityDate', 'ItemID', 'DiscountedNetCashFlow', 'DiscountedLoanRepayment', 'OtherPaymentsAmount', 'DepositAmount', 'YearCount', 'PercentileAnnualRate', 'AnnuityOrderNumber', 'LoanAmountTotal', 'InstallmentAmount', 'InterestAmount', 'LoanBalance', 'DiscountedDeposit', 'Description', 'NetCashFlow' ] as const;

export type RetailLoanAnnuityPlanMasterDetailLColumn = typeof RetailLoanAnnuityPlanMasterDetailLColumns[number];

export const RetailLoanAnnuityPlanMasterDetailL: { name: string, columns: readonly RetailLoanAnnuityPlanMasterDetailLColumn[] } = { name: 'RetailLoanAnnuityPlanMasterDetail-L', columns: RetailLoanAnnuityPlanMasterDetailLColumns } as const;

export const RetailSecuritiesBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'AccountType', 'LastChangeDate', 'AccountID', 'CurrencyCodeNumeric', 'CurrencyCode', 'IsEbankingAccount', 'SubsystemProductID', 'ProductCodeCore', 'Alias' ] as const;

export type RetailSecuritiesBalancePreviewFlatLColumn = typeof RetailSecuritiesBalancePreviewFlatLColumns[number];

export const RetailSecuritiesBalancePreviewFlatL: { name: string, columns: readonly RetailSecuritiesBalancePreviewFlatLColumn[] } = { name: 'RetailSecuritiesBalancePreviewFlat-L', columns: RetailSecuritiesBalancePreviewFlatLColumns } as const;

export const RetailAccountBalanceStockTurnoverPreviewFlatSColumns = [ 'KEY_COLUMN', 'Icon', 'ValueDate', 'ProcessedDate', 'SalesAgreementNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'BeneficiaryAccount', 'TransactionBeneficiary', 'TransactionID', 'TransactionType', 'CurrencyCode' ] as const;

export type RetailAccountBalanceStockTurnoverPreviewFlatSColumn = typeof RetailAccountBalanceStockTurnoverPreviewFlatSColumns[number];

export const RetailAccountBalanceStockTurnoverPreviewFlatS: { name: string, columns: readonly RetailAccountBalanceStockTurnoverPreviewFlatSColumn[] } = { name: 'RetailAccountBalanceStockTurnoverPreviewFlat-S', columns: RetailAccountBalanceStockTurnoverPreviewFlatSColumns } as const;

export const RetailAccountBalanceStockTurnoverPreviewFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'SalesAgreementNumber', 'Description', 'BeneficiaryAccount', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note' ] as const;

export type RetailAccountBalanceStockTurnoverPreviewFlatMColumn = typeof RetailAccountBalanceStockTurnoverPreviewFlatMColumns[number];

export const RetailAccountBalanceStockTurnoverPreviewFlatM: { name: string, columns: readonly RetailAccountBalanceStockTurnoverPreviewFlatMColumn[] } = { name: 'RetailAccountBalanceStockTurnoverPreviewFlat-M', columns: RetailAccountBalanceStockTurnoverPreviewFlatMColumns } as const;

export const RetailAccountBalanceStockTurnoverPreviewFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'BeneficiaryAccount', 'SalesAgreementNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note' ] as const;

export type RetailAccountBalanceStockTurnoverPreviewFlatLColumn = typeof RetailAccountBalanceStockTurnoverPreviewFlatLColumns[number];

export const RetailAccountBalanceStockTurnoverPreviewFlatL: { name: string, columns: readonly RetailAccountBalanceStockTurnoverPreviewFlatLColumn[] } = { name: 'RetailAccountBalanceStockTurnoverPreviewFlat-L', columns: RetailAccountBalanceStockTurnoverPreviewFlatLColumns } as const;

export const RetailAccountTurnoverSecuritiesPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'SalesAgreementNumber', 'TransactionBeneficiary', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'Description', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverSecuritiesPreviewMasterDetailSColumn = typeof RetailAccountTurnoverSecuritiesPreviewMasterDetailSColumns[number];

export const RetailAccountTurnoverSecuritiesPreviewMasterDetailS: { name: string, columns: readonly RetailAccountTurnoverSecuritiesPreviewMasterDetailSColumn[] } = { name: 'RetailAccountTurnoverSecuritiesPreviewMasterDetail-S', columns: RetailAccountTurnoverSecuritiesPreviewMasterDetailSColumns } as const;

export const RetailAccountTurnoverSecuritiesPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'SalesAgreementNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverSecuritiesPreviewMasterDetailMColumn = typeof RetailAccountTurnoverSecuritiesPreviewMasterDetailMColumns[number];

export const RetailAccountTurnoverSecuritiesPreviewMasterDetailM: { name: string, columns: readonly RetailAccountTurnoverSecuritiesPreviewMasterDetailMColumn[] } = { name: 'RetailAccountTurnoverSecuritiesPreviewMasterDetail-M', columns: RetailAccountTurnoverSecuritiesPreviewMasterDetailMColumns } as const;

export const RetailAccountTurnoverSecuritiesPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'SalesAgreementNumber', 'Description', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'Note', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverSecuritiesPreviewMasterDetailLColumn = typeof RetailAccountTurnoverSecuritiesPreviewMasterDetailLColumns[number];

export const RetailAccountTurnoverSecuritiesPreviewMasterDetailL: { name: string, columns: readonly RetailAccountTurnoverSecuritiesPreviewMasterDetailLColumn[] } = { name: 'RetailAccountTurnoverSecuritiesPreviewMasterDetail-L', columns: RetailAccountTurnoverSecuritiesPreviewMasterDetailLColumns } as const;

export const RetailLoanAnnuityPlanMasterDetailMColumns = [ 'KEY_COLUMN', 'SocialIdentityNumber', 'OtherPayoffsAmount', 'AnnuityAmount', 'AnnuityDate', 'ItemID', 'DiscountedNetCashFlow', 'DiscountedLoanRepayment', 'OtherPaymentsAmount', 'DepositAmount', 'YearCount', 'PercentileAnnualRate', 'AnnuityOrderNumber', 'LoanAmountTotal', 'InstallmentAmount', 'InterestAmount', 'LoanBalance', 'DiscountedDeposit', 'Description', 'NetCashFlow' ] as const;

export type RetailLoanAnnuityPlanMasterDetailMColumn = typeof RetailLoanAnnuityPlanMasterDetailMColumns[number];

export const RetailLoanAnnuityPlanMasterDetailM: { name: string, columns: readonly RetailLoanAnnuityPlanMasterDetailMColumn[] } = { name: 'RetailLoanAnnuityPlanMasterDetail-M', columns: RetailLoanAnnuityPlanMasterDetailMColumns } as const;

export const RetailLoanAnnuityPlanMasterDetailSColumns = [ 'KEY_COLUMN', 'SocialIdentityNumber', 'OtherPayoffsAmount', 'AnnuityAmount', 'AnnuityDate', 'ItemID', 'DiscountedNetCashFlow', 'DiscountedLoanRepayment', 'OtherPaymentsAmount', 'DepositAmount', 'YearCount', 'PercentileAnnualRate', 'AnnuityOrderNumber', 'LoanAmountTotal', 'InstallmentAmount', 'InterestAmount', 'LoanBalance', 'DiscountedDeposit', 'Description', 'NetCashFlow' ] as const;

export type RetailLoanAnnuityPlanMasterDetailSColumn = typeof RetailLoanAnnuityPlanMasterDetailSColumns[number];

export const RetailLoanAnnuityPlanMasterDetailS: { name: string, columns: readonly RetailLoanAnnuityPlanMasterDetailSColumn[] } = { name: 'RetailLoanAnnuityPlanMasterDetail-S', columns: RetailLoanAnnuityPlanMasterDetailSColumns } as const;

export const RetailCardApprovedLimitColumns = [ 'KEY_COLUMN', 'ApprovedLimit', 'CurrencyCodeNumeric' ] as const;

export type RetailCardApprovedLimitColumn = typeof RetailCardApprovedLimitColumns[number];

export const RetailCardApprovedLimit: { name: string, columns: readonly RetailCardApprovedLimitColumn[] } = { name: 'RetailCardApprovedLimit', columns: RetailCardApprovedLimitColumns } as const;

export const RetailCardReservedFundsFlatColumns = [ 'KEY_COLUMN', 'ReservationDate', 'Note', 'Amount', 'CurrencyCodeNumeric' ] as const;

export type RetailCardReservedFundsFlatColumn = typeof RetailCardReservedFundsFlatColumns[number];

export const RetailCardReservedFundsFlat: { name: string, columns: readonly RetailCardReservedFundsFlatColumn[] } = { name: 'RetailCardReservedFundsFlat', columns: RetailCardReservedFundsFlatColumns } as const;

export const RetailSecuritiesBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'AccountType', 'LastChangeDate', 'AccountID', 'CurrencyCodeNumeric', 'CurrencyCode', 'IsEbankingAccount', 'SubsystemProductID', 'ProductCodeCore' ] as const;

export type RetailSecuritiesBalancePreviewFlatSColumn = typeof RetailSecuritiesBalancePreviewFlatSColumns[number];

export const RetailSecuritiesBalancePreviewFlatS: { name: string, columns: readonly RetailSecuritiesBalancePreviewFlatSColumn[] } = { name: 'RetailSecuritiesBalancePreviewFlat-S', columns: RetailSecuritiesBalancePreviewFlatSColumns } as const;

export const RetailSecuritiesStocksAccountBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'CFICode', 'Ticker', 'BrokerReservedItemCount', 'CurrencyCodeNumeric', 'CurrencyCode', 'BtnBuy' ] as const;

export type RetailSecuritiesStocksAccountBalancePreviewFlatLColumn = typeof RetailSecuritiesStocksAccountBalancePreviewFlatLColumns[number];

export const RetailSecuritiesStocksAccountBalancePreviewFlatL: { name: string, columns: readonly RetailSecuritiesStocksAccountBalancePreviewFlatLColumn[] } = { name: 'RetailSecuritiesStocksAccountBalancePreviewFlat-L', columns: RetailSecuritiesStocksAccountBalancePreviewFlatLColumns } as const;

export const RetailSecuritiesStocksAccountBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'BrokerReservedItemCount', 'CFICode', 'Ticker', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesStocksAccountBalancePreviewFlatMColumn = typeof RetailSecuritiesStocksAccountBalancePreviewFlatMColumns[number];

export const RetailSecuritiesStocksAccountBalancePreviewFlatM: { name: string, columns: readonly RetailSecuritiesStocksAccountBalancePreviewFlatMColumn[] } = { name: 'RetailSecuritiesStocksAccountBalancePreviewFlat-M', columns: RetailSecuritiesStocksAccountBalancePreviewFlatMColumns } as const;

export const RetailSecuritiesStocksAccountBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ReservedItemCount', 'BrokerReservedItemCount', 'ISINNumber', 'CFICode', 'Ticker', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesStocksAccountBalancePreviewFlatSColumn = typeof RetailSecuritiesStocksAccountBalancePreviewFlatSColumns[number];

export const RetailSecuritiesStocksAccountBalancePreviewFlatS: { name: string, columns: readonly RetailSecuritiesStocksAccountBalancePreviewFlatSColumn[] } = { name: 'RetailSecuritiesStocksAccountBalancePreviewFlat-S', columns: RetailSecuritiesStocksAccountBalancePreviewFlatSColumns } as const;

export const RetailSecuritiesStocksPledgeAccountBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'CFICode', 'Ticker', 'BrokerReservedItemCount', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesStocksPledgeAccountBalancePreviewFlatLColumn = typeof RetailSecuritiesStocksPledgeAccountBalancePreviewFlatLColumns[number];

export const RetailSecuritiesStocksPledgeAccountBalancePreviewFlatL: { name: string, columns: readonly RetailSecuritiesStocksPledgeAccountBalancePreviewFlatLColumn[] } = { name: 'RetailSecuritiesStocksPledgeAccountBalancePreviewFlat-L', columns: RetailSecuritiesStocksPledgeAccountBalancePreviewFlatLColumns } as const;

export const RetailSecuritiesStocksPledgeAccountBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'Ticker', 'ReservedItemCount', 'BrokerReservedItemCount', 'ISINNumber', 'CFICode', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesStocksPledgeAccountBalancePreviewFlatSColumn = typeof RetailSecuritiesStocksPledgeAccountBalancePreviewFlatSColumns[number];

export const RetailSecuritiesStocksPledgeAccountBalancePreviewFlatS: { name: string, columns: readonly RetailSecuritiesStocksPledgeAccountBalancePreviewFlatSColumn[] } = { name: 'RetailSecuritiesStocksPledgeAccountBalancePreviewFlat-S', columns: RetailSecuritiesStocksPledgeAccountBalancePreviewFlatSColumns } as const;

export const RetailSecuritiesStocksPledgeAccountBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ISINNumber', 'Ticker', 'ReservedItemCount', 'BrokerReservedItemCount', 'CFICode', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesStocksPledgeAccountBalancePreviewFlatMColumn = typeof RetailSecuritiesStocksPledgeAccountBalancePreviewFlatMColumns[number];

export const RetailSecuritiesStocksPledgeAccountBalancePreviewFlatM: { name: string, columns: readonly RetailSecuritiesStocksPledgeAccountBalancePreviewFlatMColumn[] } = { name: 'RetailSecuritiesStocksPledgeAccountBalancePreviewFlat-M', columns: RetailSecuritiesStocksPledgeAccountBalancePreviewFlatMColumns } as const;

export const RetailSecuritiesBondsAccountBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'CFICode', 'Ticker', 'NominalAmount', 'ReservedAmount', 'BrokerReservedItemCount', 'BrokerReservedAmount', 'CurrencyCodeNumeric', 'CurrencyCode', 'BtnBuy' ] as const;

export type RetailSecuritiesBondsAccountBalancePreviewFlatLColumn = typeof RetailSecuritiesBondsAccountBalancePreviewFlatLColumns[number];

export const RetailSecuritiesBondsAccountBalancePreviewFlatL: { name: string, columns: readonly RetailSecuritiesBondsAccountBalancePreviewFlatLColumn[] } = { name: 'RetailSecuritiesBondsAccountBalancePreviewFlat-L', columns: RetailSecuritiesBondsAccountBalancePreviewFlatLColumns } as const;

export const RetailSecuritiesBondsAccountBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'NominalAmount', 'ReservedAmount', 'Ticker', 'Issuer', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'CFICode', 'BrokerReservedItemCount', 'BrokerReservedAmount', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesBondsAccountBalancePreviewFlatMColumn = typeof RetailSecuritiesBondsAccountBalancePreviewFlatMColumns[number];

export const RetailSecuritiesBondsAccountBalancePreviewFlatM: { name: string, columns: readonly RetailSecuritiesBondsAccountBalancePreviewFlatMColumn[] } = { name: 'RetailSecuritiesBondsAccountBalancePreviewFlat-M', columns: RetailSecuritiesBondsAccountBalancePreviewFlatMColumns } as const;

export const RetailSecuritiesBondsAccountBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'NominalAmount', 'ReservedAmount', 'Issuer', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'CFICode', 'BrokerReservedItemCount', 'Ticker', 'BrokerReservedAmount', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesBondsAccountBalancePreviewFlatSColumn = typeof RetailSecuritiesBondsAccountBalancePreviewFlatSColumns[number];

export const RetailSecuritiesBondsAccountBalancePreviewFlatS: { name: string, columns: readonly RetailSecuritiesBondsAccountBalancePreviewFlatSColumn[] } = { name: 'RetailSecuritiesBondsAccountBalancePreviewFlat-S', columns: RetailSecuritiesBondsAccountBalancePreviewFlatSColumns } as const;

export const RetailSecuritiesBondsPledgeAccountBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ReservedItemCount', 'ISINNumber', 'CFICode', 'Ticker', 'NominalAmount', 'ReservedAmount', 'BrokerReservedItemCount', 'BrokerReservedAmount', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesBondsPledgeAccountBalancePreviewFlatLColumn = typeof RetailSecuritiesBondsPledgeAccountBalancePreviewFlatLColumns[number];

export const RetailSecuritiesBondsPledgeAccountBalancePreviewFlatL: { name: string, columns: readonly RetailSecuritiesBondsPledgeAccountBalancePreviewFlatLColumn[] } = { name: 'RetailSecuritiesBondsPledgeAccountBalancePreviewFlat-L', columns: RetailSecuritiesBondsPledgeAccountBalancePreviewFlatLColumns } as const;

export const RetailSecuritiesBondsPledgeAccountBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'NominalAmount', 'ISINNumber', 'Ticker', 'Issuer', 'ItemCount', 'ReservedAmount', 'ReservedItemCount', 'BrokerReservedItemCount', 'CFICode', 'BrokerReservedAmount', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesBondsPledgeAccountBalancePreviewFlatMColumn = typeof RetailSecuritiesBondsPledgeAccountBalancePreviewFlatMColumns[number];

export const RetailSecuritiesBondsPledgeAccountBalancePreviewFlatM: { name: string, columns: readonly RetailSecuritiesBondsPledgeAccountBalancePreviewFlatMColumn[] } = { name: 'RetailSecuritiesBondsPledgeAccountBalancePreviewFlat-M', columns: RetailSecuritiesBondsPledgeAccountBalancePreviewFlatMColumns } as const;

export const RetailSecuritiesBondsPledgeAccountBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'NominalAmount', 'Ticker', 'Issuer', 'ItemCount', 'ReservedAmount', 'ReservedItemCount', 'ISINNumber', 'BrokerReservedItemCount', 'CFICode', 'BrokerReservedAmount', 'CurrencyCodeNumeric', 'CurrencyCode' ] as const;

export type RetailSecuritiesBondsPledgeAccountBalancePreviewFlatSColumn = typeof RetailSecuritiesBondsPledgeAccountBalancePreviewFlatSColumns[number];

export const RetailSecuritiesBondsPledgeAccountBalancePreviewFlatS: { name: string, columns: readonly RetailSecuritiesBondsPledgeAccountBalancePreviewFlatSColumn[] } = { name: 'RetailSecuritiesBondsPledgeAccountBalancePreviewFlat-S', columns: RetailSecuritiesBondsPledgeAccountBalancePreviewFlatSColumns } as const;

export const RetailSecurityStocksBalanceTurnoverPreviewFlatLColumns = [ 'KEY_COLUMN', 'TransactionTypeName', 'Issuer', 'StockExchangeSymbol', 'TradeDate', 'ItemCount', 'UnitPrice', 'MarketPrice', 'ISINNumber', 'TransactionTypeCode', 'ProcessedDate', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityStocksBalanceTurnoverPreviewFlatLColumn = typeof RetailSecurityStocksBalanceTurnoverPreviewFlatLColumns[number];

export const RetailSecurityStocksBalanceTurnoverPreviewFlatL: { name: string, columns: readonly RetailSecurityStocksBalanceTurnoverPreviewFlatLColumn[] } = { name: 'RetailSecurityStocksBalanceTurnoverPreviewFlat-L', columns: RetailSecurityStocksBalanceTurnoverPreviewFlatLColumns } as const;

export const RetailSecurityStocksBalanceTurnoverPreviewFlatMColumns = [ 'KEY_COLUMN', 'TransactionTypeName', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'UnitPrice', 'MarketPrice', 'TransactionTypeCode', 'TradeDate', 'ProcessedDate', 'ISINNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityStocksBalanceTurnoverPreviewFlatMColumn = typeof RetailSecurityStocksBalanceTurnoverPreviewFlatMColumns[number];

export const RetailSecurityStocksBalanceTurnoverPreviewFlatM: { name: string, columns: readonly RetailSecurityStocksBalanceTurnoverPreviewFlatMColumn[] } = { name: 'RetailSecurityStocksBalanceTurnoverPreviewFlat-M', columns: RetailSecurityStocksBalanceTurnoverPreviewFlatMColumns } as const;

export const RetailSecurityStocksBalanceTurnoverPreviewFlatSColumns = [ 'KEY_COLUMN', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'UnitPrice', 'MarketPrice', 'TransactionTypeName', 'TransactionTypeCode', 'TradeDate', 'ProcessedDate', 'ISINNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityStocksBalanceTurnoverPreviewFlatSColumn = typeof RetailSecurityStocksBalanceTurnoverPreviewFlatSColumns[number];

export const RetailSecurityStocksBalanceTurnoverPreviewFlatS: { name: string, columns: readonly RetailSecurityStocksBalanceTurnoverPreviewFlatSColumn[] } = { name: 'RetailSecurityStocksBalanceTurnoverPreviewFlat-S', columns: RetailSecurityStocksBalanceTurnoverPreviewFlatSColumns } as const;

export const RetailAccountTurnoverStepSavingsPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ProcessedDate', 'ComplaintNumber', 'Note', 'Reference', 'DebitAmount', 'CreditAmount', 'TransactionBeneficiary', 'TransactionID', 'TransactionType', 'AmountTotal', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverStepSavingsPreviewMasterDetailSColumn = typeof RetailAccountTurnoverStepSavingsPreviewMasterDetailSColumns[number];

export const RetailAccountTurnoverStepSavingsPreviewMasterDetailS: { name: string, columns: readonly RetailAccountTurnoverStepSavingsPreviewMasterDetailSColumn[] } = { name: 'RetailAccountTurnoverStepSavingsPreviewMasterDetail-S', columns: RetailAccountTurnoverStepSavingsPreviewMasterDetailSColumns } as const;

export const RetailAccountTurnoverStepSavingsPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ProcessedDate', 'ComplaintNumber', 'Note', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverStepSavingsPreviewMasterDetailMColumn = typeof RetailAccountTurnoverStepSavingsPreviewMasterDetailMColumns[number];

export const RetailAccountTurnoverStepSavingsPreviewMasterDetailM: { name: string, columns: readonly RetailAccountTurnoverStepSavingsPreviewMasterDetailMColumn[] } = { name: 'RetailAccountTurnoverStepSavingsPreviewMasterDetail-M', columns: RetailAccountTurnoverStepSavingsPreviewMasterDetailMColumns } as const;

export const RetailAccountTurnoverStepSavingsPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumber', 'CurrencyCode', 'ProcessedDate', 'ComplaintNumber', 'Note', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'TransactionID', 'TransactionType', 'TransactionBeneficiary', 'BeneficiaryAccount' ] as const;

export type RetailAccountTurnoverStepSavingsPreviewMasterDetailLColumn = typeof RetailAccountTurnoverStepSavingsPreviewMasterDetailLColumns[number];

export const RetailAccountTurnoverStepSavingsPreviewMasterDetailL: { name: string, columns: readonly RetailAccountTurnoverStepSavingsPreviewMasterDetailLColumn[] } = { name: 'RetailAccountTurnoverStepSavingsPreviewMasterDetail-L', columns: RetailAccountTurnoverStepSavingsPreviewMasterDetailLColumns } as const;

export const RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatLColumns = [ 'KEY_COLUMN', 'ItemType', 'Issuer', 'StockExchangeSymbol', 'TradeDate', 'SalesAgreementNumber', 'ItemCount', 'ISINNumber', 'TransactionTypeCode', 'TransactionTypeName', 'ProcessedDate', 'UnitPrice', 'MarketPrice', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatLColumn = typeof RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatLColumns[number];

export const RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatL: { name: string, columns: readonly RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatLColumn[] } = { name: 'RetailSecurityStocksPledgeBalanceTurnoverPreviewFlat-L', columns: RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatLColumns } as const;

export const RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatMColumns = [ 'KEY_COLUMN', 'ItemType', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'ISINNumber', 'TransactionTypeName', 'TransactionTypeCode', 'TradeDate', 'SalesAgreementNumber', 'ProcessedDate', 'UnitPrice', 'MarketPrice', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatMColumn = typeof RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatMColumns[number];

export const RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatM: { name: string, columns: readonly RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatMColumn[] } = { name: 'RetailSecurityStocksPledgeBalanceTurnoverPreviewFlat-M', columns: RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatMColumns } as const;

export const RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatSColumns = [ 'KEY_COLUMN', 'ItemType', 'Issuer', 'StockExchangeSymbol', 'ItemCount', 'TransactionTypeName', 'TransactionTypeCode', 'TradeDate', 'SalesAgreementNumber', 'ProcessedDate', 'UnitPrice', 'MarketPrice', 'ISINNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatSColumn = typeof RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatSColumns[number];

export const RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatS: { name: string, columns: readonly RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatSColumn[] } = { name: 'RetailSecurityStocksPledgeBalanceTurnoverPreviewFlat-S', columns: RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatSColumns } as const;

export const RetailSecurityBondsBalanceTurnoverPreviewFlatLColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'TransactionTypeCode', 'TradeDate', 'NominalAmount', 'MarketPrice', 'Discount', 'SalesAgreementNumber', 'ISINNumber', 'TransactionTypeName', 'Issuer', 'ItemCount', 'ProcessedDate', 'UnitPrice', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityBondsBalanceTurnoverPreviewFlatLColumn = typeof RetailSecurityBondsBalanceTurnoverPreviewFlatLColumns[number];

export const RetailSecurityBondsBalanceTurnoverPreviewFlatL: { name: string, columns: readonly RetailSecurityBondsBalanceTurnoverPreviewFlatLColumn[] } = { name: 'RetailSecurityBondsBalanceTurnoverPreviewFlat-L', columns: RetailSecurityBondsBalanceTurnoverPreviewFlatLColumns } as const;

export const RetailSecurityBondsBalanceTurnoverPreviewFlatMColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'TransactionTypeCode', 'NominalAmount', 'MarketPrice', 'Discount', 'ISINNumber', 'TransactionTypeName', 'Issuer', 'TradeDate', 'ItemCount', 'ProcessedDate', 'UnitPrice', 'SalesAgreementNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityBondsBalanceTurnoverPreviewFlatMColumn = typeof RetailSecurityBondsBalanceTurnoverPreviewFlatMColumns[number];

export const RetailSecurityBondsBalanceTurnoverPreviewFlatM: { name: string, columns: readonly RetailSecurityBondsBalanceTurnoverPreviewFlatMColumn[] } = { name: 'RetailSecurityBondsBalanceTurnoverPreviewFlat-M', columns: RetailSecurityBondsBalanceTurnoverPreviewFlatMColumns } as const;

export const RetailSecurityBondsBalanceTurnoverPreviewFlatSColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'TransactionTypeCode', 'NominalAmount', 'MarketPrice', 'Discount', 'TransactionTypeName', 'Issuer', 'TradeDate', 'ItemCount', 'ProcessedDate', 'UnitPrice', 'SalesAgreementNumber', 'ISINNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityBondsBalanceTurnoverPreviewFlatSColumn = typeof RetailSecurityBondsBalanceTurnoverPreviewFlatSColumns[number];

export const RetailSecurityBondsBalanceTurnoverPreviewFlatS: { name: string, columns: readonly RetailSecurityBondsBalanceTurnoverPreviewFlatSColumn[] } = { name: 'RetailSecurityBondsBalanceTurnoverPreviewFlat-S', columns: RetailSecurityBondsBalanceTurnoverPreviewFlatSColumns } as const;

export const RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatLColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'ItemType', 'TradeDate', 'NominalAmount', 'SalesAgreementNumber', 'ISINNumber', 'TransactionTypeName', 'Issuer', 'TransactionTypeCode', 'MarketPrice', 'ItemCount', 'ProcessedDate', 'UnitPrice', 'Discount', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatLColumn = typeof RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatLColumns[number];

export const RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatL: { name: string, columns: readonly RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatLColumn[] } = { name: 'RetailSecurityBondsPledgeBalanceTurnoverPreviewFlat-L', columns: RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatLColumns } as const;

export const RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatMColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'ItemType', 'TradeDate', 'NominalAmount', 'ISINNumber', 'TransactionTypeName', 'Issuer', 'TransactionTypeCode', 'ItemCount', 'ProcessedDate', 'MarketPrice', 'Discount', 'UnitPrice', 'SalesAgreementNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatMColumn = typeof RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatMColumns[number];

export const RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatM: { name: string, columns: readonly RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatMColumn[] } = { name: 'RetailSecurityBondsPledgeBalanceTurnoverPreviewFlat-M', columns: RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatMColumns } as const;

export const RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatSColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'ItemType', 'TradeDate', 'NominalAmount', 'TransactionTypeName', 'Issuer', 'TransactionTypeCode', 'ItemCount', 'ProcessedDate', 'MarketPrice', 'Discount', 'UnitPrice', 'SalesAgreementNumber', 'ISINNumber', 'CFICode', 'Ticker' ] as const;

export type RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatSColumn = typeof RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatSColumns[number];

export const RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatS: { name: string, columns: readonly RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatSColumn[] } = { name: 'RetailSecurityBondsPledgeBalanceTurnoverPreviewFlat-S', columns: RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatSColumns } as const;

export const RetailSecuritiesSymbolListFlatColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'ISINNumber' ] as const;

export type RetailSecuritiesSymbolListFlatColumn = typeof RetailSecuritiesSymbolListFlatColumns[number];

export const RetailSecuritiesSymbolListFlat: { name: string, columns: readonly RetailSecuritiesSymbolListFlatColumn[] } = { name: 'RetailSecuritiesSymbolListFlat', columns: RetailSecuritiesSymbolListFlatColumns } as const;

export const RetailSecuritiesOrderStatusListFlatColumns = [ 'KEY_COLUMN', 'Code', 'Name' ] as const;

export type RetailSecuritiesOrderStatusListFlatColumn = typeof RetailSecuritiesOrderStatusListFlatColumns[number];

export const RetailSecuritiesOrderStatusListFlat: { name: string, columns: readonly RetailSecuritiesOrderStatusListFlatColumn[] } = { name: 'RetailSecuritiesOrderStatusListFlat', columns: RetailSecuritiesOrderStatusListFlatColumns } as const;

export const RetailSecuritiesStockExchangeStatusListFlatColumns = [ 'KEY_COLUMN', 'Code', 'Name' ] as const;

export type RetailSecuritiesStockExchangeStatusListFlatColumn = typeof RetailSecuritiesStockExchangeStatusListFlatColumns[number];

export const RetailSecuritiesStockExchangeStatusListFlat: { name: string, columns: readonly RetailSecuritiesStockExchangeStatusListFlatColumn[] } = { name: 'RetailSecuritiesStockExchangeStatusListFlat', columns: RetailSecuritiesStockExchangeStatusListFlatColumns } as const;

export const RetailSecuritiesOrderPreviewFlatLColumns = [ 'KEY_COLUMN', 'OrderNumber', 'StockExchangeSymbol', 'ReceiveDate', 'ConstraintDate', 'OrderStatusDescription', 'RequestedVolume', 'RealizedVolume', 'UnrealizedVolume', 'ISINNumber', 'WithdrawalOrderNumber', 'ReceiveTime', 'OrderStatus', 'StockExchangeStatus', 'CFICode', 'Ticker', 'StockExchangeStatusDescription', 'OrderType', 'WithdrawButton' ] as const;

export type RetailSecuritiesOrderPreviewFlatLColumn = typeof RetailSecuritiesOrderPreviewFlatLColumns[number];

export const RetailSecuritiesOrderPreviewFlatL: { name: string, columns: readonly RetailSecuritiesOrderPreviewFlatLColumn[] } = { name: 'RetailSecuritiesOrderPreviewFlat-L', columns: RetailSecuritiesOrderPreviewFlatLColumns } as const;

export const RetailSecuritiesOrderPreviewFlatMColumns = [ 'KEY_COLUMN', 'OrderNumber', 'StockExchangeSymbol', 'ReceiveDate', 'ConstraintDate', 'OrderStatusDescription', 'RequestedVolume', 'RealizedVolume', 'UnrealizedVolume', 'ISINNumber', 'WithdrawalOrderNumber', 'ReceiveTime', 'OrderStatus', 'StockExchangeStatus', 'CFICode', 'Ticker', 'StockExchangeStatusDescription', 'OrderType' ] as const;

export type RetailSecuritiesOrderPreviewFlatMColumn = typeof RetailSecuritiesOrderPreviewFlatMColumns[number];

export const RetailSecuritiesOrderPreviewFlatM: { name: string, columns: readonly RetailSecuritiesOrderPreviewFlatMColumn[] } = { name: 'RetailSecuritiesOrderPreviewFlat-M', columns: RetailSecuritiesOrderPreviewFlatMColumns } as const;

export const RetailSecuritiesOrderPreviewFlatSColumns = [ 'KEY_COLUMN', 'OrderNumber', 'StockExchangeSymbol', 'ReceiveDate', 'ConstraintDate', 'OrderStatusDescription', 'RequestedVolume', 'RealizedVolume', 'UnrealizedVolume', 'ISINNumber', 'WithdrawalOrderNumber', 'ReceiveTime', 'OrderStatus', 'StockExchangeStatus', 'CFICode', 'Ticker', 'StockExchangeStatusDescription', 'OrderType' ] as const;

export type RetailSecuritiesOrderPreviewFlatSColumn = typeof RetailSecuritiesOrderPreviewFlatSColumns[number];

export const RetailSecuritiesOrderPreviewFlatS: { name: string, columns: readonly RetailSecuritiesOrderPreviewFlatSColumn[] } = { name: 'RetailSecuritiesOrderPreviewFlat-S', columns: RetailSecuritiesOrderPreviewFlatSColumns } as const;

export const RetailSecuritiesOrderConfirmationPreviewFlatLColumns = [ 'KEY_COLUMN', 'OrderNumber', 'StockExchangeSymbol', 'RequestedVolume', 'RealizedVolume', 'BrokerCommission', 'StockExchangeCommission', 'Tax', 'NetAmount', 'RealizationDate', 'OrderConfirmationNumber', 'OrderPrice', 'Price', 'RegistryCommission', 'SecuritiesType', 'BankCharges', 'TotalCharges', 'BrokerCommissionPercentage' ] as const;

export type RetailSecuritiesOrderConfirmationPreviewFlatLColumn = typeof RetailSecuritiesOrderConfirmationPreviewFlatLColumns[number];

export const RetailSecuritiesOrderConfirmationPreviewFlatL: { name: string, columns: readonly RetailSecuritiesOrderConfirmationPreviewFlatLColumn[] } = { name: 'RetailSecuritiesOrderConfirmationPreviewFlat-L', columns: RetailSecuritiesOrderConfirmationPreviewFlatLColumns } as const;

export const RetailSecuritiesOrderDetailFlatColumns = [ 'KEY_COLUMN', 'OrderNumber', 'ReceiveDate', 'ReceiveTime', 'OrderType', 'SecuritiesType', 'WithdrawnOrderType', 'Citizenship', 'PersonalIdNumber', 'PersonalIdLocality', 'StockExchangeStatus', 'OrderStatus', 'WithdrawalOrderNumber', 'WithdrawnOrderDate', 'WithdrawnOrderTime', 'WithdrawnOrderDeliveriMethod', 'CentralRegistryAccountNumber', 'Locality', 'DeliveryMethod', 'SocialIdentityNumber', 'ClientName', 'ZipCode', 'City', 'Municipality', 'Address', 'PhoneNumber', 'ContractNumber', 'Issuer', 'Ticker', 'CFICode', 'ISINNumber', 'Volume', 'PriceFlag', 'TimeConstraint', 'ConstraintDate', 'Price', 'MarketOrganizer', 'StockExchangeCommission', 'RegistryCommission', 'BrokerCommission', 'SecuritiesAccountNumber', 'CashAccountNumber', 'TradeMethod', 'TransferTax', 'CentralRegistryTaxCommission', 'StockExchangeSymbol', 'BankCommission', 'IcebergQuantity', 'TradeOrderType' ] as const;

export type RetailSecuritiesOrderDetailFlatColumn = typeof RetailSecuritiesOrderDetailFlatColumns[number];

export const RetailSecuritiesOrderDetailFlat: { name: string, columns: readonly RetailSecuritiesOrderDetailFlatColumn[] } = { name: 'RetailSecuritiesOrderDetailFlat', columns: RetailSecuritiesOrderDetailFlatColumns } as const;

export const RetailSecuritiesOrderRealizationDetailMasterDetailColumns = [ 'KEY_COLUMN', 'ReceiveDate', 'RealizedVolume', 'Price', 'SalesAgreementNumber', 'Issuer', 'ISINNumber', 'CFICode', 'Ticker', 'StockExchangeSymbol' ] as const;

export type RetailSecuritiesOrderRealizationDetailMasterDetailColumn = typeof RetailSecuritiesOrderRealizationDetailMasterDetailColumns[number];

export const RetailSecuritiesOrderRealizationDetailMasterDetail: { name: string, columns: readonly RetailSecuritiesOrderRealizationDetailMasterDetailColumn[] } = { name: 'RetailSecuritiesOrderRealizationDetailMasterDetail', columns: RetailSecuritiesOrderRealizationDetailMasterDetailColumns } as const;

export const RetailSecuritiesOrderConfirmationDetailFlatColumns = [ 'KEY_COLUMN', 'OrderConfirmationNumber', 'OrderConfirmationDate', 'ClientName', 'ClientAddress', 'ClientZipCode', 'ClientCity', 'SocialIdentityNumber', 'OrderType', 'OrderNumber', 'RealizationDate', 'RealizationTime', 'BankAddress', 'BankVatNumber', 'CentralRegistryAccountNumber', 'RealizedVolume', 'ReceiveDate', 'ReceiveTime', 'CFICode', 'ISINNumber', 'Issuer', 'Price', 'PriceTotal', 'BrokerCommission', 'StockExchangeCommissionPercentage', 'StockExchangeCommission', 'RegistryCommissionPercentage', 'RegistryCommission', 'TransferTaxPercentage', 'Tax', 'CentralRegistryTaxCommissionPercentage', 'CentralRegistryTaxCommission', 'BankCharges', 'TotalCharges', 'NetAmount', 'CashAccountNumber' ] as const;

export type RetailSecuritiesOrderConfirmationDetailFlatColumn = typeof RetailSecuritiesOrderConfirmationDetailFlatColumns[number];

export const RetailSecuritiesOrderConfirmationDetailFlat: { name: string, columns: readonly RetailSecuritiesOrderConfirmationDetailFlatColumn[] } = { name: 'RetailSecuritiesOrderConfirmationDetailFlat', columns: RetailSecuritiesOrderConfirmationDetailFlatColumns } as const;

export const RetailSecuritiesOrderConfirmationPreviewFlatMColumns = [ 'KEY_COLUMN', 'OrderNumber', 'StockExchangeSymbol', 'RealizedVolume', 'BrokerCommission', 'Tax', 'NetAmount', 'RealizationDate', 'OrderConfirmationNumber', 'RequestedVolume', 'SecuritiesType', 'OrderPrice', 'Price', 'RegistryCommission', 'BankCharges', 'StockExchangeCommission', 'BrokerCommissionPercentage', 'TotalCharges' ] as const;

export type RetailSecuritiesOrderConfirmationPreviewFlatMColumn = typeof RetailSecuritiesOrderConfirmationPreviewFlatMColumns[number];

export const RetailSecuritiesOrderConfirmationPreviewFlatM: { name: string, columns: readonly RetailSecuritiesOrderConfirmationPreviewFlatMColumn[] } = { name: 'RetailSecuritiesOrderConfirmationPreviewFlat-M', columns: RetailSecuritiesOrderConfirmationPreviewFlatMColumns } as const;

export const RetailSecuritiesOrderConfirmationPreviewFlatSColumns = [ 'KEY_COLUMN', 'OrderNumber', 'StockExchangeSymbol', 'RealizedVolume', 'NetAmount', 'RealizationDate', 'OrderConfirmationNumber', 'OrderPrice', 'Price', 'RequestedVolume', 'BrokerCommission', 'SecuritiesType', 'StockExchangeCommission', 'RegistryCommission', 'BankCharges', 'Tax', 'BrokerCommissionPercentage', 'TotalCharges' ] as const;

export type RetailSecuritiesOrderConfirmationPreviewFlatSColumn = typeof RetailSecuritiesOrderConfirmationPreviewFlatSColumns[number];

export const RetailSecuritiesOrderConfirmationPreviewFlatS: { name: string, columns: readonly RetailSecuritiesOrderConfirmationPreviewFlatSColumn[] } = { name: 'RetailSecuritiesOrderConfirmationPreviewFlat-S', columns: RetailSecuritiesOrderConfirmationPreviewFlatSColumns } as const;

export const RetailExchangeOfficeBuyDetailsFlatColumns = [ 'KEY_COLUMN', 'JobCode', 'ExchangeNotebookNumber', 'MoneyChangerName', 'Purpose', 'DebtorIdentityNumber', 'Operator', 'CashDeskCode', 'CreditorName', 'PersonalIdNumber', 'CreditCurrencyCode', 'DebitCurrencyCode', 'CreditAmount', 'DebitAmount', 'ExchangeRate', 'CommissionAmount', 'CommissionPercentage', 'DomesticAmountTotal', 'ExchangeOfficeLocality', 'BankLocality', 'ReceiveDate', 'OrderNumberCore' ] as const;

export type RetailExchangeOfficeBuyDetailsFlatColumn = typeof RetailExchangeOfficeBuyDetailsFlatColumns[number];

export const RetailExchangeOfficeBuyDetailsFlat: { name: string, columns: readonly RetailExchangeOfficeBuyDetailsFlatColumn[] } = { name: 'RetailExchangeOfficeBuyDetailsFlat', columns: RetailExchangeOfficeBuyDetailsFlatColumns } as const;

export const RetailExchangeOfficeSellDetailsFlatColumns = [ 'KEY_COLUMN', 'JobCode', 'ExchangeNotebookNumber', 'MoneyChangerName', 'Purpose', 'DebtorIdentityNumber', 'Operator', 'CashDeskCode', 'CreditorName', 'PersonalIdNumber', 'CreditCurrencyCode', 'DebitCurrencyCode', 'CreditAmount', 'DebitAmount', 'ExchangeRate', 'CommissionAmount', 'CommissionPercentage', 'DomesticAmountTotal', 'ExchangeOfficeLocality', 'BankLocality', 'ReceiveDate', 'OrderNumberCore' ] as const;

export type RetailExchangeOfficeSellDetailsFlatColumn = typeof RetailExchangeOfficeSellDetailsFlatColumns[number];

export const RetailExchangeOfficeSellDetailsFlat: { name: string, columns: readonly RetailExchangeOfficeSellDetailsFlatColumn[] } = { name: 'RetailExchangeOfficeSellDetailsFlat', columns: RetailExchangeOfficeSellDetailsFlatColumns } as const;

export const RetailExchangeOfficeFXDetailsFlatColumns = [ 'KEY_COLUMN', 'JobCode', 'ExchangeNotebookNumber', 'MoneyChangerName', 'Purpose', 'Operator', 'CashDeskCode', 'CreditorName', 'PersonalIdNumber', 'CreditCurrencyCode', 'DebitCurrencyCode', 'CreditAmount', 'DebitAmount', 'ExchangeRate', 'CommissionAmount', 'CommissionPercentage', 'DomesticAmountTotal', 'ExchangeOfficeLocality', 'BankLocality', 'ReceiveDate', 'OrderNumberCore', 'JobDescription', 'TransactionID', 'DebtorName', 'DebitAccount', 'CreditAccount', 'CreditorIdentityNumber', 'DebitCurrencyCodeNumeric', 'CreditCurrencyCodeNumeric', 'OrderNumberCoreSell', 'DebtorIdentityNumber', 'ReceiveDateSell' ] as const;

export type RetailExchangeOfficeFXDetailsFlatColumn = typeof RetailExchangeOfficeFXDetailsFlatColumns[number];

export const RetailExchangeOfficeFXDetailsFlat: { name: string, columns: readonly RetailExchangeOfficeFXDetailsFlatColumn[] } = { name: 'RetailExchangeOfficeFXDetailsFlat', columns: RetailExchangeOfficeFXDetailsFlatColumns } as const;

export const RetailExchangeOfficeOverviewFlatLColumns = [ 'KEY_COLUMN', 'TransactionType', 'DebitAccount', 'CreditAccount', 'DebitAmount', 'DebitCurrencyCode', 'CommissionAmount', 'CreditAmount', 'CreditCurrencyCode', 'TransactionID', 'DebitCurrencyCodeNumeric', 'CreditCurrencyCodeNumeric', 'OrderNumberCore', 'ReceiveDate', 'Channel', 'ChannelDescription' ] as const;

export type RetailExchangeOfficeOverviewFlatLColumn = typeof RetailExchangeOfficeOverviewFlatLColumns[number];

export const RetailExchangeOfficeOverviewFlatL: { name: string, columns: readonly RetailExchangeOfficeOverviewFlatLColumn[] } = { name: 'RetailExchangeOfficeOverviewFlat-L', columns: RetailExchangeOfficeOverviewFlatLColumns } as const;

export const RetailSecuritiesClientCoreDataFlatColumns = [ 'KEY_COLUMN', 'Citizenship', 'ClientName', 'ZipCode', 'City', 'Municipality', 'Address', 'PhoneNumber', 'PersonalIdNumber', 'PersonalIdLocality', 'StockExchangeCommission', 'RegistryCommission', 'BrokerCommission', 'BondStockExchangeCommission', 'BondRegistryCommission', 'TransferTax', 'CentralRegistryTaxCommission', 'ContractNumber', 'CentralRegistryAccountNumber', 'MarketOrganizer', 'BankCommission' ] as const;

export type RetailSecuritiesClientCoreDataFlatColumn = typeof RetailSecuritiesClientCoreDataFlatColumns[number];

export const RetailSecuritiesClientCoreDataFlat: { name: string, columns: readonly RetailSecuritiesClientCoreDataFlatColumn[] } = { name: 'RetailSecuritiesClientCoreDataFlat', columns: RetailSecuritiesClientCoreDataFlatColumns } as const;

export const RetailSecuritiesSymbolOrderListFlatColumns = [ 'KEY_COLUMN', 'StockExchangeSymbol', 'ISINNumber', 'Issuer', 'CFICode', 'Ticker', 'TradeMethod' ] as const;

export type RetailSecuritiesSymbolOrderListFlatColumn = typeof RetailSecuritiesSymbolOrderListFlatColumns[number];

export const RetailSecuritiesSymbolOrderListFlat: { name: string, columns: readonly RetailSecuritiesSymbolOrderListFlatColumn[] } = { name: 'RetailSecuritiesSymbolOrderListFlat', columns: RetailSecuritiesSymbolOrderListFlatColumns } as const;

export const RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'AccountID', 'AccountNumber', 'CurrencyCodeNumeric', 'SubsystemProductID', 'ProductCodeCore' ] as const;

export type RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlatColumn = typeof RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlatColumns[number];

export const RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlat: { name: string, columns: readonly RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlatColumn[] } = { name: 'RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlat', columns: RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlatColumns } as const;

export const RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'CurrencyCodeNumber' ] as const;

export type RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlatColumn = typeof RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlatColumns[number];

export const RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlat: { name: string, columns: readonly RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlatColumn[] } = { name: 'RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlat', columns: RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlatColumns } as const;

export const RetailExchangeRateListFlat_NB_LColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CountryCode', 'CurrencyCode', 'Parity', 'BuyingRate', 'CashBuyingRate', 'AvgRate', 'SellingRate', 'CashSellingRate' ] as const;

export type RetailExchangeRateListFlat_NB_LColumn = typeof RetailExchangeRateListFlat_NB_LColumns[number];

export const RetailExchangeRateListFlat_NB_L: { name: string, columns: readonly RetailExchangeRateListFlat_NB_LColumn[] } = { name: 'RetailExchangeRateListFlat_NB_L', columns: RetailExchangeRateListFlat_NB_LColumns } as const;

export const RetailExchangeRateListFlat_INT_LColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CountryCode', 'CurrencyCode', 'Parity', 'BuyingRate', 'CashBuyingRate', 'AvgRate', 'SellingRate', 'CashSellingRate' ] as const;

export type RetailExchangeRateListFlat_INT_LColumn = typeof RetailExchangeRateListFlat_INT_LColumns[number];

export const RetailExchangeRateListFlat_INT_L: { name: string, columns: readonly RetailExchangeRateListFlat_INT_LColumn[] } = { name: 'RetailExchangeRateListFlat_INT_L', columns: RetailExchangeRateListFlat_INT_LColumns } as const;

export const RetailExchangeRateListFlat_MM_LColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CountryCode', 'CurrencyCode', 'Parity', 'BuyingRate', 'AvgRate', 'SellingRate', 'CashBuyingRate', 'CashSellingRate' ] as const;

export type RetailExchangeRateListFlat_MM_LColumn = typeof RetailExchangeRateListFlat_MM_LColumns[number];

export const RetailExchangeRateListFlat_MM_L: { name: string, columns: readonly RetailExchangeRateListFlat_MM_LColumn[] } = { name: 'RetailExchangeRateListFlat_MM_L', columns: RetailExchangeRateListFlat_MM_LColumns } as const;

export const RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'CurrencyCodeNumber', 'ProductID' ] as const;

export type RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlatColumn = typeof RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlatColumns[number];

export const RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlat: { name: string, columns: readonly RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlatColumn[] } = { name: 'RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlat', columns: RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlatColumns } as const;

export const RetailSecuritiesDataForIsinNumberFlatColumns = [ 'KEY_COLUMN', 'Issuer', 'CFICode', 'Ticker', 'StockExchangeSymbol', 'CurrencyCodeNumeric', 'TradeMethod' ] as const;

export type RetailSecuritiesDataForIsinNumberFlatColumn = typeof RetailSecuritiesDataForIsinNumberFlatColumns[number];

export const RetailSecuritiesDataForIsinNumberFlat: { name: string, columns: readonly RetailSecuritiesDataForIsinNumberFlatColumn[] } = { name: 'RetailSecuritiesDataForIsinNumberFlat', columns: RetailSecuritiesDataForIsinNumberFlatColumns } as const;

export const RetailCardPaymentOrderColumns = [ 'KEY_COLUMN', 'PaymentCode', 'PaymentPurpose', 'CurrencyCodeNumeric', 'Amount', 'CreditAccount', 'CreditorModel', 'PBO', 'CreditorName', 'CreditorLocality', 'CalculationMethod', 'Priority' ] as const;

export type RetailCardPaymentOrderColumn = typeof RetailCardPaymentOrderColumns[number];

export const RetailCardPaymentOrder: { name: string, columns: readonly RetailCardPaymentOrderColumn[] } = { name: 'RetailCardPaymentOrder', columns: RetailCardPaymentOrderColumns } as const;

export const RetailLoanPaymentOrderColumns = [ 'KEY_COLUMN', 'PaymentCode', 'CreditAccount', 'CreditorModel', 'PBO', 'CalculationMethod', 'Priority', 'CreditorName', 'PaymentPurpose', 'Amount', 'AdministrativeBan' ] as const;

export type RetailLoanPaymentOrderColumn = typeof RetailLoanPaymentOrderColumns[number];

export const RetailLoanPaymentOrder: { name: string, columns: readonly RetailLoanPaymentOrderColumn[] } = { name: 'RetailLoanPaymentOrder', columns: RetailLoanPaymentOrderColumns } as const;

export const RetailInflowsFlatLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Reference', 'DebtorName', 'DebtorBank', 'Amount', 'CurrencyCode', 'CurrencyCodeNumeric', 'InflowStatus', 'StatusDescription', 'CountryCode', 'CountryName', 'ReadyForAcceptance' ] as const;

export type RetailInflowsFlatLColumn = typeof RetailInflowsFlatLColumns[number];

export const RetailInflowsFlatL: { name: string, columns: readonly RetailInflowsFlatLColumn[] } = { name: 'RetailInflowsFlat-L', columns: RetailInflowsFlatLColumns } as const;

export const RetailInflowsFlatMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Reference', 'DebtorName', 'DebtorBank', 'Amount', 'CurrencyCode', 'CurrencyCodeNumeric', 'InflowStatus', 'StatusDescription', 'CountryCode', 'CountryName', 'ReadyForAcceptance' ] as const;

export type RetailInflowsFlatMColumn = typeof RetailInflowsFlatMColumns[number];

export const RetailInflowsFlatM: { name: string, columns: readonly RetailInflowsFlatMColumn[] } = { name: 'RetailInflowsFlat-M', columns: RetailInflowsFlatMColumns } as const;

export const RetailInflowsFlatSColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'Reference', 'DebtorName', 'DebtorBank', 'Amount', 'CurrencyCode', 'CurrencyCodeNumeric', 'InflowStatus', 'StatusDescription', 'CountryCode', 'CountryName', 'ReadyForAcceptance' ] as const;

export type RetailInflowsFlatSColumn = typeof RetailInflowsFlatSColumns[number];

export const RetailInflowsFlatS: { name: string, columns: readonly RetailInflowsFlatSColumn[] } = { name: 'RetailInflowsFlat-S', columns: RetailInflowsFlatSColumns } as const;

export const RetailInflowDetailFlatColumns = [ 'KEY_COLUMN', 'Reference', 'Amount', 'CurrencyCodeNumeric', 'CurrencyCode', 'ValueDate', 'ProcessedDate', 'DebtorName', 'DebtorBank', 'InflowDetails', 'CommissionAmount', 'StatusDescription', 'CountryCode', 'CountryName', 'ReadyForAcceptance', 'AccountNumber', 'Alias' ] as const;

export type RetailInflowDetailFlatColumn = typeof RetailInflowDetailFlatColumns[number];

export const RetailInflowDetailFlat: { name: string, columns: readonly RetailInflowDetailFlatColumn[] } = { name: 'RetailInflowDetailFlat', columns: RetailInflowDetailFlatColumns } as const;

export const RetailForeignNotificationColumns = [ 'KEY_COLUMN', 'NotificationText', 'NotificationLink', 'eNotificationIcon', 'NotificationHtml', 'CoreID', 'TrakingCode', 'CampaignType', 'Priority', 'ExternalID', 'TemplateFormID', 'Identifier', 'NotificationID', 'IsEbankingNotice', 'NotificationIcon', 'Campaign', 'FormName', 'WorkflowName' ] as const;

export type RetailForeignNotificationColumn = typeof RetailForeignNotificationColumns[number];

export const RetailForeignNotification: { name: string, columns: readonly RetailForeignNotificationColumn[] } = { name: 'RetailForeignNotification', columns: RetailForeignNotificationColumns } as const;

export const RetailNotificationCoreColumns = [ 'KEY_COLUMN', 'NotificationText', 'NotificationLink', 'eNotificationIcon', 'NotificationHtml', 'CoreID', 'TrakingCode', 'CampaignType', 'Priority', 'ExternalID', 'TemplateFormID', 'Identifier', 'NotificationID', 'IsEbankingNotice', 'NotificationIcon', 'Campaign', 'FormName', 'WorkflowName' ] as const;

export type RetailNotificationCoreColumn = typeof RetailNotificationCoreColumns[number];

export const RetailNotificationCore: { name: string, columns: readonly RetailNotificationCoreColumn[] } = { name: 'RetailNotificationCore', columns: RetailNotificationCoreColumns } as const;

export const RetailDomesticNotificationColumns = [ 'KEY_COLUMN', 'NotificationText', 'NotificationLink', 'eNotificationIcon', 'NotificationHtml', 'CoreID', 'TrakingCode', 'CampaignType', 'Priority', 'ExternalID', 'TemplateFormID', 'Identifier', 'NotificationID', 'IsEbankingNotice', 'NotificationIcon', 'Campaign', 'FormName', 'WorkflowName' ] as const;

export type RetailDomesticNotificationColumn = typeof RetailDomesticNotificationColumns[number];

export const RetailDomesticNotification: { name: string, columns: readonly RetailDomesticNotificationColumn[] } = { name: 'RetailDomesticNotification', columns: RetailDomesticNotificationColumns } as const;

export const RetailNoticeClientCoreDataColumns = [ 'KEY_COLUMN', 'FirstName', 'LastName', 'SocialIdentityNumber', 'Address', 'City' ] as const;

export type RetailNoticeClientCoreDataColumn = typeof RetailNoticeClientCoreDataColumns[number];

export const RetailNoticeClientCoreData: { name: string, columns: readonly RetailNoticeClientCoreDataColumn[] } = { name: 'RetailNoticeClientCoreData', columns: RetailNoticeClientCoreDataColumns } as const;

export const RetailExchangeOfficeOverviewFlatMColumns = [ 'KEY_COLUMN', 'TransactionType', 'DebitAccount', 'CreditAccount', 'DebitAmount', 'DebitCurrencyCode', 'CommissionAmount', 'CreditAmount', 'CreditCurrencyCode', 'TransactionID', 'DebitCurrencyCodeNumeric', 'CreditCurrencyCodeNumeric', 'OrderNumberCore', 'ReceiveDate', 'Channel', 'ChannelDescription' ] as const;

export type RetailExchangeOfficeOverviewFlatMColumn = typeof RetailExchangeOfficeOverviewFlatMColumns[number];

export const RetailExchangeOfficeOverviewFlatM: { name: string, columns: readonly RetailExchangeOfficeOverviewFlatMColumn[] } = { name: 'RetailExchangeOfficeOverviewFlat-M', columns: RetailExchangeOfficeOverviewFlatMColumns } as const;

export const RetailExchangeOfficeOverviewFlatSColumns = [ 'KEY_COLUMN', 'TransactionType', 'DebitAccount', 'CreditAccount', 'DebitAmount', 'DebitCurrencyCode', 'CommissionAmount', 'CreditAmount', 'CreditCurrencyCode', 'TransactionID', 'DebitCurrencyCodeNumeric', 'CreditCurrencyCodeNumeric', 'OrderNumberCore', 'ReceiveDate', 'Channel', 'ChannelDescription' ] as const;

export type RetailExchangeOfficeOverviewFlatSColumn = typeof RetailExchangeOfficeOverviewFlatSColumns[number];

export const RetailExchangeOfficeOverviewFlatS: { name: string, columns: readonly RetailExchangeOfficeOverviewFlatSColumn[] } = { name: 'RetailExchangeOfficeOverviewFlat-S', columns: RetailExchangeOfficeOverviewFlatSColumns } as const;

export const RetailSMSNoticeUserAuthorizationColumns = [ 'KEY_COLUMN', 'AuthorizationID', 'FunctionID', 'SetLimit', 'LimitFrom', 'LimitTo', 'LimitCurrencyCodeNumeric', 'FunctionName' ] as const;

export type RetailSMSNoticeUserAuthorizationColumn = typeof RetailSMSNoticeUserAuthorizationColumns[number];

export const RetailSMSNoticeUserAuthorization: { name: string, columns: readonly RetailSMSNoticeUserAuthorizationColumn[] } = { name: 'RetailSMSNoticeUserAuthorization', columns: RetailSMSNoticeUserAuthorizationColumns } as const;

export const RetailAccountStatementTransactionListPreviewFlatSColumns = [ 'KEY_COLUMN', 'StatementNumber', 'StatementYear', 'StatementDate', 'CurrencyCode', 'MinValueDate', 'MaxValueDate', 'StatementID', 'AccountNumber', 'CurrencyCodeNumber' ] as const;

export type RetailAccountStatementTransactionListPreviewFlatSColumn = typeof RetailAccountStatementTransactionListPreviewFlatSColumns[number];

export const RetailAccountStatementTransactionListPreviewFlatS: { name: string, columns: readonly RetailAccountStatementTransactionListPreviewFlatSColumn[] } = { name: 'RetailAccountStatementTransactionListPreviewFlat-S', columns: RetailAccountStatementTransactionListPreviewFlatSColumns } as const;

export const RetailAccountBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'AccountNumber', 'AccountType', 'CurrencyCode', 'Balance', 'AvailableBalance', 'LastChangeAmount', 'LastChangeType', 'LastChangeDate', 'IsEbankingAccount', 'AccountID', 'BlockedAmount', 'ProductCodeCore', 'CurrencyCodeNumber', 'AccountCustomName', 'IsBlocked', 'IsOwner' ] as const;

export type RetailAccountBalancePreviewFlatSColumn = typeof RetailAccountBalancePreviewFlatSColumns[number];

export const RetailAccountBalancePreviewFlatS: { name: string, columns: readonly RetailAccountBalancePreviewFlatSColumn[] } = { name: 'RetailAccountBalancePreviewFlat-S', columns: RetailAccountBalancePreviewFlatSColumns } as const;

export const RetailAccountBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'AccountNumber', 'AccountType', 'CurrencyCode', 'Balance', 'AvailableBalance', 'LastChangeAmount', 'LastChangeType', 'LastChangeDate', 'IsEbankingAccount', 'AccountID', 'BlockedAmount', 'ProductCodeCore', 'CurrencyCodeNumber', 'AccountCustomName', 'IsBlocked', 'IsOwner' ] as const;

export type RetailAccountBalancePreviewFlatMColumn = typeof RetailAccountBalancePreviewFlatMColumns[number];

export const RetailAccountBalancePreviewFlatM: { name: string, columns: readonly RetailAccountBalancePreviewFlatMColumn[] } = { name: 'RetailAccountBalancePreviewFlat-M', columns: RetailAccountBalancePreviewFlatMColumns } as const;

export const RetailExchangeRateListFlat_MM_SColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CountryCode', 'CurrencyCode', 'Parity', 'BuyingRate', 'AvgRate', 'SellingRate', 'CashBuyingRate', 'CashSellingRate' ] as const;

export type RetailExchangeRateListFlat_MM_SColumn = typeof RetailExchangeRateListFlat_MM_SColumns[number];

export const RetailExchangeRateListFlat_MM_S: { name: string, columns: readonly RetailExchangeRateListFlat_MM_SColumn[] } = { name: 'RetailExchangeRateListFlat_MM_S', columns: RetailExchangeRateListFlat_MM_SColumns } as const;

export const RetailExchangeRateListFlat_INT_SColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CountryCode', 'CurrencyCode', 'Parity', 'BuyingRate', 'AvgRate', 'SellingRate', 'CashBuyingRate', 'CashSellingRate' ] as const;

export type RetailExchangeRateListFlat_INT_SColumn = typeof RetailExchangeRateListFlat_INT_SColumns[number];

export const RetailExchangeRateListFlat_INT_S: { name: string, columns: readonly RetailExchangeRateListFlat_INT_SColumn[] } = { name: 'RetailExchangeRateListFlat_INT_S', columns: RetailExchangeRateListFlat_INT_SColumns } as const;

export const RetailExchangeRateListFlat_NB_SColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CountryCode', 'CurrencyCode', 'Parity', 'BuyingRate', 'AvgRate', 'SellingRate', 'CashBuyingRate', 'CashSellingRate' ] as const;

export type RetailExchangeRateListFlat_NB_SColumn = typeof RetailExchangeRateListFlat_NB_SColumns[number];

export const RetailExchangeRateListFlat_NB_S: { name: string, columns: readonly RetailExchangeRateListFlat_NB_SColumn[] } = { name: 'RetailExchangeRateListFlat_NB_S', columns: RetailExchangeRateListFlat_NB_SColumns } as const;

export const RetailUserContactDataColumns = [ 'KEY_COLUMN', 'ContactType', 'ContactData', 'CanBeChanged', 'ContactDataID' ] as const;

export type RetailUserContactDataColumn = typeof RetailUserContactDataColumns[number];

export const RetailUserContactData: { name: string, columns: readonly RetailUserContactDataColumn[] } = { name: 'RetailUserContactData', columns: RetailUserContactDataColumns } as const;

export const RetailCardNoticesFlatColumns = [ 'KEY_COLUMN', 'CardID', 'DebitAmount', 'CurrencyCode', 'NoticeType' ] as const;

export type RetailCardNoticesFlatColumn = typeof RetailCardNoticesFlatColumns[number];

export const RetailCardNoticesFlat: { name: string, columns: readonly RetailCardNoticesFlatColumn[] } = { name: 'RetailCardNoticesFlat', columns: RetailCardNoticesFlatColumns } as const;

export const RetailCreditCardMKSTurnoverPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'ProcessedDate', 'CardCustomName', 'InstallmentCount', 'OriginalCurrencyAmount', 'OriginalCurrencyCode', 'InstallmentCurrencyCode', 'ValueDate', 'CardNumber', 'Description', 'InstallmentOrderNumber', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'CreditAmount', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCreditCardMKSTurnoverPreviewMasterDetailLColumn = typeof RetailCreditCardMKSTurnoverPreviewMasterDetailLColumns[number];

export const RetailCreditCardMKSTurnoverPreviewMasterDetailL: { name: string, columns: readonly RetailCreditCardMKSTurnoverPreviewMasterDetailLColumn[] } = { name: 'RetailCreditCardMKSTurnoverPreviewMasterDetail-L', columns: RetailCreditCardMKSTurnoverPreviewMasterDetailLColumns } as const;

export const RetailCreditCardMKSTurnoverPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'InstallmentOrderNumber', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'CardCustomName', 'InstallmentCount', 'OriginalCurrencyAmount', 'OriginalCurrencyCode', 'InstallmentCurrencyCode', 'CreditAmount', 'TransactionType', 'BeneficiaryAccount' ] as const;

export type RetailCreditCardMKSTurnoverPreviewMasterDetailMColumn = typeof RetailCreditCardMKSTurnoverPreviewMasterDetailMColumns[number];

export const RetailCreditCardMKSTurnoverPreviewMasterDetailM: { name: string, columns: readonly RetailCreditCardMKSTurnoverPreviewMasterDetailMColumn[] } = { name: 'RetailCreditCardMKSTurnoverPreviewMasterDetail-M', columns: RetailCreditCardMKSTurnoverPreviewMasterDetailMColumns } as const;

export const RetailCreditCardMKSTurnoverPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'InstallmentOrderNumber', 'Reference', 'DebitAmount', 'TransactionBeneficiary', 'CardCustomName', 'InstallmentCount', 'OriginalCurrencyAmount', 'OriginalCurrencyCode', 'InstallmentCurrencyCode', 'CreditAmount', 'TransactionType', 'BeneficiaryAccount', 'CurrencyCode' ] as const;

export type RetailCreditCardMKSTurnoverPreviewMasterDetailSColumn = typeof RetailCreditCardMKSTurnoverPreviewMasterDetailSColumns[number];

export const RetailCreditCardMKSTurnoverPreviewMasterDetailS: { name: string, columns: readonly RetailCreditCardMKSTurnoverPreviewMasterDetailSColumn[] } = { name: 'RetailCreditCardMKSTurnoverPreviewMasterDetail-S', columns: RetailCreditCardMKSTurnoverPreviewMasterDetailSColumns } as const;

export const RetailCreditCardSpendingPreviewMasterDetailLColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'InstallmentCount', 'CardCustomName', 'OriginalCurrencyCodeNumber', 'OriginalCurrencyCode', 'OriginalCurrencyAmount' ] as const;

export type RetailCreditCardSpendingPreviewMasterDetailLColumn = typeof RetailCreditCardSpendingPreviewMasterDetailLColumns[number];

export const RetailCreditCardSpendingPreviewMasterDetailL: { name: string, columns: readonly RetailCreditCardSpendingPreviewMasterDetailLColumn[] } = { name: 'RetailCreditCardSpendingPreviewMasterDetail-L', columns: RetailCreditCardSpendingPreviewMasterDetailLColumns } as const;

export const RetailCreditCardSpendingPreviewMasterDetailMColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'OriginalCurrencyAmount', 'CardCustomName', 'OriginalCurrencyCodeNumber', 'OriginalCurrencyCode', 'InstallmentCount' ] as const;

export type RetailCreditCardSpendingPreviewMasterDetailMColumn = typeof RetailCreditCardSpendingPreviewMasterDetailMColumns[number];

export const RetailCreditCardSpendingPreviewMasterDetailM: { name: string, columns: readonly RetailCreditCardSpendingPreviewMasterDetailMColumn[] } = { name: 'RetailCreditCardSpendingPreviewMasterDetail-M', columns: RetailCreditCardSpendingPreviewMasterDetailMColumns } as const;

export const RetailCreditCardSpendingPreviewMasterDetailSColumns = [ 'KEY_COLUMN', 'ValueDate', 'ProcessedDate', 'CardNumber', 'Description', 'Reference', 'DebitAmount', 'OriginalCurrencyAmount', 'CardCustomName', 'OriginalCurrencyCodeNumber', 'OriginalCurrencyCode', 'InstallmentCount' ] as const;

export type RetailCreditCardSpendingPreviewMasterDetailSColumn = typeof RetailCreditCardSpendingPreviewMasterDetailSColumns[number];

export const RetailCreditCardSpendingPreviewMasterDetailS: { name: string, columns: readonly RetailCreditCardSpendingPreviewMasterDetailSColumn[] } = { name: 'RetailCreditCardSpendingPreviewMasterDetail-S', columns: RetailCreditCardSpendingPreviewMasterDetailSColumns } as const;

export const RetailCreditorTemplateListPreviewFlatSColumns = [ 'KEY_COLUMN', 'CreditorTemplateName', 'CreditorTemplateID', 'DebtorName', 'PaymentCode', 'CreditAccount', 'Icon', 'PaymentPurpose', 'CreditorModel', 'PBO', 'Address', 'Locality', 'CreditorName', 'EditButton', 'DeleteButton', 'PayButton' ] as const;

export type RetailCreditorTemplateListPreviewFlatSColumn = typeof RetailCreditorTemplateListPreviewFlatSColumns[number];

export const RetailCreditorTemplateListPreviewFlatS: { name: string, columns: readonly RetailCreditorTemplateListPreviewFlatSColumn[] } = { name: 'RetailCreditorTemplateListPreviewFlat-S', columns: RetailCreditorTemplateListPreviewFlatSColumns } as const;

export const PFMTestColumns = [ 'KEY_COLUMN', 'BudgetID', 'Limit', 'CategoryID' ] as const;

export type PFMTestColumn = typeof PFMTestColumns[number];

export const PFMTest: { name: string, columns: readonly PFMTestColumn[] } = { name: 'PFMTest', columns: PFMTestColumns } as const;

export const ProductsFlatColumns = [ 'KEY_COLUMN', 'ProductNumber', 'ProductCustomName', 'ProductID', 'MaskedCardNumber' ] as const;

export type ProductsFlatColumn = typeof ProductsFlatColumns[number];

export const ProductsFlat: { name: string, columns: readonly ProductsFlatColumn[] } = { name: 'ProductsFlat', columns: ProductsFlatColumns } as const;

export const FinanceTurnoverFlatColumns = [ 'KEY_COLUMN', 'Date', 'Description', 'Subcategory', 'Value', 'ProductType', 'TransactionID', 'CardTransactionID', 'SubcategoryID', 'Splitted', 'SplitButton' ] as const;

export type FinanceTurnoverFlatColumn = typeof FinanceTurnoverFlatColumns[number];

export const FinanceTurnoverFlat: { name: string, columns: readonly FinanceTurnoverFlatColumn[] } = { name: 'FinanceTurnoverFlat', columns: FinanceTurnoverFlatColumns } as const;

export const RulesFlatColumns = [ 'KEY_COLUMN', 'Name', 'RuleID', 'BtnEdit', 'BtnDelete' ] as const;

export type RulesFlatColumn = typeof RulesFlatColumns[number];

export const RulesFlat: { name: string, columns: readonly RulesFlatColumn[] } = { name: 'RulesFlat', columns: RulesFlatColumns } as const;

export const RemindersFlatColumns = [ 'KEY_COLUMN', 'Check', 'ParameterTypeID', 'TempDueDate', 'Value', 'Description', 'Executed', 'TransactionTypeID', 'ReminderID', 'Amount' ] as const;

export type RemindersFlatColumn = typeof RemindersFlatColumns[number];

export const RemindersFlat: { name: string, columns: readonly RemindersFlatColumn[] } = { name: 'RemindersFlat', columns: RemindersFlatColumns } as const;

export const RetailAccountBalanceTransactionDetailFlatMobileColumns = [ 'KEY_COLUMN', 'Balance', 'BalanceWithoutOverdraft', 'AvailableBalance', 'OverdraftAmount', 'OverdraftExpirationDate', 'UndueLiabilities', 'UnusedCheques', 'ReservedFunds', 'LastPaymentAmount', 'LastPaymentDate', 'LastPayoffAmount', 'LastPayoffDate', 'CurrencyCode', 'AccountOwner', 'IBANNumber', 'FPAccountAllowed', 'SwiftCode' ] as const;

export type RetailAccountBalanceTransactionDetailFlatMobileColumn = typeof RetailAccountBalanceTransactionDetailFlatMobileColumns[number];

export const RetailAccountBalanceTransactionDetailFlatMobile: { name: string, columns: readonly RetailAccountBalanceTransactionDetailFlatMobileColumn[] } = { name: 'RetailAccountBalanceTransactionDetailFlatMobile', columns: RetailAccountBalanceTransactionDetailFlatMobileColumns } as const;

export const SentOrdersDomesticFlatColumns = [ 'KEY_COLUMN', 'OrderID', 'OrderName', 'OrderNumberCore', 'ErrorCode', 'ValueDate', 'SpecificErrorCode', 'DebitAccount/CreditAccount', 'CoreMessage', 'Amount', 'DebitCurrencyCode', 'CreditorName', 'ErrorDescription', 'ExchangeRate', 'DebtorName' ] as const;

export type SentOrdersDomesticFlatColumn = typeof SentOrdersDomesticFlatColumns[number];

export const SentOrdersDomesticFlat: { name: string, columns: readonly SentOrdersDomesticFlatColumn[] } = { name: 'SentOrdersDomesticFlat', columns: SentOrdersDomesticFlatColumns } as const;

export const RetailInvestmentTransactionPreviewListFlatMColumns = [ 'KEY_COLUMN', 'btnPrint', 'datumTransakcije', 'serijskiBrojDokumenta', 'vrstaTransakcije', 'netoIznos', 'cijenaUdjela', 'brojUdjela', 'iznosNaknade', 'internalId', 'brutoIznos' ] as const;

export type RetailInvestmentTransactionPreviewListFlatMColumn = typeof RetailInvestmentTransactionPreviewListFlatMColumns[number];

export const RetailInvestmentTransactionPreviewListFlatM: { name: string, columns: readonly RetailInvestmentTransactionPreviewListFlatMColumn[] } = { name: 'RetailInvestmentTransactionPreviewListFlat-M', columns: RetailInvestmentTransactionPreviewListFlatMColumns } as const;

export const RetailInvestmentShareValueListFlatColumns = [ 'KEY_COLUMN', 'ValueDate', 'UnitValue', 'CurrencyCode', 'CurrencyCodeForeign', 'UnitValueForeign' ] as const;

export type RetailInvestmentShareValueListFlatColumn = typeof RetailInvestmentShareValueListFlatColumns[number];

export const RetailInvestmentShareValueListFlat: { name: string, columns: readonly RetailInvestmentShareValueListFlatColumn[] } = { name: 'RetailInvestmentShareValueListFlat', columns: RetailInvestmentShareValueListFlatColumns } as const;

export const RetailInvestmentTransactionPreviewListFlatLColumns = [ 'KEY_COLUMN', 'btnPrint', 'datumTransakcije', 'serijskiBrojDokumenta', 'vrstaTransakcije', 'vrijednostUdjelaVal', 'netoIznos', 'cijenaUdjela', 'brojUdjela', 'iznosNaknade', 'internalId', 'brutoIznos', 'sifraValute', 'cijenaUdjelaDom', 'iznosTecajaTransakcije' ] as const;

export type RetailInvestmentTransactionPreviewListFlatLColumn = typeof RetailInvestmentTransactionPreviewListFlatLColumns[number];

export const RetailInvestmentTransactionPreviewListFlatL: { name: string, columns: readonly RetailInvestmentTransactionPreviewListFlatLColumn[] } = { name: 'RetailInvestmentTransactionPreviewListFlat-L', columns: RetailInvestmentTransactionPreviewListFlatLColumns } as const;

export const RetailInvestmentTransactionPreviewListFlatSColumns = [ 'KEY_COLUMN', 'btnPrint', 'datumTransakcije', 'serijskiBrojDokumenta', 'vrstaTransakcije', 'netoIznos', 'cijenaUdjela', 'brojUdjela', 'iznosNaknade', 'internalId', 'brutoIznos' ] as const;

export type RetailInvestmentTransactionPreviewListFlatSColumn = typeof RetailInvestmentTransactionPreviewListFlatSColumns[number];

export const RetailInvestmentTransactionPreviewListFlatS: { name: string, columns: readonly RetailInvestmentTransactionPreviewListFlatSColumn[] } = { name: 'RetailInvestmentTransactionPreviewListFlat-S', columns: RetailInvestmentTransactionPreviewListFlatSColumns } as const;

export const GetTokenListColumns = [ 'KEY_COLUMN', 'SerialNumber', 'BindStatus', 'DigipassType', 'AssignedDate', 'ExpirationTime', 'Reactivation', 'Delete', 'TheLastUse' ] as const;

export type GetTokenListColumn = typeof GetTokenListColumns[number];

export const GetTokenList: { name: string, columns: readonly GetTokenListColumn[] } = { name: 'GetTokenList', columns: GetTokenListColumns } as const;

export const RetailFXExchangeRatesForPeriodFlatColumns = [ 'KEY_COLUMN', 'CurrencyCodeNumeric', 'CurrencyCode', 'ExchangeRateDate', 'MiddleExchangeRate', 'OfficialBuyExchangeRate', 'OfficialSellExchangeRate', 'CustomerBuyExchangeRate', 'CustomerSellExchangeRate' ] as const;

export type RetailFXExchangeRatesForPeriodFlatColumn = typeof RetailFXExchangeRatesForPeriodFlatColumns[number];

export const RetailFXExchangeRatesForPeriodFlat: { name: string, columns: readonly RetailFXExchangeRatesForPeriodFlatColumn[] } = { name: 'RetailFXExchangeRatesForPeriodFlat', columns: RetailFXExchangeRatesForPeriodFlatColumns } as const;

export const RetailExchangeOfficeDetailsFlatColumns = [ 'KEY_COLUMN', 'JobType', 'ExchangeNotebookNumber', 'DealerName', 'Purpose', 'DebtorIdentityNumber', 'Operator', 'PayDeskNumber', 'DebtorName', 'DebtorPersonalID', 'CreditCurrencyCode', 'DebitCurrencyCode', 'CreditAmount', 'DebitAmount', 'ExchangeRate', 'CommissionAmount', 'CommissionPercentage', 'DomesticAmountTotal', 'DealerAddress', 'BankLocation', 'DateTime', 'OrderNumberCore' ] as const;

export type RetailExchangeOfficeDetailsFlatColumn = typeof RetailExchangeOfficeDetailsFlatColumns[number];

export const RetailExchangeOfficeDetailsFlat: { name: string, columns: readonly RetailExchangeOfficeDetailsFlatColumn[] } = { name: 'RetailExchangeOfficeDetailsFlat', columns: RetailExchangeOfficeDetailsFlatColumns } as const;

export const RetailFXExchangeOfficeDetailsFlatColumns = [ 'KEY_COLUMN', 'DealerName', 'DealerAddress', 'PayDeskNumber', 'JobType', 'JobDescription', 'TransactionID', 'DateTime', 'BankLocation', 'DebtorIdentityNumber', 'DebtorName', 'DebtorPersonalID', 'PaymentCode', 'DebitAccount', 'CreditorIdentityNumber', 'CreditorName', 'CreditAccount', 'DebitCurrencyCodeNumeric', 'DebitCurrencyCode', 'DebitAmount', 'CreditCurrencyCodeNumeric', 'CreditCurrencyCode', 'CreditAmount', 'CommissionCurrencyCodeNumeric', 'CommissionCurrencyCode', 'CommissionAmount', 'CommissionPersentage', 'OrderNumberCore', 'ExchangeRate', 'Operator', 'DomesticAmount', 'OrderNumberCoreBuy', 'ExchangeNotebookNumber', 'DateTimeSell', 'CoreMessage', 'ErrorCode', 'SpecificErrorCode' ] as const;

export type RetailFXExchangeOfficeDetailsFlatColumn = typeof RetailFXExchangeOfficeDetailsFlatColumns[number];

export const RetailFXExchangeOfficeDetailsFlat: { name: string, columns: readonly RetailFXExchangeOfficeDetailsFlatColumn[] } = { name: 'RetailFXExchangeOfficeDetailsFlat', columns: RetailFXExchangeOfficeDetailsFlatColumns } as const;

export const RetailPensionTransactionPreviewListFlatSColumns = [ 'KEY_COLUMN', 'rbrTransakcije', 'datumTransakcije', 'vrstaTransakcije', 'iznosTransakcije', 'netoIznos', 'brojUdjela', 'cijenaUdjela', 'nazivOsobeUplatitelj', 'serijskiBrojDokumenta', 'iznosNaknade', 'brutoIznos', 'internalId' ] as const;

export type RetailPensionTransactionPreviewListFlatSColumn = typeof RetailPensionTransactionPreviewListFlatSColumns[number];

export const RetailPensionTransactionPreviewListFlatS: { name: string, columns: readonly RetailPensionTransactionPreviewListFlatSColumn[] } = { name: 'RetailPensionTransactionPreviewListFlat-S', columns: RetailPensionTransactionPreviewListFlatSColumns } as const;

export const RetailPensionTransactionPreviewListFlatMColumns = [ 'KEY_COLUMN', 'rbrTransakcije', 'datumTransakcije', 'vrstaTransakcije', 'iznosTransakcije', 'netoIznos', 'brojUdjela', 'cijenaUdjela', 'nazivOsobeUplatitelj', 'serijskiBrojDokumenta', 'iznosNaknade', 'brutoIznos', 'internalId' ] as const;

export type RetailPensionTransactionPreviewListFlatMColumn = typeof RetailPensionTransactionPreviewListFlatMColumns[number];

export const RetailPensionTransactionPreviewListFlatM: { name: string, columns: readonly RetailPensionTransactionPreviewListFlatMColumn[] } = { name: 'RetailPensionTransactionPreviewListFlat-M', columns: RetailPensionTransactionPreviewListFlatMColumns } as const;

export const RetailPensionTransactionPreviewListFlatLColumns = [ 'KEY_COLUMN', 'rbrTransakcije', 'datumTransakcije', 'vrstaTransakcije', 'iznosTransakcije', 'netoIznos', 'brojUdjela', 'cijenaUdjela', 'nazivOsobeUplatitelj', 'serijskiBrojDokumenta', 'brutoIznos', 'iznosNaknade', 'internalId', 'sifraValute' ] as const;

export type RetailPensionTransactionPreviewListFlatLColumn = typeof RetailPensionTransactionPreviewListFlatLColumns[number];

export const RetailPensionTransactionPreviewListFlatL: { name: string, columns: readonly RetailPensionTransactionPreviewListFlatLColumn[] } = { name: 'RetailPensionTransactionPreviewListFlat-L', columns: RetailPensionTransactionPreviewListFlatLColumns } as const;

export const RetailAuthorizedAccountsForExchangeOfficeFlatMobileColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'AccountID', 'AccountNumber', 'CurrencyCodeNumeric', 'ProductCodeCore' ] as const;

export type RetailAuthorizedAccountsForExchangeOfficeFlatMobileColumn = typeof RetailAuthorizedAccountsForExchangeOfficeFlatMobileColumns[number];

export const RetailAuthorizedAccountsForExchangeOfficeFlatMobile: { name: string, columns: readonly RetailAuthorizedAccountsForExchangeOfficeFlatMobileColumn[] } = { name: 'RetailAuthorizedAccountsForExchangeOfficeFlatMobile', columns: RetailAuthorizedAccountsForExchangeOfficeFlatMobileColumns } as const;

export const RetailAccountBalanceForeignDetailMobileColumns = [ 'KEY_COLUMN', 'Balance', 'AvailableBalance', 'OverdraftAmount', 'OverdraftExpirationDate', 'UndueLiabilities', 'ReservedFunds', 'UnusedCheques', 'LastPaymentAmount', 'LastPaymentDate', 'LastPayoffAmount', 'LastPayoffDate', 'CurrencyCode' ] as const;

export type RetailAccountBalanceForeignDetailMobileColumn = typeof RetailAccountBalanceForeignDetailMobileColumns[number];

export const RetailAccountBalanceForeignDetailMobile: { name: string, columns: readonly RetailAccountBalanceForeignDetailMobileColumn[] } = { name: 'RetailAccountBalanceForeignDetailMobile', columns: RetailAccountBalanceForeignDetailMobileColumns } as const;

export const RetailAccountBalanceTransactionTurnoverPreviewTestColumns = [ 'KEY_COLUMN', 'Description', 'Transaction', 'ValueDate', 'ProcessedDate', 'ChequeCardNumber', 'Reference', 'DebitAmount', 'CreditAmount', 'AmountTotal', 'CurrencyCode' ] as const;

export type RetailAccountBalanceTransactionTurnoverPreviewTestColumn = typeof RetailAccountBalanceTransactionTurnoverPreviewTestColumns[number];

export const RetailAccountBalanceTransactionTurnoverPreviewTest: { name: string, columns: readonly RetailAccountBalanceTransactionTurnoverPreviewTestColumn[] } = { name: 'RetailAccountBalanceTransactionTurnoverPreviewTest', columns: RetailAccountBalanceTransactionTurnoverPreviewTestColumns } as const;

export const RetailAccountBalanceTransactionShortDetailFlatMobileColumns = [ 'KEY_COLUMN', 'Balance', 'AvailableBalance', 'UndueLiabilities', 'LastPaymentAmount', 'LastPaymentDate', 'LastPayoffAmount', 'LastPayoffDate', 'ReservedFunds', 'CurrencyCode', 'AccountOwner' ] as const;

export type RetailAccountBalanceTransactionShortDetailFlatMobileColumn = typeof RetailAccountBalanceTransactionShortDetailFlatMobileColumns[number];

export const RetailAccountBalanceTransactionShortDetailFlatMobile: { name: string, columns: readonly RetailAccountBalanceTransactionShortDetailFlatMobileColumn[] } = { name: 'RetailAccountBalanceTransactionShortDetailFlatMobile', columns: RetailAccountBalanceTransactionShortDetailFlatMobileColumns } as const;

export const RetailAccountBalanceTimeDepositForeignDetailFlatMobileColumns = [ 'KEY_COLUMN', 'Balance', 'CurrencyCode', 'DepositTime', 'DepositExpirationDate', 'DepositTimeIndicator', 'AccountOwner' ] as const;

export type RetailAccountBalanceTimeDepositForeignDetailFlatMobileColumn = typeof RetailAccountBalanceTimeDepositForeignDetailFlatMobileColumns[number];

export const RetailAccountBalanceTimeDepositForeignDetailFlatMobile: { name: string, columns: readonly RetailAccountBalanceTimeDepositForeignDetailFlatMobileColumn[] } = { name: 'RetailAccountBalanceTimeDepositForeignDetailFlatMobile', columns: RetailAccountBalanceTimeDepositForeignDetailFlatMobileColumns } as const;

export const RetailAccountBalanceTransactionPreviewFlatMobileColumns = [ 'KEY_COLUMN', 'CurrencyCode', 'Balance', 'AvailableBalance', 'ReservedFunds', 'LastPayoffAmount', 'LastPaymentAmount', 'AccountNumber', 'CurrencyCodeNumber', 'LastPaymentDate', 'LastPayoffDate', 'AccountOwner' ] as const;

export type RetailAccountBalanceTransactionPreviewFlatMobileColumn = typeof RetailAccountBalanceTransactionPreviewFlatMobileColumns[number];

export const RetailAccountBalanceTransactionPreviewFlatMobile: { name: string, columns: readonly RetailAccountBalanceTransactionPreviewFlatMobileColumn[] } = { name: 'RetailAccountBalanceTransactionPreviewFlatMobile', columns: RetailAccountBalanceTransactionPreviewFlatMobileColumns } as const;

export const TestColumns = [ 'KEY_COLUMN', 'c1' ] as const;

export type TestColumn = typeof TestColumns[number];

export const Test: { name: string, columns: readonly TestColumn[] } = { name: 'Test', columns: TestColumns } as const;

export const RetailLimitListFlatColumns = [ 'KEY_COLUMN', 'AuthorizationName', 'AuthorizationName', 'AmountTotal', 'AmountSingleMax', 'CurrencyCode', 'AmountTotalMax', 'AmountSingleMax', 'ForAChange' ] as const;

export type RetailLimitListFlatColumn = typeof RetailLimitListFlatColumns[number];

export const RetailLimitListFlat: { name: string, columns: readonly RetailLimitListFlatColumn[] } = { name: 'RetailLimitListFlat', columns: RetailLimitListFlatColumns } as const;

export const GetAllLimitsFlatColumns = [ 'KEY_COLUMN', 'AuthorizationCode', 'AuthorizationName', 'AmountTotal', 'AmountSingle', 'CurrencyCode', 'AmountTotalMax', 'AmountSingleMax', 'ForAChange', 'AmountNet', 'CurrencyAmount', 'NumberDays', 'Channel' ] as const;

export type GetAllLimitsFlatColumn = typeof GetAllLimitsFlatColumns[number];

export const GetAllLimitsFlat: { name: string, columns: readonly GetAllLimitsFlatColumn[] } = { name: 'GetAllLimitsFlat', columns: GetAllLimitsFlatColumns } as const;

export const P2PStatusList_FlatColumns = [ 'KEY_COLUMN', 'STATUS_ID', 'STATUS' ] as const;

export type P2PStatusList_FlatColumn = typeof P2PStatusList_FlatColumns[number];

export const P2PStatusList_Flat: { name: string, columns: readonly P2PStatusList_FlatColumn[] } = { name: 'P2PStatusList_Flat', columns: P2PStatusList_FlatColumns } as const;

export const P2PAmountList_FlatColumns = [ 'KEY_COLUMN', 'AMOUNT', 'PREDEFINED', 'CURRENCY' ] as const;

export type P2PAmountList_FlatColumn = typeof P2PAmountList_FlatColumns[number];

export const P2PAmountList_Flat: { name: string, columns: readonly P2PAmountList_FlatColumn[] } = { name: 'P2PAmountList_Flat', columns: P2PAmountList_FlatColumns } as const;

export const P2PSentOrderDomesticFlatColumns = [ 'KEY_COLUMN', 'aoP2POrderID', 'DebtorName', 'DebtorIdentityNumber', 'DebitAccountID', 'DebitAccount', 'DebitCurrencyCode', 'Amount', 'OrderNumberCore', 'ProcessedDateCore', 'UserMessage', 'CreationDate', 'AuthenticationType', 'TransactionID', 'Priority', 'Status', 'State', 'CommissionCurrencyCode', 'CommissionAmount', 'ExpiryDate', 'CodeValidityValue', 'CodeValidityPeriod', 'OrderContent', 'OrderType', 'OrderPackageID', 'ErrorCode', 'SpecificErrorCode', 'SubsystemID', 'IndividualID', 'ReceiveDate', 'fwInChannelID', 'SessionID', 'TrusteerResponse', 'ErrorMessage', 'QRCode', 'Barcode', 'RedemptionCode', 'CoreMessage' ] as const;

export type P2PSentOrderDomesticFlatColumn = typeof P2PSentOrderDomesticFlatColumns[number];

export const P2PSentOrderDomesticFlat: { name: string, columns: readonly P2PSentOrderDomesticFlatColumn[] } = { name: 'P2PSentOrderDomesticFlat', columns: P2PSentOrderDomesticFlatColumns } as const;

export const P2PPaymentHistoryFlatColumns = [ 'KEY_COLUMN', 'CREATION_DATE', 'CORE_TRANSACTION_ID', 'STATUS', 'AMOUNT', 'SOURCE_ACCOUNT', 'MESSAGE', 'EXPIRY_DATE', 'REDEMPTION_DATE', 'aoP2PPaymentHistoryID', 'CANCELLABLE', 'CURRENCY', 'NAME', 'SURNAME' ] as const;

export type P2PPaymentHistoryFlatColumn = typeof P2PPaymentHistoryFlatColumns[number];

export const P2PPaymentHistoryFlat: { name: string, columns: readonly P2PPaymentHistoryFlatColumn[] } = { name: 'P2PPaymentHistoryFlat', columns: P2PPaymentHistoryFlatColumns } as const;

export const RetailAuthorizedAccountsForOrderTypeFlatColumns = [ 'KEY_COLUMN', 'AccountCustomName', 'AccountNumber', 'CurrencyCodeNumber' ] as const;

export type RetailAuthorizedAccountsForOrderTypeFlatColumn = typeof RetailAuthorizedAccountsForOrderTypeFlatColumns[number];

export const RetailAuthorizedAccountsForOrderTypeFlat: { name: string, columns: readonly RetailAuthorizedAccountsForOrderTypeFlatColumn[] } = { name: 'RetailAuthorizedAccountsForOrderTypeFlat', columns: RetailAuthorizedAccountsForOrderTypeFlatColumns } as const;

export const RetailPrimaryCardBalancePreviewFlatLColumns = [ 'KEY_COLUMN', 'AccountType', 'CurrencyCode', 'Balance', 'AvailableBalance', 'Alias', 'LastChangeDate', 'AccountNumber', 'ContractType', 'ProductCodeCore', 'CurrencyCodeNumber', 'ClientName', 'StatusLong', 'StatusShort', 'StatusShort', 'CardAlias', 'AccountAlias', 'TypeDescription', 'BasicSupplementary' ] as const;

export type RetailPrimaryCardBalancePreviewFlatLColumn = typeof RetailPrimaryCardBalancePreviewFlatLColumns[number];

export const RetailPrimaryCardBalancePreviewFlatL: { name: string, columns: readonly RetailPrimaryCardBalancePreviewFlatLColumn[] } = { name: 'RetailPrimaryCardBalancePreviewFlat-L', columns: RetailPrimaryCardBalancePreviewFlatLColumns } as const;

export const RetailPrimaryCardBalancePreviewFlatMColumns = [ 'KEY_COLUMN', 'AccountType', 'CurrencyCode', 'Balance', 'AvailableBalance', 'LastChangeDate', 'AccountNumber', 'ContractType', 'ProductCodeCore', 'CurrencyCodeNumber' ] as const;

export type RetailPrimaryCardBalancePreviewFlatMColumn = typeof RetailPrimaryCardBalancePreviewFlatMColumns[number];

export const RetailPrimaryCardBalancePreviewFlatM: { name: string, columns: readonly RetailPrimaryCardBalancePreviewFlatMColumn[] } = { name: 'RetailPrimaryCardBalancePreviewFlat-M', columns: RetailPrimaryCardBalancePreviewFlatMColumns } as const;

export const RetailPrimaryCardBalancePreviewFlatSColumns = [ 'KEY_COLUMN', 'AccountType', 'CurrencyCode', 'Balance', 'AvailableBalance', 'LastChangeDate', 'AccountNumber', 'ContractType', 'ProductCodeCore', 'CurrencyCodeNumber' ] as const;

export type RetailPrimaryCardBalancePreviewFlatSColumn = typeof RetailPrimaryCardBalancePreviewFlatSColumns[number];

export const RetailPrimaryCardBalancePreviewFlatS: { name: string, columns: readonly RetailPrimaryCardBalancePreviewFlatSColumn[] } = { name: 'RetailPrimaryCardBalancePreviewFlat-S', columns: RetailPrimaryCardBalancePreviewFlatSColumns } as const;

export const RetailUserDashboardPreviewColumns = [ 'KEY_COLUMN', 'IndividualID', 'ProductType', 'Alias', 'ReservedAmount', 'ProductCoreID', 'AvailableBalance', 'UsedAmount', 'Authorised', 'UseDashboardGraph', 'CurrencyCode', 'CurrencyCodeAlpha', 'ProductCodeCore', 'IsEbankingAccount', 'ProtectedCardID', 'IsEbankingCard', 'BalanceWithoutOverdraft', 'BookkeepingBalance', 'OverdraftAmount', 'PlasticStatus', 'CardStatus' ] as const;

export type RetailUserDashboardPreviewColumn = typeof RetailUserDashboardPreviewColumns[number];

export const RetailUserDashboardPreview: { name: string, columns: readonly RetailUserDashboardPreviewColumn[] } = { name: 'RetailUserDashboardPreview', columns: RetailUserDashboardPreviewColumns } as const;

export const RetailTransactionDetailsIncomeColumns = [ 'KEY_COLUMN', 'PaymentBasis', 'DebitAccount', 'DebtorName', 'Amount', 'CurrencyCodeNumeric', 'Description', 'ValueDate', 'Alias', 'OrderNumber', 'PaymentCode', 'TransactionID', 'CreditAccount', 'CreditorName', 'CreditCurrencyCodeNumeric', 'CreditCurrencyCode', 'CurrencyCode', 'FeeOrderNumber', 'FeeAmount', 'FeeAccountNumber', 'FeeCurrencyCode', 'FeeValueDate', 'FeeProcessedDate' ] as const;

export type RetailTransactionDetailsIncomeColumn = typeof RetailTransactionDetailsIncomeColumns[number];

export const RetailTransactionDetailsIncome: { name: string, columns: readonly RetailTransactionDetailsIncomeColumn[] } = { name: 'RetailTransactionDetailsIncome', columns: RetailTransactionDetailsIncomeColumns } as const;

export const RetailTransactionDetailsExchangeColumns = [ 'KEY_COLUMN', 'DebitAccount', 'CreditAccount', 'DebitCurrencyCodeNumeric', 'DebitAmount', 'CreditorAlias', 'CreditCurrencyCodeNumeric', 'Date', 'ExchangeRate', 'DebitCurrencyCode', 'Channel', 'CreditAmount', 'CommissionCurrencyCode', 'TransactionID', 'BankLocality', 'DebtorAlias', 'CommissionPercentage', 'CommissionCurrencyCodeNumeric', 'ExchangeNumber', 'ValueDate', 'ExchangeOfficeLocality', 'PayDeskNumber', 'Operator', 'ExchangeName', 'Basics', 'OrderNumber', 'JobDescription', 'CreditCurrencyCode', 'UserID', 'AmountTotal', 'CommissionAmount' ] as const;

export type RetailTransactionDetailsExchangeColumn = typeof RetailTransactionDetailsExchangeColumns[number];

export const RetailTransactionDetailsExchange: { name: string, columns: readonly RetailTransactionDetailsExchangeColumn[] } = { name: 'RetailTransactionDetailsExchange', columns: RetailTransactionDetailsExchangeColumns } as const;

export const RetailTransactionDetailsP2PColumns = [ 'KEY_COLUMN', 'Date', 'CurrencyCodeNumeric', 'Amount', 'PaymentState', 'DebitAccount', 'Alias', 'Description', 'CurrencyCode', 'ValueDate', 'OrderNumber' ] as const;

export type RetailTransactionDetailsP2PColumn = typeof RetailTransactionDetailsP2PColumns[number];

export const RetailTransactionDetailsP2P: { name: string, columns: readonly RetailTransactionDetailsP2PColumn[] } = { name: 'RetailTransactionDetailsP2P', columns: RetailTransactionDetailsP2PColumns } as const;

export const RetailTransactionDetailsATMColumns = [ 'KEY_COLUMN', 'CreditAccount', 'DebtorDetails', 'Reference', 'DomesticAmount', 'CurrencyCodeNumeric_tx', 'CreditorAlias', 'Date', 'CardAlias', 'CardNumber', 'Amount_tx', 'Amount', 'CurrencyCode_tx', 'CurrencyCode', 'CurrencyCodeNumeric', 'c_Reference', 'CalculationDate' ] as const;

export type RetailTransactionDetailsATMColumn = typeof RetailTransactionDetailsATMColumns[number];

export const RetailTransactionDetailsATM: { name: string, columns: readonly RetailTransactionDetailsATMColumn[] } = { name: 'RetailTransactionDetailsATM', columns: RetailTransactionDetailsATMColumns } as const;

export const RetailTransactionDetailsInterestColumns = [ 'KEY_COLUMN', 'Amount', 'CurrencyCodeNumeric', 'ValueDate', 'Description', 'DebitAccount', 'CreditorAlias', 'OrderNumber', 'CurrencyCode', 'Amount_tx', 'CurrencyCode_tx', 'ProcessedDate' ] as const;

export type RetailTransactionDetailsInterestColumn = typeof RetailTransactionDetailsInterestColumns[number];

export const RetailTransactionDetailsInterest: { name: string, columns: readonly RetailTransactionDetailsInterestColumn[] } = { name: 'RetailTransactionDetailsInterest', columns: RetailTransactionDetailsInterestColumns } as const;

export const RetailTransactionDetailsStandardOrderColumns = [ 'KEY_COLUMN', 'CreditorName', 'CreditAccount', 'Amount', 'CommissionAmount', 'CurrencyCodeNumeric', 'CommissionCurrencyCodeNumeric', 'PaymentCode', 'PaymentPurpose', 'ValueDate', 'OrderNumber', 'DebtorName', 'DebtorAccount', 'CurrencyCode', 'Alias', 'CommissionCurrencyCode', 'BulkId', 'PersonalNumber', 'AuthorizationType', 'Status', 'CreditorAddressCountry', 'CreditorBankSwiftCode', 'SpecialMark', 'Charge', 'SpecPurposeCode', 'SpecPaymentDescription', 'SpecCurrency', 'SpecAmount', 'SpecInvoiceNumber', 'SpecInvoiceYear', 'ComissionAccount', 'SwiftMessage', 'ConfirmationDates', 'ProcessedDate', 'Channel', 'ReceiveDate', 'CreditorTypeFRN', 'ProcessedDateCoreFRN', 'CreditorAddressFRN', 'CreditorBankAddressFRN', 'CreditorBankCountryFRN', 'CreditorBankNameFRN' ] as const;

export type RetailTransactionDetailsStandardOrderColumn = typeof RetailTransactionDetailsStandardOrderColumns[number];

export const RetailTransactionDetailsStandardOrder: { name: string, columns: readonly RetailTransactionDetailsStandardOrderColumn[] } = { name: 'RetailTransactionDetailsStandardOrder', columns: RetailTransactionDetailsStandardOrderColumns } as const;

export const RetailTransactionDetailsInternalColumns = [ 'KEY_COLUMN', 'CreditAccount', 'CreditorName', 'CurrencyCodeNumeric', 'CommissionAmount', 'CommissionCurrencyCodeNumeric', 'PaymentCode', 'CreditorModel', 'Reference', 'ValueDate', 'OrderNumber', 'DebtorName', 'Channel', 'DebtorAlias', 'CreditorAlias', 'PaymentState', 'Amount', 'DebitAccount', 'CommissionCurrencyCode', 'CurrencyCode', 'PaymentPurpose', 'PaymentStatusName', 'PaymentPurpose', 'ReceiveDate' ] as const;

export type RetailTransactionDetailsInternalColumn = typeof RetailTransactionDetailsInternalColumns[number];

export const RetailTransactionDetailsInternal: { name: string, columns: readonly RetailTransactionDetailsInternalColumn[] } = { name: 'RetailTransactionDetailsInternal', columns: RetailTransactionDetailsInternalColumns } as const;

export const RetailTransactionDetailsPmtDomColumns = [ 'KEY_COLUMN', 'CreditorName', 'CreditAccount', 'Amount', 'CurrencyCodeNumeric', 'CommissionAmount', 'CommissionCurrencyCodeNumeric', 'PaymentCode', 'PaymentPurpose', 'Model', 'Reference', 'ValueDate', 'OrderNumber', 'DebtorName', 'DebitAccount', 'Channel', 'Alias', 'PaymentState', 'CurrencyCode', 'CommissionCurrencyCode', 'ReceiverReference', 'End2endID', 'PaymentStatusName', 'ReceiveDate' ] as const;

export type RetailTransactionDetailsPmtDomColumn = typeof RetailTransactionDetailsPmtDomColumns[number];

export const RetailTransactionDetailsPmtDom: { name: string, columns: readonly RetailTransactionDetailsPmtDomColumn[] } = { name: 'RetailTransactionDetailsPmtDom', columns: RetailTransactionDetailsPmtDomColumns } as const;

export const RetailInflowPaymentCodeColumns = [ 'KEY_COLUMN', 'PaymentBasis', 'BasisText' ] as const;

export type RetailInflowPaymentCodeColumn = typeof RetailInflowPaymentCodeColumns[number];

export const RetailInflowPaymentCode: { name: string, columns: readonly RetailInflowPaymentCodeColumn[] } = { name: 'RetailInflowPaymentCode', columns: RetailInflowPaymentCodeColumns } as const;

export const RetailUserOrderTemplatesColumns = [ 'KEY_COLUMN', 'Icon', 'CustomName', 'EditButton', 'DeleteButton', 'PayButton', 'Content', 'TemplateName', 'UserOrderTemplateID', 'UserOrderTemplateDetailID', 'TemplateTypeCode', 'OrderTypeCode' ] as const;

export type RetailUserOrderTemplatesColumn = typeof RetailUserOrderTemplatesColumns[number];

export const RetailUserOrderTemplates: { name: string, columns: readonly RetailUserOrderTemplatesColumn[] } = { name: 'RetailUserOrderTemplates', columns: RetailUserOrderTemplatesColumns } as const;

export const RetailP2POrderPreviewListFlatColumns = [ 'KEY_COLUMN', 'CREATION_DATE', 'MESSAGE', 'CANCELLABLE', 'STATUS', 'CURRENCY', 'SourceAccount', 'EXPIRY_DATE', 'REDEMPTION_DATE', 'AMOUNT', 'CORE_TRANSACTION_ID', 'NAME', 'SURNAME', 'BtnWithdraw', 'AccountID' ] as const;

export type RetailP2POrderPreviewListFlatColumn = typeof RetailP2POrderPreviewListFlatColumns[number];

export const RetailP2POrderPreviewListFlat: { name: string, columns: readonly RetailP2POrderPreviewListFlatColumn[] } = { name: 'RetailP2POrderPreviewListFlat', columns: RetailP2POrderPreviewListFlatColumns } as const;

export const RetailNotificationPermissionsColumns = [ 'KEY_COLUMN', 'ActivateGroup', 'Amount', 'ChannelCode', 'ChannelID', 'ChannelName', 'ContactType', 'ControlAmount', 'CurrencyCode', 'CurrencyCodeNumeric', 'GroupID', 'GroupName' ] as const;

export type RetailNotificationPermissionsColumn = typeof RetailNotificationPermissionsColumns[number];

export const RetailNotificationPermissions: { name: string, columns: readonly RetailNotificationPermissionsColumn[] } = { name: 'RetailNotificationPermissions', columns: RetailNotificationPermissionsColumns } as const;

export const RetailActiveAddressFlatColumns = [ 'KEY_COLUMN', 'aoActiveAddressPreviewID', 'Location', 'PostalCode', 'Street', 'StreetNumber', 'Entrance', 'Floor', 'Apartment', 'AddressTypeID', 'AddressType', 'CanBeChanged' ] as const;

export type RetailActiveAddressFlatColumn = typeof RetailActiveAddressFlatColumns[number];

export const RetailActiveAddressFlat: { name: string, columns: readonly RetailActiveAddressFlatColumn[] } = { name: 'RetailActiveAddressFlat', columns: RetailActiveAddressFlatColumns } as const;

export const RetailUtilityBillsFlatColumns = [ 'KEY_COLUMN', 'LegalEntityID', 'CompanyIdentityNumber', 'Name', 'LocalityID', 'LocalityName', 'Street', 'StreetNumber', 'IsResident', 'UserTypeID', 'UtilityBillContractContent' ] as const;

export type RetailUtilityBillsFlatColumn = typeof RetailUtilityBillsFlatColumns[number];

export const RetailUtilityBillsFlat: { name: string, columns: readonly RetailUtilityBillsFlatColumn[] } = { name: 'RetailUtilityBillsFlat', columns: RetailUtilityBillsFlatColumns } as const;

export const RetailUserOrderContractsFlatColumns = [ 'KEY_COLUMN', 'OrderTypeID', 'OrderName', 'OrderNumber', 'DebtorIdentityNumber', 'DebtorName', 'CustomName', 'DebitCurrencyCode', 'CreditCurrencyCode', 'Amount', 'TransactionID', 'OrderNumberCore', 'ProcessedDateCore', 'DebitAccount', 'CreditAccount', 'ValueDate', 'Priority', 'Status', 'State', 'OrderContent', 'ReceiveDate', 'ErrorCode', 'SpecificErrorCode', 'ErrorMessage', 'AccountSignatureCode', 'OriginalOrderID', 'OrderStatus', 'CommissionAmount', 'CommissionCurrencyCode', 'DebitAccountID', 'OrderPackageID', 'IndividualID', 'SubsystemID', 'fwInChannelID', 'CreateDate', 'OrderContractID', 'ContractNumber', 'LegalEntityID', 'CompanyIdentityNumber', 'BtnRemove', 'CreditorName', 'DatePayUntil', 'LocalityName', 'Street', 'StreetNumber', 'OrderID', 'BillerName' ] as const;

export type RetailUserOrderContractsFlatColumn = typeof RetailUserOrderContractsFlatColumns[number];

export const RetailUserOrderContractsFlat: { name: string, columns: readonly RetailUserOrderContractsFlatColumn[] } = { name: 'RetailUserOrderContractsFlat', columns: RetailUserOrderContractsFlatColumns } as const;

export const RetailSubscribedUserContractsFlatColumns = [ 'KEY_COLUMN', 'ContractID', 'IsActive', 'ContractNumber', 'ContractContent', 'ContractStatusID', 'ContractStatusCode', 'BillerID', 'BillerIdentityNumber', 'UserID', 'SocialIdentityNumber', 'PrincipalID', 'CustomName', 'BtnEdit', 'LocalityName', 'Street', 'StreetNumber', 'BillerName', 'BtnUnsubscribe' ] as const;

export type RetailSubscribedUserContractsFlatColumn = typeof RetailSubscribedUserContractsFlatColumns[number];

export const RetailSubscribedUserContractsFlat: { name: string, columns: readonly RetailSubscribedUserContractsFlatColumn[] } = { name: 'RetailSubscribedUserContractsFlat', columns: RetailSubscribedUserContractsFlatColumns } as const;

export const RetailProfileImageFlatColumns = [ 'KEY_COLUMN', 'DocumentContent' ] as const;

export type RetailProfileImageFlatColumn = typeof RetailProfileImageFlatColumns[number];

export const RetailProfileImageFlat: { name: string, columns: readonly RetailProfileImageFlatColumn[] } = { name: 'RetailProfileImageFlat', columns: RetailProfileImageFlatColumns } as const;

export const RetailUserOrderContractsShortFlatColumns = [ 'KEY_COLUMN', 'CustomName', 'BtnContinue', 'CompanyIdentityNumber', 'OrderID' ] as const;

export type RetailUserOrderContractsShortFlatColumn = typeof RetailUserOrderContractsShortFlatColumns[number];

export const RetailUserOrderContractsShortFlat: { name: string, columns: readonly RetailUserOrderContractsShortFlatColumn[] } = { name: 'RetailUserOrderContractsShortFlat', columns: RetailUserOrderContractsShortFlatColumns } as const;

export const RetailOffersColumns = [ 'KEY_COLUMN', 'OfferID', 'ProductType', 'OfferDate', 'Campaign', 'Status', 'Campaign_type', 'offerTitleSRB', 'offerSubtitleSRB', 'offerDescriptionSRB', 'offerTitleENG', 'offerSubtitleENG', 'offerDescriptionENG', 'ibPictureSRB', 'ibPictureENG', 'mbPictureSRB', 'mbPictureENG', 'offerExpiryDate', 'tripletStatus', 'action', 'ProductCode', 'Channel', 'Priority', 'NavigateButtonText', 'NavigateButtonLink', 'NotifyButtonText', 'NotifyButtonLink', 'CampaignCategory', 'NavigateButtonSubtype', 'NavigateButtonSubtypeValue', 'MgmLink' ] as const;

export type RetailOffersColumn = typeof RetailOffersColumns[number];

export const RetailOffers: { name: string, columns: readonly RetailOffersColumn[] } = { name: 'RetailOffers', columns: RetailOffersColumns } as const;

export const RetailForeignPaymentCountriesListFlatColumns = [ 'KEY_COLUMN', 'name', 'translationName', 'countryCode', 'alpha2', 'alpha3', 'countryStatus', 'isEuMember', 'ibanPrefix', 'ibanLength', 'isSepaMember', 'currencyCode' ] as const;

export type RetailForeignPaymentCountriesListFlatColumn = typeof RetailForeignPaymentCountriesListFlatColumns[number];

export const RetailForeignPaymentCountriesListFlat: { name: string, columns: readonly RetailForeignPaymentCountriesListFlatColumn[] } = { name: 'RetailForeignPaymentCountriesListFlat', columns: RetailForeignPaymentCountriesListFlatColumns } as const;

export const RetailForeignPaymentBanksListFlatColumns = [ 'KEY_COLUMN', 'swiftCode', 'bankName', 'bankAddress', 'bankCity', 'country', 'residency', 'bankCode' ] as const;

export type RetailForeignPaymentBanksListFlatColumn = typeof RetailForeignPaymentBanksListFlatColumns[number];

export const RetailForeignPaymentBanksListFlat: { name: string, columns: readonly RetailForeignPaymentBanksListFlatColumn[] } = { name: 'RetailForeignPaymentBanksListFlat', columns: RetailForeignPaymentBanksListFlatColumns } as const;

export const RetailForeignPaymentPurposeCodesColumns = [ 'KEY_COLUMN', 'code', 'codeDescription', 'documents', 'codeType' ] as const;

export type RetailForeignPaymentPurposeCodesColumn = typeof RetailForeignPaymentPurposeCodesColumns[number];

export const RetailForeignPaymentPurposeCodes: { name: string, columns: readonly RetailForeignPaymentPurposeCodesColumn[] } = { name: 'RetailForeignPaymentPurposeCodes', columns: RetailForeignPaymentPurposeCodesColumns } as const;

export const GetThreadListFlatColumns = [ 'KEY_COLUMN', 'UserID', 'SubsystemID', 'Identifier', 'Name', 'Address', 'LastLogin', 'ThreadID', 'ThreadName', 'ThreadCreatedDateTime', 'PostID', 'CheckInput', 'Tag', 'PostCreatedDateTime', 'Subject', 'CanReply', 'FromUserID', 'FromUserName', 'ToUserID', 'FromUserIdentifier', 'ContentData', 'ToUserIdentifier', 'ToUserName', 'NumberOfAttachments', 'PostStateID', 'PostStateCode', 'PostTypeID', 'PostTypeName', 'OriginalPostTypeID', 'TemplateID', 'FilterPostTypeID', 'DateFrom', 'DateTo', 'FilterText', 'StateID', 'WithValidityPeriod', 'ArchiveMessage' ] as const;

export type GetThreadListFlatColumn = typeof GetThreadListFlatColumns[number];

export const GetThreadListFlat: { name: string, columns: readonly GetThreadListFlatColumn[] } = { name: 'GetThreadListFlat', columns: GetThreadListFlatColumns } as const;

export type GridData = typeof RetailAccountBalancePreviewFlatL | typeof RetailAccountBalanceTransactionPreviewFlatL | typeof RetailAccountBalanceTransactionDetailFlat | typeof RetailAccountBalanceTransactionUnusedChequesPreviewFlat | typeof RetailAccountBalanceTransactionUndueLiabilitiesPreviewMasterDetail | typeof RetailAccountBalanceTransactionShortDetailFlat | typeof RetailAccountBalanceTransactionTurnoverPreviewFlatL | typeof RetailAccountTurnoverTransactionPreviewMasterDetailL | typeof RetailAccountBalanceTransactionTurnoverForeignPreviewFlatL | typeof RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatL | typeof RetailAccountTurnoverTransactionDomesticPreviewMasterDetailL | typeof RetailAccountBalanceTimeDepositDomesticDetailFlat | typeof RetailAccountBalanceTimeDepositForeignDetailFlat | typeof RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatL | typeof RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatL | typeof RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailL | typeof RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailL | typeof RetailAccountStatementTransactionListPreviewFlat | typeof RetailAccountStatementTransactionPreviewMasterDetail | typeof RetailCardListPreviewFlatL | typeof RetailCardBalanceDetailFlat | typeof RetailCardBalancePreviewFlatL | typeof RetailSupplementaryCardListPreviewFlatL | typeof RetailCardBalanceUnusedChequesPreviewFlat | typeof RetailCardBalanceUndueLiabilitiesPreviewMasterDetail | typeof RetailCardTurnoverPreviewMasterDetailL | typeof RetailCardSpendingPreviewMasterDetailL | typeof RetailCardStatementPreviewFlat | typeof RetailCardStatementDetailMasterDetail | typeof RetailLoanListPreviewFlatL | typeof RetailLoanDetailFlat | typeof RetailLoanPaymentPreviewFlat | typeof RetailCreditCardTurnoverPreviewMasterDetailL | typeof RetailAuthorizedAccountsForOrderSendingDomesticFlat | typeof RetailOrderTemplateListPreviewFlat | typeof RetailDomesticPaymentCodeCodebookPreviewFlat | typeof RetailCreditorTemplateListPreviewFlat | typeof RetailOrderPreviewListFlatL | typeof RetailOrderPreviewDetailFlat | typeof RetailAuthorizedAccountsForOrderPreivewFlat | typeof RetailAuthorizedDebitAccountsForTransferFlat | typeof RetailAuthorizedCreditCardsForTransferFlat | typeof RetailAuthorizedCreditAccountsForTransferFlat | typeof RetailAuthorizedAccountsForExchangeOfficeFlat | typeof RetailExchangeRateListMasterDetail | typeof RetailExchangeRateListShortFlat | typeof RetailUserChannelItemMasterDetail | typeof RetailIndividualDataPreviewFlat | typeof RetailAccountReservedFundsPreviewFlat | typeof RetailStepSavingsAccountThreadDetailFlat | typeof RetailStepSavingsAccountThreadBalanceMasterDetailL | typeof RzbRetailAccountTurnoverTransactionPreviewMasterDetail | typeof RetailCardListPreviewFlatS | typeof RetailAccountBalanceTransactionTurnoverPreviewFlatS | typeof RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatS | typeof RetailAccountBalanceTransactionTurnoverForeignPreviewFlatS | typeof RetailLoanListPreviewFlatS | typeof RetailCardBalancePreviewFlatS | typeof RetailSupplementaryCardListPreviewFlatS | typeof RetailAccountTurnoverTransactionPreviewMasterDetailS | typeof RetailAccountTurnoverTransactionDomesticPreviewMasterDetailS | typeof RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailS | typeof RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailS | typeof RetailCreditCardTurnoverPreviewMasterDetailS | typeof RetailCardTurnoverPreviewMasterDetailS | typeof RetailOrderPreviewListFlatS | typeof RetailCardSpendingPreviewMasterDetailS | typeof RetailAccountBalanceTransactionPreviewFlatS | typeof RetailAccountBalanceTransactionTurnoverPreviewFlatM | typeof RetailAccountBalanceTransactionTurnoverDomesticPreviewFlatM | typeof RetailAccountBalanceTransactionTurnoverForeignPreviewFlatM | typeof RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatM | typeof RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatM | typeof RetailAccountBalanceTimeDepositTurnoverDomesticPreviewFlatS | typeof RetailAccountBalanceTimeDepositTurnoverForeignPreviewFlatS | typeof RetailAccountTurnoverTransactionPreviewMasterDetailM | typeof RetailAccountTurnoverTransactionDomesticPreviewMasterDetailM | typeof RetailAccountTurnoverTimeDepositDomesticPreviewMasterDetailM | typeof RetailAccountTurnoverTimeDepositForeignPreviewMasterDetailM | typeof RetailAccountBalanceTransactionPreviewFlatM | typeof RetailCardListPreviewFlatM | typeof RetailCardBalancePreviewFlatM | typeof RetailCardSpendingPreviewMasterDetailM | typeof RetailCardTurnoverPreviewMasterDetailM | typeof RetailCreditCardTurnoverPreviewMasterDetailM | typeof RetailLoanListPreviewFlatM | typeof RetailOrderPreviewListFlatM | typeof RetailAccountReservedFundsSecuritiesPreviewFlat | typeof RetailLoanNoticeFlat | typeof RetailStepSavingsAccountThreadBalanceMasterDetailS | typeof RetailStepSavingsAccountThreadBalanceMasterDetailM | typeof RetailLoanAnnuityPlanMasterDetailL | typeof RetailSecuritiesBalancePreviewFlatL | typeof RetailAccountBalanceStockTurnoverPreviewFlatS | typeof RetailAccountBalanceStockTurnoverPreviewFlatM | typeof RetailAccountBalanceStockTurnoverPreviewFlatL | typeof RetailAccountTurnoverSecuritiesPreviewMasterDetailS | typeof RetailAccountTurnoverSecuritiesPreviewMasterDetailM | typeof RetailAccountTurnoverSecuritiesPreviewMasterDetailL | typeof RetailLoanAnnuityPlanMasterDetailM | typeof RetailLoanAnnuityPlanMasterDetailS | typeof RetailCardApprovedLimit | typeof RetailCardReservedFundsFlat | typeof RetailSecuritiesBalancePreviewFlatS | typeof RetailSecuritiesStocksAccountBalancePreviewFlatL | typeof RetailSecuritiesStocksAccountBalancePreviewFlatM | typeof RetailSecuritiesStocksAccountBalancePreviewFlatS | typeof RetailSecuritiesStocksPledgeAccountBalancePreviewFlatL | typeof RetailSecuritiesStocksPledgeAccountBalancePreviewFlatS | typeof RetailSecuritiesStocksPledgeAccountBalancePreviewFlatM | typeof RetailSecuritiesBondsAccountBalancePreviewFlatL | typeof RetailSecuritiesBondsAccountBalancePreviewFlatM | typeof RetailSecuritiesBondsAccountBalancePreviewFlatS | typeof RetailSecuritiesBondsPledgeAccountBalancePreviewFlatL | typeof RetailSecuritiesBondsPledgeAccountBalancePreviewFlatM | typeof RetailSecuritiesBondsPledgeAccountBalancePreviewFlatS | typeof RetailSecurityStocksBalanceTurnoverPreviewFlatL | typeof RetailSecurityStocksBalanceTurnoverPreviewFlatM | typeof RetailSecurityStocksBalanceTurnoverPreviewFlatS | typeof RetailAccountTurnoverStepSavingsPreviewMasterDetailS | typeof RetailAccountTurnoverStepSavingsPreviewMasterDetailM | typeof RetailAccountTurnoverStepSavingsPreviewMasterDetailL | typeof RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatL | typeof RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatM | typeof RetailSecurityStocksPledgeBalanceTurnoverPreviewFlatS | typeof RetailSecurityBondsBalanceTurnoverPreviewFlatL | typeof RetailSecurityBondsBalanceTurnoverPreviewFlatM | typeof RetailSecurityBondsBalanceTurnoverPreviewFlatS | typeof RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatL | typeof RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatM | typeof RetailSecurityBondsPledgeBalanceTurnoverPreviewFlatS | typeof RetailSecuritiesSymbolListFlat | typeof RetailSecuritiesOrderStatusListFlat | typeof RetailSecuritiesStockExchangeStatusListFlat | typeof RetailSecuritiesOrderPreviewFlatL | typeof RetailSecuritiesOrderPreviewFlatM | typeof RetailSecuritiesOrderPreviewFlatS | typeof RetailSecuritiesOrderConfirmationPreviewFlatL | typeof RetailSecuritiesOrderDetailFlat | typeof RetailSecuritiesOrderRealizationDetailMasterDetail | typeof RetailSecuritiesOrderConfirmationDetailFlat | typeof RetailSecuritiesOrderConfirmationPreviewFlatM | typeof RetailSecuritiesOrderConfirmationPreviewFlatS | typeof RetailExchangeOfficeBuyDetailsFlat | typeof RetailExchangeOfficeSellDetailsFlat | typeof RetailExchangeOfficeFXDetailsFlat | typeof RetailExchangeOfficeOverviewFlatL | typeof RetailSecuritiesClientCoreDataFlat | typeof RetailSecuritiesSymbolOrderListFlat | typeof RetailAuthorizedDebitAccountsForSecuritiesOrderBuyFlat | typeof RetailAuthorizedCreditAccountsForSecuritiesOrderBuyFlat | typeof RetailExchangeRateListFlat_NB_L | typeof RetailExchangeRateListFlat_INT_L | typeof RetailExchangeRateListFlat_MM_L | typeof RetailAuthorizedCreditAccountsForSecuritiesOrderSellFlat | typeof RetailSecuritiesDataForIsinNumberFlat | typeof RetailCardPaymentOrder | typeof RetailLoanPaymentOrder | typeof RetailInflowsFlatL | typeof RetailInflowsFlatM | typeof RetailInflowsFlatS | typeof RetailInflowDetailFlat | typeof RetailForeignNotification | typeof RetailNotificationCore | typeof RetailDomesticNotification | typeof RetailNoticeClientCoreData | typeof RetailExchangeOfficeOverviewFlatM | typeof RetailExchangeOfficeOverviewFlatS | typeof RetailSMSNoticeUserAuthorization | typeof RetailAccountStatementTransactionListPreviewFlatS | typeof RetailAccountBalancePreviewFlatS | typeof RetailAccountBalancePreviewFlatM | typeof RetailExchangeRateListFlat_MM_S | typeof RetailExchangeRateListFlat_INT_S | typeof RetailExchangeRateListFlat_NB_S | typeof RetailUserContactData | typeof RetailCardNoticesFlat | typeof RetailCreditCardMKSTurnoverPreviewMasterDetailL | typeof RetailCreditCardMKSTurnoverPreviewMasterDetailM | typeof RetailCreditCardMKSTurnoverPreviewMasterDetailS | typeof RetailCreditCardSpendingPreviewMasterDetailL | typeof RetailCreditCardSpendingPreviewMasterDetailM | typeof RetailCreditCardSpendingPreviewMasterDetailS | typeof RetailCreditorTemplateListPreviewFlatS | typeof PFMTest | typeof ProductsFlat | typeof FinanceTurnoverFlat | typeof RulesFlat | typeof RemindersFlat | typeof RetailAccountBalanceTransactionDetailFlatMobile | typeof SentOrdersDomesticFlat | typeof RetailInvestmentTransactionPreviewListFlatM | typeof RetailInvestmentShareValueListFlat | typeof RetailInvestmentTransactionPreviewListFlatL | typeof RetailInvestmentTransactionPreviewListFlatS | typeof GetTokenList | typeof RetailFXExchangeRatesForPeriodFlat | typeof RetailExchangeOfficeDetailsFlat | typeof RetailFXExchangeOfficeDetailsFlat | typeof RetailPensionTransactionPreviewListFlatS | typeof RetailPensionTransactionPreviewListFlatM | typeof RetailPensionTransactionPreviewListFlatL | typeof RetailAuthorizedAccountsForExchangeOfficeFlatMobile | typeof RetailAccountBalanceForeignDetailMobile | typeof RetailAccountBalanceTransactionTurnoverPreviewTest | typeof RetailAccountBalanceTransactionShortDetailFlatMobile | typeof RetailAccountBalanceTimeDepositForeignDetailFlatMobile | typeof RetailAccountBalanceTransactionPreviewFlatMobile | typeof Test | typeof RetailLimitListFlat | typeof GetAllLimitsFlat | typeof P2PStatusList_Flat | typeof P2PAmountList_Flat | typeof P2PSentOrderDomesticFlat | typeof P2PPaymentHistoryFlat | typeof RetailAuthorizedAccountsForOrderTypeFlat | typeof RetailPrimaryCardBalancePreviewFlatL | typeof RetailPrimaryCardBalancePreviewFlatM | typeof RetailPrimaryCardBalancePreviewFlatS | typeof RetailUserDashboardPreview | typeof RetailTransactionDetailsIncome | typeof RetailTransactionDetailsExchange | typeof RetailTransactionDetailsP2P | typeof RetailTransactionDetailsATM | typeof RetailTransactionDetailsInterest | typeof RetailTransactionDetailsStandardOrder | typeof RetailTransactionDetailsInternal | typeof RetailTransactionDetailsPmtDom | typeof RetailInflowPaymentCode | typeof RetailUserOrderTemplates | typeof RetailP2POrderPreviewListFlat | typeof RetailNotificationPermissions | typeof RetailActiveAddressFlat | typeof RetailUtilityBillsFlat | typeof RetailUserOrderContractsFlat | typeof RetailSubscribedUserContractsFlat | typeof RetailProfileImageFlat | typeof RetailUserOrderContractsShortFlat | typeof RetailOffers | typeof RetailForeignPaymentCountriesListFlat | typeof RetailForeignPaymentBanksListFlat | typeof RetailForeignPaymentPurposeCodes | typeof GetThreadListFlat;

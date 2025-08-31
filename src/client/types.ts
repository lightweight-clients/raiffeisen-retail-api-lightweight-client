export interface AuthorizeParams {
  username: string;
  password: string;
  sessionID: 1;
}

export interface AuthorizeResult {
  Address: string;
  Street: string;
  PhoneNumber: string | null;
  MobileNumber: string | null;
  CorePhoneNumber: string | null;
  BirthDate: string | null;
  StreetNumber: string;
  Locality: string;
  IsResident: boolean;
  Username: string;
  LastSuccessfulLogon: string;
  LastSuccessfulLogonChannel: string;
  FirstSuccessfulLogon: boolean;
  PinMustBeChanged: boolean;
  ForceSecondLogin: boolean;
  SecurityUserID: number;
  EncryptedSecurityUserID: string | null;
  AdditionalAuthenticationType: string | null;
  LoginError: Record<string, unknown>;
  HistoryPins: string | null;
  FailedAttempts: number;
  TempBlockPeriodInMinutes: number;
  GeneratedSessionID: number;
  HOTP: boolean;
  PrincipalID: number;
  SessionID: number;
  InputChannelID: string;
  SecurityComponent: string | null;
  AgentCodeCore: null;
  Ticket: string;
  Email: string | null;
  FirstName: string;
  HolosSessionID: string;
  HolosSubsystemSuffix: string | null;
  HolosUserID: string;
  LastName: string;
  SocialIdentityNumber: string;
  AuthenticationType: 'UsernamePassword';
  RequestToken: string;
  Name: string;
  FullName: string;
  CertificateExpirationDate: string | null;
  DaysToExpiration: number;
}

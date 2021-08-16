export interface IProject {
  id: number;
  active: boolean;
  title: string;
  summary: string;
  contactName: string;
  contactAddress: string;
  contactAddress2: string;
  contactCity: string;
  contactState: string;
  contactPostal: string;
  contactCountry: string;
  contactUrl: string;
  projectLink: string;
  progressReportLink: string;
  themeName: string;
  country: string;
  iso3166CountryCode: string;
  region: string;
  goal: number;
  funding: number;
  remaining: number;
  numberOfDonations: number;
  status: string;
  need: string;
  longTermImpact: string;
  activities: string;
  imageLink: string;
  imageGallerySize: number;
  donationOptions: IDonationOption[];
  themes: ITheme[];
}

export interface IOrganization {}

export interface IDonationOption {
  amount: number;
  description: string;
}

export interface ITheme {
  id: string;
  name: string;
}

export interface Country {

    countryCode: string;
    name: string;
}

export interface CountryDetailType {
    countryInfo:       CountryInfo;
    countryPopulation: CountryPopulation[];
    countryFlag:       string[];
}

export interface CountryInfo {
    commonName:   string;
    officialName: string;
    countryCode:  string;
    region:       string;
    borders:      CountryInfo[] | null;
}

export interface CountryPopulation {
    country:          string;
    code:             string;
    iso3:             string;
    populationCounts: PopulationCount[];
}

export interface PopulationCount {
    year:  number;
    value: number;
}

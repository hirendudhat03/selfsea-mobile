export interface ProfileApiResponse {
  data: Pronouns | Orientations | Genders | Ethnicity;
}

export interface Pronouns {
  pronouns: ApiResponse[];
}

export interface Orientations {
  orientations: ApiResponse[];
}

export interface Genders {
  genders: ApiResponse[];
}

export interface Ethnicity {
  ethnicities: ApiResponse[];
}

export interface ApiResponse {
  id: string;
  name: string;
}

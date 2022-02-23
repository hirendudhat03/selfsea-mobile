export interface CurrentUserApi {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  id: string;
  authId: string;
  email: string;
  hasAcceptedLatestTerms: boolean;
  roles: Role[];
  profile: Profile;
}

export interface Role {
  id: string;
  name: string;
}

export interface Profile {
  id: string;
  bio: string;
  genders: Gender[];
  pronouns: Pronoun[];
  orientations: Orientation[];
}

export interface Gender {
  id: string;
  name: string;
}

export interface Pronoun {
  id: string;
  name: string;
}

export interface Orientation {
  id: string;
  name: string;
}

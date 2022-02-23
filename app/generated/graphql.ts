import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AcceptCurrentTerms = {
  acceptCurrentTerms: Scalars['Boolean'];
};

export type ApprovePostInput = {
  postContentId: Scalars['String'];
};

export type ApprovedPost = BaseObject & {
  claimerId?: Maybe<Scalars['String']>;
  communities: Array<Community>;
  communityId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isPinned?: Maybe<Scalars['Boolean']>;
  postContent: PostContent;
  postContentId: Scalars['String'];
  reviewerId: Scalars['String'];
  totalApprovedComments: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type ApprovedPostCommunitiesArgs = {
  filter?: InputMaybe<CommunityFilter>;
  sorting?: InputMaybe<Array<CommunitySort>>;
};

export type ApprovedPostAggregateGroupBy = {
  claimerId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  postContentId?: Maybe<Scalars['String']>;
};

export type ApprovedPostConnection = {
  /** Array of edges. */
  edges: Array<ApprovedPostEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ApprovedPostCountAggregate = {
  claimerId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  postContentId?: Maybe<Scalars['Int']>;
};

export type ApprovedPostEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ApprovedPost */
  node: ApprovedPost;
};

export type ApprovedPostFilter = {
  and?: InputMaybe<Array<ApprovedPostFilter>>;
  claimerId?: InputMaybe<StringFieldComparison>;
  community?: InputMaybe<ApprovedPostFilterCommunityFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ApprovedPostFilter>>;
  postContent?: InputMaybe<ApprovedPostFilterPostContentFilter>;
  postContentId?: InputMaybe<StringFieldComparison>;
};

export type ApprovedPostFilterCommunityFilter = {
  and?: InputMaybe<Array<ApprovedPostFilterCommunityFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ApprovedPostFilterCommunityFilter>>;
};

export type ApprovedPostFilterPostContentFilter = {
  and?: InputMaybe<Array<ApprovedPostFilterPostContentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isDeleted?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ApprovedPostFilterPostContentFilter>>;
  parentContentId?: InputMaybe<StringFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type ApprovedPostMaxAggregate = {
  claimerId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  postContentId?: Maybe<Scalars['String']>;
};

export type ApprovedPostMinAggregate = {
  claimerId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  postContentId?: Maybe<Scalars['String']>;
};

export type ApprovedPostSort = {
  direction: SortDirection;
  field: ApprovedPostSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ApprovedPostSortFields {
  ClaimerId = 'claimerId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostContentId = 'postContentId'
}

export type AssignCommunityRolesInput = {
  communityId: Scalars['String'];
  communityRoleId: Scalars['String'];
};

export type BaseObject = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type Community = BaseObject & {
  color: CommunityColor;
  communityUsers: CommunityUserRole;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  hasCurrentUserJoined: Scalars['Boolean'];
  iconId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCurrentUserBanned: Scalars['Boolean'];
  maxMembers?: Maybe<Scalars['Float']>;
  mentors: Array<User>;
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  totalMembers: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CommunityAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum CommunityColor {
  DarkBlue = 'DarkBlue',
  Green = 'Green',
  Maroon = 'Maroon',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Yellow = 'Yellow'
}

export type CommunityConnection = {
  /** Array of edges. */
  edges: Array<CommunityEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CommunityCountAggregate = {
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type CommunityEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Community */
  node: Community;
};

export type CommunityFilter = {
  and?: InputMaybe<Array<CommunityFilter>>;
  communityUsers?: InputMaybe<CommunityFilterCommunityUserRoleFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CommunityFilter>>;
};

export type CommunityFilterCommunityUserRoleFilter = {
  and?: InputMaybe<Array<CommunityFilterCommunityUserRoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommunityFilterCommunityUserRoleFilter>>;
};

export type CommunityMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CommunityMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CommunityRole = BaseObject & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: CommunityUserRoleEnum;
  updatedAt: Scalars['DateTime'];
};

export type CommunityRoleInput = {
  communityId: Scalars['String'];
  communityRoleId: Scalars['String'];
};

export type CommunitySort = {
  direction: SortDirection;
  field: CommunitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CommunitySortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name'
}

export type CommunityUserRole = {
  communityId: Scalars['String'];
  communityRoleId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export enum CommunityUserRoleEnum {
  Mentee = 'MENTEE',
  Mentor = 'MENTOR'
}

export type CommunityUserRoleFilter = {
  and?: InputMaybe<Array<CommunityUserRoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommunityUserRoleFilter>>;
};

export type CommunityUserRoleSort = {
  direction: SortDirection;
  field: CommunityUserRoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CommunityUserRoleSortFields {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type ContentWarning = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ContentWarnings = {
  contentWarningId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
};

export type ContentWarningsInput = {
  contentWarningId: Scalars['String'];
};

export type CreateCommentInput = {
  body: Scalars['String'];
  communityId: Scalars['String'];
  contentWarnings: Array<ContentWarningsInput>;
  parentContentId: Scalars['ID'];
};

export type CreateCommunityInput = {
  color: CommunityColor;
  description: Scalars['String'];
  iconId?: InputMaybe<Scalars['String']>;
  maxMembers?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  communityId: Scalars['String'];
  contentWarnings: Array<ContentWarnings>;
  title: Scalars['String'];
};

export type CreateUserInput = {
  authId: Scalars['String'];
  birthMonth?: InputMaybe<Month>;
  birthYear?: InputMaybe<Scalars['Float']>;
  email: Scalars['String'];
  inviteId?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteResponse = {
  id: Scalars['String'];
};

export type Ethnicity = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type EthnicityAggregateGroupBy = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type EthnicityCountAggregate = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type EthnicityEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Ethnicity */
  node: Ethnicity;
};

export type EthnicityFilter = {
  and?: InputMaybe<Array<EthnicityFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EthnicityFilter>>;
};

export type EthnicityMaxAggregate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type EthnicityMinAggregate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type EthnicitySort = {
  direction: SortDirection;
  field: EthnicitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EthnicitySortFields {
  Id = 'id',
  Name = 'name'
}

export type Gender = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GenderFilter = {
  and?: InputMaybe<Array<GenderFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GenderFilter>>;
};

export type GenderSort = {
  direction: SortDirection;
  field: GenderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum GenderSortFields {
  Id = 'id',
  Name = 'name'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type IsUserBannedResponse = {
  isUserBanned: Scalars['Boolean'];
};

export type JoinCommunityResponse = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Media = BaseObject & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type MediaFilter = {
  and?: InputMaybe<Array<MediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaFilter>>;
};

export type MediaSort = {
  direction: SortDirection;
  field: MediaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MediaSortFields {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export enum Month {
  April = 'APRIL',
  August = 'AUGUST',
  December = 'DECEMBER',
  February = 'FEBRUARY',
  January = 'JANUARY',
  July = 'JULY',
  June = 'JUNE',
  March = 'MARCH',
  May = 'MAY',
  November = 'NOVEMBER',
  October = 'OCTOBER',
  September = 'SEPTEMBER'
}

export type Mutation = {
  acceptCurrentTerms: AcceptCurrentTerms;
  approvePost: ApprovedPost;
  createComment: PostContent;
  createCommunity: Community;
  createPost: PostContent;
  createUser: User;
  deletePostContent: PostContent;
  deleteUser: User;
  deleteUserCommunityRole: DeleteResponse;
  inviteUser: UserInvite;
  joinCommunity: JoinCommunityResponse;
  reviewUsername: UsernameSubmission;
  updateCommunity: Community;
  updateProfile: UserProfile;
  updateUserBan: UserBan;
  updateUserCommunityRole: CommunityUserRole;
  updateUsername: UsernameSubmission;
  withholdPost: WithheldPost;
};


export type MutationApprovePostArgs = {
  input: ApprovePostInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeletePostContentArgs = {
  postContentId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type MutationDeleteUserCommunityRoleArgs = {
  id: Scalars['String'];
};


export type MutationInviteUserArgs = {
  input: UserInviteInput;
};


export type MutationJoinCommunityArgs = {
  id: Scalars['String'];
};


export type MutationReviewUsernameArgs = {
  input: UsernameReview;
  submissionId: Scalars['String'];
};


export type MutationUpdateCommunityArgs = {
  input: UpdateCommunityInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateUserBanArgs = {
  input: UpdateUserBanInput;
};


export type MutationUpdateUserCommunityRoleArgs = {
  input: CommunityRoleInput;
  userId: Scalars['String'];
};


export type MutationUpdateUsernameArgs = {
  username: Scalars['String'];
};


export type MutationWithholdPostArgs = {
  input: WithholdPostInput;
};

export type PageInfo = {
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type PendingPost = BaseObject & {
  communityId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isReviewed: Scalars['Boolean'];
  postContent?: Maybe<Array<PostContent>>;
  postContentId: Scalars['String'];
  reviewerId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PendingPostFilter = {
  and?: InputMaybe<Array<PendingPostFilter>>;
  community?: InputMaybe<PendingPostFilterCommunityFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PendingPostFilter>>;
};

export type PendingPostFilterCommunityFilter = {
  and?: InputMaybe<Array<PendingPostFilterCommunityFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PendingPostFilterCommunityFilter>>;
};

export type PendingPostSort = {
  direction: SortDirection;
  field: PendingPostSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PendingPostSortFields {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type PostContent = BaseObject & {
  approvedPosts: Array<ApprovedPost>;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  parentContentId?: Maybe<Scalars['String']>;
  pendingPosts: Array<PendingPost>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
  withheldPosts: Array<WithheldPost>;
};


export type PostContentApprovedPostsArgs = {
  filter?: InputMaybe<ApprovedPostFilter>;
  sorting?: InputMaybe<Array<ApprovedPostSort>>;
};


export type PostContentPendingPostsArgs = {
  filter?: InputMaybe<PendingPostFilter>;
  sorting?: InputMaybe<Array<PendingPostSort>>;
};


export type PostContentWithheldPostsArgs = {
  filter?: InputMaybe<WithheldPostFilter>;
  sorting?: InputMaybe<Array<WithheldPostSort>>;
};

export type PostContentAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  parentContentId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type PostContentCountAggregate = {
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  parentContentId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PostContentEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PostContent */
  node: PostContent;
};

export type PostContentMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  parentContentId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type PostContentMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  parentContentId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileAssignmentsInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type Pronoun = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PronounFilter = {
  and?: InputMaybe<Array<PronounFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PronounFilter>>;
};

export type PronounSort = {
  direction: SortDirection;
  field: PronounSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PronounSortFields {
  Id = 'id',
  Name = 'name'
}

export type Query = {
  communities: CommunityConnection;
  community: Community;
  communityPostComments: ApprovedPostConnection;
  communityPosts: ApprovedPostConnection;
  communityRoles?: Maybe<Array<CommunityRole>>;
  contentWarnings?: Maybe<Array<ContentWarning>>;
  currentTermsAndConditions?: Maybe<Terms>;
  currentUser?: Maybe<User>;
  ethnicities?: Maybe<Array<Ethnicity>>;
  genders?: Maybe<Array<Gender>>;
  isUserBanned: IsUserBannedResponse;
  isUsernameValid?: Maybe<UsernameValidationResponse>;
  myCommunities: CommunityConnection;
  orientations?: Maybe<Array<SexualOrientation>>;
  pendingUsernameSubmissions: UsernameSubmissionConnection;
  postContent?: Maybe<PostContent>;
  pronouns?: Maybe<Array<Pronoun>>;
  roles?: Maybe<Array<Role>>;
  user?: Maybe<User>;
  userProfile?: Maybe<UserProfile>;
  users: UserConnection;
};


export type QueryCommunitiesArgs = {
  filter?: InputMaybe<CommunityFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CommunitySort>>;
};


export type QueryCommunityArgs = {
  communityId: Scalars['ID'];
};


export type QueryCommunityPostCommentsArgs = {
  communityId: Scalars['ID'];
  filter?: InputMaybe<ApprovedPostFilter>;
  paging?: InputMaybe<CursorPaging>;
  postContentId: Scalars['ID'];
  sorting?: InputMaybe<Array<ApprovedPostSort>>;
};


export type QueryCommunityPostsArgs = {
  communityId: Scalars['ID'];
  filter?: InputMaybe<ApprovedPostFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ApprovedPostSort>>;
};


export type QueryIsUserBannedArgs = {
  communityId?: InputMaybe<Scalars['ID']>;
  userId: Scalars['ID'];
};


export type QueryIsUsernameValidArgs = {
  username: Scalars['String'];
};


export type QueryMyCommunitiesArgs = {
  filter?: InputMaybe<CommunityFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CommunitySort>>;
};


export type QueryPendingUsernameSubmissionsArgs = {
  filter?: InputMaybe<UsernameSubmissionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UsernameSubmissionSort>>;
};


export type QueryPostContentArgs = {
  postContentId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserProfileArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type Role = BaseObject & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: UserRole;
  updatedAt: Scalars['DateTime'];
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RoleFilter>>;
};

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleSortFields {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type SexualOrientation = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SexualOrientationFilter = {
  and?: InputMaybe<Array<SexualOrientationFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SexualOrientationFilter>>;
};

export type SexualOrientationSort = {
  direction: SortDirection;
  field: SexualOrientationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SexualOrientationSortFields {
  Id = 'id',
  Name = 'name'
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type Terms = {
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  version: Scalars['Float'];
};

export type UpdateCommunityInput = {
  color: CommunityColor;
  description: Scalars['String'];
  iconId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  maxMembers?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  status: Scalars['String'];
};

export type UpdateProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
  ethnicities?: InputMaybe<Array<ProfileAssignmentsInput>>;
  genders?: InputMaybe<Array<ProfileAssignmentsInput>>;
  isPrivate: Scalars['Boolean'];
  location?: InputMaybe<Scalars['String']>;
  orientations?: InputMaybe<Array<ProfileAssignmentsInput>>;
  pronouns?: InputMaybe<Array<ProfileAssignmentsInput>>;
};

export type UpdateUserBanInput = {
  communityId?: InputMaybe<Scalars['ID']>;
  isBanned: Scalars['Boolean'];
  userId: Scalars['ID'];
};

export type User = BaseObject & {
  authId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  hasAcceptedLatestTerms: Scalars['Boolean'];
  id: Scalars['ID'];
  inviteId?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Boolean'];
  isGloballyBanned: Scalars['Boolean'];
  isOnline: Scalars['Boolean'];
  isUsernameApproved: Scalars['Boolean'];
  notification?: Maybe<UserNotificationSettings>;
  profile?: Maybe<UserProfile>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  userBans: Array<UserBan>;
  userCommunities?: Maybe<Array<CommunityUserRole>>;
  username?: Maybe<Scalars['String']>;
  usernameSubmissions?: Maybe<Array<UsernameSubmission>>;
};


export type UserRolesArgs = {
  filter?: InputMaybe<RoleFilter>;
  sorting?: InputMaybe<Array<RoleSort>>;
};


export type UserUserBansArgs = {
  filter?: InputMaybe<UserBanFilter>;
  sorting?: InputMaybe<Array<UserBanSort>>;
};


export type UserUserCommunitiesArgs = {
  filter?: InputMaybe<CommunityUserRoleFilter>;
  sorting?: InputMaybe<Array<CommunityUserRoleSort>>;
};


export type UserUsernameSubmissionsArgs = {
  filter?: InputMaybe<UsernameSubmissionFilter>;
  sorting?: InputMaybe<Array<UsernameSubmissionSort>>;
};

export type UserAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isOnline?: Maybe<Scalars['Boolean']>;
};

export type UserBan = BaseObject & {
  bannedById: Scalars['String'];
  communityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isBanned: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
};

export type UserBanFilter = {
  and?: InputMaybe<Array<UserBanFilter>>;
  communityId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isBanned?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<UserBanFilter>>;
};

export type UserBanSort = {
  direction: SortDirection;
  field: UserBanSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserBanSortFields {
  CommunityId = 'communityId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsBanned = 'isBanned'
}

export type UserConnection = {
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isOnline?: Maybe<Scalars['Int']>;
};

export type UserEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isOnline?: InputMaybe<BooleanFieldComparison>;
  notification?: InputMaybe<UserFilterUserNotificationSettingsFilter>;
  or?: InputMaybe<Array<UserFilter>>;
  profile?: InputMaybe<UserFilterUserProfileFilter>;
  roles?: InputMaybe<UserFilterRoleFilter>;
  userBan?: InputMaybe<UserFilterUserBanFilter>;
  userCommunities?: InputMaybe<UserFilterCommunityUserRoleFilter>;
  usernameSubmissions?: InputMaybe<UserFilterUsernameSubmissionFilter>;
};

export type UserFilterCommunityUserRoleFilter = {
  and?: InputMaybe<Array<UserFilterCommunityUserRoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterCommunityUserRoleFilter>>;
};

export type UserFilterRoleFilter = {
  and?: InputMaybe<Array<UserFilterRoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterRoleFilter>>;
};

export type UserFilterUserBanFilter = {
  and?: InputMaybe<Array<UserFilterUserBanFilter>>;
  communityId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isBanned?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<UserFilterUserBanFilter>>;
};

export type UserFilterUserNotificationSettingsFilter = {
  and?: InputMaybe<Array<UserFilterUserNotificationSettingsFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterUserNotificationSettingsFilter>>;
};

export type UserFilterUserProfileFilter = {
  and?: InputMaybe<Array<UserFilterUserProfileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterUserProfileFilter>>;
};

export type UserFilterUsernameSubmissionFilter = {
  and?: InputMaybe<Array<UserFilterUsernameSubmissionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isApproved?: InputMaybe<BooleanFieldComparison>;
  isReviewed?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<UserFilterUsernameSubmissionFilter>>;
  reviewedBy?: InputMaybe<StringFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserInvite = BaseObject & {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
  roleId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserInviteInput = {
  communityRoles?: InputMaybe<Array<AssignCommunityRolesInput>>;
  email: Scalars['String'];
  roleId: Scalars['String'];
};

export type UserMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type UserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type UserNotificationSettings = BaseObject & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  receiveCommentUpdates: Scalars['Boolean'];
  receiveLiveAnnouncements: Scalars['Boolean'];
  receiveStatusChanges: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type UserProfile = BaseObject & {
  avatarID?: Maybe<Scalars['String']>;
  avatars: Array<Media>;
  bio?: Maybe<Scalars['String']>;
  birthMonth: Scalars['String'];
  birthYear: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  ethnicities: Array<Ethnicity>;
  genders: Array<Gender>;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  orientations: Array<SexualOrientation>;
  pronouns: Array<Pronoun>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};


export type UserProfileAvatarsArgs = {
  filter?: InputMaybe<MediaFilter>;
  sorting?: InputMaybe<Array<MediaSort>>;
};


export type UserProfileEthnicitiesArgs = {
  filter?: InputMaybe<EthnicityFilter>;
  sorting?: InputMaybe<Array<EthnicitySort>>;
};


export type UserProfileGendersArgs = {
  filter?: InputMaybe<GenderFilter>;
  sorting?: InputMaybe<Array<GenderSort>>;
};


export type UserProfileOrientationsArgs = {
  filter?: InputMaybe<SexualOrientationFilter>;
  sorting?: InputMaybe<Array<SexualOrientationSort>>;
};


export type UserProfilePronounsArgs = {
  filter?: InputMaybe<PronounFilter>;
  sorting?: InputMaybe<Array<PronounSort>>;
};

export type UserProfileAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
};

export type UserProfileCountAggregate = {
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type UserProfileEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserProfile */
  node: UserProfile;
};

export type UserProfileMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
};

export type UserProfileMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Mentee = 'MENTEE',
  Mentor = 'MENTOR',
  Moderator = 'MODERATOR'
}

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  IsOnline = 'isOnline'
}

export type UsernameReview = {
  state: UsernameSubmissionState;
};

export type UsernameSubmission = BaseObject & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isApproved: Scalars['Boolean'];
  isReviewed: Scalars['Boolean'];
  reviewedBy?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type UsernameSubmissionAggregateGroupBy = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isReviewed?: Maybe<Scalars['Boolean']>;
  reviewedBy?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UsernameSubmissionConnection = {
  /** Array of edges. */
  edges: Array<UsernameSubmissionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UsernameSubmissionCountAggregate = {
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Int']>;
  isReviewed?: Maybe<Scalars['Int']>;
  reviewedBy?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
};

export type UsernameSubmissionEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UsernameSubmission */
  node: UsernameSubmission;
};

export type UsernameSubmissionFilter = {
  and?: InputMaybe<Array<UsernameSubmissionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isApproved?: InputMaybe<BooleanFieldComparison>;
  isReviewed?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<UsernameSubmissionFilter>>;
  reviewedBy?: InputMaybe<StringFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UsernameSubmissionMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  reviewedBy?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UsernameSubmissionMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  reviewedBy?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UsernameSubmissionSort = {
  direction: SortDirection;
  field: UsernameSubmissionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UsernameSubmissionSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsApproved = 'isApproved',
  IsReviewed = 'isReviewed',
  ReviewedBy = 'reviewedBy',
  Username = 'username'
}

export enum UsernameSubmissionState {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type UsernameValidationResponse = {
  isValid: Scalars['Boolean'];
};

export type WithheldPost = BaseObject & {
  communityId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  postContent?: Maybe<Array<PostContent>>;
  postContentId: Scalars['String'];
  reason: Scalars['String'];
  reviewerId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type WithheldPostFilter = {
  and?: InputMaybe<Array<WithheldPostFilter>>;
  community?: InputMaybe<WithheldPostFilterCommunityFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WithheldPostFilter>>;
};

export type WithheldPostFilterCommunityFilter = {
  and?: InputMaybe<Array<WithheldPostFilterCommunityFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WithheldPostFilterCommunityFilter>>;
};

export type WithheldPostSort = {
  direction: SortDirection;
  field: WithheldPostSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WithheldPostSortFields {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type WithholdPostInput = {
  postContentId: Scalars['String'];
  reason: Scalars['String'];
};

export type CurrentUserFieldsFragment = { id: string, username?: string | null, createdAt: any, updatedAt: any };

export type UpdateProfileMutationVariables = Exact<{
  isPrivate: Scalars['Boolean'];
  location: Scalars['String'];
  bio: Scalars['String'];
  pronouns?: InputMaybe<Array<ProfileAssignmentsInput> | ProfileAssignmentsInput>;
  orientations?: InputMaybe<Array<ProfileAssignmentsInput> | ProfileAssignmentsInput>;
  genders?: InputMaybe<Array<ProfileAssignmentsInput> | ProfileAssignmentsInput>;
  ethnicities?: InputMaybe<Array<ProfileAssignmentsInput> | ProfileAssignmentsInput>;
}>;


export type UpdateProfileMutation = { updateProfile: { id: string, isPrivate: boolean, location?: string | null, bio?: string | null, pronouns: Array<{ id: string }>, genders: Array<{ id: string }>, orientations: Array<{ id: string }>, ethnicities: Array<{ id: string }> } };

export type AcceptCurrentTermsMutationVariables = Exact<{ [key: string]: never; }>;


export type AcceptCurrentTermsMutation = { acceptCurrentTerms: { acceptCurrentTerms: boolean } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  authId: Scalars['String'];
  birthMonth: Month;
  birthYear: Scalars['Float'];
  username: Scalars['String'];
}>;


export type CreateUserMutation = { createUser: { id: string, authId: string, email: string } };

export type CurrentTermsAndConditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentTermsAndConditionsQuery = { currentTermsAndConditions?: { id: string, title: string, content: string, version: number } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentUser?: { id: string, authId: string, email: string, hasAcceptedLatestTerms: boolean, roles: Array<{ id: string, name: UserRole }>, profile?: { id: string, bio?: string | null, genders: Array<{ id: string, name: string }>, pronouns: Array<{ id: string, name: string }>, orientations: Array<{ id: string, name: string }> } | null } | null };

export type IsUsernameValidQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUsernameValidQuery = { isUsernameValid?: { isValid: boolean } | null };

export type GetEthnicitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEthnicitiesQuery = { ethnicities?: Array<{ id: string, name: string }> | null };

export type GetPronounsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPronounsQuery = { pronouns?: Array<{ id: string, name: string }> | null };

export type GetOrientationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrientationsQuery = { orientations?: Array<{ id: string, name: string }> | null };

export type GetGendersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGendersQuery = { genders?: Array<{ id: string, name: string }> | null };

export const CurrentUserFieldsFragmentDoc = gql`
    fragment CurrentUserFields on User {
  id
  username
  createdAt
  updatedAt
}
    `;
export const UpdateProfileDocument = gql`
    mutation updateProfile($isPrivate: Boolean!, $location: String!, $bio: String!, $pronouns: [ProfileAssignmentsInput!], $orientations: [ProfileAssignmentsInput!], $genders: [ProfileAssignmentsInput!], $ethnicities: [ProfileAssignmentsInput!]) {
  updateProfile(
    input: {isPrivate: $isPrivate, location: $location, bio: $bio, pronouns: $pronouns, genders: $genders, orientations: $orientations, ethnicities: $ethnicities}
  ) {
    id
    isPrivate
    location
    bio
    pronouns {
      id
    }
    genders {
      id
    }
    orientations {
      id
    }
    ethnicities {
      id
    }
  }
}
    `;
export const AcceptCurrentTermsDocument = gql`
    mutation acceptCurrentTerms {
  acceptCurrentTerms {
    acceptCurrentTerms
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($email: String!, $authId: String!, $birthMonth: Month!, $birthYear: Float!, $username: String!) {
  createUser(
    input: {email: $email, authId: $authId, birthMonth: $birthMonth, birthYear: $birthYear, username: $username}
  ) {
    id
    authId
    email
  }
}
    `;
export const CurrentTermsAndConditionsDocument = gql`
    query currentTermsAndConditions {
  currentTermsAndConditions {
    id
    title
    content
    version
  }
}
    `;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    authId
    email
    hasAcceptedLatestTerms
    roles {
      id
      name
    }
    profile {
      id
      bio
      genders {
        id
        name
      }
      pronouns {
        id
        name
      }
      orientations {
        id
        name
      }
    }
  }
}
    `;
export const IsUsernameValidDocument = gql`
    query isUsernameValid($username: String!) {
  isUsernameValid(username: $username) {
    isValid
  }
}
    `;
export const GetEthnicitiesDocument = gql`
    query getEthnicities {
  ethnicities {
    id
    name
  }
}
    `;
export const GetPronounsDocument = gql`
    query getPronouns {
  pronouns {
    id
    name
  }
}
    `;
export const GetOrientationsDocument = gql`
    query getOrientations {
  orientations {
    id
    name
  }
}
    `;
export const GetGendersDocument = gql`
    query getGenders {
  genders {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updateProfile(variables: UpdateProfileMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileMutation>(UpdateProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProfile');
    },
    acceptCurrentTerms(variables?: AcceptCurrentTermsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AcceptCurrentTermsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AcceptCurrentTermsMutation>(AcceptCurrentTermsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'acceptCurrentTerms');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser');
    },
    currentTermsAndConditions(variables?: CurrentTermsAndConditionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CurrentTermsAndConditionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentTermsAndConditionsQuery>(CurrentTermsAndConditionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentTermsAndConditions');
    },
    currentUser(variables?: CurrentUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CurrentUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentUserQuery>(CurrentUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentUser');
    },
    isUsernameValid(variables: IsUsernameValidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IsUsernameValidQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IsUsernameValidQuery>(IsUsernameValidDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'isUsernameValid');
    },
    getEthnicities(variables?: GetEthnicitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEthnicitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEthnicitiesQuery>(GetEthnicitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEthnicities');
    },
    getPronouns(variables?: GetPronounsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPronounsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPronounsQuery>(GetPronounsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPronouns');
    },
    getOrientations(variables?: GetOrientationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOrientationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrientationsQuery>(GetOrientationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOrientations');
    },
    getGenders(variables?: GetGendersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGendersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGendersQuery>(GetGendersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGenders');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
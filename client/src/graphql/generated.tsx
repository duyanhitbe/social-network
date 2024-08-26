import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
};

export type CreateLikeInput = {
	postId: Scalars['String']['input'];
};

export type CreatePostInput = {
	body: Scalars['String']['input'];
	image?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoomInput = {
	userId: Scalars['String']['input'];
};

export type Like = {
	__typename?: 'Like';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	postId: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	user?: Maybe<User>;
	userId: Scalars['String']['output'];
};

export type LikePaginated = {
	__typename?: 'LikePaginated';
	data: Array<Like>;
	pagination?: Maybe<Pagination>;
};

export type LoginUser = {
	__typename?: 'LoginUser';
	accessToken: Scalars['String']['output'];
};

export type LoginUserInput = {
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type LogoutUser = {
	__typename?: 'LogoutUser';
	message: Scalars['String']['output'];
};

export type Message = {
	__typename?: 'Message';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	isOwnMessage: Scalars['Boolean']['output'];
	roomId: Scalars['String']['output'];
	text: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	user?: Maybe<User>;
	userId: Scalars['String']['output'];
};

export type MessagePaginated = {
	__typename?: 'MessagePaginated';
	data: Array<Message>;
	pagination?: Maybe<Pagination>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createPost: Post;
	createRoom: Room;
	deleteLike: Like;
	deletePost: Post;
	like: Like;
	loginUser: LoginUser;
	logoutUser: LogoutUser;
	registerUser: RegisterUser;
	removeRoom: Room;
	updateLike: Like;
	updatePost: Post;
	updateRoom: Room;
};

export type MutationCreatePostArgs = {
	data: CreatePostInput;
};

export type MutationCreateRoomArgs = {
	data: CreateRoomInput;
};

export type MutationDeleteLikeArgs = {
	id: Scalars['String']['input'];
};

export type MutationDeletePostArgs = {
	id: Scalars['String']['input'];
};

export type MutationLikeArgs = {
	data: CreateLikeInput;
};

export type MutationLoginUserArgs = {
	data: LoginUserInput;
};

export type MutationRegisterUserArgs = {
	data: RegisterUserInput;
};

export type MutationRemoveRoomArgs = {
	id: Scalars['String']['input'];
};

export type MutationUpdateLikeArgs = {
	data: UpdateLikeInput;
	id: Scalars['String']['input'];
};

export type MutationUpdatePostArgs = {
	data: UpdatePostInput;
	id: Scalars['String']['input'];
};

export type MutationUpdateRoomArgs = {
	data: UpdateRoomInput;
	id: Scalars['String']['input'];
};

export type Pagination = {
	__typename?: 'Pagination';
	limit: Scalars['Int']['output'];
	page: Scalars['Int']['output'];
	total: Scalars['Int']['output'];
};

export type Post = {
	__typename?: 'Post';
	body: Scalars['String']['output'];
	commentCount: Scalars['Int']['output'];
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	image?: Maybe<Scalars['String']['output']>;
	isLiked: Scalars['Boolean']['output'];
	likeCount: Scalars['Int']['output'];
	likes: Array<Like>;
	shareCount: Scalars['Int']['output'];
	updatedAt: Scalars['DateTime']['output'];
	user?: Maybe<User>;
	userId: Scalars['String']['output'];
};

export type PostPaginated = {
	__typename?: 'PostPaginated';
	data: Array<Post>;
	pagination?: Maybe<Pagination>;
};

export type Query = {
	__typename?: 'Query';
	example: Scalars['String']['output'];
	getAllMessageByRoom: MessagePaginated;
	getAllPost: PostPaginated;
	getAllRoom: RoomPaginated;
	getAllUser: UserPaginated;
	getOnePost?: Maybe<Post>;
	getOneRoom: Room;
	like: Like;
	userGetMe: User;
};

export type QueryGetAllMessageByRoomArgs = {
	roomId: Scalars['String']['input'];
};

export type QueryGetOnePostArgs = {
	id: Scalars['String']['input'];
};

export type QueryGetOneRoomArgs = {
	id: Scalars['String']['input'];
};

export type QueryLikeArgs = {
	id: Scalars['String']['input'];
};

export type RegisterUser = {
	__typename?: 'RegisterUser';
	user: User;
};

export type RegisterUserInput = {
	email: Scalars['String']['input'];
	name: Scalars['String']['input'];
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type Room = {
	__typename?: 'Room';
	avatar?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	lastMessage?: Maybe<Scalars['String']['output']>;
	members?: Maybe<Array<RoomMember>>;
	name?: Maybe<Scalars['String']['output']>;
	timestamp?: Maybe<Scalars['DateTime']['output']>;
	type: RoomType;
	updatedAt: Scalars['DateTime']['output'];
};

export type RoomMember = {
	__typename?: 'RoomMember';
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	roomId: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	user?: Maybe<User>;
	userId: Scalars['String']['output'];
};

export type RoomPaginated = {
	__typename?: 'RoomPaginated';
	data: Array<Room>;
	pagination?: Maybe<Pagination>;
};

export enum RoomType {
	Group = 'GROUP',
	Private = 'PRIVATE',
}

export type UpdateLikeInput = {
	postId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
	body?: InputMaybe<Scalars['String']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoomInput = {
	userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
	__typename?: 'User';
	avatar?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	email: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	username: Scalars['String']['output'];
};

export type UserPaginated = {
	__typename?: 'UserPaginated';
	data: Array<User>;
	pagination?: Maybe<Pagination>;
};

export type LoginUserMutationVariables = Exact<{
	data: LoginUserInput;
}>;

export type LoginUserMutation = {
	__typename?: 'Mutation';
	loginUser: { __typename?: 'LoginUser'; accessToken: string };
};

export type RegisterUserMutationVariables = Exact<{
	data: RegisterUserInput;
}>;

export type RegisterUserMutation = {
	__typename?: 'Mutation';
	registerUser: { __typename?: 'RegisterUser'; user: { __typename?: 'User'; id: string } };
};

export type LogoutUserMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutUserMutation = {
	__typename?: 'Mutation';
	logoutUser: { __typename?: 'LogoutUser'; message: string };
};

export type LikeMutationVariables = Exact<{
	data: CreateLikeInput;
}>;

export type LikeMutation = { __typename?: 'Mutation'; like: { __typename?: 'Like'; id: string } };

export type GetAllMessageByRoomQueryVariables = Exact<{
	roomId: Scalars['String']['input'];
}>;

export type GetAllMessageByRoomQuery = {
	__typename?: 'Query';
	getAllMessageByRoom: {
		__typename?: 'MessagePaginated';
		data: Array<{
			__typename?: 'Message';
			id: string;
			createdAt: any;
			text: string;
			isOwnMessage: boolean;
			user?: { __typename?: 'User'; id: string; name: string; avatar?: string | null } | null;
		}>;
		pagination?: {
			__typename?: 'Pagination';
			limit: number;
			page: number;
			total: number;
		} | null;
	};
};

export type GetAllPostQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostQuery = {
	__typename?: 'Query';
	getAllPost: {
		__typename?: 'PostPaginated';
		data: Array<{
			__typename?: 'Post';
			id: string;
			createdAt: any;
			body: string;
			image?: string | null;
			likeCount: number;
			commentCount: number;
			shareCount: number;
			isLiked: boolean;
			user?: { __typename?: 'User'; name: string; avatar?: string | null } | null;
		}>;
		pagination?: {
			__typename?: 'Pagination';
			limit: number;
			page: number;
			total: number;
		} | null;
	};
};

export type GetOnePostQueryVariables = Exact<{
	id: Scalars['String']['input'];
}>;

export type GetOnePostQuery = {
	__typename?: 'Query';
	getOnePost?: {
		__typename?: 'Post';
		id: string;
		createdAt: any;
		body: string;
		image?: string | null;
		likeCount: number;
		commentCount: number;
		shareCount: number;
		user?: { __typename?: 'User'; id: string; name: string; avatar?: string | null } | null;
	} | null;
};

export type CreatePostMutationVariables = Exact<{
	data: CreatePostInput;
}>;

export type CreatePostMutation = {
	__typename?: 'Mutation';
	createPost: { __typename?: 'Post'; id: string };
};

export type UpdatePostMutationVariables = Exact<{
	id: Scalars['String']['input'];
	data: UpdatePostInput;
}>;

export type UpdatePostMutation = {
	__typename?: 'Mutation';
	updatePost: { __typename?: 'Post'; id: string };
};

export type DeletePostMutationVariables = Exact<{
	id: Scalars['String']['input'];
}>;

export type DeletePostMutation = {
	__typename?: 'Mutation';
	deletePost: { __typename?: 'Post'; id: string };
};

export type GetAllRoomQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllRoomQuery = {
	__typename?: 'Query';
	getAllRoom: {
		__typename?: 'RoomPaginated';
		data: Array<{
			__typename?: 'Room';
			id: string;
			name?: string | null;
			avatar?: string | null;
			lastMessage?: string | null;
			type: RoomType;
			timestamp?: any | null;
			members?: Array<{ __typename?: 'RoomMember'; id: string; userId: string }> | null;
		}>;
		pagination?: {
			__typename?: 'Pagination';
			limit: number;
			page: number;
			total: number;
		} | null;
	};
};

export type CreateRoomMutationVariables = Exact<{
	data: CreateRoomInput;
}>;

export type CreateRoomMutation = {
	__typename?: 'Mutation';
	createRoom: { __typename?: 'Room'; id: string };
};

export type GetAllUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUserQuery = {
	__typename?: 'Query';
	getAllUser: {
		__typename?: 'UserPaginated';
		data: Array<{ __typename?: 'User'; id: string; name: string; avatar?: string | null }>;
		pagination?: {
			__typename?: 'Pagination';
			limit: number;
			page: number;
			total: number;
		} | null;
	};
};

export type UserGetMeQueryVariables = Exact<{ [key: string]: never }>;

export type UserGetMeQuery = {
	__typename?: 'Query';
	userGetMe: {
		__typename?: 'User';
		id: string;
		name: string;
		username: string;
		email: string;
		avatar?: string | null;
	};
};

export const LoginUserDocument = gql`
	mutation LoginUser($data: LoginUserInput!) {
		loginUser(data: $data) {
			accessToken
		}
	}
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
	LoginUserMutation,
	LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(
	baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
		LoginUserDocument,
		options,
	);
}
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
	LoginUserMutation,
	LoginUserMutationVariables
>;
export const RegisterUserDocument = gql`
	mutation RegisterUser($data: RegisterUserInput!) {
		registerUser(data: $data) {
			user {
				id
			}
		}
	}
`;
export type RegisterUserMutationFn = Apollo.MutationFunction<
	RegisterUserMutation,
	RegisterUserMutationVariables
>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterUserMutation(
	baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(
		RegisterUserDocument,
		options,
	);
}
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
	RegisterUserMutation,
	RegisterUserMutationVariables
>;
export const LogoutUserDocument = gql`
	mutation LogoutUser {
		logoutUser {
			message
		}
	}
`;
export type LogoutUserMutationFn = Apollo.MutationFunction<
	LogoutUserMutation,
	LogoutUserMutationVariables
>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(
	baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(
		LogoutUserDocument,
		options,
	);
}
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<
	LogoutUserMutation,
	LogoutUserMutationVariables
>;
export const LikeDocument = gql`
	mutation Like($data: CreateLikeInput!) {
		like(data: $data) {
			id
		}
	}
`;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLikeMutation(
	baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, options);
}
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const GetAllMessageByRoomDocument = gql`
	query GetAllMessageByRoom($roomId: String!) {
		getAllMessageByRoom(roomId: $roomId) {
			data {
				id
				createdAt
				text
				isOwnMessage
				user {
					id
					name
					avatar
				}
			}
			pagination {
				limit
				page
				total
			}
		}
	}
`;

/**
 * __useGetAllMessageByRoomQuery__
 *
 * To run a query within a React component, call `useGetAllMessageByRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMessageByRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMessageByRoomQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetAllMessageByRoomQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetAllMessageByRoomQuery,
		GetAllMessageByRoomQueryVariables
	> &
		({ variables: GetAllMessageByRoomQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetAllMessageByRoomQuery, GetAllMessageByRoomQueryVariables>(
		GetAllMessageByRoomDocument,
		options,
	);
}
export function useGetAllMessageByRoomLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetAllMessageByRoomQuery,
		GetAllMessageByRoomQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetAllMessageByRoomQuery, GetAllMessageByRoomQueryVariables>(
		GetAllMessageByRoomDocument,
		options,
	);
}
export function useGetAllMessageByRoomSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		GetAllMessageByRoomQuery,
		GetAllMessageByRoomQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetAllMessageByRoomQuery, GetAllMessageByRoomQueryVariables>(
		GetAllMessageByRoomDocument,
		options,
	);
}
export type GetAllMessageByRoomQueryHookResult = ReturnType<typeof useGetAllMessageByRoomQuery>;
export type GetAllMessageByRoomLazyQueryHookResult = ReturnType<
	typeof useGetAllMessageByRoomLazyQuery
>;
export type GetAllMessageByRoomSuspenseQueryHookResult = ReturnType<
	typeof useGetAllMessageByRoomSuspenseQuery
>;
export type GetAllMessageByRoomQueryResult = Apollo.QueryResult<
	GetAllMessageByRoomQuery,
	GetAllMessageByRoomQueryVariables
>;
export const GetAllPostDocument = gql`
	query GetAllPost {
		getAllPost {
			data {
				id
				createdAt
				body
				image
				likeCount
				commentCount
				shareCount
				isLiked
				user {
					name
					avatar
				}
			}
			pagination {
				limit
				page
				total
			}
		}
	}
`;

/**
 * __useGetAllPostQuery__
 *
 * To run a query within a React component, call `useGetAllPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostQuery(
	baseOptions?: Apollo.QueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetAllPostQuery, GetAllPostQueryVariables>(GetAllPostDocument, options);
}
export function useGetAllPostLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetAllPostQuery, GetAllPostQueryVariables>(
		GetAllPostDocument,
		options,
	);
}
export function useGetAllPostSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetAllPostQuery, GetAllPostQueryVariables>(
		GetAllPostDocument,
		options,
	);
}
export type GetAllPostQueryHookResult = ReturnType<typeof useGetAllPostQuery>;
export type GetAllPostLazyQueryHookResult = ReturnType<typeof useGetAllPostLazyQuery>;
export type GetAllPostSuspenseQueryHookResult = ReturnType<typeof useGetAllPostSuspenseQuery>;
export type GetAllPostQueryResult = Apollo.QueryResult<GetAllPostQuery, GetAllPostQueryVariables>;
export const GetOnePostDocument = gql`
	query GetOnePost($id: String!) {
		getOnePost(id: $id) {
			id
			createdAt
			body
			image
			likeCount
			commentCount
			shareCount
			user {
				id
				name
				avatar
			}
		}
	}
`;

/**
 * __useGetOnePostQuery__
 *
 * To run a query within a React component, call `useGetOnePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOnePostQuery(
	baseOptions: Apollo.QueryHookOptions<GetOnePostQuery, GetOnePostQueryVariables> &
		({ variables: GetOnePostQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetOnePostQuery, GetOnePostQueryVariables>(GetOnePostDocument, options);
}
export function useGetOnePostLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetOnePostQuery, GetOnePostQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetOnePostQuery, GetOnePostQueryVariables>(
		GetOnePostDocument,
		options,
	);
}
export function useGetOnePostSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetOnePostQuery, GetOnePostQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetOnePostQuery, GetOnePostQueryVariables>(
		GetOnePostDocument,
		options,
	);
}
export type GetOnePostQueryHookResult = ReturnType<typeof useGetOnePostQuery>;
export type GetOnePostLazyQueryHookResult = ReturnType<typeof useGetOnePostLazyQuery>;
export type GetOnePostSuspenseQueryHookResult = ReturnType<typeof useGetOnePostSuspenseQuery>;
export type GetOnePostQueryResult = Apollo.QueryResult<GetOnePostQuery, GetOnePostQueryVariables>;
export const CreatePostDocument = gql`
	mutation CreatePost($data: CreatePostInput!) {
		createPost(data: $data) {
			id
		}
	}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
	CreatePostMutation,
	CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(
	baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
		CreatePostDocument,
		options,
	);
}
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
	CreatePostMutation,
	CreatePostMutationVariables
>;
export const UpdatePostDocument = gql`
	mutation UpdatePost($id: String!, $data: UpdatePostInput!) {
		updatePost(id: $id, data: $data) {
			id
		}
	}
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
	UpdatePostMutation,
	UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePostMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
		UpdatePostDocument,
		options,
	);
}
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
	UpdatePostMutation,
	UpdatePostMutationVariables
>;
export const DeletePostDocument = gql`
	mutation DeletePost($id: String!) {
		deletePost(id: $id) {
			id
		}
	}
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
	DeletePostMutation,
	DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(
	baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
		DeletePostDocument,
		options,
	);
}
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
	DeletePostMutation,
	DeletePostMutationVariables
>;
export const GetAllRoomDocument = gql`
	query GetAllRoom {
		getAllRoom {
			data {
				id
				name
				avatar
				lastMessage
				type
				timestamp
				members {
					id
					userId
				}
			}
			pagination {
				limit
				page
				total
			}
		}
	}
`;

/**
 * __useGetAllRoomQuery__
 *
 * To run a query within a React component, call `useGetAllRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomQuery(
	baseOptions?: Apollo.QueryHookOptions<GetAllRoomQuery, GetAllRoomQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetAllRoomQuery, GetAllRoomQueryVariables>(GetAllRoomDocument, options);
}
export function useGetAllRoomLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetAllRoomQuery, GetAllRoomQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetAllRoomQuery, GetAllRoomQueryVariables>(
		GetAllRoomDocument,
		options,
	);
}
export function useGetAllRoomSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRoomQuery, GetAllRoomQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetAllRoomQuery, GetAllRoomQueryVariables>(
		GetAllRoomDocument,
		options,
	);
}
export type GetAllRoomQueryHookResult = ReturnType<typeof useGetAllRoomQuery>;
export type GetAllRoomLazyQueryHookResult = ReturnType<typeof useGetAllRoomLazyQuery>;
export type GetAllRoomSuspenseQueryHookResult = ReturnType<typeof useGetAllRoomSuspenseQuery>;
export type GetAllRoomQueryResult = Apollo.QueryResult<GetAllRoomQuery, GetAllRoomQueryVariables>;
export const CreateRoomDocument = gql`
	mutation CreateRoom($data: CreateRoomInput!) {
		createRoom(data: $data) {
			id
		}
	}
`;
export type CreateRoomMutationFn = Apollo.MutationFunction<
	CreateRoomMutation,
	CreateRoomMutationVariables
>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRoomMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(
		CreateRoomDocument,
		options,
	);
}
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<
	CreateRoomMutation,
	CreateRoomMutationVariables
>;
export const GetAllUserDocument = gql`
	query GetAllUser {
		getAllUser {
			data {
				id
				name
				avatar
			}
			pagination {
				limit
				page
				total
			}
		}
	}
`;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(
	baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
}
export function useGetAllUserLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(
		GetAllUserDocument,
		options,
	);
}
export function useGetAllUserSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(
		GetAllUserDocument,
		options,
	);
}
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const UserGetMeDocument = gql`
	query UserGetMe {
		userGetMe {
			id
			name
			username
			email
			avatar
		}
	}
`;

/**
 * __useUserGetMeQuery__
 *
 * To run a query within a React component, call `useUserGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGetMeQuery(
	baseOptions?: Apollo.QueryHookOptions<UserGetMeQuery, UserGetMeQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<UserGetMeQuery, UserGetMeQueryVariables>(UserGetMeDocument, options);
}
export function useUserGetMeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<UserGetMeQuery, UserGetMeQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<UserGetMeQuery, UserGetMeQueryVariables>(UserGetMeDocument, options);
}
export function useUserGetMeSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<UserGetMeQuery, UserGetMeQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<UserGetMeQuery, UserGetMeQueryVariables>(
		UserGetMeDocument,
		options,
	);
}
export type UserGetMeQueryHookResult = ReturnType<typeof useUserGetMeQuery>;
export type UserGetMeLazyQueryHookResult = ReturnType<typeof useUserGetMeLazyQuery>;
export type UserGetMeSuspenseQueryHookResult = ReturnType<typeof useUserGetMeSuspenseQuery>;
export type UserGetMeQueryResult = Apollo.QueryResult<UserGetMeQuery, UserGetMeQueryVariables>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
	CreateLikeInput: CreateLikeInput;
	CreatePostInput: CreatePostInput;
	CreateRoomInput: CreateRoomInput;
	DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
	ID: ResolverTypeWrapper<Scalars['ID']['output']>;
	Int: ResolverTypeWrapper<Scalars['Int']['output']>;
	Like: ResolverTypeWrapper<Like>;
	LikePaginated: ResolverTypeWrapper<LikePaginated>;
	LoginUser: ResolverTypeWrapper<LoginUser>;
	LoginUserInput: LoginUserInput;
	LogoutUser: ResolverTypeWrapper<LogoutUser>;
	Message: ResolverTypeWrapper<Message>;
	MessagePaginated: ResolverTypeWrapper<MessagePaginated>;
	Mutation: ResolverTypeWrapper<{}>;
	Pagination: ResolverTypeWrapper<Pagination>;
	Post: ResolverTypeWrapper<Post>;
	PostPaginated: ResolverTypeWrapper<PostPaginated>;
	Query: ResolverTypeWrapper<{}>;
	RegisterUser: ResolverTypeWrapper<RegisterUser>;
	RegisterUserInput: RegisterUserInput;
	Room: ResolverTypeWrapper<Room>;
	RoomMember: ResolverTypeWrapper<RoomMember>;
	RoomPaginated: ResolverTypeWrapper<RoomPaginated>;
	RoomType: RoomType;
	String: ResolverTypeWrapper<Scalars['String']['output']>;
	UpdateLikeInput: UpdateLikeInput;
	UpdatePostInput: UpdatePostInput;
	UpdateRoomInput: UpdateRoomInput;
	User: ResolverTypeWrapper<User>;
	UserPaginated: ResolverTypeWrapper<UserPaginated>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Boolean: Scalars['Boolean']['output'];
	CreateLikeInput: CreateLikeInput;
	CreatePostInput: CreatePostInput;
	CreateRoomInput: CreateRoomInput;
	DateTime: Scalars['DateTime']['output'];
	ID: Scalars['ID']['output'];
	Int: Scalars['Int']['output'];
	Like: Like;
	LikePaginated: LikePaginated;
	LoginUser: LoginUser;
	LoginUserInput: LoginUserInput;
	LogoutUser: LogoutUser;
	Message: Message;
	MessagePaginated: MessagePaginated;
	Mutation: {};
	Pagination: Pagination;
	Post: Post;
	PostPaginated: PostPaginated;
	Query: {};
	RegisterUser: RegisterUser;
	RegisterUserInput: RegisterUserInput;
	Room: Room;
	RoomMember: RoomMember;
	RoomPaginated: RoomPaginated;
	String: Scalars['String']['output'];
	UpdateLikeInput: UpdateLikeInput;
	UpdatePostInput: UpdatePostInput;
	UpdateRoomInput: UpdateRoomInput;
	User: User;
	UserPaginated: UserPaginated;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime';
}

export type LikeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	postId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
	userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikePaginatedResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['LikePaginated'] = ResolversParentTypes['LikePaginated'],
> = {
	data?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
	pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginUserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['LoginUser'] = ResolversParentTypes['LoginUser'],
> = {
	accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogoutUserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['LogoutUser'] = ResolversParentTypes['LogoutUser'],
> = {
	message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	isOwnMessage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
	roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
	userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagePaginatedResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['MessagePaginated'] = ResolversParentTypes['MessagePaginated'],
> = {
	data?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
	pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
	createPost?: Resolver<
		ResolversTypes['Post'],
		ParentType,
		ContextType,
		RequireFields<MutationCreatePostArgs, 'data'>
	>;
	createRoom?: Resolver<
		ResolversTypes['Room'],
		ParentType,
		ContextType,
		RequireFields<MutationCreateRoomArgs, 'data'>
	>;
	deleteLike?: Resolver<
		ResolversTypes['Like'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteLikeArgs, 'id'>
	>;
	deletePost?: Resolver<
		ResolversTypes['Post'],
		ParentType,
		ContextType,
		RequireFields<MutationDeletePostArgs, 'id'>
	>;
	like?: Resolver<
		ResolversTypes['Like'],
		ParentType,
		ContextType,
		RequireFields<MutationLikeArgs, 'data'>
	>;
	loginUser?: Resolver<
		ResolversTypes['LoginUser'],
		ParentType,
		ContextType,
		RequireFields<MutationLoginUserArgs, 'data'>
	>;
	logoutUser?: Resolver<ResolversTypes['LogoutUser'], ParentType, ContextType>;
	registerUser?: Resolver<
		ResolversTypes['RegisterUser'],
		ParentType,
		ContextType,
		RequireFields<MutationRegisterUserArgs, 'data'>
	>;
	removeRoom?: Resolver<
		ResolversTypes['Room'],
		ParentType,
		ContextType,
		RequireFields<MutationRemoveRoomArgs, 'id'>
	>;
	updateLike?: Resolver<
		ResolversTypes['Like'],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateLikeArgs, 'data' | 'id'>
	>;
	updatePost?: Resolver<
		ResolversTypes['Post'],
		ParentType,
		ContextType,
		RequireFields<MutationUpdatePostArgs, 'data' | 'id'>
	>;
	updateRoom?: Resolver<
		ResolversTypes['Room'],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateRoomArgs, 'data' | 'id'>
	>;
};

export type PaginationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination'],
> = {
	limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post'],
> = {
	body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
	likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	likes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
	shareCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
	userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPaginatedResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['PostPaginated'] = ResolversParentTypes['PostPaginated'],
> = {
	data?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
	pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
	example?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	getAllMessageByRoom?: Resolver<
		ResolversTypes['MessagePaginated'],
		ParentType,
		ContextType,
		RequireFields<QueryGetAllMessageByRoomArgs, 'roomId'>
	>;
	getAllPost?: Resolver<ResolversTypes['PostPaginated'], ParentType, ContextType>;
	getAllRoom?: Resolver<ResolversTypes['RoomPaginated'], ParentType, ContextType>;
	getAllUser?: Resolver<ResolversTypes['UserPaginated'], ParentType, ContextType>;
	getOnePost?: Resolver<
		Maybe<ResolversTypes['Post']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetOnePostArgs, 'id'>
	>;
	getOneRoom?: Resolver<
		ResolversTypes['Room'],
		ParentType,
		ContextType,
		RequireFields<QueryGetOneRoomArgs, 'id'>
	>;
	like?: Resolver<
		ResolversTypes['Like'],
		ParentType,
		ContextType,
		RequireFields<QueryLikeArgs, 'id'>
	>;
	userGetMe?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type RegisterUserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RegisterUser'] = ResolversParentTypes['RegisterUser'],
> = {
	user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room'],
> = {
	avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	lastMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	members?: Resolver<Maybe<Array<ResolversTypes['RoomMember']>>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
	type?: Resolver<ResolversTypes['RoomType'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomMemberResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RoomMember'] = ResolversParentTypes['RoomMember'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
	userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomPaginatedResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['RoomPaginated'] = ResolversParentTypes['RoomPaginated'],
> = {
	data?: Resolver<Array<ResolversTypes['Room']>, ParentType, ContextType>;
	pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
	avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPaginatedResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['UserPaginated'] = ResolversParentTypes['UserPaginated'],
> = {
	data?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
	pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	DateTime?: GraphQLScalarType;
	Like?: LikeResolvers<ContextType>;
	LikePaginated?: LikePaginatedResolvers<ContextType>;
	LoginUser?: LoginUserResolvers<ContextType>;
	LogoutUser?: LogoutUserResolvers<ContextType>;
	Message?: MessageResolvers<ContextType>;
	MessagePaginated?: MessagePaginatedResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Pagination?: PaginationResolvers<ContextType>;
	Post?: PostResolvers<ContextType>;
	PostPaginated?: PostPaginatedResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	RegisterUser?: RegisterUserResolvers<ContextType>;
	Room?: RoomResolvers<ContextType>;
	RoomMember?: RoomMemberResolvers<ContextType>;
	RoomPaginated?: RoomPaginatedResolvers<ContextType>;
	User?: UserResolvers<ContextType>;
	UserPaginated?: UserPaginatedResolvers<ContextType>;
};

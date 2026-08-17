


import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums"
import type * as Prisma from "../internal/prismaNamespace"

export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>

export type AggregateUser = {
  _count: UserCountAggregateOutputType | null
  _min: UserMinAggregateOutputType | null
  _max: UserMaxAggregateOutputType | null
}

export type UserMinAggregateOutputType = {
  id: string | null
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  password: string | null
  profile: string | null
}

export type UserMaxAggregateOutputType = {
  id: string | null
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  password: string | null
  profile: string | null
}

export type UserCountAggregateOutputType = {
  id: number
  name: number
  email: number
  emailVerified: number
  image: number
  password: number
  profile: number
  _all: number
}


export type UserMinAggregateInputType = {
  id?: true
  name?: true
  email?: true
  emailVerified?: true
  image?: true
  password?: true
  profile?: true
}

export type UserMaxAggregateInputType = {
  id?: true
  name?: true
  email?: true
  emailVerified?: true
  image?: true
  password?: true
  profile?: true
}

export type UserCountAggregateInputType = {
  id?: true
  name?: true
  email?: true
  emailVerified?: true
  image?: true
  password?: true
  profile?: true
  _all?: true
}

export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
    cursor?: Prisma.UserWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | UserCountAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
}

export type GetUserAggregateType<T extends UserAggregateArgs> = {
      [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateUser[P]>
    : Prisma.GetScalarType<T[P], AggregateUser[P]>
}




export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.UserWhereInput
  orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[]
  by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum
  having?: Prisma.UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: UserCountAggregateInputType | true
  _min?: UserMinAggregateInputType
  _max?: UserMaxAggregateInputType
}

export type UserGroupByOutputType = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  password: string | null
  profile: string | null
  _count: UserCountAggregateOutputType | null
  _min: UserMinAggregateOutputType | null
  _max: UserMaxAggregateOutputType | null
}

export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<UserGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >



export type UserWhereInput = {
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  OR?: Prisma.UserWhereInput[]
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  id?: Prisma.StringFilter<"User"> | string
  name?: Prisma.StringNullableFilter<"User"> | string | null
  email?: Prisma.StringNullableFilter<"User"> | string | null
  emailVerified?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  image?: Prisma.StringNullableFilter<"User"> | string | null
  password?: Prisma.StringNullableFilter<"User"> | string | null
  profile?: Prisma.StringNullableFilter<"User"> | string | null
  accounts?: Prisma.AccountListRelationFilter
  sessions?: Prisma.SessionListRelationFilter
  rooms?: Prisma.RoomListRelationFilter
  chats?: Prisma.ChatListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  name?: Prisma.SortOrderInput | Prisma.SortOrder
  email?: Prisma.SortOrderInput | Prisma.SortOrder
  emailVerified?: Prisma.SortOrderInput | Prisma.SortOrder
  image?: Prisma.SortOrderInput | Prisma.SortOrder
  password?: Prisma.SortOrderInput | Prisma.SortOrder
  profile?: Prisma.SortOrderInput | Prisma.SortOrder
  accounts?: Prisma.AccountOrderByRelationAggregateInput
  sessions?: Prisma.SessionOrderByRelationAggregateInput
  rooms?: Prisma.roomOrderByRelationAggregateInput
  chats?: Prisma.chatOrderByRelationAggregateInput
}

export type UserWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  email?: string
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  OR?: Prisma.UserWhereInput[]
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[]
  name?: Prisma.StringNullableFilter<"User"> | string | null
  emailVerified?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null
  image?: Prisma.StringNullableFilter<"User"> | string | null
  password?: Prisma.StringNullableFilter<"User"> | string | null
  profile?: Prisma.StringNullableFilter<"User"> | string | null
  accounts?: Prisma.AccountListRelationFilter
  sessions?: Prisma.SessionListRelationFilter
  rooms?: Prisma.RoomListRelationFilter
  chats?: Prisma.ChatListRelationFilter
}, "id" | "email">

export type UserOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  name?: Prisma.SortOrderInput | Prisma.SortOrder
  email?: Prisma.SortOrderInput | Prisma.SortOrder
  emailVerified?: Prisma.SortOrderInput | Prisma.SortOrder
  image?: Prisma.SortOrderInput | Prisma.SortOrder
  password?: Prisma.SortOrderInput | Prisma.SortOrder
  profile?: Prisma.SortOrderInput | Prisma.SortOrder
  _count?: Prisma.UserCountOrderByAggregateInput
  _max?: Prisma.UserMaxOrderByAggregateInput
  _min?: Prisma.UserMinOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[]
  OR?: Prisma.UserScalarWhereWithAggregatesInput[]
  NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"User"> | string
  name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
  email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
  emailVerified?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
  password?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
  profile?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null
}

export type UserCreateInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomCreateNestedManyWithoutAdminInput
  chats?: Prisma.chatCreateNestedManyWithoutAdminInput
}

export type UserUncheckedCreateInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomUncheckedCreateNestedManyWithoutAdminInput
  chats?: Prisma.chatUncheckedCreateNestedManyWithoutAdminInput
}

export type UserUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUpdateManyWithoutAdminNestedInput
  chats?: Prisma.chatUpdateManyWithoutAdminNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUncheckedUpdateManyWithoutAdminNestedInput
  chats?: Prisma.chatUncheckedUpdateManyWithoutAdminNestedInput
}

export type UserCreateManyInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
}

export type UserUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type UserUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
}

export type UserCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
  email?: Prisma.SortOrder
  emailVerified?: Prisma.SortOrder
  image?: Prisma.SortOrder
  password?: Prisma.SortOrder
  profile?: Prisma.SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
  email?: Prisma.SortOrder
  emailVerified?: Prisma.SortOrder
  image?: Prisma.SortOrder
  password?: Prisma.SortOrder
  profile?: Prisma.SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
  email?: Prisma.SortOrder
  emailVerified?: Prisma.SortOrder
  image?: Prisma.SortOrder
  password?: Prisma.SortOrder
  profile?: Prisma.SortOrder
}

export type UserScalarRelationFilter = {
  is?: Prisma.UserWhereInput
  isNot?: Prisma.UserWhereInput
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Date | string | null
}

export type UserCreateNestedOneWithoutAccountsInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput
  upsert?: Prisma.UserUpsertWithoutAccountsInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, Prisma.UserUpdateWithoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutAccountsInput>
}

export type UserCreateNestedOneWithoutSessionsInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput
  upsert?: Prisma.UserUpsertWithoutSessionsInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>
}

export type UserCreateNestedOneWithoutRoomsInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutRoomsInput, Prisma.UserUncheckedCreateWithoutRoomsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutRoomsInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutRoomsInput, Prisma.UserUncheckedCreateWithoutRoomsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutRoomsInput
  upsert?: Prisma.UserUpsertWithoutRoomsInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRoomsInput, Prisma.UserUpdateWithoutRoomsInput>, Prisma.UserUncheckedUpdateWithoutRoomsInput>
}

export type UserCreateNestedOneWithoutChatsInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutChatsInput, Prisma.UserUncheckedCreateWithoutChatsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutChatsInput
  connect?: Prisma.UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutChatsNestedInput = {
  create?: Prisma.XOR<Prisma.UserCreateWithoutChatsInput, Prisma.UserUncheckedCreateWithoutChatsInput>
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutChatsInput
  upsert?: Prisma.UserUpsertWithoutChatsInput
  connect?: Prisma.UserWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutChatsInput, Prisma.UserUpdateWithoutChatsInput>, Prisma.UserUncheckedUpdateWithoutChatsInput>
}

export type UserCreateWithoutAccountsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomCreateNestedManyWithoutAdminInput
  chats?: Prisma.chatCreateNestedManyWithoutAdminInput
}

export type UserUncheckedCreateWithoutAccountsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomUncheckedCreateNestedManyWithoutAdminInput
  chats?: Prisma.chatUncheckedCreateNestedManyWithoutAdminInput
}

export type UserCreateOrConnectWithoutAccountsInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>
}

export type UserUpsertWithoutAccountsInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>
}

export type UserUpdateWithoutAccountsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUpdateManyWithoutAdminNestedInput
  chats?: Prisma.chatUpdateManyWithoutAdminNestedInput
}

export type UserUncheckedUpdateWithoutAccountsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUncheckedUpdateManyWithoutAdminNestedInput
  chats?: Prisma.chatUncheckedUpdateManyWithoutAdminNestedInput
}

export type UserCreateWithoutSessionsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomCreateNestedManyWithoutAdminInput
  chats?: Prisma.chatCreateNestedManyWithoutAdminInput
}

export type UserUncheckedCreateWithoutSessionsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomUncheckedCreateNestedManyWithoutAdminInput
  chats?: Prisma.chatUncheckedCreateNestedManyWithoutAdminInput
}

export type UserCreateOrConnectWithoutSessionsInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>
}

export type UserUpsertWithoutSessionsInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>
}

export type UserUpdateWithoutSessionsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUpdateManyWithoutAdminNestedInput
  chats?: Prisma.chatUpdateManyWithoutAdminNestedInput
}

export type UserUncheckedUpdateWithoutSessionsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUncheckedUpdateManyWithoutAdminNestedInput
  chats?: Prisma.chatUncheckedUpdateManyWithoutAdminNestedInput
}

export type UserCreateWithoutRoomsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput
  chats?: Prisma.chatCreateNestedManyWithoutAdminInput
}

export type UserUncheckedCreateWithoutRoomsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput
  chats?: Prisma.chatUncheckedCreateNestedManyWithoutAdminInput
}

export type UserCreateOrConnectWithoutRoomsInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutRoomsInput, Prisma.UserUncheckedCreateWithoutRoomsInput>
}

export type UserUpsertWithoutRoomsInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutRoomsInput, Prisma.UserUncheckedUpdateWithoutRoomsInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutRoomsInput, Prisma.UserUncheckedCreateWithoutRoomsInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutRoomsInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutRoomsInput, Prisma.UserUncheckedUpdateWithoutRoomsInput>
}

export type UserUpdateWithoutRoomsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput
  chats?: Prisma.chatUpdateManyWithoutAdminNestedInput
}

export type UserUncheckedUpdateWithoutRoomsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput
  chats?: Prisma.chatUncheckedUpdateManyWithoutAdminNestedInput
}

export type UserCreateWithoutChatsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomCreateNestedManyWithoutAdminInput
}

export type UserUncheckedCreateWithoutChatsInput = {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  password?: string | null
  profile?: string | null
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput
  rooms?: Prisma.roomUncheckedCreateNestedManyWithoutAdminInput
}

export type UserCreateOrConnectWithoutChatsInput = {
  where: Prisma.UserWhereUniqueInput
  create: Prisma.XOR<Prisma.UserCreateWithoutChatsInput, Prisma.UserUncheckedCreateWithoutChatsInput>
}

export type UserUpsertWithoutChatsInput = {
  update: Prisma.XOR<Prisma.UserUpdateWithoutChatsInput, Prisma.UserUncheckedUpdateWithoutChatsInput>
  create: Prisma.XOR<Prisma.UserCreateWithoutChatsInput, Prisma.UserUncheckedCreateWithoutChatsInput>
  where?: Prisma.UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutChatsInput = {
  where?: Prisma.UserWhereInput
  data: Prisma.XOR<Prisma.UserUpdateWithoutChatsInput, Prisma.UserUncheckedUpdateWithoutChatsInput>
}

export type UserUpdateWithoutChatsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUpdateManyWithoutAdminNestedInput
}

export type UserUncheckedUpdateWithoutChatsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  emailVerified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  profile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput
  rooms?: Prisma.roomUncheckedUpdateManyWithoutAdminNestedInput
}



export type UserCountOutputType = {
  accounts: number
  sessions: number
  rooms: number
  chats: number
}

export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  rooms?: boolean | UserCountOutputTypeCountRoomsArgs
  chats?: boolean | UserCountOutputTypeCountChatsArgs
}

export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null
}

export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AccountWhereInput
}

export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.SessionWhereInput
}

export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.roomWhereInput
}

export type UserCountOutputTypeCountChatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.chatWhereInput
}


export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  name?: boolean
  email?: boolean
  emailVerified?: boolean
  image?: boolean
  password?: boolean
  profile?: boolean
  accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>
  sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>
  rooms?: boolean | Prisma.User$roomsArgs<ExtArgs>
  chats?: boolean | Prisma.User$chatsArgs<ExtArgs>
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["user"]>

export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  name?: boolean
  email?: boolean
  emailVerified?: boolean
  image?: boolean
  password?: boolean
  profile?: boolean
}, ExtArgs["result"]["user"]>

export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  name?: boolean
  email?: boolean
  emailVerified?: boolean
  image?: boolean
  password?: boolean
  profile?: boolean
}, ExtArgs["result"]["user"]>

export type UserSelectScalar = {
  id?: boolean
  name?: boolean
  email?: boolean
  emailVerified?: boolean
  image?: boolean
  password?: boolean
  profile?: boolean
}

export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "profile", ExtArgs["result"]["user"]>
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>
  sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>
  rooms?: boolean | Prisma.User$roomsArgs<ExtArgs>
  chats?: boolean | Prisma.User$chatsArgs<ExtArgs>
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>
}
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    accounts: Prisma.$AccountPayload<ExtArgs>[]
    sessions: Prisma.$SessionPayload<ExtArgs>[]
    rooms: Prisma.$roomPayload<ExtArgs>[]
    chats: Prisma.$chatPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    profile: string | null
  }, ExtArgs["result"]["user"]>
  composites: {}
}

export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>

export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true
  }

export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    count<T extends UserCountArgs>(
    args?: Prisma.Subset<T, UserCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType>
      : number
  >

    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    groupBy<
    T extends UserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: UserGroupByArgs['orderBy'] }
      : { orderBy?: UserGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: UserFieldRefs;
}

export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  rooms<T extends Prisma.User$roomsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  chats<T extends Prisma.User$chatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface UserFieldRefs {
  readonly id: Prisma.FieldRef<"User", 'String'>
  readonly name: Prisma.FieldRef<"User", 'String'>
  readonly email: Prisma.FieldRef<"User", 'String'>
  readonly emailVerified: Prisma.FieldRef<"User", 'DateTime'>
  readonly image: Prisma.FieldRef<"User", 'String'>
  readonly password: Prisma.FieldRef<"User", 'String'>
  readonly profile: Prisma.FieldRef<"User", 'String'>
}
    


export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where: Prisma.UserWhereUniqueInput
}

export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where: Prisma.UserWhereUniqueInput
}

export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
    cursor?: Prisma.UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}

export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
    cursor?: Prisma.UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}

export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[]
    cursor?: Prisma.UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[]
}

export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    data?: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>
}

export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[]
  skipDuplicates?: boolean
}

export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[]
  skipDuplicates?: boolean
}

export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>
    where: Prisma.UserWhereUniqueInput
}

export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>
    where?: Prisma.UserWhereInput
    limit?: number
}

export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>
    where?: Prisma.UserWhereInput
    limit?: number
}

export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where: Prisma.UserWhereUniqueInput
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>
}

export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
    where: Prisma.UserWhereUniqueInput
}

export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput
    limit?: number
}

export type User$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null
    omit?: Prisma.AccountOmit<ExtArgs> | null
    include?: Prisma.AccountInclude<ExtArgs> | null
  where?: Prisma.AccountWhereInput
  orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[]
  cursor?: Prisma.AccountWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[]
}

export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null
    omit?: Prisma.SessionOmit<ExtArgs> | null
    include?: Prisma.SessionInclude<ExtArgs> | null
  where?: Prisma.SessionWhereInput
  orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[]
  cursor?: Prisma.SessionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[]
}

export type User$roomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
  where?: Prisma.roomWhereInput
  orderBy?: Prisma.roomOrderByWithRelationInput | Prisma.roomOrderByWithRelationInput[]
  cursor?: Prisma.roomWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[]
}

export type User$chatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
  where?: Prisma.chatWhereInput
  orderBy?: Prisma.chatOrderByWithRelationInput | Prisma.chatOrderByWithRelationInput[]
  cursor?: Prisma.chatWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.ChatScalarFieldEnum | Prisma.ChatScalarFieldEnum[]
}

export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null
    omit?: Prisma.UserOmit<ExtArgs> | null
    include?: Prisma.UserInclude<ExtArgs> | null
}

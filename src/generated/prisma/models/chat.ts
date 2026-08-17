


import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums"
import type * as Prisma from "../internal/prismaNamespace"

export type chatModel = runtime.Types.Result.DefaultSelection<Prisma.$chatPayload>

export type AggregateChat = {
  _count: ChatCountAggregateOutputType | null
  _avg: ChatAvgAggregateOutputType | null
  _sum: ChatSumAggregateOutputType | null
  _min: ChatMinAggregateOutputType | null
  _max: ChatMaxAggregateOutputType | null
}

export type ChatAvgAggregateOutputType = {
  id: number | null
  roomid: number | null
}

export type ChatSumAggregateOutputType = {
  id: number | null
  roomid: number | null
}

export type ChatMinAggregateOutputType = {
  id: number | null
  messages: string | null
  userid: string | null
  roomid: number | null
}

export type ChatMaxAggregateOutputType = {
  id: number | null
  messages: string | null
  userid: string | null
  roomid: number | null
}

export type ChatCountAggregateOutputType = {
  id: number
  messages: number
  userid: number
  roomid: number
  _all: number
}


export type ChatAvgAggregateInputType = {
  id?: true
  roomid?: true
}

export type ChatSumAggregateInputType = {
  id?: true
  roomid?: true
}

export type ChatMinAggregateInputType = {
  id?: true
  messages?: true
  userid?: true
  roomid?: true
}

export type ChatMaxAggregateInputType = {
  id?: true
  messages?: true
  userid?: true
  roomid?: true
}

export type ChatCountAggregateInputType = {
  id?: true
  messages?: true
  userid?: true
  roomid?: true
  _all?: true
}

export type ChatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chatWhereInput
    orderBy?: Prisma.chatOrderByWithRelationInput | Prisma.chatOrderByWithRelationInput[]
    cursor?: Prisma.chatWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | ChatCountAggregateInputType
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
}

export type GetChatAggregateType<T extends ChatAggregateArgs> = {
      [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateChat[P]>
    : Prisma.GetScalarType<T[P], AggregateChat[P]>
}




export type chatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.chatWhereInput
  orderBy?: Prisma.chatOrderByWithAggregationInput | Prisma.chatOrderByWithAggregationInput[]
  by: Prisma.ChatScalarFieldEnum[] | Prisma.ChatScalarFieldEnum
  having?: Prisma.chatScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: ChatCountAggregateInputType | true
  _avg?: ChatAvgAggregateInputType
  _sum?: ChatSumAggregateInputType
  _min?: ChatMinAggregateInputType
  _max?: ChatMaxAggregateInputType
}

export type ChatGroupByOutputType = {
  id: number
  messages: string
  userid: string
  roomid: number
  _count: ChatCountAggregateOutputType | null
  _avg: ChatAvgAggregateOutputType | null
  _sum: ChatSumAggregateOutputType | null
  _min: ChatMinAggregateOutputType | null
  _max: ChatMaxAggregateOutputType | null
}

export type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<ChatGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], ChatGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], ChatGroupByOutputType[P]>
      }
    >
  >



export type chatWhereInput = {
  AND?: Prisma.chatWhereInput | Prisma.chatWhereInput[]
  OR?: Prisma.chatWhereInput[]
  NOT?: Prisma.chatWhereInput | Prisma.chatWhereInput[]
  id?: Prisma.IntFilter<"chat"> | number
  messages?: Prisma.StringFilter<"chat"> | string
  userid?: Prisma.StringFilter<"chat"> | string
  roomid?: Prisma.IntFilter<"chat"> | number
  room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.roomWhereInput>
  admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
}

export type chatOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  messages?: Prisma.SortOrder
  userid?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
  room?: Prisma.roomOrderByWithRelationInput
  admin?: Prisma.UserOrderByWithRelationInput
}

export type chatWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: Prisma.chatWhereInput | Prisma.chatWhereInput[]
  OR?: Prisma.chatWhereInput[]
  NOT?: Prisma.chatWhereInput | Prisma.chatWhereInput[]
  messages?: Prisma.StringFilter<"chat"> | string
  userid?: Prisma.StringFilter<"chat"> | string
  roomid?: Prisma.IntFilter<"chat"> | number
  room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.roomWhereInput>
  admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
}, "id">

export type chatOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  messages?: Prisma.SortOrder
  userid?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
  _count?: Prisma.chatCountOrderByAggregateInput
  _avg?: Prisma.chatAvgOrderByAggregateInput
  _max?: Prisma.chatMaxOrderByAggregateInput
  _min?: Prisma.chatMinOrderByAggregateInput
  _sum?: Prisma.chatSumOrderByAggregateInput
}

export type chatScalarWhereWithAggregatesInput = {
  AND?: Prisma.chatScalarWhereWithAggregatesInput | Prisma.chatScalarWhereWithAggregatesInput[]
  OR?: Prisma.chatScalarWhereWithAggregatesInput[]
  NOT?: Prisma.chatScalarWhereWithAggregatesInput | Prisma.chatScalarWhereWithAggregatesInput[]
  id?: Prisma.IntWithAggregatesFilter<"chat"> | number
  messages?: Prisma.StringWithAggregatesFilter<"chat"> | string
  userid?: Prisma.StringWithAggregatesFilter<"chat"> | string
  roomid?: Prisma.IntWithAggregatesFilter<"chat"> | number
}

export type chatCreateInput = {
  messages: string
  room: Prisma.roomCreateNestedOneWithoutChatInput
  admin: Prisma.UserCreateNestedOneWithoutChatsInput
}

export type chatUncheckedCreateInput = {
  id?: number
  messages: string
  userid: string
  roomid: number
}

export type chatUpdateInput = {
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  room?: Prisma.roomUpdateOneRequiredWithoutChatNestedInput
  admin?: Prisma.UserUpdateOneRequiredWithoutChatsNestedInput
}

export type chatUncheckedUpdateInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  userid?: Prisma.StringFieldUpdateOperationsInput | string
  roomid?: Prisma.IntFieldUpdateOperationsInput | number
}

export type chatCreateManyInput = {
  id?: number
  messages: string
  userid: string
  roomid: number
}

export type chatUpdateManyMutationInput = {
  messages?: Prisma.StringFieldUpdateOperationsInput | string
}

export type chatUncheckedUpdateManyInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  userid?: Prisma.StringFieldUpdateOperationsInput | string
  roomid?: Prisma.IntFieldUpdateOperationsInput | number
}

export type ChatListRelationFilter = {
  every?: Prisma.chatWhereInput
  some?: Prisma.chatWhereInput
  none?: Prisma.chatWhereInput
}

export type chatOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type chatCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  messages?: Prisma.SortOrder
  userid?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
}

export type chatAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
}

export type chatMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  messages?: Prisma.SortOrder
  userid?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
}

export type chatMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  messages?: Prisma.SortOrder
  userid?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
}

export type chatSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
  roomid?: Prisma.SortOrder
}

export type chatCreateNestedManyWithoutAdminInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutAdminInput, Prisma.chatUncheckedCreateWithoutAdminInput> | Prisma.chatCreateWithoutAdminInput[] | Prisma.chatUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutAdminInput | Prisma.chatCreateOrConnectWithoutAdminInput[]
  createMany?: Prisma.chatCreateManyAdminInputEnvelope
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
}

export type chatUncheckedCreateNestedManyWithoutAdminInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutAdminInput, Prisma.chatUncheckedCreateWithoutAdminInput> | Prisma.chatCreateWithoutAdminInput[] | Prisma.chatUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutAdminInput | Prisma.chatCreateOrConnectWithoutAdminInput[]
  createMany?: Prisma.chatCreateManyAdminInputEnvelope
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
}

export type chatUpdateManyWithoutAdminNestedInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutAdminInput, Prisma.chatUncheckedCreateWithoutAdminInput> | Prisma.chatCreateWithoutAdminInput[] | Prisma.chatUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutAdminInput | Prisma.chatCreateOrConnectWithoutAdminInput[]
  upsert?: Prisma.chatUpsertWithWhereUniqueWithoutAdminInput | Prisma.chatUpsertWithWhereUniqueWithoutAdminInput[]
  createMany?: Prisma.chatCreateManyAdminInputEnvelope
  set?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  disconnect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  delete?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  update?: Prisma.chatUpdateWithWhereUniqueWithoutAdminInput | Prisma.chatUpdateWithWhereUniqueWithoutAdminInput[]
  updateMany?: Prisma.chatUpdateManyWithWhereWithoutAdminInput | Prisma.chatUpdateManyWithWhereWithoutAdminInput[]
  deleteMany?: Prisma.chatScalarWhereInput | Prisma.chatScalarWhereInput[]
}

export type chatUncheckedUpdateManyWithoutAdminNestedInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutAdminInput, Prisma.chatUncheckedCreateWithoutAdminInput> | Prisma.chatCreateWithoutAdminInput[] | Prisma.chatUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutAdminInput | Prisma.chatCreateOrConnectWithoutAdminInput[]
  upsert?: Prisma.chatUpsertWithWhereUniqueWithoutAdminInput | Prisma.chatUpsertWithWhereUniqueWithoutAdminInput[]
  createMany?: Prisma.chatCreateManyAdminInputEnvelope
  set?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  disconnect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  delete?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  update?: Prisma.chatUpdateWithWhereUniqueWithoutAdminInput | Prisma.chatUpdateWithWhereUniqueWithoutAdminInput[]
  updateMany?: Prisma.chatUpdateManyWithWhereWithoutAdminInput | Prisma.chatUpdateManyWithWhereWithoutAdminInput[]
  deleteMany?: Prisma.chatScalarWhereInput | Prisma.chatScalarWhereInput[]
}

export type chatCreateNestedManyWithoutRoomInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutRoomInput, Prisma.chatUncheckedCreateWithoutRoomInput> | Prisma.chatCreateWithoutRoomInput[] | Prisma.chatUncheckedCreateWithoutRoomInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutRoomInput | Prisma.chatCreateOrConnectWithoutRoomInput[]
  createMany?: Prisma.chatCreateManyRoomInputEnvelope
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
}

export type chatUncheckedCreateNestedManyWithoutRoomInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutRoomInput, Prisma.chatUncheckedCreateWithoutRoomInput> | Prisma.chatCreateWithoutRoomInput[] | Prisma.chatUncheckedCreateWithoutRoomInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutRoomInput | Prisma.chatCreateOrConnectWithoutRoomInput[]
  createMany?: Prisma.chatCreateManyRoomInputEnvelope
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
}

export type chatUpdateManyWithoutRoomNestedInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutRoomInput, Prisma.chatUncheckedCreateWithoutRoomInput> | Prisma.chatCreateWithoutRoomInput[] | Prisma.chatUncheckedCreateWithoutRoomInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutRoomInput | Prisma.chatCreateOrConnectWithoutRoomInput[]
  upsert?: Prisma.chatUpsertWithWhereUniqueWithoutRoomInput | Prisma.chatUpsertWithWhereUniqueWithoutRoomInput[]
  createMany?: Prisma.chatCreateManyRoomInputEnvelope
  set?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  disconnect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  delete?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  update?: Prisma.chatUpdateWithWhereUniqueWithoutRoomInput | Prisma.chatUpdateWithWhereUniqueWithoutRoomInput[]
  updateMany?: Prisma.chatUpdateManyWithWhereWithoutRoomInput | Prisma.chatUpdateManyWithWhereWithoutRoomInput[]
  deleteMany?: Prisma.chatScalarWhereInput | Prisma.chatScalarWhereInput[]
}

export type chatUncheckedUpdateManyWithoutRoomNestedInput = {
  create?: Prisma.XOR<Prisma.chatCreateWithoutRoomInput, Prisma.chatUncheckedCreateWithoutRoomInput> | Prisma.chatCreateWithoutRoomInput[] | Prisma.chatUncheckedCreateWithoutRoomInput[]
  connectOrCreate?: Prisma.chatCreateOrConnectWithoutRoomInput | Prisma.chatCreateOrConnectWithoutRoomInput[]
  upsert?: Prisma.chatUpsertWithWhereUniqueWithoutRoomInput | Prisma.chatUpsertWithWhereUniqueWithoutRoomInput[]
  createMany?: Prisma.chatCreateManyRoomInputEnvelope
  set?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  disconnect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  delete?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  connect?: Prisma.chatWhereUniqueInput | Prisma.chatWhereUniqueInput[]
  update?: Prisma.chatUpdateWithWhereUniqueWithoutRoomInput | Prisma.chatUpdateWithWhereUniqueWithoutRoomInput[]
  updateMany?: Prisma.chatUpdateManyWithWhereWithoutRoomInput | Prisma.chatUpdateManyWithWhereWithoutRoomInput[]
  deleteMany?: Prisma.chatScalarWhereInput | Prisma.chatScalarWhereInput[]
}

export type chatCreateWithoutAdminInput = {
  messages: string
  room: Prisma.roomCreateNestedOneWithoutChatInput
}

export type chatUncheckedCreateWithoutAdminInput = {
  id?: number
  messages: string
  roomid: number
}

export type chatCreateOrConnectWithoutAdminInput = {
  where: Prisma.chatWhereUniqueInput
  create: Prisma.XOR<Prisma.chatCreateWithoutAdminInput, Prisma.chatUncheckedCreateWithoutAdminInput>
}

export type chatCreateManyAdminInputEnvelope = {
  data: Prisma.chatCreateManyAdminInput | Prisma.chatCreateManyAdminInput[]
  skipDuplicates?: boolean
}

export type chatUpsertWithWhereUniqueWithoutAdminInput = {
  where: Prisma.chatWhereUniqueInput
  update: Prisma.XOR<Prisma.chatUpdateWithoutAdminInput, Prisma.chatUncheckedUpdateWithoutAdminInput>
  create: Prisma.XOR<Prisma.chatCreateWithoutAdminInput, Prisma.chatUncheckedCreateWithoutAdminInput>
}

export type chatUpdateWithWhereUniqueWithoutAdminInput = {
  where: Prisma.chatWhereUniqueInput
  data: Prisma.XOR<Prisma.chatUpdateWithoutAdminInput, Prisma.chatUncheckedUpdateWithoutAdminInput>
}

export type chatUpdateManyWithWhereWithoutAdminInput = {
  where: Prisma.chatScalarWhereInput
  data: Prisma.XOR<Prisma.chatUpdateManyMutationInput, Prisma.chatUncheckedUpdateManyWithoutAdminInput>
}

export type chatScalarWhereInput = {
  AND?: Prisma.chatScalarWhereInput | Prisma.chatScalarWhereInput[]
  OR?: Prisma.chatScalarWhereInput[]
  NOT?: Prisma.chatScalarWhereInput | Prisma.chatScalarWhereInput[]
  id?: Prisma.IntFilter<"chat"> | number
  messages?: Prisma.StringFilter<"chat"> | string
  userid?: Prisma.StringFilter<"chat"> | string
  roomid?: Prisma.IntFilter<"chat"> | number
}

export type chatCreateWithoutRoomInput = {
  messages: string
  admin: Prisma.UserCreateNestedOneWithoutChatsInput
}

export type chatUncheckedCreateWithoutRoomInput = {
  id?: number
  messages: string
  userid: string
}

export type chatCreateOrConnectWithoutRoomInput = {
  where: Prisma.chatWhereUniqueInput
  create: Prisma.XOR<Prisma.chatCreateWithoutRoomInput, Prisma.chatUncheckedCreateWithoutRoomInput>
}

export type chatCreateManyRoomInputEnvelope = {
  data: Prisma.chatCreateManyRoomInput | Prisma.chatCreateManyRoomInput[]
  skipDuplicates?: boolean
}

export type chatUpsertWithWhereUniqueWithoutRoomInput = {
  where: Prisma.chatWhereUniqueInput
  update: Prisma.XOR<Prisma.chatUpdateWithoutRoomInput, Prisma.chatUncheckedUpdateWithoutRoomInput>
  create: Prisma.XOR<Prisma.chatCreateWithoutRoomInput, Prisma.chatUncheckedCreateWithoutRoomInput>
}

export type chatUpdateWithWhereUniqueWithoutRoomInput = {
  where: Prisma.chatWhereUniqueInput
  data: Prisma.XOR<Prisma.chatUpdateWithoutRoomInput, Prisma.chatUncheckedUpdateWithoutRoomInput>
}

export type chatUpdateManyWithWhereWithoutRoomInput = {
  where: Prisma.chatScalarWhereInput
  data: Prisma.XOR<Prisma.chatUpdateManyMutationInput, Prisma.chatUncheckedUpdateManyWithoutRoomInput>
}

export type chatCreateManyAdminInput = {
  id?: number
  messages: string
  roomid: number
}

export type chatUpdateWithoutAdminInput = {
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  room?: Prisma.roomUpdateOneRequiredWithoutChatNestedInput
}

export type chatUncheckedUpdateWithoutAdminInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  roomid?: Prisma.IntFieldUpdateOperationsInput | number
}

export type chatUncheckedUpdateManyWithoutAdminInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  roomid?: Prisma.IntFieldUpdateOperationsInput | number
}

export type chatCreateManyRoomInput = {
  id?: number
  messages: string
  userid: string
}

export type chatUpdateWithoutRoomInput = {
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  admin?: Prisma.UserUpdateOneRequiredWithoutChatsNestedInput
}

export type chatUncheckedUpdateWithoutRoomInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  userid?: Prisma.StringFieldUpdateOperationsInput | string
}

export type chatUncheckedUpdateManyWithoutRoomInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  messages?: Prisma.StringFieldUpdateOperationsInput | string
  userid?: Prisma.StringFieldUpdateOperationsInput | string
}



export type chatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  messages?: boolean
  userid?: boolean
  roomid?: boolean
  room?: boolean | Prisma.roomDefaultArgs<ExtArgs>
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["chat"]>

export type chatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  messages?: boolean
  userid?: boolean
  roomid?: boolean
  room?: boolean | Prisma.roomDefaultArgs<ExtArgs>
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["chat"]>

export type chatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  messages?: boolean
  userid?: boolean
  roomid?: boolean
  room?: boolean | Prisma.roomDefaultArgs<ExtArgs>
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["chat"]>

export type chatSelectScalar = {
  id?: boolean
  messages?: boolean
  userid?: boolean
  roomid?: boolean
}

export type chatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "messages" | "userid" | "roomid", ExtArgs["result"]["chat"]>
export type chatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  room?: boolean | Prisma.roomDefaultArgs<ExtArgs>
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type chatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  room?: boolean | Prisma.roomDefaultArgs<ExtArgs>
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type chatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  room?: boolean | Prisma.roomDefaultArgs<ExtArgs>
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}

export type $chatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "chat"
  objects: {
    room: Prisma.$roomPayload<ExtArgs>
    admin: Prisma.$UserPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: number
    messages: string
    userid: string
    roomid: number
  }, ExtArgs["result"]["chat"]>
  composites: {}
}

export type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$chatPayload, S>

export type chatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatCountAggregateInputType | true
  }

export interface chatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    findUnique<T extends chatFindUniqueArgs>(args: Prisma.SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    findFirst<T extends chatFindFirstArgs>(args?: Prisma.SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    findMany<T extends chatFindManyArgs>(args?: Prisma.SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    create<T extends chatCreateArgs>(args: Prisma.SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    createMany<T extends chatCreateManyArgs>(args?: Prisma.SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    createManyAndReturn<T extends chatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, chatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    delete<T extends chatDeleteArgs>(args: Prisma.SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    update<T extends chatUpdateArgs>(args: Prisma.SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    deleteMany<T extends chatDeleteManyArgs>(args?: Prisma.SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    updateMany<T extends chatUpdateManyArgs>(args: Prisma.SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    updateManyAndReturn<T extends chatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, chatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    upsert<T extends chatUpsertArgs>(args: Prisma.SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma.Prisma__chatClient<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    count<T extends chatCountArgs>(
    args?: Prisma.Subset<T, chatCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], ChatCountAggregateOutputType>
      : number
  >

    aggregate<T extends ChatAggregateArgs>(args: Prisma.Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    groupBy<
    T extends chatGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: chatGroupByArgs['orderBy'] }
      : { orderBy?: chatGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: chatFieldRefs;
}

export interface Prisma__chatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  room<T extends Prisma.roomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roomDefaultArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  admin<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface chatFieldRefs {
  readonly id: Prisma.FieldRef<"chat", 'Int'>
  readonly messages: Prisma.FieldRef<"chat", 'String'>
  readonly userid: Prisma.FieldRef<"chat", 'String'>
  readonly roomid: Prisma.FieldRef<"chat", 'Int'>
}
    


export type chatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
    where: Prisma.chatWhereUniqueInput
}

export type chatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
    where: Prisma.chatWhereUniqueInput
}

export type chatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type chatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type chatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type chatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
    data: Prisma.XOR<Prisma.chatCreateInput, Prisma.chatUncheckedCreateInput>
}

export type chatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.chatCreateManyInput | Prisma.chatCreateManyInput[]
  skipDuplicates?: boolean
}

export type chatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelectCreateManyAndReturn<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    data: Prisma.chatCreateManyInput | Prisma.chatCreateManyInput[]
  skipDuplicates?: boolean
    include?: Prisma.chatIncludeCreateManyAndReturn<ExtArgs> | null
}

export type chatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
    data: Prisma.XOR<Prisma.chatUpdateInput, Prisma.chatUncheckedUpdateInput>
    where: Prisma.chatWhereUniqueInput
}

export type chatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.chatUpdateManyMutationInput, Prisma.chatUncheckedUpdateManyInput>
    where?: Prisma.chatWhereInput
    limit?: number
}

export type chatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelectUpdateManyAndReturn<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    data: Prisma.XOR<Prisma.chatUpdateManyMutationInput, Prisma.chatUncheckedUpdateManyInput>
    where?: Prisma.chatWhereInput
    limit?: number
    include?: Prisma.chatIncludeUpdateManyAndReturn<ExtArgs> | null
}

export type chatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
    where: Prisma.chatWhereUniqueInput
    create: Prisma.XOR<Prisma.chatCreateInput, Prisma.chatUncheckedCreateInput>
    update: Prisma.XOR<Prisma.chatUpdateInput, Prisma.chatUncheckedUpdateInput>
}

export type chatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
    where: Prisma.chatWhereUniqueInput
}

export type chatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chatWhereInput
    limit?: number
}

export type chatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatSelect<ExtArgs> | null
    omit?: Prisma.chatOmit<ExtArgs> | null
    include?: Prisma.chatInclude<ExtArgs> | null
}

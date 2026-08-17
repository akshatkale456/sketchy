


import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums"
import type * as Prisma from "../internal/prismaNamespace"

export type roomModel = runtime.Types.Result.DefaultSelection<Prisma.$roomPayload>

export type AggregateRoom = {
  _count: RoomCountAggregateOutputType | null
  _avg: RoomAvgAggregateOutputType | null
  _sum: RoomSumAggregateOutputType | null
  _min: RoomMinAggregateOutputType | null
  _max: RoomMaxAggregateOutputType | null
}

export type RoomAvgAggregateOutputType = {
  id: number | null
}

export type RoomSumAggregateOutputType = {
  id: number | null
}

export type RoomMinAggregateOutputType = {
  adminid: string | null
  id: number | null
  name: string | null
}

export type RoomMaxAggregateOutputType = {
  adminid: string | null
  id: number | null
  name: string | null
}

export type RoomCountAggregateOutputType = {
  adminid: number
  id: number
  name: number
  _all: number
}


export type RoomAvgAggregateInputType = {
  id?: true
}

export type RoomSumAggregateInputType = {
  id?: true
}

export type RoomMinAggregateInputType = {
  adminid?: true
  id?: true
  name?: true
}

export type RoomMaxAggregateInputType = {
  adminid?: true
  id?: true
  name?: true
}

export type RoomCountAggregateInputType = {
  adminid?: true
  id?: true
  name?: true
  _all?: true
}

export type RoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roomWhereInput
    orderBy?: Prisma.roomOrderByWithRelationInput | Prisma.roomOrderByWithRelationInput[]
    cursor?: Prisma.roomWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | RoomCountAggregateInputType
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
}

export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
      [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateRoom[P]>
    : Prisma.GetScalarType<T[P], AggregateRoom[P]>
}




export type roomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.roomWhereInput
  orderBy?: Prisma.roomOrderByWithAggregationInput | Prisma.roomOrderByWithAggregationInput[]
  by: Prisma.RoomScalarFieldEnum[] | Prisma.RoomScalarFieldEnum
  having?: Prisma.roomScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: RoomCountAggregateInputType | true
  _avg?: RoomAvgAggregateInputType
  _sum?: RoomSumAggregateInputType
  _min?: RoomMinAggregateInputType
  _max?: RoomMaxAggregateInputType
}

export type RoomGroupByOutputType = {
  adminid: string
  id: number
  name: string
  _count: RoomCountAggregateOutputType | null
  _avg: RoomAvgAggregateOutputType | null
  _sum: RoomSumAggregateOutputType | null
  _min: RoomMinAggregateOutputType | null
  _max: RoomMaxAggregateOutputType | null
}

export type GetRoomGroupByPayload<T extends roomGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<RoomGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]>
      }
    >
  >



export type roomWhereInput = {
  AND?: Prisma.roomWhereInput | Prisma.roomWhereInput[]
  OR?: Prisma.roomWhereInput[]
  NOT?: Prisma.roomWhereInput | Prisma.roomWhereInput[]
  adminid?: Prisma.StringFilter<"room"> | string
  id?: Prisma.IntFilter<"room"> | number
  name?: Prisma.StringFilter<"room"> | string
  admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
  chat?: Prisma.ChatListRelationFilter
}

export type roomOrderByWithRelationInput = {
  adminid?: Prisma.SortOrder
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
  admin?: Prisma.UserOrderByWithRelationInput
  chat?: Prisma.chatOrderByRelationAggregateInput
}

export type roomWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  name?: string
  AND?: Prisma.roomWhereInput | Prisma.roomWhereInput[]
  OR?: Prisma.roomWhereInput[]
  NOT?: Prisma.roomWhereInput | Prisma.roomWhereInput[]
  adminid?: Prisma.StringFilter<"room"> | string
  admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
  chat?: Prisma.ChatListRelationFilter
}, "id" | "name">

export type roomOrderByWithAggregationInput = {
  adminid?: Prisma.SortOrder
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
  _count?: Prisma.roomCountOrderByAggregateInput
  _avg?: Prisma.roomAvgOrderByAggregateInput
  _max?: Prisma.roomMaxOrderByAggregateInput
  _min?: Prisma.roomMinOrderByAggregateInput
  _sum?: Prisma.roomSumOrderByAggregateInput
}

export type roomScalarWhereWithAggregatesInput = {
  AND?: Prisma.roomScalarWhereWithAggregatesInput | Prisma.roomScalarWhereWithAggregatesInput[]
  OR?: Prisma.roomScalarWhereWithAggregatesInput[]
  NOT?: Prisma.roomScalarWhereWithAggregatesInput | Prisma.roomScalarWhereWithAggregatesInput[]
  adminid?: Prisma.StringWithAggregatesFilter<"room"> | string
  id?: Prisma.IntWithAggregatesFilter<"room"> | number
  name?: Prisma.StringWithAggregatesFilter<"room"> | string
}

export type roomCreateInput = {
  name: string
  admin: Prisma.UserCreateNestedOneWithoutRoomsInput
  chat?: Prisma.chatCreateNestedManyWithoutRoomInput
}

export type roomUncheckedCreateInput = {
  adminid: string
  id?: number
  name: string
  chat?: Prisma.chatUncheckedCreateNestedManyWithoutRoomInput
}

export type roomUpdateInput = {
  name?: Prisma.StringFieldUpdateOperationsInput | string
  admin?: Prisma.UserUpdateOneRequiredWithoutRoomsNestedInput
  chat?: Prisma.chatUpdateManyWithoutRoomNestedInput
}

export type roomUncheckedUpdateInput = {
  adminid?: Prisma.StringFieldUpdateOperationsInput | string
  id?: Prisma.IntFieldUpdateOperationsInput | number
  name?: Prisma.StringFieldUpdateOperationsInput | string
  chat?: Prisma.chatUncheckedUpdateManyWithoutRoomNestedInput
}

export type roomCreateManyInput = {
  adminid: string
  id?: number
  name: string
}

export type roomUpdateManyMutationInput = {
  name?: Prisma.StringFieldUpdateOperationsInput | string
}

export type roomUncheckedUpdateManyInput = {
  adminid?: Prisma.StringFieldUpdateOperationsInput | string
  id?: Prisma.IntFieldUpdateOperationsInput | number
  name?: Prisma.StringFieldUpdateOperationsInput | string
}

export type RoomListRelationFilter = {
  every?: Prisma.roomWhereInput
  some?: Prisma.roomWhereInput
  none?: Prisma.roomWhereInput
}

export type roomOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}

export type roomCountOrderByAggregateInput = {
  adminid?: Prisma.SortOrder
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
}

export type roomAvgOrderByAggregateInput = {
  id?: Prisma.SortOrder
}

export type roomMaxOrderByAggregateInput = {
  adminid?: Prisma.SortOrder
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
}

export type roomMinOrderByAggregateInput = {
  adminid?: Prisma.SortOrder
  id?: Prisma.SortOrder
  name?: Prisma.SortOrder
}

export type roomSumOrderByAggregateInput = {
  id?: Prisma.SortOrder
}

export type RoomScalarRelationFilter = {
  is?: Prisma.roomWhereInput
  isNot?: Prisma.roomWhereInput
}

export type roomCreateNestedManyWithoutAdminInput = {
  create?: Prisma.XOR<Prisma.roomCreateWithoutAdminInput, Prisma.roomUncheckedCreateWithoutAdminInput> | Prisma.roomCreateWithoutAdminInput[] | Prisma.roomUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.roomCreateOrConnectWithoutAdminInput | Prisma.roomCreateOrConnectWithoutAdminInput[]
  createMany?: Prisma.roomCreateManyAdminInputEnvelope
  connect?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
}

export type roomUncheckedCreateNestedManyWithoutAdminInput = {
  create?: Prisma.XOR<Prisma.roomCreateWithoutAdminInput, Prisma.roomUncheckedCreateWithoutAdminInput> | Prisma.roomCreateWithoutAdminInput[] | Prisma.roomUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.roomCreateOrConnectWithoutAdminInput | Prisma.roomCreateOrConnectWithoutAdminInput[]
  createMany?: Prisma.roomCreateManyAdminInputEnvelope
  connect?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
}

export type roomUpdateManyWithoutAdminNestedInput = {
  create?: Prisma.XOR<Prisma.roomCreateWithoutAdminInput, Prisma.roomUncheckedCreateWithoutAdminInput> | Prisma.roomCreateWithoutAdminInput[] | Prisma.roomUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.roomCreateOrConnectWithoutAdminInput | Prisma.roomCreateOrConnectWithoutAdminInput[]
  upsert?: Prisma.roomUpsertWithWhereUniqueWithoutAdminInput | Prisma.roomUpsertWithWhereUniqueWithoutAdminInput[]
  createMany?: Prisma.roomCreateManyAdminInputEnvelope
  set?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  disconnect?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  delete?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  connect?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  update?: Prisma.roomUpdateWithWhereUniqueWithoutAdminInput | Prisma.roomUpdateWithWhereUniqueWithoutAdminInput[]
  updateMany?: Prisma.roomUpdateManyWithWhereWithoutAdminInput | Prisma.roomUpdateManyWithWhereWithoutAdminInput[]
  deleteMany?: Prisma.roomScalarWhereInput | Prisma.roomScalarWhereInput[]
}

export type roomUncheckedUpdateManyWithoutAdminNestedInput = {
  create?: Prisma.XOR<Prisma.roomCreateWithoutAdminInput, Prisma.roomUncheckedCreateWithoutAdminInput> | Prisma.roomCreateWithoutAdminInput[] | Prisma.roomUncheckedCreateWithoutAdminInput[]
  connectOrCreate?: Prisma.roomCreateOrConnectWithoutAdminInput | Prisma.roomCreateOrConnectWithoutAdminInput[]
  upsert?: Prisma.roomUpsertWithWhereUniqueWithoutAdminInput | Prisma.roomUpsertWithWhereUniqueWithoutAdminInput[]
  createMany?: Prisma.roomCreateManyAdminInputEnvelope
  set?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  disconnect?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  delete?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  connect?: Prisma.roomWhereUniqueInput | Prisma.roomWhereUniqueInput[]
  update?: Prisma.roomUpdateWithWhereUniqueWithoutAdminInput | Prisma.roomUpdateWithWhereUniqueWithoutAdminInput[]
  updateMany?: Prisma.roomUpdateManyWithWhereWithoutAdminInput | Prisma.roomUpdateManyWithWhereWithoutAdminInput[]
  deleteMany?: Prisma.roomScalarWhereInput | Prisma.roomScalarWhereInput[]
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type roomCreateNestedOneWithoutChatInput = {
  create?: Prisma.XOR<Prisma.roomCreateWithoutChatInput, Prisma.roomUncheckedCreateWithoutChatInput>
  connectOrCreate?: Prisma.roomCreateOrConnectWithoutChatInput
  connect?: Prisma.roomWhereUniqueInput
}

export type roomUpdateOneRequiredWithoutChatNestedInput = {
  create?: Prisma.XOR<Prisma.roomCreateWithoutChatInput, Prisma.roomUncheckedCreateWithoutChatInput>
  connectOrCreate?: Prisma.roomCreateOrConnectWithoutChatInput
  upsert?: Prisma.roomUpsertWithoutChatInput
  connect?: Prisma.roomWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.roomUpdateToOneWithWhereWithoutChatInput, Prisma.roomUpdateWithoutChatInput>, Prisma.roomUncheckedUpdateWithoutChatInput>
}

export type roomCreateWithoutAdminInput = {
  name: string
  chat?: Prisma.chatCreateNestedManyWithoutRoomInput
}

export type roomUncheckedCreateWithoutAdminInput = {
  id?: number
  name: string
  chat?: Prisma.chatUncheckedCreateNestedManyWithoutRoomInput
}

export type roomCreateOrConnectWithoutAdminInput = {
  where: Prisma.roomWhereUniqueInput
  create: Prisma.XOR<Prisma.roomCreateWithoutAdminInput, Prisma.roomUncheckedCreateWithoutAdminInput>
}

export type roomCreateManyAdminInputEnvelope = {
  data: Prisma.roomCreateManyAdminInput | Prisma.roomCreateManyAdminInput[]
  skipDuplicates?: boolean
}

export type roomUpsertWithWhereUniqueWithoutAdminInput = {
  where: Prisma.roomWhereUniqueInput
  update: Prisma.XOR<Prisma.roomUpdateWithoutAdminInput, Prisma.roomUncheckedUpdateWithoutAdminInput>
  create: Prisma.XOR<Prisma.roomCreateWithoutAdminInput, Prisma.roomUncheckedCreateWithoutAdminInput>
}

export type roomUpdateWithWhereUniqueWithoutAdminInput = {
  where: Prisma.roomWhereUniqueInput
  data: Prisma.XOR<Prisma.roomUpdateWithoutAdminInput, Prisma.roomUncheckedUpdateWithoutAdminInput>
}

export type roomUpdateManyWithWhereWithoutAdminInput = {
  where: Prisma.roomScalarWhereInput
  data: Prisma.XOR<Prisma.roomUpdateManyMutationInput, Prisma.roomUncheckedUpdateManyWithoutAdminInput>
}

export type roomScalarWhereInput = {
  AND?: Prisma.roomScalarWhereInput | Prisma.roomScalarWhereInput[]
  OR?: Prisma.roomScalarWhereInput[]
  NOT?: Prisma.roomScalarWhereInput | Prisma.roomScalarWhereInput[]
  adminid?: Prisma.StringFilter<"room"> | string
  id?: Prisma.IntFilter<"room"> | number
  name?: Prisma.StringFilter<"room"> | string
}

export type roomCreateWithoutChatInput = {
  name: string
  admin: Prisma.UserCreateNestedOneWithoutRoomsInput
}

export type roomUncheckedCreateWithoutChatInput = {
  adminid: string
  id?: number
  name: string
}

export type roomCreateOrConnectWithoutChatInput = {
  where: Prisma.roomWhereUniqueInput
  create: Prisma.XOR<Prisma.roomCreateWithoutChatInput, Prisma.roomUncheckedCreateWithoutChatInput>
}

export type roomUpsertWithoutChatInput = {
  update: Prisma.XOR<Prisma.roomUpdateWithoutChatInput, Prisma.roomUncheckedUpdateWithoutChatInput>
  create: Prisma.XOR<Prisma.roomCreateWithoutChatInput, Prisma.roomUncheckedCreateWithoutChatInput>
  where?: Prisma.roomWhereInput
}

export type roomUpdateToOneWithWhereWithoutChatInput = {
  where?: Prisma.roomWhereInput
  data: Prisma.XOR<Prisma.roomUpdateWithoutChatInput, Prisma.roomUncheckedUpdateWithoutChatInput>
}

export type roomUpdateWithoutChatInput = {
  name?: Prisma.StringFieldUpdateOperationsInput | string
  admin?: Prisma.UserUpdateOneRequiredWithoutRoomsNestedInput
}

export type roomUncheckedUpdateWithoutChatInput = {
  adminid?: Prisma.StringFieldUpdateOperationsInput | string
  id?: Prisma.IntFieldUpdateOperationsInput | number
  name?: Prisma.StringFieldUpdateOperationsInput | string
}

export type roomCreateManyAdminInput = {
  id?: number
  name: string
}

export type roomUpdateWithoutAdminInput = {
  name?: Prisma.StringFieldUpdateOperationsInput | string
  chat?: Prisma.chatUpdateManyWithoutRoomNestedInput
}

export type roomUncheckedUpdateWithoutAdminInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  name?: Prisma.StringFieldUpdateOperationsInput | string
  chat?: Prisma.chatUncheckedUpdateManyWithoutRoomNestedInput
}

export type roomUncheckedUpdateManyWithoutAdminInput = {
  id?: Prisma.IntFieldUpdateOperationsInput | number
  name?: Prisma.StringFieldUpdateOperationsInput | string
}



export type RoomCountOutputType = {
  chat: number
}

export type RoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  chat?: boolean | RoomCountOutputTypeCountChatArgs
}

export type RoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomCountOutputTypeSelect<ExtArgs> | null
}

export type RoomCountOutputTypeCountChatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.chatWhereInput
}


export type roomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  adminid?: boolean
  id?: boolean
  name?: boolean
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
  chat?: boolean | Prisma.room$chatArgs<ExtArgs>
  _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["room"]>

export type roomSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  adminid?: boolean
  id?: boolean
  name?: boolean
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["room"]>

export type roomSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  adminid?: boolean
  id?: boolean
  name?: boolean
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["room"]>

export type roomSelectScalar = {
  adminid?: boolean
  id?: boolean
  name?: boolean
}

export type roomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"adminid" | "id" | "name", ExtArgs["result"]["room"]>
export type roomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
  chat?: boolean | Prisma.room$chatArgs<ExtArgs>
  _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>
}
export type roomIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type roomIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}

export type $roomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "room"
  objects: {
    admin: Prisma.$UserPayload<ExtArgs>
    chat: Prisma.$chatPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    adminid: string
    id: number
    name: string
  }, ExtArgs["result"]["room"]>
  composites: {}
}

export type roomGetPayload<S extends boolean | null | undefined | roomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$roomPayload, S>

export type roomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomCountAggregateInputType | true
  }

export interface roomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room'], meta: { name: 'room' } }
    findUnique<T extends roomFindUniqueArgs>(args: Prisma.SelectSubset<T, roomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    findFirst<T extends roomFindFirstArgs>(args?: Prisma.SelectSubset<T, roomFindFirstArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, roomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    findMany<T extends roomFindManyArgs>(args?: Prisma.SelectSubset<T, roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    create<T extends roomCreateArgs>(args: Prisma.SelectSubset<T, roomCreateArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    createMany<T extends roomCreateManyArgs>(args?: Prisma.SelectSubset<T, roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    createManyAndReturn<T extends roomCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, roomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    delete<T extends roomDeleteArgs>(args: Prisma.SelectSubset<T, roomDeleteArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    update<T extends roomUpdateArgs>(args: Prisma.SelectSubset<T, roomUpdateArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    deleteMany<T extends roomDeleteManyArgs>(args?: Prisma.SelectSubset<T, roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    updateMany<T extends roomUpdateManyArgs>(args: Prisma.SelectSubset<T, roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>

    updateManyAndReturn<T extends roomUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, roomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    upsert<T extends roomUpsertArgs>(args: Prisma.SelectSubset<T, roomUpsertArgs<ExtArgs>>): Prisma.Prisma__roomClient<runtime.Types.Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    count<T extends roomCountArgs>(
    args?: Prisma.Subset<T, roomCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], RoomCountAggregateOutputType>
      : number
  >

    aggregate<T extends RoomAggregateArgs>(args: Prisma.Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    groupBy<
    T extends roomGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: roomGroupByArgs['orderBy'] }
      : { orderBy?: roomGroupByArgs['orderBy'] },
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
  >(args: Prisma.SubsetIntersection<T, roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: roomFieldRefs;
}

export interface Prisma__roomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  admin<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  chat<T extends Prisma.room$chatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.room$chatArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}




export interface roomFieldRefs {
  readonly adminid: Prisma.FieldRef<"room", 'String'>
  readonly id: Prisma.FieldRef<"room", 'Int'>
  readonly name: Prisma.FieldRef<"room", 'String'>
}
    


export type roomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
    where: Prisma.roomWhereUniqueInput
}

export type roomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
    where: Prisma.roomWhereUniqueInput
}

export type roomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type roomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type roomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type roomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
    data: Prisma.XOR<Prisma.roomCreateInput, Prisma.roomUncheckedCreateInput>
}

export type roomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.roomCreateManyInput | Prisma.roomCreateManyInput[]
  skipDuplicates?: boolean
}

export type roomCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelectCreateManyAndReturn<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    data: Prisma.roomCreateManyInput | Prisma.roomCreateManyInput[]
  skipDuplicates?: boolean
    include?: Prisma.roomIncludeCreateManyAndReturn<ExtArgs> | null
}

export type roomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
    data: Prisma.XOR<Prisma.roomUpdateInput, Prisma.roomUncheckedUpdateInput>
    where: Prisma.roomWhereUniqueInput
}

export type roomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.roomUpdateManyMutationInput, Prisma.roomUncheckedUpdateManyInput>
    where?: Prisma.roomWhereInput
    limit?: number
}

export type roomUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelectUpdateManyAndReturn<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    data: Prisma.XOR<Prisma.roomUpdateManyMutationInput, Prisma.roomUncheckedUpdateManyInput>
    where?: Prisma.roomWhereInput
    limit?: number
    include?: Prisma.roomIncludeUpdateManyAndReturn<ExtArgs> | null
}

export type roomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
    where: Prisma.roomWhereUniqueInput
    create: Prisma.XOR<Prisma.roomCreateInput, Prisma.roomUncheckedCreateInput>
    update: Prisma.XOR<Prisma.roomUpdateInput, Prisma.roomUncheckedUpdateInput>
}

export type roomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
    where: Prisma.roomWhereUniqueInput
}

export type roomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roomWhereInput
    limit?: number
}

export type room$chatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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

export type roomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomSelect<ExtArgs> | null
    omit?: Prisma.roomOmit<ExtArgs> | null
    include?: Prisma.roomInclude<ExtArgs> | null
}

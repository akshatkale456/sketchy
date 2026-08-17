



import * as runtime from "@prisma/client/runtime/client"
import type * as Prisma from "../models"
import { type PrismaClient } from "./class"

export type * from '../models'

export type DMMF = typeof runtime.DMMF

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

export const PrismaClientValidationError = runtime.PrismaClientValidationError
export type PrismaClientValidationError = runtime.PrismaClientValidationError

export const sql = runtime.sqltag
export const empty = runtime.empty
export const join = runtime.join
export const raw = runtime.raw
export const Sql = runtime.Sql
export type Sql = runtime.Sql



export const Decimal = runtime.Decimal
export type Decimal = runtime.Decimal

export type DecimalJsLike = runtime.DecimalJsLike

export type Extension = runtime.Types.Extensions.UserArgs
export const getExtensionContext = runtime.Extensions.getExtensionContext
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

export type PrismaVersion = {
  client: string
  engine: string
}

export const prismaVersion: PrismaVersion = {
  client: "7.9.1",
  engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
}


export type Bytes = runtime.Bytes
export type JsonObject = runtime.JsonObject
export type JsonArray = runtime.JsonArray
export type JsonValue = runtime.JsonValue
export type InputJsonObject = runtime.InputJsonObject
export type InputJsonArray = runtime.InputJsonArray
export type InputJsonValue = runtime.InputJsonValue


export const NullTypes = {
  DbNull: runtime.NullTypes.DbNull as (new (secret: never) => typeof runtime.DbNull),
  JsonNull: runtime.NullTypes.JsonNull as (new (secret: never) => typeof runtime.JsonNull),
  AnyNull: runtime.NullTypes.AnyNull as (new (secret: never) => typeof runtime.AnyNull),
}
export const DbNull = runtime.DbNull

export const JsonNull = runtime.JsonNull

export const AnyNull = runtime.AnyNull


type SelectAndInclude = {
  select: any
  include: any
}

type SelectAndOmit = {
  select: any
  omit: any
}

type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export type Enumerable<T> = T | Array<T>;

export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
  [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

export type SelectSubset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} &
  K

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> =
  T extends object ?
  U extends object ?
    ((Without<T, U> & U) | (Without<U, T> & T)) & object
  : U : T


type IsObject<T extends any> = T extends Array<any>
? False
: T extends Date
? False
: T extends Uint8Array
? False
: T extends BigInt
? False
: T extends object
? True
: False


export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T


type __Either<O extends object, K extends Key> = Omit<O, K> &
  {
    
    [P in K]: Prisma__Pick<O, P & keyof O> 
  }[K]

type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

type _Either<
  O extends object,
  K extends Key,
  strict extends Boolean
> = {
  1: EitherStrict<O, K>
  0: EitherLoose<O, K>
}[strict]

export type Either<
  O extends object,
  K extends Key,
  strict extends Boolean = 1
> = O extends unknown ? _Either<O, K, strict> : never

export type Union = any

export type PatchUndefined<O extends object, O1 extends object> = {
  [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
} & {}

export type IntersectOf<U extends Union> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};

type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;

type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];

export type ComputeRaw<A extends any> = A extends Function ? A : {
  [K in keyof A]: A[K];
} & {};

export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};

type _Record<K extends keyof any, T> = {
  [P in K]: T;
};


type NoExpand<T> = T extends unknown ? T : never;


export type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
  ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
    | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
  : never>;

type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

export type Strict<U extends object> = ComputeRaw<_Strict<U>>;

export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

export type Boolean = True | False

export type True = 1

export type False = 0

export type Not<B extends Boolean> = {
  0: 1
  1: 0
}[B]

export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
  ? 0 
  : A1 extends A2
  ? 1
  : 0

export type Has<U extends Union, U1 extends Union> = Not<
  Extends<Exclude<U1, U>, U1>
>

export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 1
  }
  1: {
    0: 1
    1: 1
  }
}[B1][B2]

export type Keys<U extends Union> = U extends unknown ? keyof U : never

export type GetScalarType<T, O> = O extends object ? {
  [P in keyof T]: P extends keyof O
    ? O[P]
    : never
} : never

type FieldPaths<
  T,
  U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
> = IsObject<T> extends True ? U : T

export type GetHavingFields<T> = {
  [K in keyof T]: Or<
    Or<Extends<'OR', K>, Extends<'AND', K>>,
    Extends<'NOT', K>
  > extends True
    ? 
      
      
      T[K] extends infer TK
      ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
      : never
    : {} extends FieldPaths<T[K]>
    ? never
    : K
}[keyof T]

type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


export const ModelName = {
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  room: 'room',
  chat: 'chat'
} as const

export type ModelName = (typeof ModelName)[keyof typeof ModelName]



export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
  returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>
}

export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
  globalOmitOptions: {
    omit: GlobalOmitOptions
  }
  meta: {
    modelProps: "user" | "account" | "session" | "verificationToken" | "room" | "chat"
    txIsolationLevel: TransactionIsolationLevel
  }
  model: {
    User: {
      payload: Prisma.$UserPayload<ExtArgs>
      fields: Prisma.UserFieldRefs
      operations: {
        findUnique: {
          args: Prisma.UserFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        findFirst: {
          args: Prisma.UserFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        findMany: {
          args: Prisma.UserFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        create: {
          args: Prisma.UserCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        createMany: {
          args: Prisma.UserCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        delete: {
          args: Prisma.UserDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        update: {
          args: Prisma.UserUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        deleteMany: {
          args: Prisma.UserDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.UserUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
        }
        upsert: {
          args: Prisma.UserUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
        }
        aggregate: {
          args: Prisma.UserAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateUser>
        }
        groupBy: {
          args: Prisma.UserGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[]
        }
        count: {
          args: Prisma.UserCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number
        }
      }
    }
    Account: {
      payload: Prisma.$AccountPayload<ExtArgs>
      fields: Prisma.AccountFieldRefs
      operations: {
        findUnique: {
          args: Prisma.AccountFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>
        }
        findFirst: {
          args: Prisma.AccountFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>
        }
        findMany: {
          args: Prisma.AccountFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[]
        }
        create: {
          args: Prisma.AccountCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>
        }
        createMany: {
          args: Prisma.AccountCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[]
        }
        delete: {
          args: Prisma.AccountDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>
        }
        update: {
          args: Prisma.AccountUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>
        }
        deleteMany: {
          args: Prisma.AccountDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.AccountUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[]
        }
        upsert: {
          args: Prisma.AccountUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>
        }
        aggregate: {
          args: Prisma.AccountAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>
        }
        groupBy: {
          args: Prisma.AccountGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[]
        }
        count: {
          args: Prisma.AccountCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType> | number
        }
      }
    }
    Session: {
      payload: Prisma.$SessionPayload<ExtArgs>
      fields: Prisma.SessionFieldRefs
      operations: {
        findUnique: {
          args: Prisma.SessionFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>
        }
        findFirst: {
          args: Prisma.SessionFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>
        }
        findMany: {
          args: Prisma.SessionFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[]
        }
        create: {
          args: Prisma.SessionCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>
        }
        createMany: {
          args: Prisma.SessionCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[]
        }
        delete: {
          args: Prisma.SessionDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>
        }
        update: {
          args: Prisma.SessionUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>
        }
        deleteMany: {
          args: Prisma.SessionDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.SessionUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[]
        }
        upsert: {
          args: Prisma.SessionUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>
        }
        aggregate: {
          args: Prisma.SessionAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateSession>
        }
        groupBy: {
          args: Prisma.SessionGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[]
        }
        count: {
          args: Prisma.SessionCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number
        }
      }
    }
    VerificationToken: {
      payload: Prisma.$VerificationTokenPayload<ExtArgs>
      fields: Prisma.VerificationTokenFieldRefs
      operations: {
        findUnique: {
          args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
        }
        findFirst: {
          args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
        }
        findMany: {
          args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
        }
        create: {
          args: Prisma.VerificationTokenCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
        }
        createMany: {
          args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
        }
        delete: {
          args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
        }
        update: {
          args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
        }
        deleteMany: {
          args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
        }
        upsert: {
          args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
        }
        aggregate: {
          args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateVerificationToken>
        }
        groupBy: {
          args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.VerificationTokenGroupByOutputType>[]
        }
        count: {
          args: Prisma.VerificationTokenCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.VerificationTokenCountAggregateOutputType> | number
        }
      }
    }
    room: {
      payload: Prisma.$roomPayload<ExtArgs>
      fields: Prisma.roomFieldRefs
      operations: {
        findUnique: {
          args: Prisma.roomFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.roomFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>
        }
        findFirst: {
          args: Prisma.roomFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.roomFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>
        }
        findMany: {
          args: Prisma.roomFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>[]
        }
        create: {
          args: Prisma.roomCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>
        }
        createMany: {
          args: Prisma.roomCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.roomCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>[]
        }
        delete: {
          args: Prisma.roomDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>
        }
        update: {
          args: Prisma.roomUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>
        }
        deleteMany: {
          args: Prisma.roomDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.roomUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.roomUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>[]
        }
        upsert: {
          args: Prisma.roomUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$roomPayload>
        }
        aggregate: {
          args: Prisma.RoomAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateRoom>
        }
        groupBy: {
          args: Prisma.roomGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RoomGroupByOutputType>[]
        }
        count: {
          args: Prisma.roomCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.RoomCountAggregateOutputType> | number
        }
      }
    }
    chat: {
      payload: Prisma.$chatPayload<ExtArgs>
      fields: Prisma.chatFieldRefs
      operations: {
        findUnique: {
          args: Prisma.chatFindUniqueArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload> | null
        }
        findUniqueOrThrow: {
          args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>
        }
        findFirst: {
          args: Prisma.chatFindFirstArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload> | null
        }
        findFirstOrThrow: {
          args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>
        }
        findMany: {
          args: Prisma.chatFindManyArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>[]
        }
        create: {
          args: Prisma.chatCreateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>
        }
        createMany: {
          args: Prisma.chatCreateManyArgs<ExtArgs>
          result: BatchPayload
        }
        createManyAndReturn: {
          args: Prisma.chatCreateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>[]
        }
        delete: {
          args: Prisma.chatDeleteArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>
        }
        update: {
          args: Prisma.chatUpdateArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>
        }
        deleteMany: {
          args: Prisma.chatDeleteManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateMany: {
          args: Prisma.chatUpdateManyArgs<ExtArgs>
          result: BatchPayload
        }
        updateManyAndReturn: {
          args: Prisma.chatUpdateManyAndReturnArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>[]
        }
        upsert: {
          args: Prisma.chatUpsertArgs<ExtArgs>
          result: runtime.Types.Utils.PayloadToResult<Prisma.$chatPayload>
        }
        aggregate: {
          args: Prisma.ChatAggregateArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.AggregateChat>
        }
        groupBy: {
          args: Prisma.chatGroupByArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ChatGroupByOutputType>[]
        }
        count: {
          args: Prisma.chatCountArgs<ExtArgs>
          result: runtime.Types.Utils.Optional<Prisma.ChatCountAggregateOutputType> | number
        }
      }
    }
  }
} & {
  other: {
    payload: any
    operations: {
      $executeRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]],
        result: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
      }
    }
  }
}


export const TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
} as const)

export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


export const UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  password: 'password',
  profile: 'profile'
} as const

export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


export const AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
} as const

export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


export const SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
} as const

export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


export const VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
} as const

export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


export const RoomScalarFieldEnum = {
  adminid: 'adminid',
  id: 'id',
  name: 'name'
} as const

export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


export const ChatScalarFieldEnum = {
  id: 'id',
  messages: 'messages',
  userid: 'userid',
  roomid: 'roomid'
} as const

export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
} as const

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


export const NullsOrder = {
  first: 'first',
  last: 'last'
} as const

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]





export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    

export type BatchPayload = {
  count: number
}

export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>
export type DefaultPrismaClient = PrismaClient
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat
    log?: (LogLevel | LogDefinition)[]
    transactionOptions?: {
    maxWait?: number
    timeout?: number
    isolationLevel?: TransactionIsolationLevel
  }
    omit?: GlobalOmitConfig
    comments?: runtime.SqlCommenterPlugin[]
    queryPlanCacheMaxSize?: number
}

export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string
  adapter?: never
}

export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory
  accelerateUrl?: never
}

export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter
export type GlobalOmitConfig = {
  user?: Prisma.UserOmit
  account?: Prisma.AccountOmit
  session?: Prisma.SessionOmit
  verificationToken?: Prisma.VerificationTokenOmit
  room?: Prisma.roomOmit
  chat?: Prisma.chatOmit
}

export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

export type GetLogType<T> = CheckIsLogLevel<
  T extends LogDefinition ? T['level'] : T
>;

export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
  ? GetLogType<T[number]>
  : never;

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}


export type PrismaAction =
  | 'findUnique'
  | 'findUniqueOrThrow'
  | 'findMany'
  | 'findFirst'
  | 'findFirstOrThrow'
  | 'create'
  | 'createMany'
  | 'createManyAndReturn'
  | 'update'
  | 'updateMany'
  | 'updateManyAndReturn'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'
  | 'count'
  | 'runCommandRaw'
  | 'findRaw'
  | 'groupBy'

export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>



/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model servers
 * 
 */
export type servers = $Result.DefaultSelection<Prisma.$serversPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model GpuCard
 * 
 */
export type GpuCard = $Result.DefaultSelection<Prisma.$GpuCardPayload>
/**
 * Model VirtualMachine
 * 
 */
export type VirtualMachine = $Result.DefaultSelection<Prisma.$VirtualMachinePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Servers
 * const servers = await prisma.servers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Servers
   * const servers = await prisma.servers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.servers`: Exposes CRUD operations for the **servers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.servers.findMany()
    * ```
    */
  get servers(): Prisma.serversDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gpuCard`: Exposes CRUD operations for the **GpuCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GpuCards
    * const gpuCards = await prisma.gpuCard.findMany()
    * ```
    */
  get gpuCard(): Prisma.GpuCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.virtualMachine`: Exposes CRUD operations for the **VirtualMachine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VirtualMachines
    * const virtualMachines = await prisma.virtualMachine.findMany()
    * ```
    */
  get virtualMachine(): Prisma.VirtualMachineDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
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


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
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

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
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
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    servers: 'servers',
    users: 'users',
    GpuCard: 'GpuCard',
    VirtualMachine: 'VirtualMachine'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "servers" | "users" | "gpuCard" | "virtualMachine"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      servers: {
        payload: Prisma.$serversPayload<ExtArgs>
        fields: Prisma.serversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          findFirst: {
            args: Prisma.serversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          findMany: {
            args: Prisma.serversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>[]
          }
          create: {
            args: Prisma.serversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          createMany: {
            args: Prisma.serversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.serversCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>[]
          }
          delete: {
            args: Prisma.serversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          update: {
            args: Prisma.serversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          deleteMany: {
            args: Prisma.serversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.serversUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>[]
          }
          upsert: {
            args: Prisma.serversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          aggregate: {
            args: Prisma.ServersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers>
          }
          groupBy: {
            args: Prisma.serversGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServersGroupByOutputType>[]
          }
          count: {
            args: Prisma.serversCountArgs<ExtArgs>
            result: $Utils.Optional<ServersCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      GpuCard: {
        payload: Prisma.$GpuCardPayload<ExtArgs>
        fields: Prisma.GpuCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GpuCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GpuCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>
          }
          findFirst: {
            args: Prisma.GpuCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GpuCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>
          }
          findMany: {
            args: Prisma.GpuCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>[]
          }
          create: {
            args: Prisma.GpuCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>
          }
          createMany: {
            args: Prisma.GpuCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GpuCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>[]
          }
          delete: {
            args: Prisma.GpuCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>
          }
          update: {
            args: Prisma.GpuCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>
          }
          deleteMany: {
            args: Prisma.GpuCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GpuCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GpuCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>[]
          }
          upsert: {
            args: Prisma.GpuCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GpuCardPayload>
          }
          aggregate: {
            args: Prisma.GpuCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGpuCard>
          }
          groupBy: {
            args: Prisma.GpuCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<GpuCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.GpuCardCountArgs<ExtArgs>
            result: $Utils.Optional<GpuCardCountAggregateOutputType> | number
          }
        }
      }
      VirtualMachine: {
        payload: Prisma.$VirtualMachinePayload<ExtArgs>
        fields: Prisma.VirtualMachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VirtualMachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VirtualMachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>
          }
          findFirst: {
            args: Prisma.VirtualMachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VirtualMachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>
          }
          findMany: {
            args: Prisma.VirtualMachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>[]
          }
          create: {
            args: Prisma.VirtualMachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>
          }
          createMany: {
            args: Prisma.VirtualMachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VirtualMachineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>[]
          }
          delete: {
            args: Prisma.VirtualMachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>
          }
          update: {
            args: Prisma.VirtualMachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>
          }
          deleteMany: {
            args: Prisma.VirtualMachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VirtualMachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VirtualMachineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>[]
          }
          upsert: {
            args: Prisma.VirtualMachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualMachinePayload>
          }
          aggregate: {
            args: Prisma.VirtualMachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtualMachine>
          }
          groupBy: {
            args: Prisma.VirtualMachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<VirtualMachineGroupByOutputType>[]
          }
          count: {
            args: Prisma.VirtualMachineCountArgs<ExtArgs>
            result: $Utils.Optional<VirtualMachineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    servers?: serversOmit
    users?: usersOmit
    gpuCard?: GpuCardOmit
    virtualMachine?: VirtualMachineOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
  /* End Types for Logging */


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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServersCountOutputType
   */

  export type ServersCountOutputType = {
    gpuCards: number
    virtualMachines: number
  }

  export type ServersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gpuCards?: boolean | ServersCountOutputTypeCountGpuCardsArgs
    virtualMachines?: boolean | ServersCountOutputTypeCountVirtualMachinesArgs
  }

  // Custom InputTypes
  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServersCountOutputType
     */
    select?: ServersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountGpuCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpuCardWhereInput
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountVirtualMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualMachineWhereInput
  }


  /**
   * Count Type GpuCardCountOutputType
   */

  export type GpuCardCountOutputType = {
    virtualMachines: number
  }

  export type GpuCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    virtualMachines?: boolean | GpuCardCountOutputTypeCountVirtualMachinesArgs
  }

  // Custom InputTypes
  /**
   * GpuCardCountOutputType without action
   */
  export type GpuCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCardCountOutputType
     */
    select?: GpuCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GpuCardCountOutputType without action
   */
  export type GpuCardCountOutputTypeCountVirtualMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualMachineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model servers
   */

  export type AggregateServers = {
    _count: ServersCountAggregateOutputType | null
    _avg: ServersAvgAggregateOutputType | null
    _sum: ServersSumAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  export type ServersAvgAggregateOutputType = {
    id: number | null
    cpu_cores: number | null
    memory_gb: number | null
  }

  export type ServersSumAggregateOutputType = {
    id: number | null
    cpu_cores: number | null
    memory_gb: number | null
  }

  export type ServersMinAggregateOutputType = {
    id: number | null
    name_label: string | null
    ip_address: string | null
    cpu_model: string | null
    cpu_cores: number | null
    memory_gb: number | null
    disk_spec: string | null
    os: string | null
    created_at: Date | null
    updated_at: Date | null
    purpose: string | null
  }

  export type ServersMaxAggregateOutputType = {
    id: number | null
    name_label: string | null
    ip_address: string | null
    cpu_model: string | null
    cpu_cores: number | null
    memory_gb: number | null
    disk_spec: string | null
    os: string | null
    created_at: Date | null
    updated_at: Date | null
    purpose: string | null
  }

  export type ServersCountAggregateOutputType = {
    id: number
    name_label: number
    ip_address: number
    cpu_model: number
    cpu_cores: number
    memory_gb: number
    disk_spec: number
    os: number
    created_at: number
    updated_at: number
    purpose: number
    _all: number
  }


  export type ServersAvgAggregateInputType = {
    id?: true
    cpu_cores?: true
    memory_gb?: true
  }

  export type ServersSumAggregateInputType = {
    id?: true
    cpu_cores?: true
    memory_gb?: true
  }

  export type ServersMinAggregateInputType = {
    id?: true
    name_label?: true
    ip_address?: true
    cpu_model?: true
    cpu_cores?: true
    memory_gb?: true
    disk_spec?: true
    os?: true
    created_at?: true
    updated_at?: true
    purpose?: true
  }

  export type ServersMaxAggregateInputType = {
    id?: true
    name_label?: true
    ip_address?: true
    cpu_model?: true
    cpu_cores?: true
    memory_gb?: true
    disk_spec?: true
    os?: true
    created_at?: true
    updated_at?: true
    purpose?: true
  }

  export type ServersCountAggregateInputType = {
    id?: true
    name_label?: true
    ip_address?: true
    cpu_model?: true
    cpu_cores?: true
    memory_gb?: true
    disk_spec?: true
    os?: true
    created_at?: true
    updated_at?: true
    purpose?: true
    _all?: true
  }

  export type ServersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to aggregate.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servers
    **/
    _count?: true | ServersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServersMaxAggregateInputType
  }

  export type GetServersAggregateType<T extends ServersAggregateArgs> = {
        [P in keyof T & keyof AggregateServers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers[P]>
      : GetScalarType<T[P], AggregateServers[P]>
  }




  export type serversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serversWhereInput
    orderBy?: serversOrderByWithAggregationInput | serversOrderByWithAggregationInput[]
    by: ServersScalarFieldEnum[] | ServersScalarFieldEnum
    having?: serversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServersCountAggregateInputType | true
    _avg?: ServersAvgAggregateInputType
    _sum?: ServersSumAggregateInputType
    _min?: ServersMinAggregateInputType
    _max?: ServersMaxAggregateInputType
  }

  export type ServersGroupByOutputType = {
    id: number
    name_label: string
    ip_address: string
    cpu_model: string | null
    cpu_cores: number | null
    memory_gb: number | null
    disk_spec: string | null
    os: string | null
    created_at: Date | null
    updated_at: Date | null
    purpose: string | null
    _count: ServersCountAggregateOutputType | null
    _avg: ServersAvgAggregateOutputType | null
    _sum: ServersSumAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  type GetServersGroupByPayload<T extends serversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServersGroupByOutputType[P]>
            : GetScalarType<T[P], ServersGroupByOutputType[P]>
        }
      >
    >


  export type serversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_label?: boolean
    ip_address?: boolean
    cpu_model?: boolean
    cpu_cores?: boolean
    memory_gb?: boolean
    disk_spec?: boolean
    os?: boolean
    created_at?: boolean
    updated_at?: boolean
    purpose?: boolean
    gpuCards?: boolean | servers$gpuCardsArgs<ExtArgs>
    virtualMachines?: boolean | servers$virtualMachinesArgs<ExtArgs>
    _count?: boolean | ServersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type serversSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_label?: boolean
    ip_address?: boolean
    cpu_model?: boolean
    cpu_cores?: boolean
    memory_gb?: boolean
    disk_spec?: boolean
    os?: boolean
    created_at?: boolean
    updated_at?: boolean
    purpose?: boolean
  }, ExtArgs["result"]["servers"]>

  export type serversSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_label?: boolean
    ip_address?: boolean
    cpu_model?: boolean
    cpu_cores?: boolean
    memory_gb?: boolean
    disk_spec?: boolean
    os?: boolean
    created_at?: boolean
    updated_at?: boolean
    purpose?: boolean
  }, ExtArgs["result"]["servers"]>

  export type serversSelectScalar = {
    id?: boolean
    name_label?: boolean
    ip_address?: boolean
    cpu_model?: boolean
    cpu_cores?: boolean
    memory_gb?: boolean
    disk_spec?: boolean
    os?: boolean
    created_at?: boolean
    updated_at?: boolean
    purpose?: boolean
  }

  export type serversOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_label" | "ip_address" | "cpu_model" | "cpu_cores" | "memory_gb" | "disk_spec" | "os" | "created_at" | "updated_at" | "purpose", ExtArgs["result"]["servers"]>
  export type serversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gpuCards?: boolean | servers$gpuCardsArgs<ExtArgs>
    virtualMachines?: boolean | servers$virtualMachinesArgs<ExtArgs>
    _count?: boolean | ServersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type serversIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type serversIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $serversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servers"
    objects: {
      gpuCards: Prisma.$GpuCardPayload<ExtArgs>[]
      virtualMachines: Prisma.$VirtualMachinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_label: string
      ip_address: string
      cpu_model: string | null
      cpu_cores: number | null
      memory_gb: number | null
      disk_spec: string | null
      os: string | null
      created_at: Date | null
      updated_at: Date | null
      purpose: string | null
    }, ExtArgs["result"]["servers"]>
    composites: {}
  }

  type serversGetPayload<S extends boolean | null | undefined | serversDefaultArgs> = $Result.GetResult<Prisma.$serversPayload, S>

  type serversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serversFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServersCountAggregateInputType | true
    }

  export interface serversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servers'], meta: { name: 'servers' } }
    /**
     * Find zero or one Servers that matches the filter.
     * @param {serversFindUniqueArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serversFindUniqueArgs>(args: SelectSubset<T, serversFindUniqueArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serversFindUniqueOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serversFindUniqueOrThrowArgs>(args: SelectSubset<T, serversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindFirstArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serversFindFirstArgs>(args?: SelectSubset<T, serversFindFirstArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindFirstOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serversFindFirstOrThrowArgs>(args?: SelectSubset<T, serversFindFirstOrThrowArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.servers.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.servers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serversWithIdOnly = await prisma.servers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serversFindManyArgs>(args?: SelectSubset<T, serversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers.
     * @param {serversCreateArgs} args - Arguments to create a Servers.
     * @example
     * // Create one Servers
     * const Servers = await prisma.servers.create({
     *   data: {
     *     // ... data to create a Servers
     *   }
     * })
     * 
     */
    create<T extends serversCreateArgs>(args: SelectSubset<T, serversCreateArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {serversCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serversCreateManyArgs>(args?: SelectSubset<T, serversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servers and returns the data saved in the database.
     * @param {serversCreateManyAndReturnArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servers and only return the `id`
     * const serversWithIdOnly = await prisma.servers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends serversCreateManyAndReturnArgs>(args?: SelectSubset<T, serversCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servers.
     * @param {serversDeleteArgs} args - Arguments to delete one Servers.
     * @example
     * // Delete one Servers
     * const Servers = await prisma.servers.delete({
     *   where: {
     *     // ... filter to delete one Servers
     *   }
     * })
     * 
     */
    delete<T extends serversDeleteArgs>(args: SelectSubset<T, serversDeleteArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers.
     * @param {serversUpdateArgs} args - Arguments to update one Servers.
     * @example
     * // Update one Servers
     * const servers = await prisma.servers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serversUpdateArgs>(args: SelectSubset<T, serversUpdateArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {serversDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.servers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serversDeleteManyArgs>(args?: SelectSubset<T, serversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serversUpdateManyArgs>(args: SelectSubset<T, serversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers and returns the data updated in the database.
     * @param {serversUpdateManyAndReturnArgs} args - Arguments to update many Servers.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servers and only return the `id`
     * const serversWithIdOnly = await prisma.servers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends serversUpdateManyAndReturnArgs>(args: SelectSubset<T, serversUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servers.
     * @param {serversUpsertArgs} args - Arguments to update or create a Servers.
     * @example
     * // Update or create a Servers
     * const servers = await prisma.servers.upsert({
     *   create: {
     *     // ... data to create a Servers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers we want to update
     *   }
     * })
     */
    upsert<T extends serversUpsertArgs>(args: SelectSubset<T, serversUpsertArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.servers.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends serversCountArgs>(
      args?: Subset<T, serversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServersAggregateArgs>(args: Subset<T, ServersAggregateArgs>): Prisma.PrismaPromise<GetServersAggregateType<T>>

    /**
     * Group by Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends serversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serversGroupByArgs['orderBy'] }
        : { orderBy?: serversGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, serversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servers model
   */
  readonly fields: serversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gpuCards<T extends servers$gpuCardsArgs<ExtArgs> = {}>(args?: Subset<T, servers$gpuCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    virtualMachines<T extends servers$virtualMachinesArgs<ExtArgs> = {}>(args?: Subset<T, servers$virtualMachinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the servers model
   */
  interface serversFieldRefs {
    readonly id: FieldRef<"servers", 'Int'>
    readonly name_label: FieldRef<"servers", 'String'>
    readonly ip_address: FieldRef<"servers", 'String'>
    readonly cpu_model: FieldRef<"servers", 'String'>
    readonly cpu_cores: FieldRef<"servers", 'Int'>
    readonly memory_gb: FieldRef<"servers", 'Int'>
    readonly disk_spec: FieldRef<"servers", 'String'>
    readonly os: FieldRef<"servers", 'String'>
    readonly created_at: FieldRef<"servers", 'DateTime'>
    readonly updated_at: FieldRef<"servers", 'DateTime'>
    readonly purpose: FieldRef<"servers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * servers findUnique
   */
  export type serversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers findUniqueOrThrow
   */
  export type serversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers findFirst
   */
  export type serversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers findFirstOrThrow
   */
  export type serversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers findMany
   */
  export type serversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers create
   */
  export type serversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * The data needed to create a servers.
     */
    data: XOR<serversCreateInput, serversUncheckedCreateInput>
  }

  /**
   * servers createMany
   */
  export type serversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servers.
     */
    data: serversCreateManyInput | serversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servers createManyAndReturn
   */
  export type serversCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The data used to create many servers.
     */
    data: serversCreateManyInput | serversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servers update
   */
  export type serversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * The data needed to update a servers.
     */
    data: XOR<serversUpdateInput, serversUncheckedUpdateInput>
    /**
     * Choose, which servers to update.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers updateMany
   */
  export type serversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servers.
     */
    data: XOR<serversUpdateManyMutationInput, serversUncheckedUpdateManyInput>
    /**
     * Filter which servers to update
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to update.
     */
    limit?: number
  }

  /**
   * servers updateManyAndReturn
   */
  export type serversUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The data used to update servers.
     */
    data: XOR<serversUpdateManyMutationInput, serversUncheckedUpdateManyInput>
    /**
     * Filter which servers to update
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to update.
     */
    limit?: number
  }

  /**
   * servers upsert
   */
  export type serversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * The filter to search for the servers to update in case it exists.
     */
    where: serversWhereUniqueInput
    /**
     * In case the servers found by the `where` argument doesn't exist, create a new servers with this data.
     */
    create: XOR<serversCreateInput, serversUncheckedCreateInput>
    /**
     * In case the servers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serversUpdateInput, serversUncheckedUpdateInput>
  }

  /**
   * servers delete
   */
  export type serversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
    /**
     * Filter which servers to delete.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers deleteMany
   */
  export type serversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to delete
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to delete.
     */
    limit?: number
  }

  /**
   * servers.gpuCards
   */
  export type servers$gpuCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    where?: GpuCardWhereInput
    orderBy?: GpuCardOrderByWithRelationInput | GpuCardOrderByWithRelationInput[]
    cursor?: GpuCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GpuCardScalarFieldEnum | GpuCardScalarFieldEnum[]
  }

  /**
   * servers.virtualMachines
   */
  export type servers$virtualMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    where?: VirtualMachineWhereInput
    orderBy?: VirtualMachineOrderByWithRelationInput | VirtualMachineOrderByWithRelationInput[]
    cursor?: VirtualMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualMachineScalarFieldEnum | VirtualMachineScalarFieldEnum[]
  }

  /**
   * servers without action
   */
  export type serversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serversInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    status: string | null
    password: string | null
    isAdmin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    status: string | null
    password: string | null
    isAdmin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    status: number
    password: number
    isAdmin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    status?: true
    password?: true
    isAdmin?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    status?: true
    password?: true
    isAdmin?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    status?: true
    password?: true
    isAdmin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    status: string
    password: string | null
    isAdmin: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    password?: boolean
    isAdmin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    password?: boolean
    isAdmin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    password?: boolean
    isAdmin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    status?: boolean
    password?: boolean
    isAdmin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "status" | "password" | "isAdmin" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      status: string
      password: string | null
      isAdmin: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly status: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly isAdmin: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model GpuCard
   */

  export type AggregateGpuCard = {
    _count: GpuCardCountAggregateOutputType | null
    _avg: GpuCardAvgAggregateOutputType | null
    _sum: GpuCardSumAggregateOutputType | null
    _min: GpuCardMinAggregateOutputType | null
    _max: GpuCardMaxAggregateOutputType | null
  }

  export type GpuCardAvgAggregateOutputType = {
    id: number | null
    memory_gb: number | null
    serverId: number | null
  }

  export type GpuCardSumAggregateOutputType = {
    id: number | null
    memory_gb: number | null
    serverId: number | null
  }

  export type GpuCardMinAggregateOutputType = {
    id: number | null
    model: string | null
    memory_gb: number | null
    purpose: string | null
    notes: string | null
    serverId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GpuCardMaxAggregateOutputType = {
    id: number | null
    model: string | null
    memory_gb: number | null
    purpose: string | null
    notes: string | null
    serverId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GpuCardCountAggregateOutputType = {
    id: number
    model: number
    memory_gb: number
    purpose: number
    notes: number
    serverId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GpuCardAvgAggregateInputType = {
    id?: true
    memory_gb?: true
    serverId?: true
  }

  export type GpuCardSumAggregateInputType = {
    id?: true
    memory_gb?: true
    serverId?: true
  }

  export type GpuCardMinAggregateInputType = {
    id?: true
    model?: true
    memory_gb?: true
    purpose?: true
    notes?: true
    serverId?: true
    created_at?: true
    updated_at?: true
  }

  export type GpuCardMaxAggregateInputType = {
    id?: true
    model?: true
    memory_gb?: true
    purpose?: true
    notes?: true
    serverId?: true
    created_at?: true
    updated_at?: true
  }

  export type GpuCardCountAggregateInputType = {
    id?: true
    model?: true
    memory_gb?: true
    purpose?: true
    notes?: true
    serverId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GpuCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpuCard to aggregate.
     */
    where?: GpuCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpuCards to fetch.
     */
    orderBy?: GpuCardOrderByWithRelationInput | GpuCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GpuCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpuCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpuCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GpuCards
    **/
    _count?: true | GpuCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GpuCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GpuCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GpuCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GpuCardMaxAggregateInputType
  }

  export type GetGpuCardAggregateType<T extends GpuCardAggregateArgs> = {
        [P in keyof T & keyof AggregateGpuCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGpuCard[P]>
      : GetScalarType<T[P], AggregateGpuCard[P]>
  }




  export type GpuCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GpuCardWhereInput
    orderBy?: GpuCardOrderByWithAggregationInput | GpuCardOrderByWithAggregationInput[]
    by: GpuCardScalarFieldEnum[] | GpuCardScalarFieldEnum
    having?: GpuCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GpuCardCountAggregateInputType | true
    _avg?: GpuCardAvgAggregateInputType
    _sum?: GpuCardSumAggregateInputType
    _min?: GpuCardMinAggregateInputType
    _max?: GpuCardMaxAggregateInputType
  }

  export type GpuCardGroupByOutputType = {
    id: number
    model: string
    memory_gb: number
    purpose: string | null
    notes: string | null
    serverId: number
    created_at: Date | null
    updated_at: Date | null
    _count: GpuCardCountAggregateOutputType | null
    _avg: GpuCardAvgAggregateOutputType | null
    _sum: GpuCardSumAggregateOutputType | null
    _min: GpuCardMinAggregateOutputType | null
    _max: GpuCardMaxAggregateOutputType | null
  }

  type GetGpuCardGroupByPayload<T extends GpuCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GpuCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GpuCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GpuCardGroupByOutputType[P]>
            : GetScalarType<T[P], GpuCardGroupByOutputType[P]>
        }
      >
    >


  export type GpuCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    memory_gb?: boolean
    purpose?: boolean
    notes?: boolean
    serverId?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | serversDefaultArgs<ExtArgs>
    virtualMachines?: boolean | GpuCard$virtualMachinesArgs<ExtArgs>
    _count?: boolean | GpuCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gpuCard"]>

  export type GpuCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    memory_gb?: boolean
    purpose?: boolean
    notes?: boolean
    serverId?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | serversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gpuCard"]>

  export type GpuCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    memory_gb?: boolean
    purpose?: boolean
    notes?: boolean
    serverId?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | serversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gpuCard"]>

  export type GpuCardSelectScalar = {
    id?: boolean
    model?: boolean
    memory_gb?: boolean
    purpose?: boolean
    notes?: boolean
    serverId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type GpuCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "memory_gb" | "purpose" | "notes" | "serverId" | "created_at" | "updated_at", ExtArgs["result"]["gpuCard"]>
  export type GpuCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | serversDefaultArgs<ExtArgs>
    virtualMachines?: boolean | GpuCard$virtualMachinesArgs<ExtArgs>
    _count?: boolean | GpuCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GpuCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | serversDefaultArgs<ExtArgs>
  }
  export type GpuCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | serversDefaultArgs<ExtArgs>
  }

  export type $GpuCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GpuCard"
    objects: {
      server: Prisma.$serversPayload<ExtArgs>
      virtualMachines: Prisma.$VirtualMachinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      memory_gb: number
      purpose: string | null
      notes: string | null
      serverId: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["gpuCard"]>
    composites: {}
  }

  type GpuCardGetPayload<S extends boolean | null | undefined | GpuCardDefaultArgs> = $Result.GetResult<Prisma.$GpuCardPayload, S>

  type GpuCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GpuCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GpuCardCountAggregateInputType | true
    }

  export interface GpuCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GpuCard'], meta: { name: 'GpuCard' } }
    /**
     * Find zero or one GpuCard that matches the filter.
     * @param {GpuCardFindUniqueArgs} args - Arguments to find a GpuCard
     * @example
     * // Get one GpuCard
     * const gpuCard = await prisma.gpuCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GpuCardFindUniqueArgs>(args: SelectSubset<T, GpuCardFindUniqueArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GpuCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GpuCardFindUniqueOrThrowArgs} args - Arguments to find a GpuCard
     * @example
     * // Get one GpuCard
     * const gpuCard = await prisma.gpuCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GpuCardFindUniqueOrThrowArgs>(args: SelectSubset<T, GpuCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpuCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardFindFirstArgs} args - Arguments to find a GpuCard
     * @example
     * // Get one GpuCard
     * const gpuCard = await prisma.gpuCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GpuCardFindFirstArgs>(args?: SelectSubset<T, GpuCardFindFirstArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GpuCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardFindFirstOrThrowArgs} args - Arguments to find a GpuCard
     * @example
     * // Get one GpuCard
     * const gpuCard = await prisma.gpuCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GpuCardFindFirstOrThrowArgs>(args?: SelectSubset<T, GpuCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GpuCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GpuCards
     * const gpuCards = await prisma.gpuCard.findMany()
     * 
     * // Get first 10 GpuCards
     * const gpuCards = await prisma.gpuCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gpuCardWithIdOnly = await prisma.gpuCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GpuCardFindManyArgs>(args?: SelectSubset<T, GpuCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GpuCard.
     * @param {GpuCardCreateArgs} args - Arguments to create a GpuCard.
     * @example
     * // Create one GpuCard
     * const GpuCard = await prisma.gpuCard.create({
     *   data: {
     *     // ... data to create a GpuCard
     *   }
     * })
     * 
     */
    create<T extends GpuCardCreateArgs>(args: SelectSubset<T, GpuCardCreateArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GpuCards.
     * @param {GpuCardCreateManyArgs} args - Arguments to create many GpuCards.
     * @example
     * // Create many GpuCards
     * const gpuCard = await prisma.gpuCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GpuCardCreateManyArgs>(args?: SelectSubset<T, GpuCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GpuCards and returns the data saved in the database.
     * @param {GpuCardCreateManyAndReturnArgs} args - Arguments to create many GpuCards.
     * @example
     * // Create many GpuCards
     * const gpuCard = await prisma.gpuCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GpuCards and only return the `id`
     * const gpuCardWithIdOnly = await prisma.gpuCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GpuCardCreateManyAndReturnArgs>(args?: SelectSubset<T, GpuCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GpuCard.
     * @param {GpuCardDeleteArgs} args - Arguments to delete one GpuCard.
     * @example
     * // Delete one GpuCard
     * const GpuCard = await prisma.gpuCard.delete({
     *   where: {
     *     // ... filter to delete one GpuCard
     *   }
     * })
     * 
     */
    delete<T extends GpuCardDeleteArgs>(args: SelectSubset<T, GpuCardDeleteArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GpuCard.
     * @param {GpuCardUpdateArgs} args - Arguments to update one GpuCard.
     * @example
     * // Update one GpuCard
     * const gpuCard = await prisma.gpuCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GpuCardUpdateArgs>(args: SelectSubset<T, GpuCardUpdateArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GpuCards.
     * @param {GpuCardDeleteManyArgs} args - Arguments to filter GpuCards to delete.
     * @example
     * // Delete a few GpuCards
     * const { count } = await prisma.gpuCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GpuCardDeleteManyArgs>(args?: SelectSubset<T, GpuCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GpuCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GpuCards
     * const gpuCard = await prisma.gpuCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GpuCardUpdateManyArgs>(args: SelectSubset<T, GpuCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GpuCards and returns the data updated in the database.
     * @param {GpuCardUpdateManyAndReturnArgs} args - Arguments to update many GpuCards.
     * @example
     * // Update many GpuCards
     * const gpuCard = await prisma.gpuCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GpuCards and only return the `id`
     * const gpuCardWithIdOnly = await prisma.gpuCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GpuCardUpdateManyAndReturnArgs>(args: SelectSubset<T, GpuCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GpuCard.
     * @param {GpuCardUpsertArgs} args - Arguments to update or create a GpuCard.
     * @example
     * // Update or create a GpuCard
     * const gpuCard = await prisma.gpuCard.upsert({
     *   create: {
     *     // ... data to create a GpuCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GpuCard we want to update
     *   }
     * })
     */
    upsert<T extends GpuCardUpsertArgs>(args: SelectSubset<T, GpuCardUpsertArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GpuCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardCountArgs} args - Arguments to filter GpuCards to count.
     * @example
     * // Count the number of GpuCards
     * const count = await prisma.gpuCard.count({
     *   where: {
     *     // ... the filter for the GpuCards we want to count
     *   }
     * })
    **/
    count<T extends GpuCardCountArgs>(
      args?: Subset<T, GpuCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GpuCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GpuCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GpuCardAggregateArgs>(args: Subset<T, GpuCardAggregateArgs>): Prisma.PrismaPromise<GetGpuCardAggregateType<T>>

    /**
     * Group by GpuCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GpuCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GpuCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GpuCardGroupByArgs['orderBy'] }
        : { orderBy?: GpuCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GpuCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGpuCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GpuCard model
   */
  readonly fields: GpuCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GpuCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GpuCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends serversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, serversDefaultArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    virtualMachines<T extends GpuCard$virtualMachinesArgs<ExtArgs> = {}>(args?: Subset<T, GpuCard$virtualMachinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GpuCard model
   */
  interface GpuCardFieldRefs {
    readonly id: FieldRef<"GpuCard", 'Int'>
    readonly model: FieldRef<"GpuCard", 'String'>
    readonly memory_gb: FieldRef<"GpuCard", 'Int'>
    readonly purpose: FieldRef<"GpuCard", 'String'>
    readonly notes: FieldRef<"GpuCard", 'String'>
    readonly serverId: FieldRef<"GpuCard", 'Int'>
    readonly created_at: FieldRef<"GpuCard", 'DateTime'>
    readonly updated_at: FieldRef<"GpuCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GpuCard findUnique
   */
  export type GpuCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * Filter, which GpuCard to fetch.
     */
    where: GpuCardWhereUniqueInput
  }

  /**
   * GpuCard findUniqueOrThrow
   */
  export type GpuCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * Filter, which GpuCard to fetch.
     */
    where: GpuCardWhereUniqueInput
  }

  /**
   * GpuCard findFirst
   */
  export type GpuCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * Filter, which GpuCard to fetch.
     */
    where?: GpuCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpuCards to fetch.
     */
    orderBy?: GpuCardOrderByWithRelationInput | GpuCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpuCards.
     */
    cursor?: GpuCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpuCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpuCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpuCards.
     */
    distinct?: GpuCardScalarFieldEnum | GpuCardScalarFieldEnum[]
  }

  /**
   * GpuCard findFirstOrThrow
   */
  export type GpuCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * Filter, which GpuCard to fetch.
     */
    where?: GpuCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpuCards to fetch.
     */
    orderBy?: GpuCardOrderByWithRelationInput | GpuCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GpuCards.
     */
    cursor?: GpuCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpuCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpuCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GpuCards.
     */
    distinct?: GpuCardScalarFieldEnum | GpuCardScalarFieldEnum[]
  }

  /**
   * GpuCard findMany
   */
  export type GpuCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * Filter, which GpuCards to fetch.
     */
    where?: GpuCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GpuCards to fetch.
     */
    orderBy?: GpuCardOrderByWithRelationInput | GpuCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GpuCards.
     */
    cursor?: GpuCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GpuCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GpuCards.
     */
    skip?: number
    distinct?: GpuCardScalarFieldEnum | GpuCardScalarFieldEnum[]
  }

  /**
   * GpuCard create
   */
  export type GpuCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * The data needed to create a GpuCard.
     */
    data: XOR<GpuCardCreateInput, GpuCardUncheckedCreateInput>
  }

  /**
   * GpuCard createMany
   */
  export type GpuCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GpuCards.
     */
    data: GpuCardCreateManyInput | GpuCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GpuCard createManyAndReturn
   */
  export type GpuCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * The data used to create many GpuCards.
     */
    data: GpuCardCreateManyInput | GpuCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GpuCard update
   */
  export type GpuCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * The data needed to update a GpuCard.
     */
    data: XOR<GpuCardUpdateInput, GpuCardUncheckedUpdateInput>
    /**
     * Choose, which GpuCard to update.
     */
    where: GpuCardWhereUniqueInput
  }

  /**
   * GpuCard updateMany
   */
  export type GpuCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GpuCards.
     */
    data: XOR<GpuCardUpdateManyMutationInput, GpuCardUncheckedUpdateManyInput>
    /**
     * Filter which GpuCards to update
     */
    where?: GpuCardWhereInput
    /**
     * Limit how many GpuCards to update.
     */
    limit?: number
  }

  /**
   * GpuCard updateManyAndReturn
   */
  export type GpuCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * The data used to update GpuCards.
     */
    data: XOR<GpuCardUpdateManyMutationInput, GpuCardUncheckedUpdateManyInput>
    /**
     * Filter which GpuCards to update
     */
    where?: GpuCardWhereInput
    /**
     * Limit how many GpuCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GpuCard upsert
   */
  export type GpuCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * The filter to search for the GpuCard to update in case it exists.
     */
    where: GpuCardWhereUniqueInput
    /**
     * In case the GpuCard found by the `where` argument doesn't exist, create a new GpuCard with this data.
     */
    create: XOR<GpuCardCreateInput, GpuCardUncheckedCreateInput>
    /**
     * In case the GpuCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GpuCardUpdateInput, GpuCardUncheckedUpdateInput>
  }

  /**
   * GpuCard delete
   */
  export type GpuCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    /**
     * Filter which GpuCard to delete.
     */
    where: GpuCardWhereUniqueInput
  }

  /**
   * GpuCard deleteMany
   */
  export type GpuCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GpuCards to delete
     */
    where?: GpuCardWhereInput
    /**
     * Limit how many GpuCards to delete.
     */
    limit?: number
  }

  /**
   * GpuCard.virtualMachines
   */
  export type GpuCard$virtualMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    where?: VirtualMachineWhereInput
    orderBy?: VirtualMachineOrderByWithRelationInput | VirtualMachineOrderByWithRelationInput[]
    cursor?: VirtualMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualMachineScalarFieldEnum | VirtualMachineScalarFieldEnum[]
  }

  /**
   * GpuCard without action
   */
  export type GpuCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
  }


  /**
   * Model VirtualMachine
   */

  export type AggregateVirtualMachine = {
    _count: VirtualMachineCountAggregateOutputType | null
    _avg: VirtualMachineAvgAggregateOutputType | null
    _sum: VirtualMachineSumAggregateOutputType | null
    _min: VirtualMachineMinAggregateOutputType | null
    _max: VirtualMachineMaxAggregateOutputType | null
  }

  export type VirtualMachineAvgAggregateOutputType = {
    id: number | null
    host_server_id: number | null
    assigned_gpu_card_id: number | null
    assigned_gpu_card_index_id: number | null
    vcpu_cores_assigned: number | null
    ram_gb_assigned: number | null
  }

  export type VirtualMachineSumAggregateOutputType = {
    id: number | null
    host_server_id: number | null
    assigned_gpu_card_id: number | null
    assigned_gpu_card_index_id: number | null
    vcpu_cores_assigned: number | null
    ram_gb_assigned: number | null
  }

  export type VirtualMachineMinAggregateOutputType = {
    id: number | null
    name_label: string | null
    host_server_id: number | null
    assigned_gpu_card_id: number | null
    assigned_gpu_card_index_id: number | null
    vcpu_cores_assigned: number | null
    ram_gb_assigned: number | null
    gpu_resource_slice_description: string | null
    purpose: string | null
    internal_ip_address: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VirtualMachineMaxAggregateOutputType = {
    id: number | null
    name_label: string | null
    host_server_id: number | null
    assigned_gpu_card_id: number | null
    assigned_gpu_card_index_id: number | null
    vcpu_cores_assigned: number | null
    ram_gb_assigned: number | null
    gpu_resource_slice_description: string | null
    purpose: string | null
    internal_ip_address: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VirtualMachineCountAggregateOutputType = {
    id: number
    name_label: number
    host_server_id: number
    assigned_gpu_card_id: number
    assigned_gpu_card_index_id: number
    vcpu_cores_assigned: number
    ram_gb_assigned: number
    gpu_resource_slice_description: number
    purpose: number
    internal_ip_address: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VirtualMachineAvgAggregateInputType = {
    id?: true
    host_server_id?: true
    assigned_gpu_card_id?: true
    assigned_gpu_card_index_id?: true
    vcpu_cores_assigned?: true
    ram_gb_assigned?: true
  }

  export type VirtualMachineSumAggregateInputType = {
    id?: true
    host_server_id?: true
    assigned_gpu_card_id?: true
    assigned_gpu_card_index_id?: true
    vcpu_cores_assigned?: true
    ram_gb_assigned?: true
  }

  export type VirtualMachineMinAggregateInputType = {
    id?: true
    name_label?: true
    host_server_id?: true
    assigned_gpu_card_id?: true
    assigned_gpu_card_index_id?: true
    vcpu_cores_assigned?: true
    ram_gb_assigned?: true
    gpu_resource_slice_description?: true
    purpose?: true
    internal_ip_address?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type VirtualMachineMaxAggregateInputType = {
    id?: true
    name_label?: true
    host_server_id?: true
    assigned_gpu_card_id?: true
    assigned_gpu_card_index_id?: true
    vcpu_cores_assigned?: true
    ram_gb_assigned?: true
    gpu_resource_slice_description?: true
    purpose?: true
    internal_ip_address?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type VirtualMachineCountAggregateInputType = {
    id?: true
    name_label?: true
    host_server_id?: true
    assigned_gpu_card_id?: true
    assigned_gpu_card_index_id?: true
    vcpu_cores_assigned?: true
    ram_gb_assigned?: true
    gpu_resource_slice_description?: true
    purpose?: true
    internal_ip_address?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VirtualMachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualMachine to aggregate.
     */
    where?: VirtualMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualMachines to fetch.
     */
    orderBy?: VirtualMachineOrderByWithRelationInput | VirtualMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VirtualMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VirtualMachines
    **/
    _count?: true | VirtualMachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VirtualMachineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VirtualMachineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VirtualMachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VirtualMachineMaxAggregateInputType
  }

  export type GetVirtualMachineAggregateType<T extends VirtualMachineAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtualMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualMachine[P]>
      : GetScalarType<T[P], AggregateVirtualMachine[P]>
  }




  export type VirtualMachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualMachineWhereInput
    orderBy?: VirtualMachineOrderByWithAggregationInput | VirtualMachineOrderByWithAggregationInput[]
    by: VirtualMachineScalarFieldEnum[] | VirtualMachineScalarFieldEnum
    having?: VirtualMachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VirtualMachineCountAggregateInputType | true
    _avg?: VirtualMachineAvgAggregateInputType
    _sum?: VirtualMachineSumAggregateInputType
    _min?: VirtualMachineMinAggregateInputType
    _max?: VirtualMachineMaxAggregateInputType
  }

  export type VirtualMachineGroupByOutputType = {
    id: number
    name_label: string
    host_server_id: number
    assigned_gpu_card_id: number | null
    assigned_gpu_card_index_id: number | null
    vcpu_cores_assigned: number | null
    ram_gb_assigned: number | null
    gpu_resource_slice_description: string | null
    purpose: string | null
    internal_ip_address: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: VirtualMachineCountAggregateOutputType | null
    _avg: VirtualMachineAvgAggregateOutputType | null
    _sum: VirtualMachineSumAggregateOutputType | null
    _min: VirtualMachineMinAggregateOutputType | null
    _max: VirtualMachineMaxAggregateOutputType | null
  }

  type GetVirtualMachineGroupByPayload<T extends VirtualMachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VirtualMachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VirtualMachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualMachineGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualMachineGroupByOutputType[P]>
        }
      >
    >


  export type VirtualMachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_label?: boolean
    host_server_id?: boolean
    assigned_gpu_card_id?: boolean
    assigned_gpu_card_index_id?: boolean
    vcpu_cores_assigned?: boolean
    ram_gb_assigned?: boolean
    gpu_resource_slice_description?: boolean
    purpose?: boolean
    internal_ip_address?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    host_server?: boolean | serversDefaultArgs<ExtArgs>
    assigned_gpu_card?: boolean | VirtualMachine$assigned_gpu_cardArgs<ExtArgs>
  }, ExtArgs["result"]["virtualMachine"]>

  export type VirtualMachineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_label?: boolean
    host_server_id?: boolean
    assigned_gpu_card_id?: boolean
    assigned_gpu_card_index_id?: boolean
    vcpu_cores_assigned?: boolean
    ram_gb_assigned?: boolean
    gpu_resource_slice_description?: boolean
    purpose?: boolean
    internal_ip_address?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    host_server?: boolean | serversDefaultArgs<ExtArgs>
    assigned_gpu_card?: boolean | VirtualMachine$assigned_gpu_cardArgs<ExtArgs>
  }, ExtArgs["result"]["virtualMachine"]>

  export type VirtualMachineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_label?: boolean
    host_server_id?: boolean
    assigned_gpu_card_id?: boolean
    assigned_gpu_card_index_id?: boolean
    vcpu_cores_assigned?: boolean
    ram_gb_assigned?: boolean
    gpu_resource_slice_description?: boolean
    purpose?: boolean
    internal_ip_address?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    host_server?: boolean | serversDefaultArgs<ExtArgs>
    assigned_gpu_card?: boolean | VirtualMachine$assigned_gpu_cardArgs<ExtArgs>
  }, ExtArgs["result"]["virtualMachine"]>

  export type VirtualMachineSelectScalar = {
    id?: boolean
    name_label?: boolean
    host_server_id?: boolean
    assigned_gpu_card_id?: boolean
    assigned_gpu_card_index_id?: boolean
    vcpu_cores_assigned?: boolean
    ram_gb_assigned?: boolean
    gpu_resource_slice_description?: boolean
    purpose?: boolean
    internal_ip_address?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type VirtualMachineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_label" | "host_server_id" | "assigned_gpu_card_id" | "assigned_gpu_card_index_id" | "vcpu_cores_assigned" | "ram_gb_assigned" | "gpu_resource_slice_description" | "purpose" | "internal_ip_address" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["virtualMachine"]>
  export type VirtualMachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host_server?: boolean | serversDefaultArgs<ExtArgs>
    assigned_gpu_card?: boolean | VirtualMachine$assigned_gpu_cardArgs<ExtArgs>
  }
  export type VirtualMachineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host_server?: boolean | serversDefaultArgs<ExtArgs>
    assigned_gpu_card?: boolean | VirtualMachine$assigned_gpu_cardArgs<ExtArgs>
  }
  export type VirtualMachineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host_server?: boolean | serversDefaultArgs<ExtArgs>
    assigned_gpu_card?: boolean | VirtualMachine$assigned_gpu_cardArgs<ExtArgs>
  }

  export type $VirtualMachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualMachine"
    objects: {
      host_server: Prisma.$serversPayload<ExtArgs>
      assigned_gpu_card: Prisma.$GpuCardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name_label: string
      host_server_id: number
      assigned_gpu_card_id: number | null
      assigned_gpu_card_index_id: number | null
      vcpu_cores_assigned: number | null
      ram_gb_assigned: number | null
      gpu_resource_slice_description: string | null
      purpose: string | null
      internal_ip_address: string | null
      notes: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["virtualMachine"]>
    composites: {}
  }

  type VirtualMachineGetPayload<S extends boolean | null | undefined | VirtualMachineDefaultArgs> = $Result.GetResult<Prisma.$VirtualMachinePayload, S>

  type VirtualMachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VirtualMachineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VirtualMachineCountAggregateInputType | true
    }

  export interface VirtualMachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VirtualMachine'], meta: { name: 'VirtualMachine' } }
    /**
     * Find zero or one VirtualMachine that matches the filter.
     * @param {VirtualMachineFindUniqueArgs} args - Arguments to find a VirtualMachine
     * @example
     * // Get one VirtualMachine
     * const virtualMachine = await prisma.virtualMachine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualMachineFindUniqueArgs>(args: SelectSubset<T, VirtualMachineFindUniqueArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VirtualMachine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualMachineFindUniqueOrThrowArgs} args - Arguments to find a VirtualMachine
     * @example
     * // Get one VirtualMachine
     * const virtualMachine = await prisma.virtualMachine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualMachineFindUniqueOrThrowArgs>(args: SelectSubset<T, VirtualMachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualMachine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineFindFirstArgs} args - Arguments to find a VirtualMachine
     * @example
     * // Get one VirtualMachine
     * const virtualMachine = await prisma.virtualMachine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualMachineFindFirstArgs>(args?: SelectSubset<T, VirtualMachineFindFirstArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualMachine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineFindFirstOrThrowArgs} args - Arguments to find a VirtualMachine
     * @example
     * // Get one VirtualMachine
     * const virtualMachine = await prisma.virtualMachine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualMachineFindFirstOrThrowArgs>(args?: SelectSubset<T, VirtualMachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VirtualMachines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualMachines
     * const virtualMachines = await prisma.virtualMachine.findMany()
     * 
     * // Get first 10 VirtualMachines
     * const virtualMachines = await prisma.virtualMachine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const virtualMachineWithIdOnly = await prisma.virtualMachine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VirtualMachineFindManyArgs>(args?: SelectSubset<T, VirtualMachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VirtualMachine.
     * @param {VirtualMachineCreateArgs} args - Arguments to create a VirtualMachine.
     * @example
     * // Create one VirtualMachine
     * const VirtualMachine = await prisma.virtualMachine.create({
     *   data: {
     *     // ... data to create a VirtualMachine
     *   }
     * })
     * 
     */
    create<T extends VirtualMachineCreateArgs>(args: SelectSubset<T, VirtualMachineCreateArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VirtualMachines.
     * @param {VirtualMachineCreateManyArgs} args - Arguments to create many VirtualMachines.
     * @example
     * // Create many VirtualMachines
     * const virtualMachine = await prisma.virtualMachine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VirtualMachineCreateManyArgs>(args?: SelectSubset<T, VirtualMachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VirtualMachines and returns the data saved in the database.
     * @param {VirtualMachineCreateManyAndReturnArgs} args - Arguments to create many VirtualMachines.
     * @example
     * // Create many VirtualMachines
     * const virtualMachine = await prisma.virtualMachine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VirtualMachines and only return the `id`
     * const virtualMachineWithIdOnly = await prisma.virtualMachine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VirtualMachineCreateManyAndReturnArgs>(args?: SelectSubset<T, VirtualMachineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VirtualMachine.
     * @param {VirtualMachineDeleteArgs} args - Arguments to delete one VirtualMachine.
     * @example
     * // Delete one VirtualMachine
     * const VirtualMachine = await prisma.virtualMachine.delete({
     *   where: {
     *     // ... filter to delete one VirtualMachine
     *   }
     * })
     * 
     */
    delete<T extends VirtualMachineDeleteArgs>(args: SelectSubset<T, VirtualMachineDeleteArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VirtualMachine.
     * @param {VirtualMachineUpdateArgs} args - Arguments to update one VirtualMachine.
     * @example
     * // Update one VirtualMachine
     * const virtualMachine = await prisma.virtualMachine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VirtualMachineUpdateArgs>(args: SelectSubset<T, VirtualMachineUpdateArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VirtualMachines.
     * @param {VirtualMachineDeleteManyArgs} args - Arguments to filter VirtualMachines to delete.
     * @example
     * // Delete a few VirtualMachines
     * const { count } = await prisma.virtualMachine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VirtualMachineDeleteManyArgs>(args?: SelectSubset<T, VirtualMachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualMachines
     * const virtualMachine = await prisma.virtualMachine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VirtualMachineUpdateManyArgs>(args: SelectSubset<T, VirtualMachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualMachines and returns the data updated in the database.
     * @param {VirtualMachineUpdateManyAndReturnArgs} args - Arguments to update many VirtualMachines.
     * @example
     * // Update many VirtualMachines
     * const virtualMachine = await prisma.virtualMachine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VirtualMachines and only return the `id`
     * const virtualMachineWithIdOnly = await prisma.virtualMachine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VirtualMachineUpdateManyAndReturnArgs>(args: SelectSubset<T, VirtualMachineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VirtualMachine.
     * @param {VirtualMachineUpsertArgs} args - Arguments to update or create a VirtualMachine.
     * @example
     * // Update or create a VirtualMachine
     * const virtualMachine = await prisma.virtualMachine.upsert({
     *   create: {
     *     // ... data to create a VirtualMachine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualMachine we want to update
     *   }
     * })
     */
    upsert<T extends VirtualMachineUpsertArgs>(args: SelectSubset<T, VirtualMachineUpsertArgs<ExtArgs>>): Prisma__VirtualMachineClient<$Result.GetResult<Prisma.$VirtualMachinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VirtualMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineCountArgs} args - Arguments to filter VirtualMachines to count.
     * @example
     * // Count the number of VirtualMachines
     * const count = await prisma.virtualMachine.count({
     *   where: {
     *     // ... the filter for the VirtualMachines we want to count
     *   }
     * })
    **/
    count<T extends VirtualMachineCountArgs>(
      args?: Subset<T, VirtualMachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualMachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VirtualMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VirtualMachineAggregateArgs>(args: Subset<T, VirtualMachineAggregateArgs>): Prisma.PrismaPromise<GetVirtualMachineAggregateType<T>>

    /**
     * Group by VirtualMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualMachineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VirtualMachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualMachineGroupByArgs['orderBy'] }
        : { orderBy?: VirtualMachineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VirtualMachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VirtualMachine model
   */
  readonly fields: VirtualMachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualMachine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualMachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host_server<T extends serversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, serversDefaultArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assigned_gpu_card<T extends VirtualMachine$assigned_gpu_cardArgs<ExtArgs> = {}>(args?: Subset<T, VirtualMachine$assigned_gpu_cardArgs<ExtArgs>>): Prisma__GpuCardClient<$Result.GetResult<Prisma.$GpuCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VirtualMachine model
   */
  interface VirtualMachineFieldRefs {
    readonly id: FieldRef<"VirtualMachine", 'Int'>
    readonly name_label: FieldRef<"VirtualMachine", 'String'>
    readonly host_server_id: FieldRef<"VirtualMachine", 'Int'>
    readonly assigned_gpu_card_id: FieldRef<"VirtualMachine", 'Int'>
    readonly assigned_gpu_card_index_id: FieldRef<"VirtualMachine", 'Int'>
    readonly vcpu_cores_assigned: FieldRef<"VirtualMachine", 'Int'>
    readonly ram_gb_assigned: FieldRef<"VirtualMachine", 'Int'>
    readonly gpu_resource_slice_description: FieldRef<"VirtualMachine", 'String'>
    readonly purpose: FieldRef<"VirtualMachine", 'String'>
    readonly internal_ip_address: FieldRef<"VirtualMachine", 'String'>
    readonly notes: FieldRef<"VirtualMachine", 'String'>
    readonly created_at: FieldRef<"VirtualMachine", 'DateTime'>
    readonly updated_at: FieldRef<"VirtualMachine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VirtualMachine findUnique
   */
  export type VirtualMachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualMachine to fetch.
     */
    where: VirtualMachineWhereUniqueInput
  }

  /**
   * VirtualMachine findUniqueOrThrow
   */
  export type VirtualMachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualMachine to fetch.
     */
    where: VirtualMachineWhereUniqueInput
  }

  /**
   * VirtualMachine findFirst
   */
  export type VirtualMachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualMachine to fetch.
     */
    where?: VirtualMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualMachines to fetch.
     */
    orderBy?: VirtualMachineOrderByWithRelationInput | VirtualMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualMachines.
     */
    cursor?: VirtualMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualMachines.
     */
    distinct?: VirtualMachineScalarFieldEnum | VirtualMachineScalarFieldEnum[]
  }

  /**
   * VirtualMachine findFirstOrThrow
   */
  export type VirtualMachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualMachine to fetch.
     */
    where?: VirtualMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualMachines to fetch.
     */
    orderBy?: VirtualMachineOrderByWithRelationInput | VirtualMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualMachines.
     */
    cursor?: VirtualMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualMachines.
     */
    distinct?: VirtualMachineScalarFieldEnum | VirtualMachineScalarFieldEnum[]
  }

  /**
   * VirtualMachine findMany
   */
  export type VirtualMachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualMachines to fetch.
     */
    where?: VirtualMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualMachines to fetch.
     */
    orderBy?: VirtualMachineOrderByWithRelationInput | VirtualMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VirtualMachines.
     */
    cursor?: VirtualMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualMachines.
     */
    skip?: number
    distinct?: VirtualMachineScalarFieldEnum | VirtualMachineScalarFieldEnum[]
  }

  /**
   * VirtualMachine create
   */
  export type VirtualMachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * The data needed to create a VirtualMachine.
     */
    data: XOR<VirtualMachineCreateInput, VirtualMachineUncheckedCreateInput>
  }

  /**
   * VirtualMachine createMany
   */
  export type VirtualMachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualMachines.
     */
    data: VirtualMachineCreateManyInput | VirtualMachineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VirtualMachine createManyAndReturn
   */
  export type VirtualMachineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * The data used to create many VirtualMachines.
     */
    data: VirtualMachineCreateManyInput | VirtualMachineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualMachine update
   */
  export type VirtualMachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * The data needed to update a VirtualMachine.
     */
    data: XOR<VirtualMachineUpdateInput, VirtualMachineUncheckedUpdateInput>
    /**
     * Choose, which VirtualMachine to update.
     */
    where: VirtualMachineWhereUniqueInput
  }

  /**
   * VirtualMachine updateMany
   */
  export type VirtualMachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualMachines.
     */
    data: XOR<VirtualMachineUpdateManyMutationInput, VirtualMachineUncheckedUpdateManyInput>
    /**
     * Filter which VirtualMachines to update
     */
    where?: VirtualMachineWhereInput
    /**
     * Limit how many VirtualMachines to update.
     */
    limit?: number
  }

  /**
   * VirtualMachine updateManyAndReturn
   */
  export type VirtualMachineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * The data used to update VirtualMachines.
     */
    data: XOR<VirtualMachineUpdateManyMutationInput, VirtualMachineUncheckedUpdateManyInput>
    /**
     * Filter which VirtualMachines to update
     */
    where?: VirtualMachineWhereInput
    /**
     * Limit how many VirtualMachines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualMachine upsert
   */
  export type VirtualMachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * The filter to search for the VirtualMachine to update in case it exists.
     */
    where: VirtualMachineWhereUniqueInput
    /**
     * In case the VirtualMachine found by the `where` argument doesn't exist, create a new VirtualMachine with this data.
     */
    create: XOR<VirtualMachineCreateInput, VirtualMachineUncheckedCreateInput>
    /**
     * In case the VirtualMachine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualMachineUpdateInput, VirtualMachineUncheckedUpdateInput>
  }

  /**
   * VirtualMachine delete
   */
  export type VirtualMachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
    /**
     * Filter which VirtualMachine to delete.
     */
    where: VirtualMachineWhereUniqueInput
  }

  /**
   * VirtualMachine deleteMany
   */
  export type VirtualMachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualMachines to delete
     */
    where?: VirtualMachineWhereInput
    /**
     * Limit how many VirtualMachines to delete.
     */
    limit?: number
  }

  /**
   * VirtualMachine.assigned_gpu_card
   */
  export type VirtualMachine$assigned_gpu_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GpuCard
     */
    select?: GpuCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GpuCard
     */
    omit?: GpuCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GpuCardInclude<ExtArgs> | null
    where?: GpuCardWhereInput
  }

  /**
   * VirtualMachine without action
   */
  export type VirtualMachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualMachine
     */
    select?: VirtualMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualMachine
     */
    omit?: VirtualMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualMachineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServersScalarFieldEnum: {
    id: 'id',
    name_label: 'name_label',
    ip_address: 'ip_address',
    cpu_model: 'cpu_model',
    cpu_cores: 'cpu_cores',
    memory_gb: 'memory_gb',
    disk_spec: 'disk_spec',
    os: 'os',
    created_at: 'created_at',
    updated_at: 'updated_at',
    purpose: 'purpose'
  };

  export type ServersScalarFieldEnum = (typeof ServersScalarFieldEnum)[keyof typeof ServersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    status: 'status',
    password: 'password',
    isAdmin: 'isAdmin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const GpuCardScalarFieldEnum: {
    id: 'id',
    model: 'model',
    memory_gb: 'memory_gb',
    purpose: 'purpose',
    notes: 'notes',
    serverId: 'serverId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GpuCardScalarFieldEnum = (typeof GpuCardScalarFieldEnum)[keyof typeof GpuCardScalarFieldEnum]


  export const VirtualMachineScalarFieldEnum: {
    id: 'id',
    name_label: 'name_label',
    host_server_id: 'host_server_id',
    assigned_gpu_card_id: 'assigned_gpu_card_id',
    assigned_gpu_card_index_id: 'assigned_gpu_card_index_id',
    vcpu_cores_assigned: 'vcpu_cores_assigned',
    ram_gb_assigned: 'ram_gb_assigned',
    gpu_resource_slice_description: 'gpu_resource_slice_description',
    purpose: 'purpose',
    internal_ip_address: 'internal_ip_address',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VirtualMachineScalarFieldEnum = (typeof VirtualMachineScalarFieldEnum)[keyof typeof VirtualMachineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type serversWhereInput = {
    AND?: serversWhereInput | serversWhereInput[]
    OR?: serversWhereInput[]
    NOT?: serversWhereInput | serversWhereInput[]
    id?: IntFilter<"servers"> | number
    name_label?: StringFilter<"servers"> | string
    ip_address?: StringFilter<"servers"> | string
    cpu_model?: StringNullableFilter<"servers"> | string | null
    cpu_cores?: IntNullableFilter<"servers"> | number | null
    memory_gb?: IntNullableFilter<"servers"> | number | null
    disk_spec?: StringNullableFilter<"servers"> | string | null
    os?: StringNullableFilter<"servers"> | string | null
    created_at?: DateTimeNullableFilter<"servers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"servers"> | Date | string | null
    purpose?: StringNullableFilter<"servers"> | string | null
    gpuCards?: GpuCardListRelationFilter
    virtualMachines?: VirtualMachineListRelationFilter
  }

  export type serversOrderByWithRelationInput = {
    id?: SortOrder
    name_label?: SortOrder
    ip_address?: SortOrder
    cpu_model?: SortOrderInput | SortOrder
    cpu_cores?: SortOrderInput | SortOrder
    memory_gb?: SortOrderInput | SortOrder
    disk_spec?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    gpuCards?: GpuCardOrderByRelationAggregateInput
    virtualMachines?: VirtualMachineOrderByRelationAggregateInput
  }

  export type serversWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ip_address?: string
    AND?: serversWhereInput | serversWhereInput[]
    OR?: serversWhereInput[]
    NOT?: serversWhereInput | serversWhereInput[]
    name_label?: StringFilter<"servers"> | string
    cpu_model?: StringNullableFilter<"servers"> | string | null
    cpu_cores?: IntNullableFilter<"servers"> | number | null
    memory_gb?: IntNullableFilter<"servers"> | number | null
    disk_spec?: StringNullableFilter<"servers"> | string | null
    os?: StringNullableFilter<"servers"> | string | null
    created_at?: DateTimeNullableFilter<"servers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"servers"> | Date | string | null
    purpose?: StringNullableFilter<"servers"> | string | null
    gpuCards?: GpuCardListRelationFilter
    virtualMachines?: VirtualMachineListRelationFilter
  }, "id" | "ip_address">

  export type serversOrderByWithAggregationInput = {
    id?: SortOrder
    name_label?: SortOrder
    ip_address?: SortOrder
    cpu_model?: SortOrderInput | SortOrder
    cpu_cores?: SortOrderInput | SortOrder
    memory_gb?: SortOrderInput | SortOrder
    disk_spec?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    _count?: serversCountOrderByAggregateInput
    _avg?: serversAvgOrderByAggregateInput
    _max?: serversMaxOrderByAggregateInput
    _min?: serversMinOrderByAggregateInput
    _sum?: serversSumOrderByAggregateInput
  }

  export type serversScalarWhereWithAggregatesInput = {
    AND?: serversScalarWhereWithAggregatesInput | serversScalarWhereWithAggregatesInput[]
    OR?: serversScalarWhereWithAggregatesInput[]
    NOT?: serversScalarWhereWithAggregatesInput | serversScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"servers"> | number
    name_label?: StringWithAggregatesFilter<"servers"> | string
    ip_address?: StringWithAggregatesFilter<"servers"> | string
    cpu_model?: StringNullableWithAggregatesFilter<"servers"> | string | null
    cpu_cores?: IntNullableWithAggregatesFilter<"servers"> | number | null
    memory_gb?: IntNullableWithAggregatesFilter<"servers"> | number | null
    disk_spec?: StringNullableWithAggregatesFilter<"servers"> | string | null
    os?: StringNullableWithAggregatesFilter<"servers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"servers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"servers"> | Date | string | null
    purpose?: StringNullableWithAggregatesFilter<"servers"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    status?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    isAdmin?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    status?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    isAdmin?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    status?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type GpuCardWhereInput = {
    AND?: GpuCardWhereInput | GpuCardWhereInput[]
    OR?: GpuCardWhereInput[]
    NOT?: GpuCardWhereInput | GpuCardWhereInput[]
    id?: IntFilter<"GpuCard"> | number
    model?: StringFilter<"GpuCard"> | string
    memory_gb?: IntFilter<"GpuCard"> | number
    purpose?: StringNullableFilter<"GpuCard"> | string | null
    notes?: StringNullableFilter<"GpuCard"> | string | null
    serverId?: IntFilter<"GpuCard"> | number
    created_at?: DateTimeNullableFilter<"GpuCard"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"GpuCard"> | Date | string | null
    server?: XOR<ServersScalarRelationFilter, serversWhereInput>
    virtualMachines?: VirtualMachineListRelationFilter
  }

  export type GpuCardOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    memory_gb?: SortOrder
    purpose?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    serverId?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    server?: serversOrderByWithRelationInput
    virtualMachines?: VirtualMachineOrderByRelationAggregateInput
  }

  export type GpuCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GpuCardWhereInput | GpuCardWhereInput[]
    OR?: GpuCardWhereInput[]
    NOT?: GpuCardWhereInput | GpuCardWhereInput[]
    model?: StringFilter<"GpuCard"> | string
    memory_gb?: IntFilter<"GpuCard"> | number
    purpose?: StringNullableFilter<"GpuCard"> | string | null
    notes?: StringNullableFilter<"GpuCard"> | string | null
    serverId?: IntFilter<"GpuCard"> | number
    created_at?: DateTimeNullableFilter<"GpuCard"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"GpuCard"> | Date | string | null
    server?: XOR<ServersScalarRelationFilter, serversWhereInput>
    virtualMachines?: VirtualMachineListRelationFilter
  }, "id">

  export type GpuCardOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    memory_gb?: SortOrder
    purpose?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    serverId?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: GpuCardCountOrderByAggregateInput
    _avg?: GpuCardAvgOrderByAggregateInput
    _max?: GpuCardMaxOrderByAggregateInput
    _min?: GpuCardMinOrderByAggregateInput
    _sum?: GpuCardSumOrderByAggregateInput
  }

  export type GpuCardScalarWhereWithAggregatesInput = {
    AND?: GpuCardScalarWhereWithAggregatesInput | GpuCardScalarWhereWithAggregatesInput[]
    OR?: GpuCardScalarWhereWithAggregatesInput[]
    NOT?: GpuCardScalarWhereWithAggregatesInput | GpuCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GpuCard"> | number
    model?: StringWithAggregatesFilter<"GpuCard"> | string
    memory_gb?: IntWithAggregatesFilter<"GpuCard"> | number
    purpose?: StringNullableWithAggregatesFilter<"GpuCard"> | string | null
    notes?: StringNullableWithAggregatesFilter<"GpuCard"> | string | null
    serverId?: IntWithAggregatesFilter<"GpuCard"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"GpuCard"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"GpuCard"> | Date | string | null
  }

  export type VirtualMachineWhereInput = {
    AND?: VirtualMachineWhereInput | VirtualMachineWhereInput[]
    OR?: VirtualMachineWhereInput[]
    NOT?: VirtualMachineWhereInput | VirtualMachineWhereInput[]
    id?: IntFilter<"VirtualMachine"> | number
    name_label?: StringFilter<"VirtualMachine"> | string
    host_server_id?: IntFilter<"VirtualMachine"> | number
    assigned_gpu_card_id?: IntNullableFilter<"VirtualMachine"> | number | null
    assigned_gpu_card_index_id?: IntNullableFilter<"VirtualMachine"> | number | null
    vcpu_cores_assigned?: IntNullableFilter<"VirtualMachine"> | number | null
    ram_gb_assigned?: IntNullableFilter<"VirtualMachine"> | number | null
    gpu_resource_slice_description?: StringNullableFilter<"VirtualMachine"> | string | null
    purpose?: StringNullableFilter<"VirtualMachine"> | string | null
    internal_ip_address?: StringNullableFilter<"VirtualMachine"> | string | null
    notes?: StringNullableFilter<"VirtualMachine"> | string | null
    created_at?: DateTimeNullableFilter<"VirtualMachine"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"VirtualMachine"> | Date | string | null
    host_server?: XOR<ServersScalarRelationFilter, serversWhereInput>
    assigned_gpu_card?: XOR<GpuCardNullableScalarRelationFilter, GpuCardWhereInput> | null
  }

  export type VirtualMachineOrderByWithRelationInput = {
    id?: SortOrder
    name_label?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrderInput | SortOrder
    assigned_gpu_card_index_id?: SortOrderInput | SortOrder
    vcpu_cores_assigned?: SortOrderInput | SortOrder
    ram_gb_assigned?: SortOrderInput | SortOrder
    gpu_resource_slice_description?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    internal_ip_address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    host_server?: serversOrderByWithRelationInput
    assigned_gpu_card?: GpuCardOrderByWithRelationInput
  }

  export type VirtualMachineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VirtualMachineWhereInput | VirtualMachineWhereInput[]
    OR?: VirtualMachineWhereInput[]
    NOT?: VirtualMachineWhereInput | VirtualMachineWhereInput[]
    name_label?: StringFilter<"VirtualMachine"> | string
    host_server_id?: IntFilter<"VirtualMachine"> | number
    assigned_gpu_card_id?: IntNullableFilter<"VirtualMachine"> | number | null
    assigned_gpu_card_index_id?: IntNullableFilter<"VirtualMachine"> | number | null
    vcpu_cores_assigned?: IntNullableFilter<"VirtualMachine"> | number | null
    ram_gb_assigned?: IntNullableFilter<"VirtualMachine"> | number | null
    gpu_resource_slice_description?: StringNullableFilter<"VirtualMachine"> | string | null
    purpose?: StringNullableFilter<"VirtualMachine"> | string | null
    internal_ip_address?: StringNullableFilter<"VirtualMachine"> | string | null
    notes?: StringNullableFilter<"VirtualMachine"> | string | null
    created_at?: DateTimeNullableFilter<"VirtualMachine"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"VirtualMachine"> | Date | string | null
    host_server?: XOR<ServersScalarRelationFilter, serversWhereInput>
    assigned_gpu_card?: XOR<GpuCardNullableScalarRelationFilter, GpuCardWhereInput> | null
  }, "id">

  export type VirtualMachineOrderByWithAggregationInput = {
    id?: SortOrder
    name_label?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrderInput | SortOrder
    assigned_gpu_card_index_id?: SortOrderInput | SortOrder
    vcpu_cores_assigned?: SortOrderInput | SortOrder
    ram_gb_assigned?: SortOrderInput | SortOrder
    gpu_resource_slice_description?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    internal_ip_address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: VirtualMachineCountOrderByAggregateInput
    _avg?: VirtualMachineAvgOrderByAggregateInput
    _max?: VirtualMachineMaxOrderByAggregateInput
    _min?: VirtualMachineMinOrderByAggregateInput
    _sum?: VirtualMachineSumOrderByAggregateInput
  }

  export type VirtualMachineScalarWhereWithAggregatesInput = {
    AND?: VirtualMachineScalarWhereWithAggregatesInput | VirtualMachineScalarWhereWithAggregatesInput[]
    OR?: VirtualMachineScalarWhereWithAggregatesInput[]
    NOT?: VirtualMachineScalarWhereWithAggregatesInput | VirtualMachineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VirtualMachine"> | number
    name_label?: StringWithAggregatesFilter<"VirtualMachine"> | string
    host_server_id?: IntWithAggregatesFilter<"VirtualMachine"> | number
    assigned_gpu_card_id?: IntNullableWithAggregatesFilter<"VirtualMachine"> | number | null
    assigned_gpu_card_index_id?: IntNullableWithAggregatesFilter<"VirtualMachine"> | number | null
    vcpu_cores_assigned?: IntNullableWithAggregatesFilter<"VirtualMachine"> | number | null
    ram_gb_assigned?: IntNullableWithAggregatesFilter<"VirtualMachine"> | number | null
    gpu_resource_slice_description?: StringNullableWithAggregatesFilter<"VirtualMachine"> | string | null
    purpose?: StringNullableWithAggregatesFilter<"VirtualMachine"> | string | null
    internal_ip_address?: StringNullableWithAggregatesFilter<"VirtualMachine"> | string | null
    notes?: StringNullableWithAggregatesFilter<"VirtualMachine"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"VirtualMachine"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"VirtualMachine"> | Date | string | null
  }

  export type serversCreateInput = {
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
    gpuCards?: GpuCardCreateNestedManyWithoutServerInput
    virtualMachines?: VirtualMachineCreateNestedManyWithoutHost_serverInput
  }

  export type serversUncheckedCreateInput = {
    id?: number
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
    gpuCards?: GpuCardUncheckedCreateNestedManyWithoutServerInput
    virtualMachines?: VirtualMachineUncheckedCreateNestedManyWithoutHost_serverInput
  }

  export type serversUpdateInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    gpuCards?: GpuCardUpdateManyWithoutServerNestedInput
    virtualMachines?: VirtualMachineUpdateManyWithoutHost_serverNestedInput
  }

  export type serversUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    gpuCards?: GpuCardUncheckedUpdateManyWithoutServerNestedInput
    virtualMachines?: VirtualMachineUncheckedUpdateManyWithoutHost_serverNestedInput
  }

  export type serversCreateManyInput = {
    id?: number
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
  }

  export type serversUpdateManyMutationInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type serversUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    email: string
    status?: string
    password?: string | null
    isAdmin?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    status?: string
    password?: string | null
    isAdmin?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    status?: string
    password?: string | null
    isAdmin?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GpuCardCreateInput = {
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    server: serversCreateNestedOneWithoutGpuCardsInput
    virtualMachines?: VirtualMachineCreateNestedManyWithoutAssigned_gpu_cardInput
  }

  export type GpuCardUncheckedCreateInput = {
    id?: number
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    serverId: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    virtualMachines?: VirtualMachineUncheckedCreateNestedManyWithoutAssigned_gpu_cardInput
  }

  export type GpuCardUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    server?: serversUpdateOneRequiredWithoutGpuCardsNestedInput
    virtualMachines?: VirtualMachineUpdateManyWithoutAssigned_gpu_cardNestedInput
  }

  export type GpuCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    virtualMachines?: VirtualMachineUncheckedUpdateManyWithoutAssigned_gpu_cardNestedInput
  }

  export type GpuCardCreateManyInput = {
    id?: number
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    serverId: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type GpuCardUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GpuCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineCreateInput = {
    name_label: string
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    host_server: serversCreateNestedOneWithoutVirtualMachinesInput
    assigned_gpu_card?: GpuCardCreateNestedOneWithoutVirtualMachinesInput
  }

  export type VirtualMachineUncheckedCreateInput = {
    id?: number
    name_label: string
    host_server_id: number
    assigned_gpu_card_id?: number | null
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VirtualMachineUpdateInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    host_server?: serversUpdateOneRequiredWithoutVirtualMachinesNestedInput
    assigned_gpu_card?: GpuCardUpdateOneWithoutVirtualMachinesNestedInput
  }

  export type VirtualMachineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    host_server_id?: IntFieldUpdateOperationsInput | number
    assigned_gpu_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineCreateManyInput = {
    id?: number
    name_label: string
    host_server_id: number
    assigned_gpu_card_id?: number | null
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VirtualMachineUpdateManyMutationInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    host_server_id?: IntFieldUpdateOperationsInput | number
    assigned_gpu_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GpuCardListRelationFilter = {
    every?: GpuCardWhereInput
    some?: GpuCardWhereInput
    none?: GpuCardWhereInput
  }

  export type VirtualMachineListRelationFilter = {
    every?: VirtualMachineWhereInput
    some?: VirtualMachineWhereInput
    none?: VirtualMachineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GpuCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VirtualMachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type serversCountOrderByAggregateInput = {
    id?: SortOrder
    name_label?: SortOrder
    ip_address?: SortOrder
    cpu_model?: SortOrder
    cpu_cores?: SortOrder
    memory_gb?: SortOrder
    disk_spec?: SortOrder
    os?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    purpose?: SortOrder
  }

  export type serversAvgOrderByAggregateInput = {
    id?: SortOrder
    cpu_cores?: SortOrder
    memory_gb?: SortOrder
  }

  export type serversMaxOrderByAggregateInput = {
    id?: SortOrder
    name_label?: SortOrder
    ip_address?: SortOrder
    cpu_model?: SortOrder
    cpu_cores?: SortOrder
    memory_gb?: SortOrder
    disk_spec?: SortOrder
    os?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    purpose?: SortOrder
  }

  export type serversMinOrderByAggregateInput = {
    id?: SortOrder
    name_label?: SortOrder
    ip_address?: SortOrder
    cpu_model?: SortOrder
    cpu_cores?: SortOrder
    memory_gb?: SortOrder
    disk_spec?: SortOrder
    os?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    purpose?: SortOrder
  }

  export type serversSumOrderByAggregateInput = {
    id?: SortOrder
    cpu_cores?: SortOrder
    memory_gb?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServersScalarRelationFilter = {
    is?: serversWhereInput
    isNot?: serversWhereInput
  }

  export type GpuCardCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    memory_gb?: SortOrder
    purpose?: SortOrder
    notes?: SortOrder
    serverId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GpuCardAvgOrderByAggregateInput = {
    id?: SortOrder
    memory_gb?: SortOrder
    serverId?: SortOrder
  }

  export type GpuCardMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    memory_gb?: SortOrder
    purpose?: SortOrder
    notes?: SortOrder
    serverId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GpuCardMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    memory_gb?: SortOrder
    purpose?: SortOrder
    notes?: SortOrder
    serverId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GpuCardSumOrderByAggregateInput = {
    id?: SortOrder
    memory_gb?: SortOrder
    serverId?: SortOrder
  }

  export type GpuCardNullableScalarRelationFilter = {
    is?: GpuCardWhereInput | null
    isNot?: GpuCardWhereInput | null
  }

  export type VirtualMachineCountOrderByAggregateInput = {
    id?: SortOrder
    name_label?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrder
    assigned_gpu_card_index_id?: SortOrder
    vcpu_cores_assigned?: SortOrder
    ram_gb_assigned?: SortOrder
    gpu_resource_slice_description?: SortOrder
    purpose?: SortOrder
    internal_ip_address?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VirtualMachineAvgOrderByAggregateInput = {
    id?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrder
    assigned_gpu_card_index_id?: SortOrder
    vcpu_cores_assigned?: SortOrder
    ram_gb_assigned?: SortOrder
  }

  export type VirtualMachineMaxOrderByAggregateInput = {
    id?: SortOrder
    name_label?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrder
    assigned_gpu_card_index_id?: SortOrder
    vcpu_cores_assigned?: SortOrder
    ram_gb_assigned?: SortOrder
    gpu_resource_slice_description?: SortOrder
    purpose?: SortOrder
    internal_ip_address?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VirtualMachineMinOrderByAggregateInput = {
    id?: SortOrder
    name_label?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrder
    assigned_gpu_card_index_id?: SortOrder
    vcpu_cores_assigned?: SortOrder
    ram_gb_assigned?: SortOrder
    gpu_resource_slice_description?: SortOrder
    purpose?: SortOrder
    internal_ip_address?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VirtualMachineSumOrderByAggregateInput = {
    id?: SortOrder
    host_server_id?: SortOrder
    assigned_gpu_card_id?: SortOrder
    assigned_gpu_card_index_id?: SortOrder
    vcpu_cores_assigned?: SortOrder
    ram_gb_assigned?: SortOrder
  }

  export type GpuCardCreateNestedManyWithoutServerInput = {
    create?: XOR<GpuCardCreateWithoutServerInput, GpuCardUncheckedCreateWithoutServerInput> | GpuCardCreateWithoutServerInput[] | GpuCardUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GpuCardCreateOrConnectWithoutServerInput | GpuCardCreateOrConnectWithoutServerInput[]
    createMany?: GpuCardCreateManyServerInputEnvelope
    connect?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
  }

  export type VirtualMachineCreateNestedManyWithoutHost_serverInput = {
    create?: XOR<VirtualMachineCreateWithoutHost_serverInput, VirtualMachineUncheckedCreateWithoutHost_serverInput> | VirtualMachineCreateWithoutHost_serverInput[] | VirtualMachineUncheckedCreateWithoutHost_serverInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutHost_serverInput | VirtualMachineCreateOrConnectWithoutHost_serverInput[]
    createMany?: VirtualMachineCreateManyHost_serverInputEnvelope
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
  }

  export type GpuCardUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<GpuCardCreateWithoutServerInput, GpuCardUncheckedCreateWithoutServerInput> | GpuCardCreateWithoutServerInput[] | GpuCardUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GpuCardCreateOrConnectWithoutServerInput | GpuCardCreateOrConnectWithoutServerInput[]
    createMany?: GpuCardCreateManyServerInputEnvelope
    connect?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
  }

  export type VirtualMachineUncheckedCreateNestedManyWithoutHost_serverInput = {
    create?: XOR<VirtualMachineCreateWithoutHost_serverInput, VirtualMachineUncheckedCreateWithoutHost_serverInput> | VirtualMachineCreateWithoutHost_serverInput[] | VirtualMachineUncheckedCreateWithoutHost_serverInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutHost_serverInput | VirtualMachineCreateOrConnectWithoutHost_serverInput[]
    createMany?: VirtualMachineCreateManyHost_serverInputEnvelope
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GpuCardUpdateManyWithoutServerNestedInput = {
    create?: XOR<GpuCardCreateWithoutServerInput, GpuCardUncheckedCreateWithoutServerInput> | GpuCardCreateWithoutServerInput[] | GpuCardUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GpuCardCreateOrConnectWithoutServerInput | GpuCardCreateOrConnectWithoutServerInput[]
    upsert?: GpuCardUpsertWithWhereUniqueWithoutServerInput | GpuCardUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: GpuCardCreateManyServerInputEnvelope
    set?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    disconnect?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    delete?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    connect?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    update?: GpuCardUpdateWithWhereUniqueWithoutServerInput | GpuCardUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: GpuCardUpdateManyWithWhereWithoutServerInput | GpuCardUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: GpuCardScalarWhereInput | GpuCardScalarWhereInput[]
  }

  export type VirtualMachineUpdateManyWithoutHost_serverNestedInput = {
    create?: XOR<VirtualMachineCreateWithoutHost_serverInput, VirtualMachineUncheckedCreateWithoutHost_serverInput> | VirtualMachineCreateWithoutHost_serverInput[] | VirtualMachineUncheckedCreateWithoutHost_serverInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutHost_serverInput | VirtualMachineCreateOrConnectWithoutHost_serverInput[]
    upsert?: VirtualMachineUpsertWithWhereUniqueWithoutHost_serverInput | VirtualMachineUpsertWithWhereUniqueWithoutHost_serverInput[]
    createMany?: VirtualMachineCreateManyHost_serverInputEnvelope
    set?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    disconnect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    delete?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    update?: VirtualMachineUpdateWithWhereUniqueWithoutHost_serverInput | VirtualMachineUpdateWithWhereUniqueWithoutHost_serverInput[]
    updateMany?: VirtualMachineUpdateManyWithWhereWithoutHost_serverInput | VirtualMachineUpdateManyWithWhereWithoutHost_serverInput[]
    deleteMany?: VirtualMachineScalarWhereInput | VirtualMachineScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GpuCardUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<GpuCardCreateWithoutServerInput, GpuCardUncheckedCreateWithoutServerInput> | GpuCardCreateWithoutServerInput[] | GpuCardUncheckedCreateWithoutServerInput[]
    connectOrCreate?: GpuCardCreateOrConnectWithoutServerInput | GpuCardCreateOrConnectWithoutServerInput[]
    upsert?: GpuCardUpsertWithWhereUniqueWithoutServerInput | GpuCardUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: GpuCardCreateManyServerInputEnvelope
    set?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    disconnect?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    delete?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    connect?: GpuCardWhereUniqueInput | GpuCardWhereUniqueInput[]
    update?: GpuCardUpdateWithWhereUniqueWithoutServerInput | GpuCardUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: GpuCardUpdateManyWithWhereWithoutServerInput | GpuCardUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: GpuCardScalarWhereInput | GpuCardScalarWhereInput[]
  }

  export type VirtualMachineUncheckedUpdateManyWithoutHost_serverNestedInput = {
    create?: XOR<VirtualMachineCreateWithoutHost_serverInput, VirtualMachineUncheckedCreateWithoutHost_serverInput> | VirtualMachineCreateWithoutHost_serverInput[] | VirtualMachineUncheckedCreateWithoutHost_serverInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutHost_serverInput | VirtualMachineCreateOrConnectWithoutHost_serverInput[]
    upsert?: VirtualMachineUpsertWithWhereUniqueWithoutHost_serverInput | VirtualMachineUpsertWithWhereUniqueWithoutHost_serverInput[]
    createMany?: VirtualMachineCreateManyHost_serverInputEnvelope
    set?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    disconnect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    delete?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    update?: VirtualMachineUpdateWithWhereUniqueWithoutHost_serverInput | VirtualMachineUpdateWithWhereUniqueWithoutHost_serverInput[]
    updateMany?: VirtualMachineUpdateManyWithWhereWithoutHost_serverInput | VirtualMachineUpdateManyWithWhereWithoutHost_serverInput[]
    deleteMany?: VirtualMachineScalarWhereInput | VirtualMachineScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type serversCreateNestedOneWithoutGpuCardsInput = {
    create?: XOR<serversCreateWithoutGpuCardsInput, serversUncheckedCreateWithoutGpuCardsInput>
    connectOrCreate?: serversCreateOrConnectWithoutGpuCardsInput
    connect?: serversWhereUniqueInput
  }

  export type VirtualMachineCreateNestedManyWithoutAssigned_gpu_cardInput = {
    create?: XOR<VirtualMachineCreateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput> | VirtualMachineCreateWithoutAssigned_gpu_cardInput[] | VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput | VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput[]
    createMany?: VirtualMachineCreateManyAssigned_gpu_cardInputEnvelope
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
  }

  export type VirtualMachineUncheckedCreateNestedManyWithoutAssigned_gpu_cardInput = {
    create?: XOR<VirtualMachineCreateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput> | VirtualMachineCreateWithoutAssigned_gpu_cardInput[] | VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput | VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput[]
    createMany?: VirtualMachineCreateManyAssigned_gpu_cardInputEnvelope
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
  }

  export type serversUpdateOneRequiredWithoutGpuCardsNestedInput = {
    create?: XOR<serversCreateWithoutGpuCardsInput, serversUncheckedCreateWithoutGpuCardsInput>
    connectOrCreate?: serversCreateOrConnectWithoutGpuCardsInput
    upsert?: serversUpsertWithoutGpuCardsInput
    connect?: serversWhereUniqueInput
    update?: XOR<XOR<serversUpdateToOneWithWhereWithoutGpuCardsInput, serversUpdateWithoutGpuCardsInput>, serversUncheckedUpdateWithoutGpuCardsInput>
  }

  export type VirtualMachineUpdateManyWithoutAssigned_gpu_cardNestedInput = {
    create?: XOR<VirtualMachineCreateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput> | VirtualMachineCreateWithoutAssigned_gpu_cardInput[] | VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput | VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput[]
    upsert?: VirtualMachineUpsertWithWhereUniqueWithoutAssigned_gpu_cardInput | VirtualMachineUpsertWithWhereUniqueWithoutAssigned_gpu_cardInput[]
    createMany?: VirtualMachineCreateManyAssigned_gpu_cardInputEnvelope
    set?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    disconnect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    delete?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    update?: VirtualMachineUpdateWithWhereUniqueWithoutAssigned_gpu_cardInput | VirtualMachineUpdateWithWhereUniqueWithoutAssigned_gpu_cardInput[]
    updateMany?: VirtualMachineUpdateManyWithWhereWithoutAssigned_gpu_cardInput | VirtualMachineUpdateManyWithWhereWithoutAssigned_gpu_cardInput[]
    deleteMany?: VirtualMachineScalarWhereInput | VirtualMachineScalarWhereInput[]
  }

  export type VirtualMachineUncheckedUpdateManyWithoutAssigned_gpu_cardNestedInput = {
    create?: XOR<VirtualMachineCreateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput> | VirtualMachineCreateWithoutAssigned_gpu_cardInput[] | VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput[]
    connectOrCreate?: VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput | VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput[]
    upsert?: VirtualMachineUpsertWithWhereUniqueWithoutAssigned_gpu_cardInput | VirtualMachineUpsertWithWhereUniqueWithoutAssigned_gpu_cardInput[]
    createMany?: VirtualMachineCreateManyAssigned_gpu_cardInputEnvelope
    set?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    disconnect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    delete?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    connect?: VirtualMachineWhereUniqueInput | VirtualMachineWhereUniqueInput[]
    update?: VirtualMachineUpdateWithWhereUniqueWithoutAssigned_gpu_cardInput | VirtualMachineUpdateWithWhereUniqueWithoutAssigned_gpu_cardInput[]
    updateMany?: VirtualMachineUpdateManyWithWhereWithoutAssigned_gpu_cardInput | VirtualMachineUpdateManyWithWhereWithoutAssigned_gpu_cardInput[]
    deleteMany?: VirtualMachineScalarWhereInput | VirtualMachineScalarWhereInput[]
  }

  export type serversCreateNestedOneWithoutVirtualMachinesInput = {
    create?: XOR<serversCreateWithoutVirtualMachinesInput, serversUncheckedCreateWithoutVirtualMachinesInput>
    connectOrCreate?: serversCreateOrConnectWithoutVirtualMachinesInput
    connect?: serversWhereUniqueInput
  }

  export type GpuCardCreateNestedOneWithoutVirtualMachinesInput = {
    create?: XOR<GpuCardCreateWithoutVirtualMachinesInput, GpuCardUncheckedCreateWithoutVirtualMachinesInput>
    connectOrCreate?: GpuCardCreateOrConnectWithoutVirtualMachinesInput
    connect?: GpuCardWhereUniqueInput
  }

  export type serversUpdateOneRequiredWithoutVirtualMachinesNestedInput = {
    create?: XOR<serversCreateWithoutVirtualMachinesInput, serversUncheckedCreateWithoutVirtualMachinesInput>
    connectOrCreate?: serversCreateOrConnectWithoutVirtualMachinesInput
    upsert?: serversUpsertWithoutVirtualMachinesInput
    connect?: serversWhereUniqueInput
    update?: XOR<XOR<serversUpdateToOneWithWhereWithoutVirtualMachinesInput, serversUpdateWithoutVirtualMachinesInput>, serversUncheckedUpdateWithoutVirtualMachinesInput>
  }

  export type GpuCardUpdateOneWithoutVirtualMachinesNestedInput = {
    create?: XOR<GpuCardCreateWithoutVirtualMachinesInput, GpuCardUncheckedCreateWithoutVirtualMachinesInput>
    connectOrCreate?: GpuCardCreateOrConnectWithoutVirtualMachinesInput
    upsert?: GpuCardUpsertWithoutVirtualMachinesInput
    disconnect?: GpuCardWhereInput | boolean
    delete?: GpuCardWhereInput | boolean
    connect?: GpuCardWhereUniqueInput
    update?: XOR<XOR<GpuCardUpdateToOneWithWhereWithoutVirtualMachinesInput, GpuCardUpdateWithoutVirtualMachinesInput>, GpuCardUncheckedUpdateWithoutVirtualMachinesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GpuCardCreateWithoutServerInput = {
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    virtualMachines?: VirtualMachineCreateNestedManyWithoutAssigned_gpu_cardInput
  }

  export type GpuCardUncheckedCreateWithoutServerInput = {
    id?: number
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    virtualMachines?: VirtualMachineUncheckedCreateNestedManyWithoutAssigned_gpu_cardInput
  }

  export type GpuCardCreateOrConnectWithoutServerInput = {
    where: GpuCardWhereUniqueInput
    create: XOR<GpuCardCreateWithoutServerInput, GpuCardUncheckedCreateWithoutServerInput>
  }

  export type GpuCardCreateManyServerInputEnvelope = {
    data: GpuCardCreateManyServerInput | GpuCardCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type VirtualMachineCreateWithoutHost_serverInput = {
    name_label: string
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    assigned_gpu_card?: GpuCardCreateNestedOneWithoutVirtualMachinesInput
  }

  export type VirtualMachineUncheckedCreateWithoutHost_serverInput = {
    id?: number
    name_label: string
    assigned_gpu_card_id?: number | null
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VirtualMachineCreateOrConnectWithoutHost_serverInput = {
    where: VirtualMachineWhereUniqueInput
    create: XOR<VirtualMachineCreateWithoutHost_serverInput, VirtualMachineUncheckedCreateWithoutHost_serverInput>
  }

  export type VirtualMachineCreateManyHost_serverInputEnvelope = {
    data: VirtualMachineCreateManyHost_serverInput | VirtualMachineCreateManyHost_serverInput[]
    skipDuplicates?: boolean
  }

  export type GpuCardUpsertWithWhereUniqueWithoutServerInput = {
    where: GpuCardWhereUniqueInput
    update: XOR<GpuCardUpdateWithoutServerInput, GpuCardUncheckedUpdateWithoutServerInput>
    create: XOR<GpuCardCreateWithoutServerInput, GpuCardUncheckedCreateWithoutServerInput>
  }

  export type GpuCardUpdateWithWhereUniqueWithoutServerInput = {
    where: GpuCardWhereUniqueInput
    data: XOR<GpuCardUpdateWithoutServerInput, GpuCardUncheckedUpdateWithoutServerInput>
  }

  export type GpuCardUpdateManyWithWhereWithoutServerInput = {
    where: GpuCardScalarWhereInput
    data: XOR<GpuCardUpdateManyMutationInput, GpuCardUncheckedUpdateManyWithoutServerInput>
  }

  export type GpuCardScalarWhereInput = {
    AND?: GpuCardScalarWhereInput | GpuCardScalarWhereInput[]
    OR?: GpuCardScalarWhereInput[]
    NOT?: GpuCardScalarWhereInput | GpuCardScalarWhereInput[]
    id?: IntFilter<"GpuCard"> | number
    model?: StringFilter<"GpuCard"> | string
    memory_gb?: IntFilter<"GpuCard"> | number
    purpose?: StringNullableFilter<"GpuCard"> | string | null
    notes?: StringNullableFilter<"GpuCard"> | string | null
    serverId?: IntFilter<"GpuCard"> | number
    created_at?: DateTimeNullableFilter<"GpuCard"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"GpuCard"> | Date | string | null
  }

  export type VirtualMachineUpsertWithWhereUniqueWithoutHost_serverInput = {
    where: VirtualMachineWhereUniqueInput
    update: XOR<VirtualMachineUpdateWithoutHost_serverInput, VirtualMachineUncheckedUpdateWithoutHost_serverInput>
    create: XOR<VirtualMachineCreateWithoutHost_serverInput, VirtualMachineUncheckedCreateWithoutHost_serverInput>
  }

  export type VirtualMachineUpdateWithWhereUniqueWithoutHost_serverInput = {
    where: VirtualMachineWhereUniqueInput
    data: XOR<VirtualMachineUpdateWithoutHost_serverInput, VirtualMachineUncheckedUpdateWithoutHost_serverInput>
  }

  export type VirtualMachineUpdateManyWithWhereWithoutHost_serverInput = {
    where: VirtualMachineScalarWhereInput
    data: XOR<VirtualMachineUpdateManyMutationInput, VirtualMachineUncheckedUpdateManyWithoutHost_serverInput>
  }

  export type VirtualMachineScalarWhereInput = {
    AND?: VirtualMachineScalarWhereInput | VirtualMachineScalarWhereInput[]
    OR?: VirtualMachineScalarWhereInput[]
    NOT?: VirtualMachineScalarWhereInput | VirtualMachineScalarWhereInput[]
    id?: IntFilter<"VirtualMachine"> | number
    name_label?: StringFilter<"VirtualMachine"> | string
    host_server_id?: IntFilter<"VirtualMachine"> | number
    assigned_gpu_card_id?: IntNullableFilter<"VirtualMachine"> | number | null
    assigned_gpu_card_index_id?: IntNullableFilter<"VirtualMachine"> | number | null
    vcpu_cores_assigned?: IntNullableFilter<"VirtualMachine"> | number | null
    ram_gb_assigned?: IntNullableFilter<"VirtualMachine"> | number | null
    gpu_resource_slice_description?: StringNullableFilter<"VirtualMachine"> | string | null
    purpose?: StringNullableFilter<"VirtualMachine"> | string | null
    internal_ip_address?: StringNullableFilter<"VirtualMachine"> | string | null
    notes?: StringNullableFilter<"VirtualMachine"> | string | null
    created_at?: DateTimeNullableFilter<"VirtualMachine"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"VirtualMachine"> | Date | string | null
  }

  export type serversCreateWithoutGpuCardsInput = {
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
    virtualMachines?: VirtualMachineCreateNestedManyWithoutHost_serverInput
  }

  export type serversUncheckedCreateWithoutGpuCardsInput = {
    id?: number
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
    virtualMachines?: VirtualMachineUncheckedCreateNestedManyWithoutHost_serverInput
  }

  export type serversCreateOrConnectWithoutGpuCardsInput = {
    where: serversWhereUniqueInput
    create: XOR<serversCreateWithoutGpuCardsInput, serversUncheckedCreateWithoutGpuCardsInput>
  }

  export type VirtualMachineCreateWithoutAssigned_gpu_cardInput = {
    name_label: string
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    host_server: serversCreateNestedOneWithoutVirtualMachinesInput
  }

  export type VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput = {
    id?: number
    name_label: string
    host_server_id: number
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VirtualMachineCreateOrConnectWithoutAssigned_gpu_cardInput = {
    where: VirtualMachineWhereUniqueInput
    create: XOR<VirtualMachineCreateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput>
  }

  export type VirtualMachineCreateManyAssigned_gpu_cardInputEnvelope = {
    data: VirtualMachineCreateManyAssigned_gpu_cardInput | VirtualMachineCreateManyAssigned_gpu_cardInput[]
    skipDuplicates?: boolean
  }

  export type serversUpsertWithoutGpuCardsInput = {
    update: XOR<serversUpdateWithoutGpuCardsInput, serversUncheckedUpdateWithoutGpuCardsInput>
    create: XOR<serversCreateWithoutGpuCardsInput, serversUncheckedCreateWithoutGpuCardsInput>
    where?: serversWhereInput
  }

  export type serversUpdateToOneWithWhereWithoutGpuCardsInput = {
    where?: serversWhereInput
    data: XOR<serversUpdateWithoutGpuCardsInput, serversUncheckedUpdateWithoutGpuCardsInput>
  }

  export type serversUpdateWithoutGpuCardsInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    virtualMachines?: VirtualMachineUpdateManyWithoutHost_serverNestedInput
  }

  export type serversUncheckedUpdateWithoutGpuCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    virtualMachines?: VirtualMachineUncheckedUpdateManyWithoutHost_serverNestedInput
  }

  export type VirtualMachineUpsertWithWhereUniqueWithoutAssigned_gpu_cardInput = {
    where: VirtualMachineWhereUniqueInput
    update: XOR<VirtualMachineUpdateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedUpdateWithoutAssigned_gpu_cardInput>
    create: XOR<VirtualMachineCreateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedCreateWithoutAssigned_gpu_cardInput>
  }

  export type VirtualMachineUpdateWithWhereUniqueWithoutAssigned_gpu_cardInput = {
    where: VirtualMachineWhereUniqueInput
    data: XOR<VirtualMachineUpdateWithoutAssigned_gpu_cardInput, VirtualMachineUncheckedUpdateWithoutAssigned_gpu_cardInput>
  }

  export type VirtualMachineUpdateManyWithWhereWithoutAssigned_gpu_cardInput = {
    where: VirtualMachineScalarWhereInput
    data: XOR<VirtualMachineUpdateManyMutationInput, VirtualMachineUncheckedUpdateManyWithoutAssigned_gpu_cardInput>
  }

  export type serversCreateWithoutVirtualMachinesInput = {
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
    gpuCards?: GpuCardCreateNestedManyWithoutServerInput
  }

  export type serversUncheckedCreateWithoutVirtualMachinesInput = {
    id?: number
    name_label: string
    ip_address: string
    cpu_model?: string | null
    cpu_cores?: number | null
    memory_gb?: number | null
    disk_spec?: string | null
    os?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purpose?: string | null
    gpuCards?: GpuCardUncheckedCreateNestedManyWithoutServerInput
  }

  export type serversCreateOrConnectWithoutVirtualMachinesInput = {
    where: serversWhereUniqueInput
    create: XOR<serversCreateWithoutVirtualMachinesInput, serversUncheckedCreateWithoutVirtualMachinesInput>
  }

  export type GpuCardCreateWithoutVirtualMachinesInput = {
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    server: serversCreateNestedOneWithoutGpuCardsInput
  }

  export type GpuCardUncheckedCreateWithoutVirtualMachinesInput = {
    id?: number
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    serverId: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type GpuCardCreateOrConnectWithoutVirtualMachinesInput = {
    where: GpuCardWhereUniqueInput
    create: XOR<GpuCardCreateWithoutVirtualMachinesInput, GpuCardUncheckedCreateWithoutVirtualMachinesInput>
  }

  export type serversUpsertWithoutVirtualMachinesInput = {
    update: XOR<serversUpdateWithoutVirtualMachinesInput, serversUncheckedUpdateWithoutVirtualMachinesInput>
    create: XOR<serversCreateWithoutVirtualMachinesInput, serversUncheckedCreateWithoutVirtualMachinesInput>
    where?: serversWhereInput
  }

  export type serversUpdateToOneWithWhereWithoutVirtualMachinesInput = {
    where?: serversWhereInput
    data: XOR<serversUpdateWithoutVirtualMachinesInput, serversUncheckedUpdateWithoutVirtualMachinesInput>
  }

  export type serversUpdateWithoutVirtualMachinesInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    gpuCards?: GpuCardUpdateManyWithoutServerNestedInput
  }

  export type serversUncheckedUpdateWithoutVirtualMachinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    cpu_model?: NullableStringFieldUpdateOperationsInput | string | null
    cpu_cores?: NullableIntFieldUpdateOperationsInput | number | null
    memory_gb?: NullableIntFieldUpdateOperationsInput | number | null
    disk_spec?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    gpuCards?: GpuCardUncheckedUpdateManyWithoutServerNestedInput
  }

  export type GpuCardUpsertWithoutVirtualMachinesInput = {
    update: XOR<GpuCardUpdateWithoutVirtualMachinesInput, GpuCardUncheckedUpdateWithoutVirtualMachinesInput>
    create: XOR<GpuCardCreateWithoutVirtualMachinesInput, GpuCardUncheckedCreateWithoutVirtualMachinesInput>
    where?: GpuCardWhereInput
  }

  export type GpuCardUpdateToOneWithWhereWithoutVirtualMachinesInput = {
    where?: GpuCardWhereInput
    data: XOR<GpuCardUpdateWithoutVirtualMachinesInput, GpuCardUncheckedUpdateWithoutVirtualMachinesInput>
  }

  export type GpuCardUpdateWithoutVirtualMachinesInput = {
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    server?: serversUpdateOneRequiredWithoutGpuCardsNestedInput
  }

  export type GpuCardUncheckedUpdateWithoutVirtualMachinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GpuCardCreateManyServerInput = {
    id?: number
    model: string
    memory_gb: number
    purpose?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VirtualMachineCreateManyHost_serverInput = {
    id?: number
    name_label: string
    assigned_gpu_card_id?: number | null
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type GpuCardUpdateWithoutServerInput = {
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    virtualMachines?: VirtualMachineUpdateManyWithoutAssigned_gpu_cardNestedInput
  }

  export type GpuCardUncheckedUpdateWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    virtualMachines?: VirtualMachineUncheckedUpdateManyWithoutAssigned_gpu_cardNestedInput
  }

  export type GpuCardUncheckedUpdateManyWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    memory_gb?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineUpdateWithoutHost_serverInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_gpu_card?: GpuCardUpdateOneWithoutVirtualMachinesNestedInput
  }

  export type VirtualMachineUncheckedUpdateWithoutHost_serverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    assigned_gpu_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineUncheckedUpdateManyWithoutHost_serverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    assigned_gpu_card_id?: NullableIntFieldUpdateOperationsInput | number | null
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineCreateManyAssigned_gpu_cardInput = {
    id?: number
    name_label: string
    host_server_id: number
    assigned_gpu_card_index_id?: number | null
    vcpu_cores_assigned?: number | null
    ram_gb_assigned?: number | null
    gpu_resource_slice_description?: string | null
    purpose?: string | null
    internal_ip_address?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VirtualMachineUpdateWithoutAssigned_gpu_cardInput = {
    name_label?: StringFieldUpdateOperationsInput | string
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    host_server?: serversUpdateOneRequiredWithoutVirtualMachinesNestedInput
  }

  export type VirtualMachineUncheckedUpdateWithoutAssigned_gpu_cardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    host_server_id?: IntFieldUpdateOperationsInput | number
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VirtualMachineUncheckedUpdateManyWithoutAssigned_gpu_cardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_label?: StringFieldUpdateOperationsInput | string
    host_server_id?: IntFieldUpdateOperationsInput | number
    assigned_gpu_card_index_id?: NullableIntFieldUpdateOperationsInput | number | null
    vcpu_cores_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    ram_gb_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    gpu_resource_slice_description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    internal_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Entreprise
 * 
 */
export type Entreprise = $Result.DefaultSelection<Prisma.$EntreprisePayload>
/**
 * Model Employe
 * 
 */
export type Employe = $Result.DefaultSelection<Prisma.$EmployePayload>
/**
 * Model CyclePaie
 * 
 */
export type CyclePaie = $Result.DefaultSelection<Prisma.$CyclePaiePayload>
/**
 * Model BulletinPaie
 * 
 */
export type BulletinPaie = $Result.DefaultSelection<Prisma.$BulletinPaiePayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>
/**
 * Model Pointage
 * 
 */
export type Pointage = $Result.DefaultSelection<Prisma.$PointagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMINISTRATEUR: 'SUPER_ADMINISTRATEUR',
  ADMINISTRATEUR: 'ADMINISTRATEUR',
  CAISSIER: 'CAISSIER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PayPeriodType: {
  MENSUEL: 'MENSUEL',
  HEBDOMADAIRE: 'HEBDOMADAIRE',
  QUOTIDIEN: 'QUOTIDIEN'
};

export type PayPeriodType = (typeof PayPeriodType)[keyof typeof PayPeriodType]


export const ContractType: {
  TEMPS_PLEIN: 'TEMPS_PLEIN',
  TEMPS_PARTIEL: 'TEMPS_PARTIEL',
  CONTRAT: 'CONTRAT'
};

export type ContractType = (typeof ContractType)[keyof typeof ContractType]


export const PayRunStatus: {
  BROUILLON: 'BROUILLON',
  APPROUVE: 'APPROUVE',
  FERME: 'FERME'
};

export type PayRunStatus = (typeof PayRunStatus)[keyof typeof PayRunStatus]


export const PayslipStatus: {
  BROUILLON: 'BROUILLON',
  APPROUVE: 'APPROUVE',
  PAYE: 'PAYE',
  PARTIEL: 'PARTIEL',
  EN_ATTENTE: 'EN_ATTENTE'
};

export type PayslipStatus = (typeof PayslipStatus)[keyof typeof PayslipStatus]


export const PaymentMethod: {
  ESPECES: 'ESPECES',
  VIREMENT: 'VIREMENT',
  MOBILE_MONEY: 'MOBILE_MONEY'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PayPeriodType = $Enums.PayPeriodType

export const PayPeriodType: typeof $Enums.PayPeriodType

export type ContractType = $Enums.ContractType

export const ContractType: typeof $Enums.ContractType

export type PayRunStatus = $Enums.PayRunStatus

export const PayRunStatus: typeof $Enums.PayRunStatus

export type PayslipStatus = $Enums.PayslipStatus

export const PayslipStatus: typeof $Enums.PayslipStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
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
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entreprise`: Exposes CRUD operations for the **Entreprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprise.findMany()
    * ```
    */
  get entreprise(): Prisma.EntrepriseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employe`: Exposes CRUD operations for the **Employe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employes
    * const employes = await prisma.employe.findMany()
    * ```
    */
  get employe(): Prisma.EmployeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cyclePaie`: Exposes CRUD operations for the **CyclePaie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CyclePaies
    * const cyclePaies = await prisma.cyclePaie.findMany()
    * ```
    */
  get cyclePaie(): Prisma.CyclePaieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletinPaie`: Exposes CRUD operations for the **BulletinPaie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulletinPaies
    * const bulletinPaies = await prisma.bulletinPaie.findMany()
    * ```
    */
  get bulletinPaie(): Prisma.BulletinPaieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointage`: Exposes CRUD operations for the **Pointage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pointages
    * const pointages = await prisma.pointage.findMany()
    * ```
    */
  get pointage(): Prisma.PointageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Utilisateur: 'Utilisateur',
    Entreprise: 'Entreprise',
    Employe: 'Employe',
    CyclePaie: 'CyclePaie',
    BulletinPaie: 'BulletinPaie',
    Paiement: 'Paiement',
    Pointage: 'Pointage'
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
      modelProps: "utilisateur" | "entreprise" | "employe" | "cyclePaie" | "bulletinPaie" | "paiement" | "pointage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Entreprise: {
        payload: Prisma.$EntreprisePayload<ExtArgs>
        fields: Prisma.EntrepriseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrepriseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrepriseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findFirst: {
            args: Prisma.EntrepriseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrepriseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findMany: {
            args: Prisma.EntrepriseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          create: {
            args: Prisma.EntrepriseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          createMany: {
            args: Prisma.EntrepriseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntrepriseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          update: {
            args: Prisma.EntrepriseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          deleteMany: {
            args: Prisma.EntrepriseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrepriseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntrepriseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          aggregate: {
            args: Prisma.EntrepriseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprise>
          }
          groupBy: {
            args: Prisma.EntrepriseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrepriseCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseCountAggregateOutputType> | number
          }
        }
      }
      Employe: {
        payload: Prisma.$EmployePayload<ExtArgs>
        fields: Prisma.EmployeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findFirst: {
            args: Prisma.EmployeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findMany: {
            args: Prisma.EmployeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          create: {
            args: Prisma.EmployeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          createMany: {
            args: Prisma.EmployeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          update: {
            args: Prisma.EmployeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          deleteMany: {
            args: Prisma.EmployeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          aggregate: {
            args: Prisma.EmployeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmploye>
          }
          groupBy: {
            args: Prisma.EmployeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeCountAggregateOutputType> | number
          }
        }
      }
      CyclePaie: {
        payload: Prisma.$CyclePaiePayload<ExtArgs>
        fields: Prisma.CyclePaieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CyclePaieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CyclePaieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>
          }
          findFirst: {
            args: Prisma.CyclePaieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CyclePaieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>
          }
          findMany: {
            args: Prisma.CyclePaieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>[]
          }
          create: {
            args: Prisma.CyclePaieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>
          }
          createMany: {
            args: Prisma.CyclePaieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CyclePaieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>
          }
          update: {
            args: Prisma.CyclePaieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>
          }
          deleteMany: {
            args: Prisma.CyclePaieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CyclePaieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CyclePaieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePaiePayload>
          }
          aggregate: {
            args: Prisma.CyclePaieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCyclePaie>
          }
          groupBy: {
            args: Prisma.CyclePaieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CyclePaieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CyclePaieCountArgs<ExtArgs>
            result: $Utils.Optional<CyclePaieCountAggregateOutputType> | number
          }
        }
      }
      BulletinPaie: {
        payload: Prisma.$BulletinPaiePayload<ExtArgs>
        fields: Prisma.BulletinPaieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletinPaieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletinPaieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>
          }
          findFirst: {
            args: Prisma.BulletinPaieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletinPaieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>
          }
          findMany: {
            args: Prisma.BulletinPaieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>[]
          }
          create: {
            args: Prisma.BulletinPaieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>
          }
          createMany: {
            args: Prisma.BulletinPaieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BulletinPaieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>
          }
          update: {
            args: Prisma.BulletinPaieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>
          }
          deleteMany: {
            args: Prisma.BulletinPaieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletinPaieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BulletinPaieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPaiePayload>
          }
          aggregate: {
            args: Prisma.BulletinPaieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletinPaie>
          }
          groupBy: {
            args: Prisma.BulletinPaieGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletinPaieGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletinPaieCountArgs<ExtArgs>
            result: $Utils.Optional<BulletinPaieCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
      Pointage: {
        payload: Prisma.$PointagePayload<ExtArgs>
        fields: Prisma.PointageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>
          }
          findFirst: {
            args: Prisma.PointageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>
          }
          findMany: {
            args: Prisma.PointageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>[]
          }
          create: {
            args: Prisma.PointageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>
          }
          createMany: {
            args: Prisma.PointageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PointageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>
          }
          update: {
            args: Prisma.PointageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>
          }
          deleteMany: {
            args: Prisma.PointageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointagePayload>
          }
          aggregate: {
            args: Prisma.PointageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointage>
          }
          groupBy: {
            args: Prisma.PointageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointageCountArgs<ExtArgs>
            result: $Utils.Optional<PointageCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    utilisateur?: UtilisateurOmit
    entreprise?: EntrepriseOmit
    employe?: EmployeOmit
    cyclePaie?: CyclePaieOmit
    bulletinPaie?: BulletinPaieOmit
    paiement?: PaiementOmit
    pointage?: PointageOmit
  }

  /* Types for Logging */
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
   * Count Type EntrepriseCountOutputType
   */

  export type EntrepriseCountOutputType = {
    utilisateurs: number
    employes: number
    cyclesPaie: number
  }

  export type EntrepriseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurs?: boolean | EntrepriseCountOutputTypeCountUtilisateursArgs
    employes?: boolean | EntrepriseCountOutputTypeCountEmployesArgs
    cyclesPaie?: boolean | EntrepriseCountOutputTypeCountCyclesPaieArgs
  }

  // Custom InputTypes
  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrepriseCountOutputType
     */
    select?: EntrepriseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountEmployesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountCyclesPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CyclePaieWhereInput
  }


  /**
   * Count Type EmployeCountOutputType
   */

  export type EmployeCountOutputType = {
    bulletinsPaie: number
    pointages: number
    paiements: number
  }

  export type EmployeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletinsPaie?: boolean | EmployeCountOutputTypeCountBulletinsPaieArgs
    pointages?: boolean | EmployeCountOutputTypeCountPointagesArgs
    paiements?: boolean | EmployeCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeCountOutputType
     */
    select?: EmployeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeCountBulletinsPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinPaieWhereInput
  }

  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeCountPointagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointageWhereInput
  }

  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }


  /**
   * Count Type CyclePaieCountOutputType
   */

  export type CyclePaieCountOutputType = {
    bulletinsPaie: number
  }

  export type CyclePaieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletinsPaie?: boolean | CyclePaieCountOutputTypeCountBulletinsPaieArgs
  }

  // Custom InputTypes
  /**
   * CyclePaieCountOutputType without action
   */
  export type CyclePaieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaieCountOutputType
     */
    select?: CyclePaieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CyclePaieCountOutputType without action
   */
  export type CyclePaieCountOutputTypeCountBulletinsPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinPaieWhereInput
  }


  /**
   * Count Type BulletinPaieCountOutputType
   */

  export type BulletinPaieCountOutputType = {
    paiements: number
  }

  export type BulletinPaieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paiements?: boolean | BulletinPaieCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * BulletinPaieCountOutputType without action
   */
  export type BulletinPaieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaieCountOutputType
     */
    select?: BulletinPaieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BulletinPaieCountOutputType without action
   */
  export type BulletinPaieCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
    prenom: string | null
    nom: string | null
    role: $Enums.Role | null
    entrepriseId: string | null
    estActif: boolean | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
    prenom: string | null
    nom: string | null
    role: $Enums.Role | null
    entrepriseId: string | null
    estActif: boolean | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    email: number
    motDePasse: number
    prenom: number
    nom: number
    role: number
    entrepriseId: number
    estActif: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    prenom?: true
    nom?: true
    role?: true
    entrepriseId?: true
    estActif?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    prenom?: true
    nom?: true
    role?: true
    entrepriseId?: true
    estActif?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    prenom?: true
    nom?: true
    role?: true
    entrepriseId?: true
    estActif?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role: $Enums.Role
    entrepriseId: string | null
    estActif: boolean
    creeLe: Date
    misAJourLe: Date
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    motDePasse?: boolean
    prenom?: boolean
    nom?: boolean
    role?: boolean
    entrepriseId?: boolean
    estActif?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    entreprise?: boolean | Utilisateur$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>



  export type UtilisateurSelectScalar = {
    id?: boolean
    email?: boolean
    motDePasse?: boolean
    prenom?: boolean
    nom?: boolean
    role?: boolean
    entrepriseId?: boolean
    estActif?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "motDePasse" | "prenom" | "nom" | "role" | "entrepriseId" | "estActif" | "creeLe" | "misAJourLe", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | Utilisateur$entrepriseArgs<ExtArgs>
  }

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      motDePasse: string
      prenom: string
      nom: string
      role: $Enums.Role
      entrepriseId: string | null
      estActif: boolean
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends Utilisateur$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasse: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly entrepriseId: FieldRef<"Utilisateur", 'String'>
    readonly estActif: FieldRef<"Utilisateur", 'Boolean'>
    readonly creeLe: FieldRef<"Utilisateur", 'DateTime'>
    readonly misAJourLe: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.entreprise
   */
  export type Utilisateur$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Entreprise
   */

  export type AggregateEntreprise = {
    _count: EntrepriseCountAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  export type EntrepriseMinAggregateOutputType = {
    id: string | null
    nom: string | null
    logo: string | null
    adresse: string | null
    devise: string | null
    typePeriodePaie: $Enums.PayPeriodType | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type EntrepriseMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    logo: string | null
    adresse: string | null
    devise: string | null
    typePeriodePaie: $Enums.PayPeriodType | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type EntrepriseCountAggregateOutputType = {
    id: number
    nom: number
    logo: number
    adresse: number
    devise: number
    typePeriodePaie: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type EntrepriseMinAggregateInputType = {
    id?: true
    nom?: true
    logo?: true
    adresse?: true
    devise?: true
    typePeriodePaie?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type EntrepriseMaxAggregateInputType = {
    id?: true
    nom?: true
    logo?: true
    adresse?: true
    devise?: true
    typePeriodePaie?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type EntrepriseCountAggregateInputType = {
    id?: true
    nom?: true
    logo?: true
    adresse?: true
    devise?: true
    typePeriodePaie?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type EntrepriseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprise to aggregate.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntrepriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepriseMaxAggregateInputType
  }

  export type GetEntrepriseAggregateType<T extends EntrepriseAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprise[P]>
      : GetScalarType<T[P], AggregateEntreprise[P]>
  }




  export type EntrepriseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithAggregationInput | EntrepriseOrderByWithAggregationInput[]
    by: EntrepriseScalarFieldEnum[] | EntrepriseScalarFieldEnum
    having?: EntrepriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepriseCountAggregateInputType | true
    _min?: EntrepriseMinAggregateInputType
    _max?: EntrepriseMaxAggregateInputType
  }

  export type EntrepriseGroupByOutputType = {
    id: string
    nom: string
    logo: string | null
    adresse: string | null
    devise: string
    typePeriodePaie: $Enums.PayPeriodType
    creeLe: Date
    misAJourLe: Date
    _count: EntrepriseCountAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  type GetEntrepriseGroupByPayload<T extends EntrepriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
        }
      >
    >


  export type EntrepriseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    logo?: boolean
    adresse?: boolean
    devise?: boolean
    typePeriodePaie?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    utilisateurs?: boolean | Entreprise$utilisateursArgs<ExtArgs>
    employes?: boolean | Entreprise$employesArgs<ExtArgs>
    cyclesPaie?: boolean | Entreprise$cyclesPaieArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>



  export type EntrepriseSelectScalar = {
    id?: boolean
    nom?: boolean
    logo?: boolean
    adresse?: boolean
    devise?: boolean
    typePeriodePaie?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type EntrepriseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "logo" | "adresse" | "devise" | "typePeriodePaie" | "creeLe" | "misAJourLe", ExtArgs["result"]["entreprise"]>
  export type EntrepriseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurs?: boolean | Entreprise$utilisateursArgs<ExtArgs>
    employes?: boolean | Entreprise$employesArgs<ExtArgs>
    cyclesPaie?: boolean | Entreprise$cyclesPaieArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EntreprisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprise"
    objects: {
      utilisateurs: Prisma.$UtilisateurPayload<ExtArgs>[]
      employes: Prisma.$EmployePayload<ExtArgs>[]
      cyclesPaie: Prisma.$CyclePaiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      logo: string | null
      adresse: string | null
      devise: string
      typePeriodePaie: $Enums.PayPeriodType
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["entreprise"]>
    composites: {}
  }

  type EntrepriseGetPayload<S extends boolean | null | undefined | EntrepriseDefaultArgs> = $Result.GetResult<Prisma.$EntreprisePayload, S>

  type EntrepriseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrepriseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepriseCountAggregateInputType | true
    }

  export interface EntrepriseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprise'], meta: { name: 'Entreprise' } }
    /**
     * Find zero or one Entreprise that matches the filter.
     * @param {EntrepriseFindUniqueArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrepriseFindUniqueArgs>(args: SelectSubset<T, EntrepriseFindUniqueArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrepriseFindUniqueOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrepriseFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrepriseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrepriseFindFirstArgs>(args?: SelectSubset<T, EntrepriseFindFirstArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrepriseFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrepriseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprise.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrepriseFindManyArgs>(args?: SelectSubset<T, EntrepriseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprise.
     * @param {EntrepriseCreateArgs} args - Arguments to create a Entreprise.
     * @example
     * // Create one Entreprise
     * const Entreprise = await prisma.entreprise.create({
     *   data: {
     *     // ... data to create a Entreprise
     *   }
     * })
     * 
     */
    create<T extends EntrepriseCreateArgs>(args: SelectSubset<T, EntrepriseCreateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntrepriseCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrepriseCreateManyArgs>(args?: SelectSubset<T, EntrepriseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entreprise.
     * @param {EntrepriseDeleteArgs} args - Arguments to delete one Entreprise.
     * @example
     * // Delete one Entreprise
     * const Entreprise = await prisma.entreprise.delete({
     *   where: {
     *     // ... filter to delete one Entreprise
     *   }
     * })
     * 
     */
    delete<T extends EntrepriseDeleteArgs>(args: SelectSubset<T, EntrepriseDeleteArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprise.
     * @param {EntrepriseUpdateArgs} args - Arguments to update one Entreprise.
     * @example
     * // Update one Entreprise
     * const entreprise = await prisma.entreprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrepriseUpdateArgs>(args: SelectSubset<T, EntrepriseUpdateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntrepriseDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrepriseDeleteManyArgs>(args?: SelectSubset<T, EntrepriseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrepriseUpdateManyArgs>(args: SelectSubset<T, EntrepriseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entreprise.
     * @param {EntrepriseUpsertArgs} args - Arguments to update or create a Entreprise.
     * @example
     * // Update or create a Entreprise
     * const entreprise = await prisma.entreprise.upsert({
     *   create: {
     *     // ... data to create a Entreprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprise we want to update
     *   }
     * })
     */
    upsert<T extends EntrepriseUpsertArgs>(args: SelectSubset<T, EntrepriseUpsertArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprise.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntrepriseCountArgs>(
      args?: Subset<T, EntrepriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrepriseAggregateArgs>(args: Subset<T, EntrepriseAggregateArgs>): Prisma.PrismaPromise<GetEntrepriseAggregateType<T>>

    /**
     * Group by Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseGroupByArgs} args - Group by arguments.
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
      T extends EntrepriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrepriseGroupByArgs['orderBy'] }
        : { orderBy?: EntrepriseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntrepriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprise model
   */
  readonly fields: EntrepriseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrepriseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateurs<T extends Entreprise$utilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employes<T extends Entreprise$employesArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$employesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cyclesPaie<T extends Entreprise$cyclesPaieArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$cyclesPaieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entreprise model
   */
  interface EntrepriseFieldRefs {
    readonly id: FieldRef<"Entreprise", 'String'>
    readonly nom: FieldRef<"Entreprise", 'String'>
    readonly logo: FieldRef<"Entreprise", 'String'>
    readonly adresse: FieldRef<"Entreprise", 'String'>
    readonly devise: FieldRef<"Entreprise", 'String'>
    readonly typePeriodePaie: FieldRef<"Entreprise", 'PayPeriodType'>
    readonly creeLe: FieldRef<"Entreprise", 'DateTime'>
    readonly misAJourLe: FieldRef<"Entreprise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entreprise findUnique
   */
  export type EntrepriseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findUniqueOrThrow
   */
  export type EntrepriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findFirst
   */
  export type EntrepriseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findFirstOrThrow
   */
  export type EntrepriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findMany
   */
  export type EntrepriseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise create
   */
  export type EntrepriseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to create a Entreprise.
     */
    data: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
  }

  /**
   * Entreprise createMany
   */
  export type EntrepriseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise update
   */
  export type EntrepriseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to update a Entreprise.
     */
    data: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
    /**
     * Choose, which Entreprise to update.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise updateMany
   */
  export type EntrepriseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise upsert
   */
  export type EntrepriseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The filter to search for the Entreprise to update in case it exists.
     */
    where: EntrepriseWhereUniqueInput
    /**
     * In case the Entreprise found by the `where` argument doesn't exist, create a new Entreprise with this data.
     */
    create: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
    /**
     * In case the Entreprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
  }

  /**
   * Entreprise delete
   */
  export type EntrepriseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter which Entreprise to delete.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise deleteMany
   */
  export type EntrepriseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprise.utilisateurs
   */
  export type Entreprise$utilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    cursor?: UtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Entreprise.employes
   */
  export type Entreprise$employesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    where?: EmployeWhereInput
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    cursor?: EmployeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Entreprise.cyclesPaie
   */
  export type Entreprise$cyclesPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    where?: CyclePaieWhereInput
    orderBy?: CyclePaieOrderByWithRelationInput | CyclePaieOrderByWithRelationInput[]
    cursor?: CyclePaieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CyclePaieScalarFieldEnum | CyclePaieScalarFieldEnum[]
  }

  /**
   * Entreprise without action
   */
  export type EntrepriseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
  }


  /**
   * Model Employe
   */

  export type AggregateEmploye = {
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  export type EmployeAvgAggregateOutputType = {
    taux: number | null
  }

  export type EmployeSumAggregateOutputType = {
    taux: number | null
  }

  export type EmployeMinAggregateOutputType = {
    id: string | null
    prenom: string | null
    nom: string | null
    poste: string | null
    typeContrat: $Enums.ContractType | null
    taux: number | null
    compteBancaire: string | null
    nomBanque: string | null
    entrepriseId: string | null
    estActif: boolean | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type EmployeMaxAggregateOutputType = {
    id: string | null
    prenom: string | null
    nom: string | null
    poste: string | null
    typeContrat: $Enums.ContractType | null
    taux: number | null
    compteBancaire: string | null
    nomBanque: string | null
    entrepriseId: string | null
    estActif: boolean | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type EmployeCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    poste: number
    typeContrat: number
    taux: number
    compteBancaire: number
    nomBanque: number
    entrepriseId: number
    estActif: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type EmployeAvgAggregateInputType = {
    taux?: true
  }

  export type EmployeSumAggregateInputType = {
    taux?: true
  }

  export type EmployeMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    poste?: true
    typeContrat?: true
    taux?: true
    compteBancaire?: true
    nomBanque?: true
    entrepriseId?: true
    estActif?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type EmployeMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    poste?: true
    typeContrat?: true
    taux?: true
    compteBancaire?: true
    nomBanque?: true
    entrepriseId?: true
    estActif?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type EmployeCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    poste?: true
    typeContrat?: true
    taux?: true
    compteBancaire?: true
    nomBanque?: true
    entrepriseId?: true
    estActif?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type EmployeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employe to aggregate.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employes
    **/
    _count?: true | EmployeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeMaxAggregateInputType
  }

  export type GetEmployeAggregateType<T extends EmployeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmploye]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmploye[P]>
      : GetScalarType<T[P], AggregateEmploye[P]>
  }




  export type EmployeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeWhereInput
    orderBy?: EmployeOrderByWithAggregationInput | EmployeOrderByWithAggregationInput[]
    by: EmployeScalarFieldEnum[] | EmployeScalarFieldEnum
    having?: EmployeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeCountAggregateInputType | true
    _avg?: EmployeAvgAggregateInputType
    _sum?: EmployeSumAggregateInputType
    _min?: EmployeMinAggregateInputType
    _max?: EmployeMaxAggregateInputType
  }

  export type EmployeGroupByOutputType = {
    id: string
    prenom: string
    nom: string
    poste: string
    typeContrat: $Enums.ContractType
    taux: number
    compteBancaire: string | null
    nomBanque: string | null
    entrepriseId: string
    estActif: boolean
    creeLe: Date
    misAJourLe: Date
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  type GetEmployeGroupByPayload<T extends EmployeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    poste?: boolean
    typeContrat?: boolean
    taux?: boolean
    compteBancaire?: boolean
    nomBanque?: boolean
    entrepriseId?: boolean
    estActif?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    bulletinsPaie?: boolean | Employe$bulletinsPaieArgs<ExtArgs>
    pointages?: boolean | Employe$pointagesArgs<ExtArgs>
    paiements?: boolean | Employe$paiementsArgs<ExtArgs>
    _count?: boolean | EmployeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employe"]>



  export type EmployeSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    poste?: boolean
    typeContrat?: boolean
    taux?: boolean
    compteBancaire?: boolean
    nomBanque?: boolean
    entrepriseId?: boolean
    estActif?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type EmployeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "poste" | "typeContrat" | "taux" | "compteBancaire" | "nomBanque" | "entrepriseId" | "estActif" | "creeLe" | "misAJourLe", ExtArgs["result"]["employe"]>
  export type EmployeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    bulletinsPaie?: boolean | Employe$bulletinsPaieArgs<ExtArgs>
    pointages?: boolean | Employe$pointagesArgs<ExtArgs>
    paiements?: boolean | Employe$paiementsArgs<ExtArgs>
    _count?: boolean | EmployeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employe"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs>
      bulletinsPaie: Prisma.$BulletinPaiePayload<ExtArgs>[]
      pointages: Prisma.$PointagePayload<ExtArgs>[]
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prenom: string
      nom: string
      poste: string
      typeContrat: $Enums.ContractType
      taux: number
      compteBancaire: string | null
      nomBanque: string | null
      entrepriseId: string
      estActif: boolean
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["employe"]>
    composites: {}
  }

  type EmployeGetPayload<S extends boolean | null | undefined | EmployeDefaultArgs> = $Result.GetResult<Prisma.$EmployePayload, S>

  type EmployeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeCountAggregateInputType | true
    }

  export interface EmployeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employe'], meta: { name: 'Employe' } }
    /**
     * Find zero or one Employe that matches the filter.
     * @param {EmployeFindUniqueArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeFindUniqueArgs>(args: SelectSubset<T, EmployeFindUniqueArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeFindUniqueOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeFindFirstArgs>(args?: SelectSubset<T, EmployeFindFirstArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employes
     * const employes = await prisma.employe.findMany()
     * 
     * // Get first 10 Employes
     * const employes = await prisma.employe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeWithIdOnly = await prisma.employe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeFindManyArgs>(args?: SelectSubset<T, EmployeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employe.
     * @param {EmployeCreateArgs} args - Arguments to create a Employe.
     * @example
     * // Create one Employe
     * const Employe = await prisma.employe.create({
     *   data: {
     *     // ... data to create a Employe
     *   }
     * })
     * 
     */
    create<T extends EmployeCreateArgs>(args: SelectSubset<T, EmployeCreateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employes.
     * @param {EmployeCreateManyArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employe = await prisma.employe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeCreateManyArgs>(args?: SelectSubset<T, EmployeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employe.
     * @param {EmployeDeleteArgs} args - Arguments to delete one Employe.
     * @example
     * // Delete one Employe
     * const Employe = await prisma.employe.delete({
     *   where: {
     *     // ... filter to delete one Employe
     *   }
     * })
     * 
     */
    delete<T extends EmployeDeleteArgs>(args: SelectSubset<T, EmployeDeleteArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employe.
     * @param {EmployeUpdateArgs} args - Arguments to update one Employe.
     * @example
     * // Update one Employe
     * const employe = await prisma.employe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeUpdateArgs>(args: SelectSubset<T, EmployeUpdateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employes.
     * @param {EmployeDeleteManyArgs} args - Arguments to filter Employes to delete.
     * @example
     * // Delete a few Employes
     * const { count } = await prisma.employe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeDeleteManyArgs>(args?: SelectSubset<T, EmployeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employes
     * const employe = await prisma.employe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeUpdateManyArgs>(args: SelectSubset<T, EmployeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employe.
     * @param {EmployeUpsertArgs} args - Arguments to update or create a Employe.
     * @example
     * // Update or create a Employe
     * const employe = await prisma.employe.upsert({
     *   create: {
     *     // ... data to create a Employe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employe we want to update
     *   }
     * })
     */
    upsert<T extends EmployeUpsertArgs>(args: SelectSubset<T, EmployeUpsertArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeCountArgs} args - Arguments to filter Employes to count.
     * @example
     * // Count the number of Employes
     * const count = await prisma.employe.count({
     *   where: {
     *     // ... the filter for the Employes we want to count
     *   }
     * })
    **/
    count<T extends EmployeCountArgs>(
      args?: Subset<T, EmployeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeAggregateArgs>(args: Subset<T, EmployeAggregateArgs>): Prisma.PrismaPromise<GetEmployeAggregateType<T>>

    /**
     * Group by Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeGroupByArgs} args - Group by arguments.
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
      T extends EmployeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employe model
   */
  readonly fields: EmployeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends EntrepriseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrepriseDefaultArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bulletinsPaie<T extends Employe$bulletinsPaieArgs<ExtArgs> = {}>(args?: Subset<T, Employe$bulletinsPaieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointages<T extends Employe$pointagesArgs<ExtArgs> = {}>(args?: Subset<T, Employe$pointagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends Employe$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, Employe$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employe model
   */
  interface EmployeFieldRefs {
    readonly id: FieldRef<"Employe", 'String'>
    readonly prenom: FieldRef<"Employe", 'String'>
    readonly nom: FieldRef<"Employe", 'String'>
    readonly poste: FieldRef<"Employe", 'String'>
    readonly typeContrat: FieldRef<"Employe", 'ContractType'>
    readonly taux: FieldRef<"Employe", 'Float'>
    readonly compteBancaire: FieldRef<"Employe", 'String'>
    readonly nomBanque: FieldRef<"Employe", 'String'>
    readonly entrepriseId: FieldRef<"Employe", 'String'>
    readonly estActif: FieldRef<"Employe", 'Boolean'>
    readonly creeLe: FieldRef<"Employe", 'DateTime'>
    readonly misAJourLe: FieldRef<"Employe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employe findUnique
   */
  export type EmployeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findUniqueOrThrow
   */
  export type EmployeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findFirst
   */
  export type EmployeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findFirstOrThrow
   */
  export type EmployeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findMany
   */
  export type EmployeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe create
   */
  export type EmployeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employe.
     */
    data: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
  }

  /**
   * Employe createMany
   */
  export type EmployeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employes.
     */
    data: EmployeCreateManyInput | EmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employe update
   */
  export type EmployeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employe.
     */
    data: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
    /**
     * Choose, which Employe to update.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe updateMany
   */
  export type EmployeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employe upsert
   */
  export type EmployeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employe to update in case it exists.
     */
    where: EmployeWhereUniqueInput
    /**
     * In case the Employe found by the `where` argument doesn't exist, create a new Employe with this data.
     */
    create: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
    /**
     * In case the Employe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
  }

  /**
   * Employe delete
   */
  export type EmployeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter which Employe to delete.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe deleteMany
   */
  export type EmployeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employes to delete
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to delete.
     */
    limit?: number
  }

  /**
   * Employe.bulletinsPaie
   */
  export type Employe$bulletinsPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    where?: BulletinPaieWhereInput
    orderBy?: BulletinPaieOrderByWithRelationInput | BulletinPaieOrderByWithRelationInput[]
    cursor?: BulletinPaieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletinPaieScalarFieldEnum | BulletinPaieScalarFieldEnum[]
  }

  /**
   * Employe.pointages
   */
  export type Employe$pointagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    where?: PointageWhereInput
    orderBy?: PointageOrderByWithRelationInput | PointageOrderByWithRelationInput[]
    cursor?: PointageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointageScalarFieldEnum | PointageScalarFieldEnum[]
  }

  /**
   * Employe.paiements
   */
  export type Employe$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Employe without action
   */
  export type EmployeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
  }


  /**
   * Model CyclePaie
   */

  export type AggregateCyclePaie = {
    _count: CyclePaieCountAggregateOutputType | null
    _min: CyclePaieMinAggregateOutputType | null
    _max: CyclePaieMaxAggregateOutputType | null
  }

  export type CyclePaieMinAggregateOutputType = {
    id: string | null
    nom: string | null
    dateDebut: Date | null
    dateFin: Date | null
    statut: $Enums.PayRunStatus | null
    entrepriseId: string | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type CyclePaieMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    dateDebut: Date | null
    dateFin: Date | null
    statut: $Enums.PayRunStatus | null
    entrepriseId: string | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type CyclePaieCountAggregateOutputType = {
    id: number
    nom: number
    dateDebut: number
    dateFin: number
    statut: number
    entrepriseId: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type CyclePaieMinAggregateInputType = {
    id?: true
    nom?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    entrepriseId?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type CyclePaieMaxAggregateInputType = {
    id?: true
    nom?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    entrepriseId?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type CyclePaieCountAggregateInputType = {
    id?: true
    nom?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    entrepriseId?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type CyclePaieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CyclePaie to aggregate.
     */
    where?: CyclePaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CyclePaies to fetch.
     */
    orderBy?: CyclePaieOrderByWithRelationInput | CyclePaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CyclePaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CyclePaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CyclePaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CyclePaies
    **/
    _count?: true | CyclePaieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CyclePaieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CyclePaieMaxAggregateInputType
  }

  export type GetCyclePaieAggregateType<T extends CyclePaieAggregateArgs> = {
        [P in keyof T & keyof AggregateCyclePaie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCyclePaie[P]>
      : GetScalarType<T[P], AggregateCyclePaie[P]>
  }




  export type CyclePaieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CyclePaieWhereInput
    orderBy?: CyclePaieOrderByWithAggregationInput | CyclePaieOrderByWithAggregationInput[]
    by: CyclePaieScalarFieldEnum[] | CyclePaieScalarFieldEnum
    having?: CyclePaieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CyclePaieCountAggregateInputType | true
    _min?: CyclePaieMinAggregateInputType
    _max?: CyclePaieMaxAggregateInputType
  }

  export type CyclePaieGroupByOutputType = {
    id: string
    nom: string
    dateDebut: Date
    dateFin: Date
    statut: $Enums.PayRunStatus
    entrepriseId: string
    creeLe: Date
    misAJourLe: Date
    _count: CyclePaieCountAggregateOutputType | null
    _min: CyclePaieMinAggregateOutputType | null
    _max: CyclePaieMaxAggregateOutputType | null
  }

  type GetCyclePaieGroupByPayload<T extends CyclePaieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CyclePaieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CyclePaieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CyclePaieGroupByOutputType[P]>
            : GetScalarType<T[P], CyclePaieGroupByOutputType[P]>
        }
      >
    >


  export type CyclePaieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
    entrepriseId?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    bulletinsPaie?: boolean | CyclePaie$bulletinsPaieArgs<ExtArgs>
    _count?: boolean | CyclePaieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cyclePaie"]>



  export type CyclePaieSelectScalar = {
    id?: boolean
    nom?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
    entrepriseId?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type CyclePaieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "dateDebut" | "dateFin" | "statut" | "entrepriseId" | "creeLe" | "misAJourLe", ExtArgs["result"]["cyclePaie"]>
  export type CyclePaieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    bulletinsPaie?: boolean | CyclePaie$bulletinsPaieArgs<ExtArgs>
    _count?: boolean | CyclePaieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CyclePaiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CyclePaie"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs>
      bulletinsPaie: Prisma.$BulletinPaiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      dateDebut: Date
      dateFin: Date
      statut: $Enums.PayRunStatus
      entrepriseId: string
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["cyclePaie"]>
    composites: {}
  }

  type CyclePaieGetPayload<S extends boolean | null | undefined | CyclePaieDefaultArgs> = $Result.GetResult<Prisma.$CyclePaiePayload, S>

  type CyclePaieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CyclePaieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CyclePaieCountAggregateInputType | true
    }

  export interface CyclePaieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CyclePaie'], meta: { name: 'CyclePaie' } }
    /**
     * Find zero or one CyclePaie that matches the filter.
     * @param {CyclePaieFindUniqueArgs} args - Arguments to find a CyclePaie
     * @example
     * // Get one CyclePaie
     * const cyclePaie = await prisma.cyclePaie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CyclePaieFindUniqueArgs>(args: SelectSubset<T, CyclePaieFindUniqueArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CyclePaie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CyclePaieFindUniqueOrThrowArgs} args - Arguments to find a CyclePaie
     * @example
     * // Get one CyclePaie
     * const cyclePaie = await prisma.cyclePaie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CyclePaieFindUniqueOrThrowArgs>(args: SelectSubset<T, CyclePaieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CyclePaie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieFindFirstArgs} args - Arguments to find a CyclePaie
     * @example
     * // Get one CyclePaie
     * const cyclePaie = await prisma.cyclePaie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CyclePaieFindFirstArgs>(args?: SelectSubset<T, CyclePaieFindFirstArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CyclePaie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieFindFirstOrThrowArgs} args - Arguments to find a CyclePaie
     * @example
     * // Get one CyclePaie
     * const cyclePaie = await prisma.cyclePaie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CyclePaieFindFirstOrThrowArgs>(args?: SelectSubset<T, CyclePaieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CyclePaies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CyclePaies
     * const cyclePaies = await prisma.cyclePaie.findMany()
     * 
     * // Get first 10 CyclePaies
     * const cyclePaies = await prisma.cyclePaie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cyclePaieWithIdOnly = await prisma.cyclePaie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CyclePaieFindManyArgs>(args?: SelectSubset<T, CyclePaieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CyclePaie.
     * @param {CyclePaieCreateArgs} args - Arguments to create a CyclePaie.
     * @example
     * // Create one CyclePaie
     * const CyclePaie = await prisma.cyclePaie.create({
     *   data: {
     *     // ... data to create a CyclePaie
     *   }
     * })
     * 
     */
    create<T extends CyclePaieCreateArgs>(args: SelectSubset<T, CyclePaieCreateArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CyclePaies.
     * @param {CyclePaieCreateManyArgs} args - Arguments to create many CyclePaies.
     * @example
     * // Create many CyclePaies
     * const cyclePaie = await prisma.cyclePaie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CyclePaieCreateManyArgs>(args?: SelectSubset<T, CyclePaieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CyclePaie.
     * @param {CyclePaieDeleteArgs} args - Arguments to delete one CyclePaie.
     * @example
     * // Delete one CyclePaie
     * const CyclePaie = await prisma.cyclePaie.delete({
     *   where: {
     *     // ... filter to delete one CyclePaie
     *   }
     * })
     * 
     */
    delete<T extends CyclePaieDeleteArgs>(args: SelectSubset<T, CyclePaieDeleteArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CyclePaie.
     * @param {CyclePaieUpdateArgs} args - Arguments to update one CyclePaie.
     * @example
     * // Update one CyclePaie
     * const cyclePaie = await prisma.cyclePaie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CyclePaieUpdateArgs>(args: SelectSubset<T, CyclePaieUpdateArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CyclePaies.
     * @param {CyclePaieDeleteManyArgs} args - Arguments to filter CyclePaies to delete.
     * @example
     * // Delete a few CyclePaies
     * const { count } = await prisma.cyclePaie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CyclePaieDeleteManyArgs>(args?: SelectSubset<T, CyclePaieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CyclePaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CyclePaies
     * const cyclePaie = await prisma.cyclePaie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CyclePaieUpdateManyArgs>(args: SelectSubset<T, CyclePaieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CyclePaie.
     * @param {CyclePaieUpsertArgs} args - Arguments to update or create a CyclePaie.
     * @example
     * // Update or create a CyclePaie
     * const cyclePaie = await prisma.cyclePaie.upsert({
     *   create: {
     *     // ... data to create a CyclePaie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CyclePaie we want to update
     *   }
     * })
     */
    upsert<T extends CyclePaieUpsertArgs>(args: SelectSubset<T, CyclePaieUpsertArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CyclePaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieCountArgs} args - Arguments to filter CyclePaies to count.
     * @example
     * // Count the number of CyclePaies
     * const count = await prisma.cyclePaie.count({
     *   where: {
     *     // ... the filter for the CyclePaies we want to count
     *   }
     * })
    **/
    count<T extends CyclePaieCountArgs>(
      args?: Subset<T, CyclePaieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CyclePaieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CyclePaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CyclePaieAggregateArgs>(args: Subset<T, CyclePaieAggregateArgs>): Prisma.PrismaPromise<GetCyclePaieAggregateType<T>>

    /**
     * Group by CyclePaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyclePaieGroupByArgs} args - Group by arguments.
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
      T extends CyclePaieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CyclePaieGroupByArgs['orderBy'] }
        : { orderBy?: CyclePaieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CyclePaieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCyclePaieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CyclePaie model
   */
  readonly fields: CyclePaieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CyclePaie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CyclePaieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends EntrepriseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrepriseDefaultArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bulletinsPaie<T extends CyclePaie$bulletinsPaieArgs<ExtArgs> = {}>(args?: Subset<T, CyclePaie$bulletinsPaieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CyclePaie model
   */
  interface CyclePaieFieldRefs {
    readonly id: FieldRef<"CyclePaie", 'String'>
    readonly nom: FieldRef<"CyclePaie", 'String'>
    readonly dateDebut: FieldRef<"CyclePaie", 'DateTime'>
    readonly dateFin: FieldRef<"CyclePaie", 'DateTime'>
    readonly statut: FieldRef<"CyclePaie", 'PayRunStatus'>
    readonly entrepriseId: FieldRef<"CyclePaie", 'String'>
    readonly creeLe: FieldRef<"CyclePaie", 'DateTime'>
    readonly misAJourLe: FieldRef<"CyclePaie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CyclePaie findUnique
   */
  export type CyclePaieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * Filter, which CyclePaie to fetch.
     */
    where: CyclePaieWhereUniqueInput
  }

  /**
   * CyclePaie findUniqueOrThrow
   */
  export type CyclePaieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * Filter, which CyclePaie to fetch.
     */
    where: CyclePaieWhereUniqueInput
  }

  /**
   * CyclePaie findFirst
   */
  export type CyclePaieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * Filter, which CyclePaie to fetch.
     */
    where?: CyclePaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CyclePaies to fetch.
     */
    orderBy?: CyclePaieOrderByWithRelationInput | CyclePaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CyclePaies.
     */
    cursor?: CyclePaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CyclePaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CyclePaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CyclePaies.
     */
    distinct?: CyclePaieScalarFieldEnum | CyclePaieScalarFieldEnum[]
  }

  /**
   * CyclePaie findFirstOrThrow
   */
  export type CyclePaieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * Filter, which CyclePaie to fetch.
     */
    where?: CyclePaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CyclePaies to fetch.
     */
    orderBy?: CyclePaieOrderByWithRelationInput | CyclePaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CyclePaies.
     */
    cursor?: CyclePaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CyclePaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CyclePaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CyclePaies.
     */
    distinct?: CyclePaieScalarFieldEnum | CyclePaieScalarFieldEnum[]
  }

  /**
   * CyclePaie findMany
   */
  export type CyclePaieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * Filter, which CyclePaies to fetch.
     */
    where?: CyclePaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CyclePaies to fetch.
     */
    orderBy?: CyclePaieOrderByWithRelationInput | CyclePaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CyclePaies.
     */
    cursor?: CyclePaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CyclePaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CyclePaies.
     */
    skip?: number
    distinct?: CyclePaieScalarFieldEnum | CyclePaieScalarFieldEnum[]
  }

  /**
   * CyclePaie create
   */
  export type CyclePaieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * The data needed to create a CyclePaie.
     */
    data: XOR<CyclePaieCreateInput, CyclePaieUncheckedCreateInput>
  }

  /**
   * CyclePaie createMany
   */
  export type CyclePaieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CyclePaies.
     */
    data: CyclePaieCreateManyInput | CyclePaieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CyclePaie update
   */
  export type CyclePaieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * The data needed to update a CyclePaie.
     */
    data: XOR<CyclePaieUpdateInput, CyclePaieUncheckedUpdateInput>
    /**
     * Choose, which CyclePaie to update.
     */
    where: CyclePaieWhereUniqueInput
  }

  /**
   * CyclePaie updateMany
   */
  export type CyclePaieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CyclePaies.
     */
    data: XOR<CyclePaieUpdateManyMutationInput, CyclePaieUncheckedUpdateManyInput>
    /**
     * Filter which CyclePaies to update
     */
    where?: CyclePaieWhereInput
    /**
     * Limit how many CyclePaies to update.
     */
    limit?: number
  }

  /**
   * CyclePaie upsert
   */
  export type CyclePaieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * The filter to search for the CyclePaie to update in case it exists.
     */
    where: CyclePaieWhereUniqueInput
    /**
     * In case the CyclePaie found by the `where` argument doesn't exist, create a new CyclePaie with this data.
     */
    create: XOR<CyclePaieCreateInput, CyclePaieUncheckedCreateInput>
    /**
     * In case the CyclePaie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CyclePaieUpdateInput, CyclePaieUncheckedUpdateInput>
  }

  /**
   * CyclePaie delete
   */
  export type CyclePaieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
    /**
     * Filter which CyclePaie to delete.
     */
    where: CyclePaieWhereUniqueInput
  }

  /**
   * CyclePaie deleteMany
   */
  export type CyclePaieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CyclePaies to delete
     */
    where?: CyclePaieWhereInput
    /**
     * Limit how many CyclePaies to delete.
     */
    limit?: number
  }

  /**
   * CyclePaie.bulletinsPaie
   */
  export type CyclePaie$bulletinsPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    where?: BulletinPaieWhereInput
    orderBy?: BulletinPaieOrderByWithRelationInput | BulletinPaieOrderByWithRelationInput[]
    cursor?: BulletinPaieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletinPaieScalarFieldEnum | BulletinPaieScalarFieldEnum[]
  }

  /**
   * CyclePaie without action
   */
  export type CyclePaieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyclePaie
     */
    select?: CyclePaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CyclePaie
     */
    omit?: CyclePaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyclePaieInclude<ExtArgs> | null
  }


  /**
   * Model BulletinPaie
   */

  export type AggregateBulletinPaie = {
    _count: BulletinPaieCountAggregateOutputType | null
    _avg: BulletinPaieAvgAggregateOutputType | null
    _sum: BulletinPaieSumAggregateOutputType | null
    _min: BulletinPaieMinAggregateOutputType | null
    _max: BulletinPaieMaxAggregateOutputType | null
  }

  export type BulletinPaieAvgAggregateOutputType = {
    montantBrut: number | null
    deductions: number | null
    montantNet: number | null
    joursTravailles: number | null
  }

  export type BulletinPaieSumAggregateOutputType = {
    montantBrut: number | null
    deductions: number | null
    montantNet: number | null
    joursTravailles: number | null
  }

  export type BulletinPaieMinAggregateOutputType = {
    id: string | null
    employeId: string | null
    cyclePaieId: string | null
    montantBrut: number | null
    deductions: number | null
    montantNet: number | null
    joursTravailles: number | null
    statut: $Enums.PayslipStatus | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type BulletinPaieMaxAggregateOutputType = {
    id: string | null
    employeId: string | null
    cyclePaieId: string | null
    montantBrut: number | null
    deductions: number | null
    montantNet: number | null
    joursTravailles: number | null
    statut: $Enums.PayslipStatus | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type BulletinPaieCountAggregateOutputType = {
    id: number
    employeId: number
    cyclePaieId: number
    montantBrut: number
    deductions: number
    montantNet: number
    joursTravailles: number
    statut: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type BulletinPaieAvgAggregateInputType = {
    montantBrut?: true
    deductions?: true
    montantNet?: true
    joursTravailles?: true
  }

  export type BulletinPaieSumAggregateInputType = {
    montantBrut?: true
    deductions?: true
    montantNet?: true
    joursTravailles?: true
  }

  export type BulletinPaieMinAggregateInputType = {
    id?: true
    employeId?: true
    cyclePaieId?: true
    montantBrut?: true
    deductions?: true
    montantNet?: true
    joursTravailles?: true
    statut?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type BulletinPaieMaxAggregateInputType = {
    id?: true
    employeId?: true
    cyclePaieId?: true
    montantBrut?: true
    deductions?: true
    montantNet?: true
    joursTravailles?: true
    statut?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type BulletinPaieCountAggregateInputType = {
    id?: true
    employeId?: true
    cyclePaieId?: true
    montantBrut?: true
    deductions?: true
    montantNet?: true
    joursTravailles?: true
    statut?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type BulletinPaieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletinPaie to aggregate.
     */
    where?: BulletinPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPaies to fetch.
     */
    orderBy?: BulletinPaieOrderByWithRelationInput | BulletinPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletinPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulletinPaies
    **/
    _count?: true | BulletinPaieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletinPaieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletinPaieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletinPaieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletinPaieMaxAggregateInputType
  }

  export type GetBulletinPaieAggregateType<T extends BulletinPaieAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletinPaie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletinPaie[P]>
      : GetScalarType<T[P], AggregateBulletinPaie[P]>
  }




  export type BulletinPaieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinPaieWhereInput
    orderBy?: BulletinPaieOrderByWithAggregationInput | BulletinPaieOrderByWithAggregationInput[]
    by: BulletinPaieScalarFieldEnum[] | BulletinPaieScalarFieldEnum
    having?: BulletinPaieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletinPaieCountAggregateInputType | true
    _avg?: BulletinPaieAvgAggregateInputType
    _sum?: BulletinPaieSumAggregateInputType
    _min?: BulletinPaieMinAggregateInputType
    _max?: BulletinPaieMaxAggregateInputType
  }

  export type BulletinPaieGroupByOutputType = {
    id: string
    employeId: string
    cyclePaieId: string
    montantBrut: number
    deductions: number
    montantNet: number
    joursTravailles: number | null
    statut: $Enums.PayslipStatus
    creeLe: Date
    misAJourLe: Date
    _count: BulletinPaieCountAggregateOutputType | null
    _avg: BulletinPaieAvgAggregateOutputType | null
    _sum: BulletinPaieSumAggregateOutputType | null
    _min: BulletinPaieMinAggregateOutputType | null
    _max: BulletinPaieMaxAggregateOutputType | null
  }

  type GetBulletinPaieGroupByPayload<T extends BulletinPaieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletinPaieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletinPaieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletinPaieGroupByOutputType[P]>
            : GetScalarType<T[P], BulletinPaieGroupByOutputType[P]>
        }
      >
    >


  export type BulletinPaieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeId?: boolean
    cyclePaieId?: boolean
    montantBrut?: boolean
    deductions?: boolean
    montantNet?: boolean
    joursTravailles?: boolean
    statut?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    cyclePaie?: boolean | CyclePaieDefaultArgs<ExtArgs>
    paiements?: boolean | BulletinPaie$paiementsArgs<ExtArgs>
    _count?: boolean | BulletinPaieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletinPaie"]>



  export type BulletinPaieSelectScalar = {
    id?: boolean
    employeId?: boolean
    cyclePaieId?: boolean
    montantBrut?: boolean
    deductions?: boolean
    montantNet?: boolean
    joursTravailles?: boolean
    statut?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type BulletinPaieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeId" | "cyclePaieId" | "montantBrut" | "deductions" | "montantNet" | "joursTravailles" | "statut" | "creeLe" | "misAJourLe", ExtArgs["result"]["bulletinPaie"]>
  export type BulletinPaieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    cyclePaie?: boolean | CyclePaieDefaultArgs<ExtArgs>
    paiements?: boolean | BulletinPaie$paiementsArgs<ExtArgs>
    _count?: boolean | BulletinPaieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BulletinPaiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulletinPaie"
    objects: {
      employe: Prisma.$EmployePayload<ExtArgs>
      cyclePaie: Prisma.$CyclePaiePayload<ExtArgs>
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeId: string
      cyclePaieId: string
      montantBrut: number
      deductions: number
      montantNet: number
      joursTravailles: number | null
      statut: $Enums.PayslipStatus
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["bulletinPaie"]>
    composites: {}
  }

  type BulletinPaieGetPayload<S extends boolean | null | undefined | BulletinPaieDefaultArgs> = $Result.GetResult<Prisma.$BulletinPaiePayload, S>

  type BulletinPaieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletinPaieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletinPaieCountAggregateInputType | true
    }

  export interface BulletinPaieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulletinPaie'], meta: { name: 'BulletinPaie' } }
    /**
     * Find zero or one BulletinPaie that matches the filter.
     * @param {BulletinPaieFindUniqueArgs} args - Arguments to find a BulletinPaie
     * @example
     * // Get one BulletinPaie
     * const bulletinPaie = await prisma.bulletinPaie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletinPaieFindUniqueArgs>(args: SelectSubset<T, BulletinPaieFindUniqueArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulletinPaie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletinPaieFindUniqueOrThrowArgs} args - Arguments to find a BulletinPaie
     * @example
     * // Get one BulletinPaie
     * const bulletinPaie = await prisma.bulletinPaie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletinPaieFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletinPaieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletinPaie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieFindFirstArgs} args - Arguments to find a BulletinPaie
     * @example
     * // Get one BulletinPaie
     * const bulletinPaie = await prisma.bulletinPaie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletinPaieFindFirstArgs>(args?: SelectSubset<T, BulletinPaieFindFirstArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletinPaie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieFindFirstOrThrowArgs} args - Arguments to find a BulletinPaie
     * @example
     * // Get one BulletinPaie
     * const bulletinPaie = await prisma.bulletinPaie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletinPaieFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletinPaieFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulletinPaies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulletinPaies
     * const bulletinPaies = await prisma.bulletinPaie.findMany()
     * 
     * // Get first 10 BulletinPaies
     * const bulletinPaies = await prisma.bulletinPaie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletinPaieWithIdOnly = await prisma.bulletinPaie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletinPaieFindManyArgs>(args?: SelectSubset<T, BulletinPaieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulletinPaie.
     * @param {BulletinPaieCreateArgs} args - Arguments to create a BulletinPaie.
     * @example
     * // Create one BulletinPaie
     * const BulletinPaie = await prisma.bulletinPaie.create({
     *   data: {
     *     // ... data to create a BulletinPaie
     *   }
     * })
     * 
     */
    create<T extends BulletinPaieCreateArgs>(args: SelectSubset<T, BulletinPaieCreateArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulletinPaies.
     * @param {BulletinPaieCreateManyArgs} args - Arguments to create many BulletinPaies.
     * @example
     * // Create many BulletinPaies
     * const bulletinPaie = await prisma.bulletinPaie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletinPaieCreateManyArgs>(args?: SelectSubset<T, BulletinPaieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BulletinPaie.
     * @param {BulletinPaieDeleteArgs} args - Arguments to delete one BulletinPaie.
     * @example
     * // Delete one BulletinPaie
     * const BulletinPaie = await prisma.bulletinPaie.delete({
     *   where: {
     *     // ... filter to delete one BulletinPaie
     *   }
     * })
     * 
     */
    delete<T extends BulletinPaieDeleteArgs>(args: SelectSubset<T, BulletinPaieDeleteArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulletinPaie.
     * @param {BulletinPaieUpdateArgs} args - Arguments to update one BulletinPaie.
     * @example
     * // Update one BulletinPaie
     * const bulletinPaie = await prisma.bulletinPaie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletinPaieUpdateArgs>(args: SelectSubset<T, BulletinPaieUpdateArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulletinPaies.
     * @param {BulletinPaieDeleteManyArgs} args - Arguments to filter BulletinPaies to delete.
     * @example
     * // Delete a few BulletinPaies
     * const { count } = await prisma.bulletinPaie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletinPaieDeleteManyArgs>(args?: SelectSubset<T, BulletinPaieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulletinPaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulletinPaies
     * const bulletinPaie = await prisma.bulletinPaie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletinPaieUpdateManyArgs>(args: SelectSubset<T, BulletinPaieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BulletinPaie.
     * @param {BulletinPaieUpsertArgs} args - Arguments to update or create a BulletinPaie.
     * @example
     * // Update or create a BulletinPaie
     * const bulletinPaie = await prisma.bulletinPaie.upsert({
     *   create: {
     *     // ... data to create a BulletinPaie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulletinPaie we want to update
     *   }
     * })
     */
    upsert<T extends BulletinPaieUpsertArgs>(args: SelectSubset<T, BulletinPaieUpsertArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulletinPaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieCountArgs} args - Arguments to filter BulletinPaies to count.
     * @example
     * // Count the number of BulletinPaies
     * const count = await prisma.bulletinPaie.count({
     *   where: {
     *     // ... the filter for the BulletinPaies we want to count
     *   }
     * })
    **/
    count<T extends BulletinPaieCountArgs>(
      args?: Subset<T, BulletinPaieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletinPaieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulletinPaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BulletinPaieAggregateArgs>(args: Subset<T, BulletinPaieAggregateArgs>): Prisma.PrismaPromise<GetBulletinPaieAggregateType<T>>

    /**
     * Group by BulletinPaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPaieGroupByArgs} args - Group by arguments.
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
      T extends BulletinPaieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletinPaieGroupByArgs['orderBy'] }
        : { orderBy?: BulletinPaieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BulletinPaieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletinPaieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulletinPaie model
   */
  readonly fields: BulletinPaieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulletinPaie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletinPaieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employe<T extends EmployeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeDefaultArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cyclePaie<T extends CyclePaieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyclePaieDefaultArgs<ExtArgs>>): Prisma__CyclePaieClient<$Result.GetResult<Prisma.$CyclePaiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paiements<T extends BulletinPaie$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, BulletinPaie$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BulletinPaie model
   */
  interface BulletinPaieFieldRefs {
    readonly id: FieldRef<"BulletinPaie", 'String'>
    readonly employeId: FieldRef<"BulletinPaie", 'String'>
    readonly cyclePaieId: FieldRef<"BulletinPaie", 'String'>
    readonly montantBrut: FieldRef<"BulletinPaie", 'Float'>
    readonly deductions: FieldRef<"BulletinPaie", 'Float'>
    readonly montantNet: FieldRef<"BulletinPaie", 'Float'>
    readonly joursTravailles: FieldRef<"BulletinPaie", 'Int'>
    readonly statut: FieldRef<"BulletinPaie", 'PayslipStatus'>
    readonly creeLe: FieldRef<"BulletinPaie", 'DateTime'>
    readonly misAJourLe: FieldRef<"BulletinPaie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BulletinPaie findUnique
   */
  export type BulletinPaieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPaie to fetch.
     */
    where: BulletinPaieWhereUniqueInput
  }

  /**
   * BulletinPaie findUniqueOrThrow
   */
  export type BulletinPaieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPaie to fetch.
     */
    where: BulletinPaieWhereUniqueInput
  }

  /**
   * BulletinPaie findFirst
   */
  export type BulletinPaieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPaie to fetch.
     */
    where?: BulletinPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPaies to fetch.
     */
    orderBy?: BulletinPaieOrderByWithRelationInput | BulletinPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletinPaies.
     */
    cursor?: BulletinPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletinPaies.
     */
    distinct?: BulletinPaieScalarFieldEnum | BulletinPaieScalarFieldEnum[]
  }

  /**
   * BulletinPaie findFirstOrThrow
   */
  export type BulletinPaieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPaie to fetch.
     */
    where?: BulletinPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPaies to fetch.
     */
    orderBy?: BulletinPaieOrderByWithRelationInput | BulletinPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletinPaies.
     */
    cursor?: BulletinPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletinPaies.
     */
    distinct?: BulletinPaieScalarFieldEnum | BulletinPaieScalarFieldEnum[]
  }

  /**
   * BulletinPaie findMany
   */
  export type BulletinPaieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPaies to fetch.
     */
    where?: BulletinPaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPaies to fetch.
     */
    orderBy?: BulletinPaieOrderByWithRelationInput | BulletinPaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulletinPaies.
     */
    cursor?: BulletinPaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPaies.
     */
    skip?: number
    distinct?: BulletinPaieScalarFieldEnum | BulletinPaieScalarFieldEnum[]
  }

  /**
   * BulletinPaie create
   */
  export type BulletinPaieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * The data needed to create a BulletinPaie.
     */
    data: XOR<BulletinPaieCreateInput, BulletinPaieUncheckedCreateInput>
  }

  /**
   * BulletinPaie createMany
   */
  export type BulletinPaieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulletinPaies.
     */
    data: BulletinPaieCreateManyInput | BulletinPaieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulletinPaie update
   */
  export type BulletinPaieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * The data needed to update a BulletinPaie.
     */
    data: XOR<BulletinPaieUpdateInput, BulletinPaieUncheckedUpdateInput>
    /**
     * Choose, which BulletinPaie to update.
     */
    where: BulletinPaieWhereUniqueInput
  }

  /**
   * BulletinPaie updateMany
   */
  export type BulletinPaieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulletinPaies.
     */
    data: XOR<BulletinPaieUpdateManyMutationInput, BulletinPaieUncheckedUpdateManyInput>
    /**
     * Filter which BulletinPaies to update
     */
    where?: BulletinPaieWhereInput
    /**
     * Limit how many BulletinPaies to update.
     */
    limit?: number
  }

  /**
   * BulletinPaie upsert
   */
  export type BulletinPaieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * The filter to search for the BulletinPaie to update in case it exists.
     */
    where: BulletinPaieWhereUniqueInput
    /**
     * In case the BulletinPaie found by the `where` argument doesn't exist, create a new BulletinPaie with this data.
     */
    create: XOR<BulletinPaieCreateInput, BulletinPaieUncheckedCreateInput>
    /**
     * In case the BulletinPaie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletinPaieUpdateInput, BulletinPaieUncheckedUpdateInput>
  }

  /**
   * BulletinPaie delete
   */
  export type BulletinPaieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    /**
     * Filter which BulletinPaie to delete.
     */
    where: BulletinPaieWhereUniqueInput
  }

  /**
   * BulletinPaie deleteMany
   */
  export type BulletinPaieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletinPaies to delete
     */
    where?: BulletinPaieWhereInput
    /**
     * Limit how many BulletinPaies to delete.
     */
    limit?: number
  }

  /**
   * BulletinPaie.paiements
   */
  export type BulletinPaie$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * BulletinPaie without action
   */
  export type BulletinPaieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    montant: number | null
  }

  export type PaiementSumAggregateOutputType = {
    montant: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id: string | null
    bulletinPaieId: string | null
    employeId: string | null
    montant: number | null
    methode: $Enums.PaymentMethod | null
    reference: string | null
    notes: string | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: string | null
    bulletinPaieId: string | null
    employeId: string | null
    montant: number | null
    methode: $Enums.PaymentMethod | null
    reference: string | null
    notes: string | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    bulletinPaieId: number
    employeId: number
    montant: number
    methode: number
    reference: number
    notes: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    montant?: true
  }

  export type PaiementSumAggregateInputType = {
    montant?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    bulletinPaieId?: true
    employeId?: true
    montant?: true
    methode?: true
    reference?: true
    notes?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    bulletinPaieId?: true
    employeId?: true
    montant?: true
    methode?: true
    reference?: true
    notes?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    bulletinPaieId?: true
    employeId?: true
    montant?: true
    methode?: true
    reference?: true
    notes?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: string
    bulletinPaieId: string | null
    employeId: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference: string | null
    notes: string | null
    creeLe: Date
    misAJourLe: Date
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bulletinPaieId?: boolean
    employeId?: boolean
    montant?: boolean
    methode?: boolean
    reference?: boolean
    notes?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    bulletinPaie?: boolean | Paiement$bulletinPaieArgs<ExtArgs>
    employe?: boolean | Paiement$employeArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>



  export type PaiementSelectScalar = {
    id?: boolean
    bulletinPaieId?: boolean
    employeId?: boolean
    montant?: boolean
    methode?: boolean
    reference?: boolean
    notes?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bulletinPaieId" | "employeId" | "montant" | "methode" | "reference" | "notes" | "creeLe" | "misAJourLe", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletinPaie?: boolean | Paiement$bulletinPaieArgs<ExtArgs>
    employe?: boolean | Paiement$employeArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      bulletinPaie: Prisma.$BulletinPaiePayload<ExtArgs> | null
      employe: Prisma.$EmployePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bulletinPaieId: string | null
      employeId: string | null
      montant: number
      methode: $Enums.PaymentMethod
      reference: string | null
      notes: string | null
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
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
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bulletinPaie<T extends Paiement$bulletinPaieArgs<ExtArgs> = {}>(args?: Subset<T, Paiement$bulletinPaieArgs<ExtArgs>>): Prisma__BulletinPaieClient<$Result.GetResult<Prisma.$BulletinPaiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employe<T extends Paiement$employeArgs<ExtArgs> = {}>(args?: Subset<T, Paiement$employeArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'String'>
    readonly bulletinPaieId: FieldRef<"Paiement", 'String'>
    readonly employeId: FieldRef<"Paiement", 'String'>
    readonly montant: FieldRef<"Paiement", 'Float'>
    readonly methode: FieldRef<"Paiement", 'PaymentMethod'>
    readonly reference: FieldRef<"Paiement", 'String'>
    readonly notes: FieldRef<"Paiement", 'String'>
    readonly creeLe: FieldRef<"Paiement", 'DateTime'>
    readonly misAJourLe: FieldRef<"Paiement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement.bulletinPaie
   */
  export type Paiement$bulletinPaieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPaie
     */
    select?: BulletinPaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletinPaie
     */
    omit?: BulletinPaieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPaieInclude<ExtArgs> | null
    where?: BulletinPaieWhereInput
  }

  /**
   * Paiement.employe
   */
  export type Paiement$employeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    where?: EmployeWhereInput
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Model Pointage
   */

  export type AggregatePointage = {
    _count: PointageCountAggregateOutputType | null
    _avg: PointageAvgAggregateOutputType | null
    _sum: PointageSumAggregateOutputType | null
    _min: PointageMinAggregateOutputType | null
    _max: PointageMaxAggregateOutputType | null
  }

  export type PointageAvgAggregateOutputType = {
    heuresPrevues: number | null
    heuresTravaillees: number | null
  }

  export type PointageSumAggregateOutputType = {
    heuresPrevues: number | null
    heuresTravaillees: number | null
  }

  export type PointageMinAggregateOutputType = {
    id: string | null
    employeId: string | null
    date: Date | null
    heureArrivee: Date | null
    heureDepart: Date | null
    isPresent: boolean | null
    heuresPrevues: number | null
    heuresTravaillees: number | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type PointageMaxAggregateOutputType = {
    id: string | null
    employeId: string | null
    date: Date | null
    heureArrivee: Date | null
    heureDepart: Date | null
    isPresent: boolean | null
    heuresPrevues: number | null
    heuresTravaillees: number | null
    creeLe: Date | null
    misAJourLe: Date | null
  }

  export type PointageCountAggregateOutputType = {
    id: number
    employeId: number
    date: number
    heureArrivee: number
    heureDepart: number
    isPresent: number
    heuresPrevues: number
    heuresTravaillees: number
    creeLe: number
    misAJourLe: number
    _all: number
  }


  export type PointageAvgAggregateInputType = {
    heuresPrevues?: true
    heuresTravaillees?: true
  }

  export type PointageSumAggregateInputType = {
    heuresPrevues?: true
    heuresTravaillees?: true
  }

  export type PointageMinAggregateInputType = {
    id?: true
    employeId?: true
    date?: true
    heureArrivee?: true
    heureDepart?: true
    isPresent?: true
    heuresPrevues?: true
    heuresTravaillees?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type PointageMaxAggregateInputType = {
    id?: true
    employeId?: true
    date?: true
    heureArrivee?: true
    heureDepart?: true
    isPresent?: true
    heuresPrevues?: true
    heuresTravaillees?: true
    creeLe?: true
    misAJourLe?: true
  }

  export type PointageCountAggregateInputType = {
    id?: true
    employeId?: true
    date?: true
    heureArrivee?: true
    heureDepart?: true
    isPresent?: true
    heuresPrevues?: true
    heuresTravaillees?: true
    creeLe?: true
    misAJourLe?: true
    _all?: true
  }

  export type PointageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pointage to aggregate.
     */
    where?: PointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointageOrderByWithRelationInput | PointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pointages
    **/
    _count?: true | PointageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointageMaxAggregateInputType
  }

  export type GetPointageAggregateType<T extends PointageAggregateArgs> = {
        [P in keyof T & keyof AggregatePointage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointage[P]>
      : GetScalarType<T[P], AggregatePointage[P]>
  }




  export type PointageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointageWhereInput
    orderBy?: PointageOrderByWithAggregationInput | PointageOrderByWithAggregationInput[]
    by: PointageScalarFieldEnum[] | PointageScalarFieldEnum
    having?: PointageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointageCountAggregateInputType | true
    _avg?: PointageAvgAggregateInputType
    _sum?: PointageSumAggregateInputType
    _min?: PointageMinAggregateInputType
    _max?: PointageMaxAggregateInputType
  }

  export type PointageGroupByOutputType = {
    id: string
    employeId: string
    date: Date
    heureArrivee: Date | null
    heureDepart: Date | null
    isPresent: boolean
    heuresPrevues: number | null
    heuresTravaillees: number | null
    creeLe: Date
    misAJourLe: Date
    _count: PointageCountAggregateOutputType | null
    _avg: PointageAvgAggregateOutputType | null
    _sum: PointageSumAggregateOutputType | null
    _min: PointageMinAggregateOutputType | null
    _max: PointageMaxAggregateOutputType | null
  }

  type GetPointageGroupByPayload<T extends PointageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointageGroupByOutputType[P]>
            : GetScalarType<T[P], PointageGroupByOutputType[P]>
        }
      >
    >


  export type PointageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeId?: boolean
    date?: boolean
    heureArrivee?: boolean
    heureDepart?: boolean
    isPresent?: boolean
    heuresPrevues?: boolean
    heuresTravaillees?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointage"]>



  export type PointageSelectScalar = {
    id?: boolean
    employeId?: boolean
    date?: boolean
    heureArrivee?: boolean
    heureDepart?: boolean
    isPresent?: boolean
    heuresPrevues?: boolean
    heuresTravaillees?: boolean
    creeLe?: boolean
    misAJourLe?: boolean
  }

  export type PointageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeId" | "date" | "heureArrivee" | "heureDepart" | "isPresent" | "heuresPrevues" | "heuresTravaillees" | "creeLe" | "misAJourLe", ExtArgs["result"]["pointage"]>
  export type PointageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }

  export type $PointagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pointage"
    objects: {
      employe: Prisma.$EmployePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeId: string
      date: Date
      heureArrivee: Date | null
      heureDepart: Date | null
      isPresent: boolean
      heuresPrevues: number | null
      heuresTravaillees: number | null
      creeLe: Date
      misAJourLe: Date
    }, ExtArgs["result"]["pointage"]>
    composites: {}
  }

  type PointageGetPayload<S extends boolean | null | undefined | PointageDefaultArgs> = $Result.GetResult<Prisma.$PointagePayload, S>

  type PointageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointageCountAggregateInputType | true
    }

  export interface PointageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pointage'], meta: { name: 'Pointage' } }
    /**
     * Find zero or one Pointage that matches the filter.
     * @param {PointageFindUniqueArgs} args - Arguments to find a Pointage
     * @example
     * // Get one Pointage
     * const pointage = await prisma.pointage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointageFindUniqueArgs>(args: SelectSubset<T, PointageFindUniqueArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pointage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointageFindUniqueOrThrowArgs} args - Arguments to find a Pointage
     * @example
     * // Get one Pointage
     * const pointage = await prisma.pointage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointageFindUniqueOrThrowArgs>(args: SelectSubset<T, PointageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pointage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageFindFirstArgs} args - Arguments to find a Pointage
     * @example
     * // Get one Pointage
     * const pointage = await prisma.pointage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointageFindFirstArgs>(args?: SelectSubset<T, PointageFindFirstArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pointage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageFindFirstOrThrowArgs} args - Arguments to find a Pointage
     * @example
     * // Get one Pointage
     * const pointage = await prisma.pointage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointageFindFirstOrThrowArgs>(args?: SelectSubset<T, PointageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pointages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pointages
     * const pointages = await prisma.pointage.findMany()
     * 
     * // Get first 10 Pointages
     * const pointages = await prisma.pointage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointageWithIdOnly = await prisma.pointage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointageFindManyArgs>(args?: SelectSubset<T, PointageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pointage.
     * @param {PointageCreateArgs} args - Arguments to create a Pointage.
     * @example
     * // Create one Pointage
     * const Pointage = await prisma.pointage.create({
     *   data: {
     *     // ... data to create a Pointage
     *   }
     * })
     * 
     */
    create<T extends PointageCreateArgs>(args: SelectSubset<T, PointageCreateArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pointages.
     * @param {PointageCreateManyArgs} args - Arguments to create many Pointages.
     * @example
     * // Create many Pointages
     * const pointage = await prisma.pointage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointageCreateManyArgs>(args?: SelectSubset<T, PointageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pointage.
     * @param {PointageDeleteArgs} args - Arguments to delete one Pointage.
     * @example
     * // Delete one Pointage
     * const Pointage = await prisma.pointage.delete({
     *   where: {
     *     // ... filter to delete one Pointage
     *   }
     * })
     * 
     */
    delete<T extends PointageDeleteArgs>(args: SelectSubset<T, PointageDeleteArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pointage.
     * @param {PointageUpdateArgs} args - Arguments to update one Pointage.
     * @example
     * // Update one Pointage
     * const pointage = await prisma.pointage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointageUpdateArgs>(args: SelectSubset<T, PointageUpdateArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pointages.
     * @param {PointageDeleteManyArgs} args - Arguments to filter Pointages to delete.
     * @example
     * // Delete a few Pointages
     * const { count } = await prisma.pointage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointageDeleteManyArgs>(args?: SelectSubset<T, PointageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pointages
     * const pointage = await prisma.pointage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointageUpdateManyArgs>(args: SelectSubset<T, PointageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pointage.
     * @param {PointageUpsertArgs} args - Arguments to update or create a Pointage.
     * @example
     * // Update or create a Pointage
     * const pointage = await prisma.pointage.upsert({
     *   create: {
     *     // ... data to create a Pointage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pointage we want to update
     *   }
     * })
     */
    upsert<T extends PointageUpsertArgs>(args: SelectSubset<T, PointageUpsertArgs<ExtArgs>>): Prisma__PointageClient<$Result.GetResult<Prisma.$PointagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pointages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageCountArgs} args - Arguments to filter Pointages to count.
     * @example
     * // Count the number of Pointages
     * const count = await prisma.pointage.count({
     *   where: {
     *     // ... the filter for the Pointages we want to count
     *   }
     * })
    **/
    count<T extends PointageCountArgs>(
      args?: Subset<T, PointageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pointage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointageAggregateArgs>(args: Subset<T, PointageAggregateArgs>): Prisma.PrismaPromise<GetPointageAggregateType<T>>

    /**
     * Group by Pointage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointageGroupByArgs} args - Group by arguments.
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
      T extends PointageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointageGroupByArgs['orderBy'] }
        : { orderBy?: PointageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pointage model
   */
  readonly fields: PointageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pointage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employe<T extends EmployeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeDefaultArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pointage model
   */
  interface PointageFieldRefs {
    readonly id: FieldRef<"Pointage", 'String'>
    readonly employeId: FieldRef<"Pointage", 'String'>
    readonly date: FieldRef<"Pointage", 'DateTime'>
    readonly heureArrivee: FieldRef<"Pointage", 'DateTime'>
    readonly heureDepart: FieldRef<"Pointage", 'DateTime'>
    readonly isPresent: FieldRef<"Pointage", 'Boolean'>
    readonly heuresPrevues: FieldRef<"Pointage", 'Float'>
    readonly heuresTravaillees: FieldRef<"Pointage", 'Float'>
    readonly creeLe: FieldRef<"Pointage", 'DateTime'>
    readonly misAJourLe: FieldRef<"Pointage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pointage findUnique
   */
  export type PointageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * Filter, which Pointage to fetch.
     */
    where: PointageWhereUniqueInput
  }

  /**
   * Pointage findUniqueOrThrow
   */
  export type PointageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * Filter, which Pointage to fetch.
     */
    where: PointageWhereUniqueInput
  }

  /**
   * Pointage findFirst
   */
  export type PointageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * Filter, which Pointage to fetch.
     */
    where?: PointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointageOrderByWithRelationInput | PointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pointages.
     */
    cursor?: PointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pointages.
     */
    distinct?: PointageScalarFieldEnum | PointageScalarFieldEnum[]
  }

  /**
   * Pointage findFirstOrThrow
   */
  export type PointageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * Filter, which Pointage to fetch.
     */
    where?: PointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointageOrderByWithRelationInput | PointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pointages.
     */
    cursor?: PointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pointages.
     */
    distinct?: PointageScalarFieldEnum | PointageScalarFieldEnum[]
  }

  /**
   * Pointage findMany
   */
  export type PointageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * Filter, which Pointages to fetch.
     */
    where?: PointageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pointages to fetch.
     */
    orderBy?: PointageOrderByWithRelationInput | PointageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pointages.
     */
    cursor?: PointageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pointages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pointages.
     */
    skip?: number
    distinct?: PointageScalarFieldEnum | PointageScalarFieldEnum[]
  }

  /**
   * Pointage create
   */
  export type PointageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * The data needed to create a Pointage.
     */
    data: XOR<PointageCreateInput, PointageUncheckedCreateInput>
  }

  /**
   * Pointage createMany
   */
  export type PointageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pointages.
     */
    data: PointageCreateManyInput | PointageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pointage update
   */
  export type PointageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * The data needed to update a Pointage.
     */
    data: XOR<PointageUpdateInput, PointageUncheckedUpdateInput>
    /**
     * Choose, which Pointage to update.
     */
    where: PointageWhereUniqueInput
  }

  /**
   * Pointage updateMany
   */
  export type PointageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pointages.
     */
    data: XOR<PointageUpdateManyMutationInput, PointageUncheckedUpdateManyInput>
    /**
     * Filter which Pointages to update
     */
    where?: PointageWhereInput
    /**
     * Limit how many Pointages to update.
     */
    limit?: number
  }

  /**
   * Pointage upsert
   */
  export type PointageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * The filter to search for the Pointage to update in case it exists.
     */
    where: PointageWhereUniqueInput
    /**
     * In case the Pointage found by the `where` argument doesn't exist, create a new Pointage with this data.
     */
    create: XOR<PointageCreateInput, PointageUncheckedCreateInput>
    /**
     * In case the Pointage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointageUpdateInput, PointageUncheckedUpdateInput>
  }

  /**
   * Pointage delete
   */
  export type PointageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
    /**
     * Filter which Pointage to delete.
     */
    where: PointageWhereUniqueInput
  }

  /**
   * Pointage deleteMany
   */
  export type PointageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pointages to delete
     */
    where?: PointageWhereInput
    /**
     * Limit how many Pointages to delete.
     */
    limit?: number
  }

  /**
   * Pointage without action
   */
  export type PointageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pointage
     */
    select?: PointageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pointage
     */
    omit?: PointageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointageInclude<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    email: 'email',
    motDePasse: 'motDePasse',
    prenom: 'prenom',
    nom: 'nom',
    role: 'role',
    entrepriseId: 'entrepriseId',
    estActif: 'estActif',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const EntrepriseScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    logo: 'logo',
    adresse: 'adresse',
    devise: 'devise',
    typePeriodePaie: 'typePeriodePaie',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type EntrepriseScalarFieldEnum = (typeof EntrepriseScalarFieldEnum)[keyof typeof EntrepriseScalarFieldEnum]


  export const EmployeScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    poste: 'poste',
    typeContrat: 'typeContrat',
    taux: 'taux',
    compteBancaire: 'compteBancaire',
    nomBanque: 'nomBanque',
    entrepriseId: 'entrepriseId',
    estActif: 'estActif',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type EmployeScalarFieldEnum = (typeof EmployeScalarFieldEnum)[keyof typeof EmployeScalarFieldEnum]


  export const CyclePaieScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    statut: 'statut',
    entrepriseId: 'entrepriseId',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type CyclePaieScalarFieldEnum = (typeof CyclePaieScalarFieldEnum)[keyof typeof CyclePaieScalarFieldEnum]


  export const BulletinPaieScalarFieldEnum: {
    id: 'id',
    employeId: 'employeId',
    cyclePaieId: 'cyclePaieId',
    montantBrut: 'montantBrut',
    deductions: 'deductions',
    montantNet: 'montantNet',
    joursTravailles: 'joursTravailles',
    statut: 'statut',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type BulletinPaieScalarFieldEnum = (typeof BulletinPaieScalarFieldEnum)[keyof typeof BulletinPaieScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    bulletinPaieId: 'bulletinPaieId',
    employeId: 'employeId',
    montant: 'montant',
    methode: 'methode',
    reference: 'reference',
    notes: 'notes',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const PointageScalarFieldEnum: {
    id: 'id',
    employeId: 'employeId',
    date: 'date',
    heureArrivee: 'heureArrivee',
    heureDepart: 'heureDepart',
    isPresent: 'isPresent',
    heuresPrevues: 'heuresPrevues',
    heuresTravaillees: 'heuresTravaillees',
    creeLe: 'creeLe',
    misAJourLe: 'misAJourLe'
  };

  export type PointageScalarFieldEnum = (typeof PointageScalarFieldEnum)[keyof typeof PointageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UtilisateurOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    motDePasse: 'motDePasse',
    prenom: 'prenom',
    nom: 'nom',
    entrepriseId: 'entrepriseId'
  };

  export type UtilisateurOrderByRelevanceFieldEnum = (typeof UtilisateurOrderByRelevanceFieldEnum)[keyof typeof UtilisateurOrderByRelevanceFieldEnum]


  export const EntrepriseOrderByRelevanceFieldEnum: {
    id: 'id',
    nom: 'nom',
    logo: 'logo',
    adresse: 'adresse',
    devise: 'devise'
  };

  export type EntrepriseOrderByRelevanceFieldEnum = (typeof EntrepriseOrderByRelevanceFieldEnum)[keyof typeof EntrepriseOrderByRelevanceFieldEnum]


  export const EmployeOrderByRelevanceFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    poste: 'poste',
    compteBancaire: 'compteBancaire',
    nomBanque: 'nomBanque',
    entrepriseId: 'entrepriseId'
  };

  export type EmployeOrderByRelevanceFieldEnum = (typeof EmployeOrderByRelevanceFieldEnum)[keyof typeof EmployeOrderByRelevanceFieldEnum]


  export const CyclePaieOrderByRelevanceFieldEnum: {
    id: 'id',
    nom: 'nom',
    entrepriseId: 'entrepriseId'
  };

  export type CyclePaieOrderByRelevanceFieldEnum = (typeof CyclePaieOrderByRelevanceFieldEnum)[keyof typeof CyclePaieOrderByRelevanceFieldEnum]


  export const BulletinPaieOrderByRelevanceFieldEnum: {
    id: 'id',
    employeId: 'employeId',
    cyclePaieId: 'cyclePaieId'
  };

  export type BulletinPaieOrderByRelevanceFieldEnum = (typeof BulletinPaieOrderByRelevanceFieldEnum)[keyof typeof BulletinPaieOrderByRelevanceFieldEnum]


  export const PaiementOrderByRelevanceFieldEnum: {
    id: 'id',
    bulletinPaieId: 'bulletinPaieId',
    employeId: 'employeId',
    reference: 'reference',
    notes: 'notes'
  };

  export type PaiementOrderByRelevanceFieldEnum = (typeof PaiementOrderByRelevanceFieldEnum)[keyof typeof PaiementOrderByRelevanceFieldEnum]


  export const PointageOrderByRelevanceFieldEnum: {
    id: 'id',
    employeId: 'employeId'
  };

  export type PointageOrderByRelevanceFieldEnum = (typeof PointageOrderByRelevanceFieldEnum)[keyof typeof PointageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PayPeriodType'
   */
  export type EnumPayPeriodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayPeriodType'>
    


  /**
   * Reference to a field of type 'ContractType'
   */
  export type EnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'PayRunStatus'
   */
  export type EnumPayRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayRunStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'PayslipStatus'
   */
  export type EnumPayslipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayslipStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    entrepriseId?: StringNullableFilter<"Utilisateur"> | string | null
    estActif?: BoolFilter<"Utilisateur"> | boolean
    creeLe?: DateTimeFilter<"Utilisateur"> | Date | string
    misAJourLe?: DateTimeFilter<"Utilisateur"> | Date | string
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
    _relevance?: UtilisateurOrderByRelevanceInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    motDePasse?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    entrepriseId?: StringNullableFilter<"Utilisateur"> | string | null
    estActif?: BoolFilter<"Utilisateur"> | boolean
    creeLe?: DateTimeFilter<"Utilisateur"> | Date | string
    misAJourLe?: DateTimeFilter<"Utilisateur"> | Date | string
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasse?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    entrepriseId?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    estActif?: BoolWithAggregatesFilter<"Utilisateur"> | boolean
    creeLe?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type EntrepriseWhereInput = {
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    id?: StringFilter<"Entreprise"> | string
    nom?: StringFilter<"Entreprise"> | string
    logo?: StringNullableFilter<"Entreprise"> | string | null
    adresse?: StringNullableFilter<"Entreprise"> | string | null
    devise?: StringFilter<"Entreprise"> | string
    typePeriodePaie?: EnumPayPeriodTypeFilter<"Entreprise"> | $Enums.PayPeriodType
    creeLe?: DateTimeFilter<"Entreprise"> | Date | string
    misAJourLe?: DateTimeFilter<"Entreprise"> | Date | string
    utilisateurs?: UtilisateurListRelationFilter
    employes?: EmployeListRelationFilter
    cyclesPaie?: CyclePaieListRelationFilter
  }

  export type EntrepriseOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    logo?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    devise?: SortOrder
    typePeriodePaie?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    utilisateurs?: UtilisateurOrderByRelationAggregateInput
    employes?: EmployeOrderByRelationAggregateInput
    cyclesPaie?: CyclePaieOrderByRelationAggregateInput
    _relevance?: EntrepriseOrderByRelevanceInput
  }

  export type EntrepriseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    nom?: StringFilter<"Entreprise"> | string
    logo?: StringNullableFilter<"Entreprise"> | string | null
    adresse?: StringNullableFilter<"Entreprise"> | string | null
    devise?: StringFilter<"Entreprise"> | string
    typePeriodePaie?: EnumPayPeriodTypeFilter<"Entreprise"> | $Enums.PayPeriodType
    creeLe?: DateTimeFilter<"Entreprise"> | Date | string
    misAJourLe?: DateTimeFilter<"Entreprise"> | Date | string
    utilisateurs?: UtilisateurListRelationFilter
    employes?: EmployeListRelationFilter
    cyclesPaie?: CyclePaieListRelationFilter
  }, "id">

  export type EntrepriseOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    logo?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    devise?: SortOrder
    typePeriodePaie?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: EntrepriseCountOrderByAggregateInput
    _max?: EntrepriseMaxOrderByAggregateInput
    _min?: EntrepriseMinOrderByAggregateInput
  }

  export type EntrepriseScalarWhereWithAggregatesInput = {
    AND?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    OR?: EntrepriseScalarWhereWithAggregatesInput[]
    NOT?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entreprise"> | string
    nom?: StringWithAggregatesFilter<"Entreprise"> | string
    logo?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    devise?: StringWithAggregatesFilter<"Entreprise"> | string
    typePeriodePaie?: EnumPayPeriodTypeWithAggregatesFilter<"Entreprise"> | $Enums.PayPeriodType
    creeLe?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
  }

  export type EmployeWhereInput = {
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    id?: StringFilter<"Employe"> | string
    prenom?: StringFilter<"Employe"> | string
    nom?: StringFilter<"Employe"> | string
    poste?: StringFilter<"Employe"> | string
    typeContrat?: EnumContractTypeFilter<"Employe"> | $Enums.ContractType
    taux?: FloatFilter<"Employe"> | number
    compteBancaire?: StringNullableFilter<"Employe"> | string | null
    nomBanque?: StringNullableFilter<"Employe"> | string | null
    entrepriseId?: StringFilter<"Employe"> | string
    estActif?: BoolFilter<"Employe"> | boolean
    creeLe?: DateTimeFilter<"Employe"> | Date | string
    misAJourLe?: DateTimeFilter<"Employe"> | Date | string
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    bulletinsPaie?: BulletinPaieListRelationFilter
    pointages?: PointageListRelationFilter
    paiements?: PaiementListRelationFilter
  }

  export type EmployeOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    taux?: SortOrder
    compteBancaire?: SortOrderInput | SortOrder
    nomBanque?: SortOrderInput | SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
    bulletinsPaie?: BulletinPaieOrderByRelationAggregateInput
    pointages?: PointageOrderByRelationAggregateInput
    paiements?: PaiementOrderByRelationAggregateInput
    _relevance?: EmployeOrderByRelevanceInput
  }

  export type EmployeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    prenom?: StringFilter<"Employe"> | string
    nom?: StringFilter<"Employe"> | string
    poste?: StringFilter<"Employe"> | string
    typeContrat?: EnumContractTypeFilter<"Employe"> | $Enums.ContractType
    taux?: FloatFilter<"Employe"> | number
    compteBancaire?: StringNullableFilter<"Employe"> | string | null
    nomBanque?: StringNullableFilter<"Employe"> | string | null
    entrepriseId?: StringFilter<"Employe"> | string
    estActif?: BoolFilter<"Employe"> | boolean
    creeLe?: DateTimeFilter<"Employe"> | Date | string
    misAJourLe?: DateTimeFilter<"Employe"> | Date | string
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    bulletinsPaie?: BulletinPaieListRelationFilter
    pointages?: PointageListRelationFilter
    paiements?: PaiementListRelationFilter
  }, "id">

  export type EmployeOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    taux?: SortOrder
    compteBancaire?: SortOrderInput | SortOrder
    nomBanque?: SortOrderInput | SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: EmployeCountOrderByAggregateInput
    _avg?: EmployeAvgOrderByAggregateInput
    _max?: EmployeMaxOrderByAggregateInput
    _min?: EmployeMinOrderByAggregateInput
    _sum?: EmployeSumOrderByAggregateInput
  }

  export type EmployeScalarWhereWithAggregatesInput = {
    AND?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    OR?: EmployeScalarWhereWithAggregatesInput[]
    NOT?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employe"> | string
    prenom?: StringWithAggregatesFilter<"Employe"> | string
    nom?: StringWithAggregatesFilter<"Employe"> | string
    poste?: StringWithAggregatesFilter<"Employe"> | string
    typeContrat?: EnumContractTypeWithAggregatesFilter<"Employe"> | $Enums.ContractType
    taux?: FloatWithAggregatesFilter<"Employe"> | number
    compteBancaire?: StringNullableWithAggregatesFilter<"Employe"> | string | null
    nomBanque?: StringNullableWithAggregatesFilter<"Employe"> | string | null
    entrepriseId?: StringWithAggregatesFilter<"Employe"> | string
    estActif?: BoolWithAggregatesFilter<"Employe"> | boolean
    creeLe?: DateTimeWithAggregatesFilter<"Employe"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"Employe"> | Date | string
  }

  export type CyclePaieWhereInput = {
    AND?: CyclePaieWhereInput | CyclePaieWhereInput[]
    OR?: CyclePaieWhereInput[]
    NOT?: CyclePaieWhereInput | CyclePaieWhereInput[]
    id?: StringFilter<"CyclePaie"> | string
    nom?: StringFilter<"CyclePaie"> | string
    dateDebut?: DateTimeFilter<"CyclePaie"> | Date | string
    dateFin?: DateTimeFilter<"CyclePaie"> | Date | string
    statut?: EnumPayRunStatusFilter<"CyclePaie"> | $Enums.PayRunStatus
    entrepriseId?: StringFilter<"CyclePaie"> | string
    creeLe?: DateTimeFilter<"CyclePaie"> | Date | string
    misAJourLe?: DateTimeFilter<"CyclePaie"> | Date | string
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    bulletinsPaie?: BulletinPaieListRelationFilter
  }

  export type CyclePaieOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    entrepriseId?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
    bulletinsPaie?: BulletinPaieOrderByRelationAggregateInput
    _relevance?: CyclePaieOrderByRelevanceInput
  }

  export type CyclePaieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CyclePaieWhereInput | CyclePaieWhereInput[]
    OR?: CyclePaieWhereInput[]
    NOT?: CyclePaieWhereInput | CyclePaieWhereInput[]
    nom?: StringFilter<"CyclePaie"> | string
    dateDebut?: DateTimeFilter<"CyclePaie"> | Date | string
    dateFin?: DateTimeFilter<"CyclePaie"> | Date | string
    statut?: EnumPayRunStatusFilter<"CyclePaie"> | $Enums.PayRunStatus
    entrepriseId?: StringFilter<"CyclePaie"> | string
    creeLe?: DateTimeFilter<"CyclePaie"> | Date | string
    misAJourLe?: DateTimeFilter<"CyclePaie"> | Date | string
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    bulletinsPaie?: BulletinPaieListRelationFilter
  }, "id">

  export type CyclePaieOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    entrepriseId?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: CyclePaieCountOrderByAggregateInput
    _max?: CyclePaieMaxOrderByAggregateInput
    _min?: CyclePaieMinOrderByAggregateInput
  }

  export type CyclePaieScalarWhereWithAggregatesInput = {
    AND?: CyclePaieScalarWhereWithAggregatesInput | CyclePaieScalarWhereWithAggregatesInput[]
    OR?: CyclePaieScalarWhereWithAggregatesInput[]
    NOT?: CyclePaieScalarWhereWithAggregatesInput | CyclePaieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CyclePaie"> | string
    nom?: StringWithAggregatesFilter<"CyclePaie"> | string
    dateDebut?: DateTimeWithAggregatesFilter<"CyclePaie"> | Date | string
    dateFin?: DateTimeWithAggregatesFilter<"CyclePaie"> | Date | string
    statut?: EnumPayRunStatusWithAggregatesFilter<"CyclePaie"> | $Enums.PayRunStatus
    entrepriseId?: StringWithAggregatesFilter<"CyclePaie"> | string
    creeLe?: DateTimeWithAggregatesFilter<"CyclePaie"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"CyclePaie"> | Date | string
  }

  export type BulletinPaieWhereInput = {
    AND?: BulletinPaieWhereInput | BulletinPaieWhereInput[]
    OR?: BulletinPaieWhereInput[]
    NOT?: BulletinPaieWhereInput | BulletinPaieWhereInput[]
    id?: StringFilter<"BulletinPaie"> | string
    employeId?: StringFilter<"BulletinPaie"> | string
    cyclePaieId?: StringFilter<"BulletinPaie"> | string
    montantBrut?: FloatFilter<"BulletinPaie"> | number
    deductions?: FloatFilter<"BulletinPaie"> | number
    montantNet?: FloatFilter<"BulletinPaie"> | number
    joursTravailles?: IntNullableFilter<"BulletinPaie"> | number | null
    statut?: EnumPayslipStatusFilter<"BulletinPaie"> | $Enums.PayslipStatus
    creeLe?: DateTimeFilter<"BulletinPaie"> | Date | string
    misAJourLe?: DateTimeFilter<"BulletinPaie"> | Date | string
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
    cyclePaie?: XOR<CyclePaieScalarRelationFilter, CyclePaieWhereInput>
    paiements?: PaiementListRelationFilter
  }

  export type BulletinPaieOrderByWithRelationInput = {
    id?: SortOrder
    employeId?: SortOrder
    cyclePaieId?: SortOrder
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrderInput | SortOrder
    statut?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    employe?: EmployeOrderByWithRelationInput
    cyclePaie?: CyclePaieOrderByWithRelationInput
    paiements?: PaiementOrderByRelationAggregateInput
    _relevance?: BulletinPaieOrderByRelevanceInput
  }

  export type BulletinPaieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeId_cyclePaieId?: BulletinPaieEmployeIdCyclePaieIdCompoundUniqueInput
    AND?: BulletinPaieWhereInput | BulletinPaieWhereInput[]
    OR?: BulletinPaieWhereInput[]
    NOT?: BulletinPaieWhereInput | BulletinPaieWhereInput[]
    employeId?: StringFilter<"BulletinPaie"> | string
    cyclePaieId?: StringFilter<"BulletinPaie"> | string
    montantBrut?: FloatFilter<"BulletinPaie"> | number
    deductions?: FloatFilter<"BulletinPaie"> | number
    montantNet?: FloatFilter<"BulletinPaie"> | number
    joursTravailles?: IntNullableFilter<"BulletinPaie"> | number | null
    statut?: EnumPayslipStatusFilter<"BulletinPaie"> | $Enums.PayslipStatus
    creeLe?: DateTimeFilter<"BulletinPaie"> | Date | string
    misAJourLe?: DateTimeFilter<"BulletinPaie"> | Date | string
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
    cyclePaie?: XOR<CyclePaieScalarRelationFilter, CyclePaieWhereInput>
    paiements?: PaiementListRelationFilter
  }, "id" | "employeId_cyclePaieId">

  export type BulletinPaieOrderByWithAggregationInput = {
    id?: SortOrder
    employeId?: SortOrder
    cyclePaieId?: SortOrder
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrderInput | SortOrder
    statut?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: BulletinPaieCountOrderByAggregateInput
    _avg?: BulletinPaieAvgOrderByAggregateInput
    _max?: BulletinPaieMaxOrderByAggregateInput
    _min?: BulletinPaieMinOrderByAggregateInput
    _sum?: BulletinPaieSumOrderByAggregateInput
  }

  export type BulletinPaieScalarWhereWithAggregatesInput = {
    AND?: BulletinPaieScalarWhereWithAggregatesInput | BulletinPaieScalarWhereWithAggregatesInput[]
    OR?: BulletinPaieScalarWhereWithAggregatesInput[]
    NOT?: BulletinPaieScalarWhereWithAggregatesInput | BulletinPaieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulletinPaie"> | string
    employeId?: StringWithAggregatesFilter<"BulletinPaie"> | string
    cyclePaieId?: StringWithAggregatesFilter<"BulletinPaie"> | string
    montantBrut?: FloatWithAggregatesFilter<"BulletinPaie"> | number
    deductions?: FloatWithAggregatesFilter<"BulletinPaie"> | number
    montantNet?: FloatWithAggregatesFilter<"BulletinPaie"> | number
    joursTravailles?: IntNullableWithAggregatesFilter<"BulletinPaie"> | number | null
    statut?: EnumPayslipStatusWithAggregatesFilter<"BulletinPaie"> | $Enums.PayslipStatus
    creeLe?: DateTimeWithAggregatesFilter<"BulletinPaie"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"BulletinPaie"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: StringFilter<"Paiement"> | string
    bulletinPaieId?: StringNullableFilter<"Paiement"> | string | null
    employeId?: StringNullableFilter<"Paiement"> | string | null
    montant?: FloatFilter<"Paiement"> | number
    methode?: EnumPaymentMethodFilter<"Paiement"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"Paiement"> | string | null
    notes?: StringNullableFilter<"Paiement"> | string | null
    creeLe?: DateTimeFilter<"Paiement"> | Date | string
    misAJourLe?: DateTimeFilter<"Paiement"> | Date | string
    bulletinPaie?: XOR<BulletinPaieNullableScalarRelationFilter, BulletinPaieWhereInput> | null
    employe?: XOR<EmployeNullableScalarRelationFilter, EmployeWhereInput> | null
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    bulletinPaieId?: SortOrderInput | SortOrder
    employeId?: SortOrderInput | SortOrder
    montant?: SortOrder
    methode?: SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    bulletinPaie?: BulletinPaieOrderByWithRelationInput
    employe?: EmployeOrderByWithRelationInput
    _relevance?: PaiementOrderByRelevanceInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    bulletinPaieId?: StringNullableFilter<"Paiement"> | string | null
    employeId?: StringNullableFilter<"Paiement"> | string | null
    montant?: FloatFilter<"Paiement"> | number
    methode?: EnumPaymentMethodFilter<"Paiement"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"Paiement"> | string | null
    notes?: StringNullableFilter<"Paiement"> | string | null
    creeLe?: DateTimeFilter<"Paiement"> | Date | string
    misAJourLe?: DateTimeFilter<"Paiement"> | Date | string
    bulletinPaie?: XOR<BulletinPaieNullableScalarRelationFilter, BulletinPaieWhereInput> | null
    employe?: XOR<EmployeNullableScalarRelationFilter, EmployeWhereInput> | null
  }, "id">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    bulletinPaieId?: SortOrderInput | SortOrder
    employeId?: SortOrderInput | SortOrder
    montant?: SortOrder
    methode?: SortOrder
    reference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paiement"> | string
    bulletinPaieId?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    employeId?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    montant?: FloatWithAggregatesFilter<"Paiement"> | number
    methode?: EnumPaymentMethodWithAggregatesFilter<"Paiement"> | $Enums.PaymentMethod
    reference?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    creeLe?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
  }

  export type PointageWhereInput = {
    AND?: PointageWhereInput | PointageWhereInput[]
    OR?: PointageWhereInput[]
    NOT?: PointageWhereInput | PointageWhereInput[]
    id?: StringFilter<"Pointage"> | string
    employeId?: StringFilter<"Pointage"> | string
    date?: DateTimeFilter<"Pointage"> | Date | string
    heureArrivee?: DateTimeNullableFilter<"Pointage"> | Date | string | null
    heureDepart?: DateTimeNullableFilter<"Pointage"> | Date | string | null
    isPresent?: BoolFilter<"Pointage"> | boolean
    heuresPrevues?: FloatNullableFilter<"Pointage"> | number | null
    heuresTravaillees?: FloatNullableFilter<"Pointage"> | number | null
    creeLe?: DateTimeFilter<"Pointage"> | Date | string
    misAJourLe?: DateTimeFilter<"Pointage"> | Date | string
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
  }

  export type PointageOrderByWithRelationInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    heureArrivee?: SortOrderInput | SortOrder
    heureDepart?: SortOrderInput | SortOrder
    isPresent?: SortOrder
    heuresPrevues?: SortOrderInput | SortOrder
    heuresTravaillees?: SortOrderInput | SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    employe?: EmployeOrderByWithRelationInput
    _relevance?: PointageOrderByRelevanceInput
  }

  export type PointageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeId_date?: PointageEmployeIdDateCompoundUniqueInput
    AND?: PointageWhereInput | PointageWhereInput[]
    OR?: PointageWhereInput[]
    NOT?: PointageWhereInput | PointageWhereInput[]
    employeId?: StringFilter<"Pointage"> | string
    date?: DateTimeFilter<"Pointage"> | Date | string
    heureArrivee?: DateTimeNullableFilter<"Pointage"> | Date | string | null
    heureDepart?: DateTimeNullableFilter<"Pointage"> | Date | string | null
    isPresent?: BoolFilter<"Pointage"> | boolean
    heuresPrevues?: FloatNullableFilter<"Pointage"> | number | null
    heuresTravaillees?: FloatNullableFilter<"Pointage"> | number | null
    creeLe?: DateTimeFilter<"Pointage"> | Date | string
    misAJourLe?: DateTimeFilter<"Pointage"> | Date | string
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
  }, "id" | "employeId_date">

  export type PointageOrderByWithAggregationInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    heureArrivee?: SortOrderInput | SortOrder
    heureDepart?: SortOrderInput | SortOrder
    isPresent?: SortOrder
    heuresPrevues?: SortOrderInput | SortOrder
    heuresTravaillees?: SortOrderInput | SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
    _count?: PointageCountOrderByAggregateInput
    _avg?: PointageAvgOrderByAggregateInput
    _max?: PointageMaxOrderByAggregateInput
    _min?: PointageMinOrderByAggregateInput
    _sum?: PointageSumOrderByAggregateInput
  }

  export type PointageScalarWhereWithAggregatesInput = {
    AND?: PointageScalarWhereWithAggregatesInput | PointageScalarWhereWithAggregatesInput[]
    OR?: PointageScalarWhereWithAggregatesInput[]
    NOT?: PointageScalarWhereWithAggregatesInput | PointageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pointage"> | string
    employeId?: StringWithAggregatesFilter<"Pointage"> | string
    date?: DateTimeWithAggregatesFilter<"Pointage"> | Date | string
    heureArrivee?: DateTimeNullableWithAggregatesFilter<"Pointage"> | Date | string | null
    heureDepart?: DateTimeNullableWithAggregatesFilter<"Pointage"> | Date | string | null
    isPresent?: BoolWithAggregatesFilter<"Pointage"> | boolean
    heuresPrevues?: FloatNullableWithAggregatesFilter<"Pointage"> | number | null
    heuresTravaillees?: FloatNullableWithAggregatesFilter<"Pointage"> | number | null
    creeLe?: DateTimeWithAggregatesFilter<"Pointage"> | Date | string
    misAJourLe?: DateTimeWithAggregatesFilter<"Pointage"> | Date | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role?: $Enums.Role
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutUtilisateursInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role?: $Enums.Role
    entrepriseId?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutUtilisateursNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurCreateManyInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role?: $Enums.Role
    entrepriseId?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseCreateInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    utilisateurs?: UtilisateurCreateNestedManyWithoutEntrepriseInput
    employes?: EmployeCreateNestedManyWithoutEntrepriseInput
    cyclesPaie?: CyclePaieCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutEntrepriseInput
    employes?: EmployeUncheckedCreateNestedManyWithoutEntrepriseInput
    cyclesPaie?: CyclePaieUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUpdateManyWithoutEntrepriseNestedInput
    employes?: EmployeUpdateManyWithoutEntrepriseNestedInput
    cyclesPaie?: CyclePaieUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutEntrepriseNestedInput
    employes?: EmployeUncheckedUpdateManyWithoutEntrepriseNestedInput
    cyclesPaie?: CyclePaieUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseCreateManyInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type EntrepriseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeCreateInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutEmployesInput
    bulletinsPaie?: BulletinPaieCreateNestedManyWithoutEmployeInput
    pointages?: PointageCreateNestedManyWithoutEmployeInput
    paiements?: PaiementCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    entrepriseId: string
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieUncheckedCreateNestedManyWithoutEmployeInput
    pointages?: PointageUncheckedCreateNestedManyWithoutEmployeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutEmployesNestedInput
    bulletinsPaie?: BulletinPaieUpdateManyWithoutEmployeNestedInput
    pointages?: PointageUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: StringFieldUpdateOperationsInput | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUncheckedUpdateManyWithoutEmployeNestedInput
    pointages?: PointageUncheckedUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeCreateManyInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    entrepriseId: string
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type EmployeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: StringFieldUpdateOperationsInput | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CyclePaieCreateInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutCyclesPaieInput
    bulletinsPaie?: BulletinPaieCreateNestedManyWithoutCyclePaieInput
  }

  export type CyclePaieUncheckedCreateInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    entrepriseId: string
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieUncheckedCreateNestedManyWithoutCyclePaieInput
  }

  export type CyclePaieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutCyclesPaieNestedInput
    bulletinsPaie?: BulletinPaieUpdateManyWithoutCyclePaieNestedInput
  }

  export type CyclePaieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    entrepriseId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUncheckedUpdateManyWithoutCyclePaieNestedInput
  }

  export type CyclePaieCreateManyInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    entrepriseId: string
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type CyclePaieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CyclePaieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    entrepriseId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPaieCreateInput = {
    id?: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    employe: EmployeCreateNestedOneWithoutBulletinsPaieInput
    cyclePaie: CyclePaieCreateNestedOneWithoutBulletinsPaieInput
    paiements?: PaiementCreateNestedManyWithoutBulletinPaieInput
  }

  export type BulletinPaieUncheckedCreateInput = {
    id?: string
    employeId: string
    cyclePaieId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutBulletinPaieInput
  }

  export type BulletinPaieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutBulletinsPaieNestedInput
    cyclePaie?: CyclePaieUpdateOneRequiredWithoutBulletinsPaieNestedInput
    paiements?: PaiementUpdateManyWithoutBulletinPaieNestedInput
  }

  export type BulletinPaieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    cyclePaieId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutBulletinPaieNestedInput
  }

  export type BulletinPaieCreateManyInput = {
    id?: string
    employeId: string
    cyclePaieId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type BulletinPaieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPaieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    cyclePaieId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    id?: string
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinPaie?: BulletinPaieCreateNestedOneWithoutPaiementsInput
    employe?: EmployeCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: string
    bulletinPaieId?: string | null
    employeId?: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PaiementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinPaie?: BulletinPaieUpdateOneWithoutPaiementsNestedInput
    employe?: EmployeUpdateOneWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulletinPaieId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateManyInput = {
    id?: string
    bulletinPaieId?: string | null
    employeId?: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PaiementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulletinPaieId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointageCreateInput = {
    id?: string
    date: Date | string
    heureArrivee?: Date | string | null
    heureDepart?: Date | string | null
    isPresent?: boolean
    heuresPrevues?: number | null
    heuresTravaillees?: number | null
    creeLe?: Date | string
    misAJourLe?: Date | string
    employe: EmployeCreateNestedOneWithoutPointagesInput
  }

  export type PointageUncheckedCreateInput = {
    id?: string
    employeId: string
    date: Date | string
    heureArrivee?: Date | string | null
    heureDepart?: Date | string | null
    isPresent?: boolean
    heuresPrevues?: number | null
    heuresTravaillees?: number | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PointageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutPointagesNestedInput
  }

  export type PointageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointageCreateManyInput = {
    id?: string
    employeId: string
    date: Date | string
    heureArrivee?: Date | string | null
    heureDepart?: Date | string | null
    isPresent?: boolean
    heuresPrevues?: number | null
    heuresTravaillees?: number | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PointageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EntrepriseNullableScalarRelationFilter = {
    is?: EntrepriseWhereInput | null
    isNot?: EntrepriseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UtilisateurOrderByRelevanceInput = {
    fields: UtilisateurOrderByRelevanceFieldEnum | UtilisateurOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPayPeriodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodType | EnumPayPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodType[]
    notIn?: $Enums.PayPeriodType[]
    not?: NestedEnumPayPeriodTypeFilter<$PrismaModel> | $Enums.PayPeriodType
  }

  export type UtilisateurListRelationFilter = {
    every?: UtilisateurWhereInput
    some?: UtilisateurWhereInput
    none?: UtilisateurWhereInput
  }

  export type EmployeListRelationFilter = {
    every?: EmployeWhereInput
    some?: EmployeWhereInput
    none?: EmployeWhereInput
  }

  export type CyclePaieListRelationFilter = {
    every?: CyclePaieWhereInput
    some?: CyclePaieWhereInput
    none?: CyclePaieWhereInput
  }

  export type UtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CyclePaieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrepriseOrderByRelevanceInput = {
    fields: EntrepriseOrderByRelevanceFieldEnum | EntrepriseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EntrepriseCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    logo?: SortOrder
    adresse?: SortOrder
    devise?: SortOrder
    typePeriodePaie?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EntrepriseMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    logo?: SortOrder
    adresse?: SortOrder
    devise?: SortOrder
    typePeriodePaie?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EntrepriseMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    logo?: SortOrder
    adresse?: SortOrder
    devise?: SortOrder
    typePeriodePaie?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EnumPayPeriodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodType | EnumPayPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodType[]
    notIn?: $Enums.PayPeriodType[]
    not?: NestedEnumPayPeriodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayPeriodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayPeriodTypeFilter<$PrismaModel>
    _max?: NestedEnumPayPeriodTypeFilter<$PrismaModel>
  }

  export type EnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EntrepriseScalarRelationFilter = {
    is?: EntrepriseWhereInput
    isNot?: EntrepriseWhereInput
  }

  export type BulletinPaieListRelationFilter = {
    every?: BulletinPaieWhereInput
    some?: BulletinPaieWhereInput
    none?: BulletinPaieWhereInput
  }

  export type PointageListRelationFilter = {
    every?: PointageWhereInput
    some?: PointageWhereInput
    none?: PointageWhereInput
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type BulletinPaieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeOrderByRelevanceInput = {
    fields: EmployeOrderByRelevanceFieldEnum | EmployeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    taux?: SortOrder
    compteBancaire?: SortOrder
    nomBanque?: SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EmployeAvgOrderByAggregateInput = {
    taux?: SortOrder
  }

  export type EmployeMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    taux?: SortOrder
    compteBancaire?: SortOrder
    nomBanque?: SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EmployeMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    taux?: SortOrder
    compteBancaire?: SortOrder
    nomBanque?: SortOrder
    entrepriseId?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EmployeSumOrderByAggregateInput = {
    taux?: SortOrder
  }

  export type EnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPayRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusFilter<$PrismaModel> | $Enums.PayRunStatus
  }

  export type CyclePaieOrderByRelevanceInput = {
    fields: CyclePaieOrderByRelevanceFieldEnum | CyclePaieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CyclePaieCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    entrepriseId?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type CyclePaieMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    entrepriseId?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type CyclePaieMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    entrepriseId?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type EnumPayRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunStatusFilter<$PrismaModel>
    _max?: NestedEnumPayRunStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPayslipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusFilter<$PrismaModel> | $Enums.PayslipStatus
  }

  export type EmployeScalarRelationFilter = {
    is?: EmployeWhereInput
    isNot?: EmployeWhereInput
  }

  export type CyclePaieScalarRelationFilter = {
    is?: CyclePaieWhereInput
    isNot?: CyclePaieWhereInput
  }

  export type BulletinPaieOrderByRelevanceInput = {
    fields: BulletinPaieOrderByRelevanceFieldEnum | BulletinPaieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BulletinPaieEmployeIdCyclePaieIdCompoundUniqueInput = {
    employeId: string
    cyclePaieId: string
  }

  export type BulletinPaieCountOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    cyclePaieId?: SortOrder
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrder
    statut?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type BulletinPaieAvgOrderByAggregateInput = {
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrder
  }

  export type BulletinPaieMaxOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    cyclePaieId?: SortOrder
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrder
    statut?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type BulletinPaieMinOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    cyclePaieId?: SortOrder
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrder
    statut?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type BulletinPaieSumOrderByAggregateInput = {
    montantBrut?: SortOrder
    deductions?: SortOrder
    montantNet?: SortOrder
    joursTravailles?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumPayslipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayslipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayslipStatusFilter<$PrismaModel>
    _max?: NestedEnumPayslipStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type BulletinPaieNullableScalarRelationFilter = {
    is?: BulletinPaieWhereInput | null
    isNot?: BulletinPaieWhereInput | null
  }

  export type EmployeNullableScalarRelationFilter = {
    is?: EmployeWhereInput | null
    isNot?: EmployeWhereInput | null
  }

  export type PaiementOrderByRelevanceInput = {
    fields: PaiementOrderByRelevanceFieldEnum | PaiementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    bulletinPaieId?: SortOrder
    employeId?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    bulletinPaieId?: SortOrder
    employeId?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    bulletinPaieId?: SortOrder
    employeId?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    reference?: SortOrder
    notes?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PointageOrderByRelevanceInput = {
    fields: PointageOrderByRelevanceFieldEnum | PointageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PointageEmployeIdDateCompoundUniqueInput = {
    employeId: string
    date: Date | string
  }

  export type PointageCountOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    heureArrivee?: SortOrder
    heureDepart?: SortOrder
    isPresent?: SortOrder
    heuresPrevues?: SortOrder
    heuresTravaillees?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type PointageAvgOrderByAggregateInput = {
    heuresPrevues?: SortOrder
    heuresTravaillees?: SortOrder
  }

  export type PointageMaxOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    heureArrivee?: SortOrder
    heureDepart?: SortOrder
    isPresent?: SortOrder
    heuresPrevues?: SortOrder
    heuresTravaillees?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type PointageMinOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    date?: SortOrder
    heureArrivee?: SortOrder
    heureDepart?: SortOrder
    isPresent?: SortOrder
    heuresPrevues?: SortOrder
    heuresTravaillees?: SortOrder
    creeLe?: SortOrder
    misAJourLe?: SortOrder
  }

  export type PointageSumOrderByAggregateInput = {
    heuresPrevues?: SortOrder
    heuresTravaillees?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EntrepriseCreateNestedOneWithoutUtilisateursInput = {
    create?: XOR<EntrepriseCreateWithoutUtilisateursInput, EntrepriseUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutUtilisateursInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EntrepriseUpdateOneWithoutUtilisateursNestedInput = {
    create?: XOR<EntrepriseCreateWithoutUtilisateursInput, EntrepriseUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutUtilisateursInput
    upsert?: EntrepriseUpsertWithoutUtilisateursInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutUtilisateursInput, EntrepriseUpdateWithoutUtilisateursInput>, EntrepriseUncheckedUpdateWithoutUtilisateursInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UtilisateurCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<UtilisateurCreateWithoutEntrepriseInput, UtilisateurUncheckedCreateWithoutEntrepriseInput> | UtilisateurCreateWithoutEntrepriseInput[] | UtilisateurUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEntrepriseInput | UtilisateurCreateOrConnectWithoutEntrepriseInput[]
    createMany?: UtilisateurCreateManyEntrepriseInputEnvelope
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
  }

  export type EmployeCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<EmployeCreateWithoutEntrepriseInput, EmployeUncheckedCreateWithoutEntrepriseInput> | EmployeCreateWithoutEntrepriseInput[] | EmployeUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutEntrepriseInput | EmployeCreateOrConnectWithoutEntrepriseInput[]
    createMany?: EmployeCreateManyEntrepriseInputEnvelope
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
  }

  export type CyclePaieCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<CyclePaieCreateWithoutEntrepriseInput, CyclePaieUncheckedCreateWithoutEntrepriseInput> | CyclePaieCreateWithoutEntrepriseInput[] | CyclePaieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CyclePaieCreateOrConnectWithoutEntrepriseInput | CyclePaieCreateOrConnectWithoutEntrepriseInput[]
    createMany?: CyclePaieCreateManyEntrepriseInputEnvelope
    connect?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
  }

  export type UtilisateurUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<UtilisateurCreateWithoutEntrepriseInput, UtilisateurUncheckedCreateWithoutEntrepriseInput> | UtilisateurCreateWithoutEntrepriseInput[] | UtilisateurUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEntrepriseInput | UtilisateurCreateOrConnectWithoutEntrepriseInput[]
    createMany?: UtilisateurCreateManyEntrepriseInputEnvelope
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
  }

  export type EmployeUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<EmployeCreateWithoutEntrepriseInput, EmployeUncheckedCreateWithoutEntrepriseInput> | EmployeCreateWithoutEntrepriseInput[] | EmployeUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutEntrepriseInput | EmployeCreateOrConnectWithoutEntrepriseInput[]
    createMany?: EmployeCreateManyEntrepriseInputEnvelope
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
  }

  export type CyclePaieUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<CyclePaieCreateWithoutEntrepriseInput, CyclePaieUncheckedCreateWithoutEntrepriseInput> | CyclePaieCreateWithoutEntrepriseInput[] | CyclePaieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CyclePaieCreateOrConnectWithoutEntrepriseInput | CyclePaieCreateOrConnectWithoutEntrepriseInput[]
    createMany?: CyclePaieCreateManyEntrepriseInputEnvelope
    connect?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
  }

  export type EnumPayPeriodTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayPeriodType
  }

  export type UtilisateurUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEntrepriseInput, UtilisateurUncheckedCreateWithoutEntrepriseInput> | UtilisateurCreateWithoutEntrepriseInput[] | UtilisateurUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEntrepriseInput | UtilisateurCreateOrConnectWithoutEntrepriseInput[]
    upsert?: UtilisateurUpsertWithWhereUniqueWithoutEntrepriseInput | UtilisateurUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: UtilisateurCreateManyEntrepriseInputEnvelope
    set?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    disconnect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    delete?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    update?: UtilisateurUpdateWithWhereUniqueWithoutEntrepriseInput | UtilisateurUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: UtilisateurUpdateManyWithWhereWithoutEntrepriseInput | UtilisateurUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
  }

  export type EmployeUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<EmployeCreateWithoutEntrepriseInput, EmployeUncheckedCreateWithoutEntrepriseInput> | EmployeCreateWithoutEntrepriseInput[] | EmployeUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutEntrepriseInput | EmployeCreateOrConnectWithoutEntrepriseInput[]
    upsert?: EmployeUpsertWithWhereUniqueWithoutEntrepriseInput | EmployeUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: EmployeCreateManyEntrepriseInputEnvelope
    set?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    disconnect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    delete?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    update?: EmployeUpdateWithWhereUniqueWithoutEntrepriseInput | EmployeUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: EmployeUpdateManyWithWhereWithoutEntrepriseInput | EmployeUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
  }

  export type CyclePaieUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<CyclePaieCreateWithoutEntrepriseInput, CyclePaieUncheckedCreateWithoutEntrepriseInput> | CyclePaieCreateWithoutEntrepriseInput[] | CyclePaieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CyclePaieCreateOrConnectWithoutEntrepriseInput | CyclePaieCreateOrConnectWithoutEntrepriseInput[]
    upsert?: CyclePaieUpsertWithWhereUniqueWithoutEntrepriseInput | CyclePaieUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: CyclePaieCreateManyEntrepriseInputEnvelope
    set?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    disconnect?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    delete?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    connect?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    update?: CyclePaieUpdateWithWhereUniqueWithoutEntrepriseInput | CyclePaieUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: CyclePaieUpdateManyWithWhereWithoutEntrepriseInput | CyclePaieUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: CyclePaieScalarWhereInput | CyclePaieScalarWhereInput[]
  }

  export type UtilisateurUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEntrepriseInput, UtilisateurUncheckedCreateWithoutEntrepriseInput> | UtilisateurCreateWithoutEntrepriseInput[] | UtilisateurUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEntrepriseInput | UtilisateurCreateOrConnectWithoutEntrepriseInput[]
    upsert?: UtilisateurUpsertWithWhereUniqueWithoutEntrepriseInput | UtilisateurUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: UtilisateurCreateManyEntrepriseInputEnvelope
    set?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    disconnect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    delete?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    update?: UtilisateurUpdateWithWhereUniqueWithoutEntrepriseInput | UtilisateurUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: UtilisateurUpdateManyWithWhereWithoutEntrepriseInput | UtilisateurUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
  }

  export type EmployeUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<EmployeCreateWithoutEntrepriseInput, EmployeUncheckedCreateWithoutEntrepriseInput> | EmployeCreateWithoutEntrepriseInput[] | EmployeUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: EmployeCreateOrConnectWithoutEntrepriseInput | EmployeCreateOrConnectWithoutEntrepriseInput[]
    upsert?: EmployeUpsertWithWhereUniqueWithoutEntrepriseInput | EmployeUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: EmployeCreateManyEntrepriseInputEnvelope
    set?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    disconnect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    delete?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    connect?: EmployeWhereUniqueInput | EmployeWhereUniqueInput[]
    update?: EmployeUpdateWithWhereUniqueWithoutEntrepriseInput | EmployeUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: EmployeUpdateManyWithWhereWithoutEntrepriseInput | EmployeUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
  }

  export type CyclePaieUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<CyclePaieCreateWithoutEntrepriseInput, CyclePaieUncheckedCreateWithoutEntrepriseInput> | CyclePaieCreateWithoutEntrepriseInput[] | CyclePaieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: CyclePaieCreateOrConnectWithoutEntrepriseInput | CyclePaieCreateOrConnectWithoutEntrepriseInput[]
    upsert?: CyclePaieUpsertWithWhereUniqueWithoutEntrepriseInput | CyclePaieUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: CyclePaieCreateManyEntrepriseInputEnvelope
    set?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    disconnect?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    delete?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    connect?: CyclePaieWhereUniqueInput | CyclePaieWhereUniqueInput[]
    update?: CyclePaieUpdateWithWhereUniqueWithoutEntrepriseInput | CyclePaieUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: CyclePaieUpdateManyWithWhereWithoutEntrepriseInput | CyclePaieUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: CyclePaieScalarWhereInput | CyclePaieScalarWhereInput[]
  }

  export type EntrepriseCreateNestedOneWithoutEmployesInput = {
    create?: XOR<EntrepriseCreateWithoutEmployesInput, EntrepriseUncheckedCreateWithoutEmployesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutEmployesInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type BulletinPaieCreateNestedManyWithoutEmployeInput = {
    create?: XOR<BulletinPaieCreateWithoutEmployeInput, BulletinPaieUncheckedCreateWithoutEmployeInput> | BulletinPaieCreateWithoutEmployeInput[] | BulletinPaieUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutEmployeInput | BulletinPaieCreateOrConnectWithoutEmployeInput[]
    createMany?: BulletinPaieCreateManyEmployeInputEnvelope
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
  }

  export type PointageCreateNestedManyWithoutEmployeInput = {
    create?: XOR<PointageCreateWithoutEmployeInput, PointageUncheckedCreateWithoutEmployeInput> | PointageCreateWithoutEmployeInput[] | PointageUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointageCreateOrConnectWithoutEmployeInput | PointageCreateOrConnectWithoutEmployeInput[]
    createMany?: PointageCreateManyEmployeInputEnvelope
    connect?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
  }

  export type PaiementCreateNestedManyWithoutEmployeInput = {
    create?: XOR<PaiementCreateWithoutEmployeInput, PaiementUncheckedCreateWithoutEmployeInput> | PaiementCreateWithoutEmployeInput[] | PaiementUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutEmployeInput | PaiementCreateOrConnectWithoutEmployeInput[]
    createMany?: PaiementCreateManyEmployeInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type BulletinPaieUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<BulletinPaieCreateWithoutEmployeInput, BulletinPaieUncheckedCreateWithoutEmployeInput> | BulletinPaieCreateWithoutEmployeInput[] | BulletinPaieUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutEmployeInput | BulletinPaieCreateOrConnectWithoutEmployeInput[]
    createMany?: BulletinPaieCreateManyEmployeInputEnvelope
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
  }

  export type PointageUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<PointageCreateWithoutEmployeInput, PointageUncheckedCreateWithoutEmployeInput> | PointageCreateWithoutEmployeInput[] | PointageUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointageCreateOrConnectWithoutEmployeInput | PointageCreateOrConnectWithoutEmployeInput[]
    createMany?: PointageCreateManyEmployeInputEnvelope
    connect?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<PaiementCreateWithoutEmployeInput, PaiementUncheckedCreateWithoutEmployeInput> | PaiementCreateWithoutEmployeInput[] | PaiementUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutEmployeInput | PaiementCreateOrConnectWithoutEmployeInput[]
    createMany?: PaiementCreateManyEmployeInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type EnumContractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntrepriseUpdateOneRequiredWithoutEmployesNestedInput = {
    create?: XOR<EntrepriseCreateWithoutEmployesInput, EntrepriseUncheckedCreateWithoutEmployesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutEmployesInput
    upsert?: EntrepriseUpsertWithoutEmployesInput
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutEmployesInput, EntrepriseUpdateWithoutEmployesInput>, EntrepriseUncheckedUpdateWithoutEmployesInput>
  }

  export type BulletinPaieUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<BulletinPaieCreateWithoutEmployeInput, BulletinPaieUncheckedCreateWithoutEmployeInput> | BulletinPaieCreateWithoutEmployeInput[] | BulletinPaieUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutEmployeInput | BulletinPaieCreateOrConnectWithoutEmployeInput[]
    upsert?: BulletinPaieUpsertWithWhereUniqueWithoutEmployeInput | BulletinPaieUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: BulletinPaieCreateManyEmployeInputEnvelope
    set?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    disconnect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    delete?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    update?: BulletinPaieUpdateWithWhereUniqueWithoutEmployeInput | BulletinPaieUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: BulletinPaieUpdateManyWithWhereWithoutEmployeInput | BulletinPaieUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: BulletinPaieScalarWhereInput | BulletinPaieScalarWhereInput[]
  }

  export type PointageUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<PointageCreateWithoutEmployeInput, PointageUncheckedCreateWithoutEmployeInput> | PointageCreateWithoutEmployeInput[] | PointageUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointageCreateOrConnectWithoutEmployeInput | PointageCreateOrConnectWithoutEmployeInput[]
    upsert?: PointageUpsertWithWhereUniqueWithoutEmployeInput | PointageUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: PointageCreateManyEmployeInputEnvelope
    set?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    disconnect?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    delete?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    connect?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    update?: PointageUpdateWithWhereUniqueWithoutEmployeInput | PointageUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: PointageUpdateManyWithWhereWithoutEmployeInput | PointageUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: PointageScalarWhereInput | PointageScalarWhereInput[]
  }

  export type PaiementUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<PaiementCreateWithoutEmployeInput, PaiementUncheckedCreateWithoutEmployeInput> | PaiementCreateWithoutEmployeInput[] | PaiementUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutEmployeInput | PaiementCreateOrConnectWithoutEmployeInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutEmployeInput | PaiementUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: PaiementCreateManyEmployeInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutEmployeInput | PaiementUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutEmployeInput | PaiementUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type BulletinPaieUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<BulletinPaieCreateWithoutEmployeInput, BulletinPaieUncheckedCreateWithoutEmployeInput> | BulletinPaieCreateWithoutEmployeInput[] | BulletinPaieUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutEmployeInput | BulletinPaieCreateOrConnectWithoutEmployeInput[]
    upsert?: BulletinPaieUpsertWithWhereUniqueWithoutEmployeInput | BulletinPaieUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: BulletinPaieCreateManyEmployeInputEnvelope
    set?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    disconnect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    delete?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    update?: BulletinPaieUpdateWithWhereUniqueWithoutEmployeInput | BulletinPaieUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: BulletinPaieUpdateManyWithWhereWithoutEmployeInput | BulletinPaieUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: BulletinPaieScalarWhereInput | BulletinPaieScalarWhereInput[]
  }

  export type PointageUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<PointageCreateWithoutEmployeInput, PointageUncheckedCreateWithoutEmployeInput> | PointageCreateWithoutEmployeInput[] | PointageUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PointageCreateOrConnectWithoutEmployeInput | PointageCreateOrConnectWithoutEmployeInput[]
    upsert?: PointageUpsertWithWhereUniqueWithoutEmployeInput | PointageUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: PointageCreateManyEmployeInputEnvelope
    set?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    disconnect?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    delete?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    connect?: PointageWhereUniqueInput | PointageWhereUniqueInput[]
    update?: PointageUpdateWithWhereUniqueWithoutEmployeInput | PointageUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: PointageUpdateManyWithWhereWithoutEmployeInput | PointageUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: PointageScalarWhereInput | PointageScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<PaiementCreateWithoutEmployeInput, PaiementUncheckedCreateWithoutEmployeInput> | PaiementCreateWithoutEmployeInput[] | PaiementUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutEmployeInput | PaiementCreateOrConnectWithoutEmployeInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutEmployeInput | PaiementUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: PaiementCreateManyEmployeInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutEmployeInput | PaiementUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutEmployeInput | PaiementUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type EntrepriseCreateNestedOneWithoutCyclesPaieInput = {
    create?: XOR<EntrepriseCreateWithoutCyclesPaieInput, EntrepriseUncheckedCreateWithoutCyclesPaieInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCyclesPaieInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type BulletinPaieCreateNestedManyWithoutCyclePaieInput = {
    create?: XOR<BulletinPaieCreateWithoutCyclePaieInput, BulletinPaieUncheckedCreateWithoutCyclePaieInput> | BulletinPaieCreateWithoutCyclePaieInput[] | BulletinPaieUncheckedCreateWithoutCyclePaieInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutCyclePaieInput | BulletinPaieCreateOrConnectWithoutCyclePaieInput[]
    createMany?: BulletinPaieCreateManyCyclePaieInputEnvelope
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
  }

  export type BulletinPaieUncheckedCreateNestedManyWithoutCyclePaieInput = {
    create?: XOR<BulletinPaieCreateWithoutCyclePaieInput, BulletinPaieUncheckedCreateWithoutCyclePaieInput> | BulletinPaieCreateWithoutCyclePaieInput[] | BulletinPaieUncheckedCreateWithoutCyclePaieInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutCyclePaieInput | BulletinPaieCreateOrConnectWithoutCyclePaieInput[]
    createMany?: BulletinPaieCreateManyCyclePaieInputEnvelope
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
  }

  export type EnumPayRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayRunStatus
  }

  export type EntrepriseUpdateOneRequiredWithoutCyclesPaieNestedInput = {
    create?: XOR<EntrepriseCreateWithoutCyclesPaieInput, EntrepriseUncheckedCreateWithoutCyclesPaieInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCyclesPaieInput
    upsert?: EntrepriseUpsertWithoutCyclesPaieInput
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutCyclesPaieInput, EntrepriseUpdateWithoutCyclesPaieInput>, EntrepriseUncheckedUpdateWithoutCyclesPaieInput>
  }

  export type BulletinPaieUpdateManyWithoutCyclePaieNestedInput = {
    create?: XOR<BulletinPaieCreateWithoutCyclePaieInput, BulletinPaieUncheckedCreateWithoutCyclePaieInput> | BulletinPaieCreateWithoutCyclePaieInput[] | BulletinPaieUncheckedCreateWithoutCyclePaieInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutCyclePaieInput | BulletinPaieCreateOrConnectWithoutCyclePaieInput[]
    upsert?: BulletinPaieUpsertWithWhereUniqueWithoutCyclePaieInput | BulletinPaieUpsertWithWhereUniqueWithoutCyclePaieInput[]
    createMany?: BulletinPaieCreateManyCyclePaieInputEnvelope
    set?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    disconnect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    delete?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    update?: BulletinPaieUpdateWithWhereUniqueWithoutCyclePaieInput | BulletinPaieUpdateWithWhereUniqueWithoutCyclePaieInput[]
    updateMany?: BulletinPaieUpdateManyWithWhereWithoutCyclePaieInput | BulletinPaieUpdateManyWithWhereWithoutCyclePaieInput[]
    deleteMany?: BulletinPaieScalarWhereInput | BulletinPaieScalarWhereInput[]
  }

  export type BulletinPaieUncheckedUpdateManyWithoutCyclePaieNestedInput = {
    create?: XOR<BulletinPaieCreateWithoutCyclePaieInput, BulletinPaieUncheckedCreateWithoutCyclePaieInput> | BulletinPaieCreateWithoutCyclePaieInput[] | BulletinPaieUncheckedCreateWithoutCyclePaieInput[]
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutCyclePaieInput | BulletinPaieCreateOrConnectWithoutCyclePaieInput[]
    upsert?: BulletinPaieUpsertWithWhereUniqueWithoutCyclePaieInput | BulletinPaieUpsertWithWhereUniqueWithoutCyclePaieInput[]
    createMany?: BulletinPaieCreateManyCyclePaieInputEnvelope
    set?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    disconnect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    delete?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    connect?: BulletinPaieWhereUniqueInput | BulletinPaieWhereUniqueInput[]
    update?: BulletinPaieUpdateWithWhereUniqueWithoutCyclePaieInput | BulletinPaieUpdateWithWhereUniqueWithoutCyclePaieInput[]
    updateMany?: BulletinPaieUpdateManyWithWhereWithoutCyclePaieInput | BulletinPaieUpdateManyWithWhereWithoutCyclePaieInput[]
    deleteMany?: BulletinPaieScalarWhereInput | BulletinPaieScalarWhereInput[]
  }

  export type EmployeCreateNestedOneWithoutBulletinsPaieInput = {
    create?: XOR<EmployeCreateWithoutBulletinsPaieInput, EmployeUncheckedCreateWithoutBulletinsPaieInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutBulletinsPaieInput
    connect?: EmployeWhereUniqueInput
  }

  export type CyclePaieCreateNestedOneWithoutBulletinsPaieInput = {
    create?: XOR<CyclePaieCreateWithoutBulletinsPaieInput, CyclePaieUncheckedCreateWithoutBulletinsPaieInput>
    connectOrCreate?: CyclePaieCreateOrConnectWithoutBulletinsPaieInput
    connect?: CyclePaieWhereUniqueInput
  }

  export type PaiementCreateNestedManyWithoutBulletinPaieInput = {
    create?: XOR<PaiementCreateWithoutBulletinPaieInput, PaiementUncheckedCreateWithoutBulletinPaieInput> | PaiementCreateWithoutBulletinPaieInput[] | PaiementUncheckedCreateWithoutBulletinPaieInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinPaieInput | PaiementCreateOrConnectWithoutBulletinPaieInput[]
    createMany?: PaiementCreateManyBulletinPaieInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutBulletinPaieInput = {
    create?: XOR<PaiementCreateWithoutBulletinPaieInput, PaiementUncheckedCreateWithoutBulletinPaieInput> | PaiementCreateWithoutBulletinPaieInput[] | PaiementUncheckedCreateWithoutBulletinPaieInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinPaieInput | PaiementCreateOrConnectWithoutBulletinPaieInput[]
    createMany?: PaiementCreateManyBulletinPaieInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPayslipStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayslipStatus
  }

  export type EmployeUpdateOneRequiredWithoutBulletinsPaieNestedInput = {
    create?: XOR<EmployeCreateWithoutBulletinsPaieInput, EmployeUncheckedCreateWithoutBulletinsPaieInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutBulletinsPaieInput
    upsert?: EmployeUpsertWithoutBulletinsPaieInput
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutBulletinsPaieInput, EmployeUpdateWithoutBulletinsPaieInput>, EmployeUncheckedUpdateWithoutBulletinsPaieInput>
  }

  export type CyclePaieUpdateOneRequiredWithoutBulletinsPaieNestedInput = {
    create?: XOR<CyclePaieCreateWithoutBulletinsPaieInput, CyclePaieUncheckedCreateWithoutBulletinsPaieInput>
    connectOrCreate?: CyclePaieCreateOrConnectWithoutBulletinsPaieInput
    upsert?: CyclePaieUpsertWithoutBulletinsPaieInput
    connect?: CyclePaieWhereUniqueInput
    update?: XOR<XOR<CyclePaieUpdateToOneWithWhereWithoutBulletinsPaieInput, CyclePaieUpdateWithoutBulletinsPaieInput>, CyclePaieUncheckedUpdateWithoutBulletinsPaieInput>
  }

  export type PaiementUpdateManyWithoutBulletinPaieNestedInput = {
    create?: XOR<PaiementCreateWithoutBulletinPaieInput, PaiementUncheckedCreateWithoutBulletinPaieInput> | PaiementCreateWithoutBulletinPaieInput[] | PaiementUncheckedCreateWithoutBulletinPaieInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinPaieInput | PaiementCreateOrConnectWithoutBulletinPaieInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutBulletinPaieInput | PaiementUpsertWithWhereUniqueWithoutBulletinPaieInput[]
    createMany?: PaiementCreateManyBulletinPaieInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutBulletinPaieInput | PaiementUpdateWithWhereUniqueWithoutBulletinPaieInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutBulletinPaieInput | PaiementUpdateManyWithWhereWithoutBulletinPaieInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutBulletinPaieNestedInput = {
    create?: XOR<PaiementCreateWithoutBulletinPaieInput, PaiementUncheckedCreateWithoutBulletinPaieInput> | PaiementCreateWithoutBulletinPaieInput[] | PaiementUncheckedCreateWithoutBulletinPaieInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutBulletinPaieInput | PaiementCreateOrConnectWithoutBulletinPaieInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutBulletinPaieInput | PaiementUpsertWithWhereUniqueWithoutBulletinPaieInput[]
    createMany?: PaiementCreateManyBulletinPaieInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutBulletinPaieInput | PaiementUpdateWithWhereUniqueWithoutBulletinPaieInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutBulletinPaieInput | PaiementUpdateManyWithWhereWithoutBulletinPaieInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type BulletinPaieCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<BulletinPaieCreateWithoutPaiementsInput, BulletinPaieUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutPaiementsInput
    connect?: BulletinPaieWhereUniqueInput
  }

  export type EmployeCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<EmployeCreateWithoutPaiementsInput, EmployeUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutPaiementsInput
    connect?: EmployeWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type BulletinPaieUpdateOneWithoutPaiementsNestedInput = {
    create?: XOR<BulletinPaieCreateWithoutPaiementsInput, BulletinPaieUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: BulletinPaieCreateOrConnectWithoutPaiementsInput
    upsert?: BulletinPaieUpsertWithoutPaiementsInput
    disconnect?: BulletinPaieWhereInput | boolean
    delete?: BulletinPaieWhereInput | boolean
    connect?: BulletinPaieWhereUniqueInput
    update?: XOR<XOR<BulletinPaieUpdateToOneWithWhereWithoutPaiementsInput, BulletinPaieUpdateWithoutPaiementsInput>, BulletinPaieUncheckedUpdateWithoutPaiementsInput>
  }

  export type EmployeUpdateOneWithoutPaiementsNestedInput = {
    create?: XOR<EmployeCreateWithoutPaiementsInput, EmployeUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutPaiementsInput
    upsert?: EmployeUpsertWithoutPaiementsInput
    disconnect?: EmployeWhereInput | boolean
    delete?: EmployeWhereInput | boolean
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutPaiementsInput, EmployeUpdateWithoutPaiementsInput>, EmployeUncheckedUpdateWithoutPaiementsInput>
  }

  export type EmployeCreateNestedOneWithoutPointagesInput = {
    create?: XOR<EmployeCreateWithoutPointagesInput, EmployeUncheckedCreateWithoutPointagesInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutPointagesInput
    connect?: EmployeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeUpdateOneRequiredWithoutPointagesNestedInput = {
    create?: XOR<EmployeCreateWithoutPointagesInput, EmployeUncheckedCreateWithoutPointagesInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutPointagesInput
    upsert?: EmployeUpsertWithoutPointagesInput
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutPointagesInput, EmployeUpdateWithoutPointagesInput>, EmployeUncheckedUpdateWithoutPointagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPayPeriodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodType | EnumPayPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodType[]
    notIn?: $Enums.PayPeriodType[]
    not?: NestedEnumPayPeriodTypeFilter<$PrismaModel> | $Enums.PayPeriodType
  }

  export type NestedEnumPayPeriodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodType | EnumPayPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodType[]
    notIn?: $Enums.PayPeriodType[]
    not?: NestedEnumPayPeriodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayPeriodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayPeriodTypeFilter<$PrismaModel>
    _max?: NestedEnumPayPeriodTypeFilter<$PrismaModel>
  }

  export type NestedEnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[]
    notIn?: $Enums.ContractType[]
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPayRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusFilter<$PrismaModel> | $Enums.PayRunStatus
  }

  export type NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | EnumPayRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayRunStatus[]
    notIn?: $Enums.PayRunStatus[]
    not?: NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayRunStatusFilter<$PrismaModel>
    _max?: NestedEnumPayRunStatusFilter<$PrismaModel>
  }

  export type NestedEnumPayslipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusFilter<$PrismaModel> | $Enums.PayslipStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPayslipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayslipStatus | EnumPayslipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayslipStatus[]
    notIn?: $Enums.PayslipStatus[]
    not?: NestedEnumPayslipStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayslipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayslipStatusFilter<$PrismaModel>
    _max?: NestedEnumPayslipStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EntrepriseCreateWithoutUtilisateursInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    employes?: EmployeCreateNestedManyWithoutEntrepriseInput
    cyclesPaie?: CyclePaieCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutUtilisateursInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    employes?: EmployeUncheckedCreateNestedManyWithoutEntrepriseInput
    cyclesPaie?: CyclePaieUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutUtilisateursInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutUtilisateursInput, EntrepriseUncheckedCreateWithoutUtilisateursInput>
  }

  export type EntrepriseUpsertWithoutUtilisateursInput = {
    update: XOR<EntrepriseUpdateWithoutUtilisateursInput, EntrepriseUncheckedUpdateWithoutUtilisateursInput>
    create: XOR<EntrepriseCreateWithoutUtilisateursInput, EntrepriseUncheckedCreateWithoutUtilisateursInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutUtilisateursInput, EntrepriseUncheckedUpdateWithoutUtilisateursInput>
  }

  export type EntrepriseUpdateWithoutUtilisateursInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employes?: EmployeUpdateManyWithoutEntrepriseNestedInput
    cyclesPaie?: CyclePaieUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutUtilisateursInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employes?: EmployeUncheckedUpdateManyWithoutEntrepriseNestedInput
    cyclesPaie?: CyclePaieUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type UtilisateurCreateWithoutEntrepriseInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role?: $Enums.Role
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type UtilisateurUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role?: $Enums.Role
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type UtilisateurCreateOrConnectWithoutEntrepriseInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutEntrepriseInput, UtilisateurUncheckedCreateWithoutEntrepriseInput>
  }

  export type UtilisateurCreateManyEntrepriseInputEnvelope = {
    data: UtilisateurCreateManyEntrepriseInput | UtilisateurCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type EmployeCreateWithoutEntrepriseInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieCreateNestedManyWithoutEmployeInput
    pointages?: PointageCreateNestedManyWithoutEmployeInput
    paiements?: PaiementCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieUncheckedCreateNestedManyWithoutEmployeInput
    pointages?: PointageUncheckedCreateNestedManyWithoutEmployeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutEntrepriseInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutEntrepriseInput, EmployeUncheckedCreateWithoutEntrepriseInput>
  }

  export type EmployeCreateManyEntrepriseInputEnvelope = {
    data: EmployeCreateManyEntrepriseInput | EmployeCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type CyclePaieCreateWithoutEntrepriseInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieCreateNestedManyWithoutCyclePaieInput
  }

  export type CyclePaieUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieUncheckedCreateNestedManyWithoutCyclePaieInput
  }

  export type CyclePaieCreateOrConnectWithoutEntrepriseInput = {
    where: CyclePaieWhereUniqueInput
    create: XOR<CyclePaieCreateWithoutEntrepriseInput, CyclePaieUncheckedCreateWithoutEntrepriseInput>
  }

  export type CyclePaieCreateManyEntrepriseInputEnvelope = {
    data: CyclePaieCreateManyEntrepriseInput | CyclePaieCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: UtilisateurWhereUniqueInput
    update: XOR<UtilisateurUpdateWithoutEntrepriseInput, UtilisateurUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<UtilisateurCreateWithoutEntrepriseInput, UtilisateurUncheckedCreateWithoutEntrepriseInput>
  }

  export type UtilisateurUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: UtilisateurWhereUniqueInput
    data: XOR<UtilisateurUpdateWithoutEntrepriseInput, UtilisateurUncheckedUpdateWithoutEntrepriseInput>
  }

  export type UtilisateurUpdateManyWithWhereWithoutEntrepriseInput = {
    where: UtilisateurScalarWhereInput
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type UtilisateurScalarWhereInput = {
    AND?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
    OR?: UtilisateurScalarWhereInput[]
    NOT?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    entrepriseId?: StringNullableFilter<"Utilisateur"> | string | null
    estActif?: BoolFilter<"Utilisateur"> | boolean
    creeLe?: DateTimeFilter<"Utilisateur"> | Date | string
    misAJourLe?: DateTimeFilter<"Utilisateur"> | Date | string
  }

  export type EmployeUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: EmployeWhereUniqueInput
    update: XOR<EmployeUpdateWithoutEntrepriseInput, EmployeUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<EmployeCreateWithoutEntrepriseInput, EmployeUncheckedCreateWithoutEntrepriseInput>
  }

  export type EmployeUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: EmployeWhereUniqueInput
    data: XOR<EmployeUpdateWithoutEntrepriseInput, EmployeUncheckedUpdateWithoutEntrepriseInput>
  }

  export type EmployeUpdateManyWithWhereWithoutEntrepriseInput = {
    where: EmployeScalarWhereInput
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type EmployeScalarWhereInput = {
    AND?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
    OR?: EmployeScalarWhereInput[]
    NOT?: EmployeScalarWhereInput | EmployeScalarWhereInput[]
    id?: StringFilter<"Employe"> | string
    prenom?: StringFilter<"Employe"> | string
    nom?: StringFilter<"Employe"> | string
    poste?: StringFilter<"Employe"> | string
    typeContrat?: EnumContractTypeFilter<"Employe"> | $Enums.ContractType
    taux?: FloatFilter<"Employe"> | number
    compteBancaire?: StringNullableFilter<"Employe"> | string | null
    nomBanque?: StringNullableFilter<"Employe"> | string | null
    entrepriseId?: StringFilter<"Employe"> | string
    estActif?: BoolFilter<"Employe"> | boolean
    creeLe?: DateTimeFilter<"Employe"> | Date | string
    misAJourLe?: DateTimeFilter<"Employe"> | Date | string
  }

  export type CyclePaieUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: CyclePaieWhereUniqueInput
    update: XOR<CyclePaieUpdateWithoutEntrepriseInput, CyclePaieUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<CyclePaieCreateWithoutEntrepriseInput, CyclePaieUncheckedCreateWithoutEntrepriseInput>
  }

  export type CyclePaieUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: CyclePaieWhereUniqueInput
    data: XOR<CyclePaieUpdateWithoutEntrepriseInput, CyclePaieUncheckedUpdateWithoutEntrepriseInput>
  }

  export type CyclePaieUpdateManyWithWhereWithoutEntrepriseInput = {
    where: CyclePaieScalarWhereInput
    data: XOR<CyclePaieUpdateManyMutationInput, CyclePaieUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type CyclePaieScalarWhereInput = {
    AND?: CyclePaieScalarWhereInput | CyclePaieScalarWhereInput[]
    OR?: CyclePaieScalarWhereInput[]
    NOT?: CyclePaieScalarWhereInput | CyclePaieScalarWhereInput[]
    id?: StringFilter<"CyclePaie"> | string
    nom?: StringFilter<"CyclePaie"> | string
    dateDebut?: DateTimeFilter<"CyclePaie"> | Date | string
    dateFin?: DateTimeFilter<"CyclePaie"> | Date | string
    statut?: EnumPayRunStatusFilter<"CyclePaie"> | $Enums.PayRunStatus
    entrepriseId?: StringFilter<"CyclePaie"> | string
    creeLe?: DateTimeFilter<"CyclePaie"> | Date | string
    misAJourLe?: DateTimeFilter<"CyclePaie"> | Date | string
  }

  export type EntrepriseCreateWithoutEmployesInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    utilisateurs?: UtilisateurCreateNestedManyWithoutEntrepriseInput
    cyclesPaie?: CyclePaieCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutEmployesInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutEntrepriseInput
    cyclesPaie?: CyclePaieUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutEmployesInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutEmployesInput, EntrepriseUncheckedCreateWithoutEmployesInput>
  }

  export type BulletinPaieCreateWithoutEmployeInput = {
    id?: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    cyclePaie: CyclePaieCreateNestedOneWithoutBulletinsPaieInput
    paiements?: PaiementCreateNestedManyWithoutBulletinPaieInput
  }

  export type BulletinPaieUncheckedCreateWithoutEmployeInput = {
    id?: string
    cyclePaieId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutBulletinPaieInput
  }

  export type BulletinPaieCreateOrConnectWithoutEmployeInput = {
    where: BulletinPaieWhereUniqueInput
    create: XOR<BulletinPaieCreateWithoutEmployeInput, BulletinPaieUncheckedCreateWithoutEmployeInput>
  }

  export type BulletinPaieCreateManyEmployeInputEnvelope = {
    data: BulletinPaieCreateManyEmployeInput | BulletinPaieCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type PointageCreateWithoutEmployeInput = {
    id?: string
    date: Date | string
    heureArrivee?: Date | string | null
    heureDepart?: Date | string | null
    isPresent?: boolean
    heuresPrevues?: number | null
    heuresTravaillees?: number | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PointageUncheckedCreateWithoutEmployeInput = {
    id?: string
    date: Date | string
    heureArrivee?: Date | string | null
    heureDepart?: Date | string | null
    isPresent?: boolean
    heuresPrevues?: number | null
    heuresTravaillees?: number | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PointageCreateOrConnectWithoutEmployeInput = {
    where: PointageWhereUniqueInput
    create: XOR<PointageCreateWithoutEmployeInput, PointageUncheckedCreateWithoutEmployeInput>
  }

  export type PointageCreateManyEmployeInputEnvelope = {
    data: PointageCreateManyEmployeInput | PointageCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutEmployeInput = {
    id?: string
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinPaie?: BulletinPaieCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateWithoutEmployeInput = {
    id?: string
    bulletinPaieId?: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PaiementCreateOrConnectWithoutEmployeInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutEmployeInput, PaiementUncheckedCreateWithoutEmployeInput>
  }

  export type PaiementCreateManyEmployeInputEnvelope = {
    data: PaiementCreateManyEmployeInput | PaiementCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithoutEmployesInput = {
    update: XOR<EntrepriseUpdateWithoutEmployesInput, EntrepriseUncheckedUpdateWithoutEmployesInput>
    create: XOR<EntrepriseCreateWithoutEmployesInput, EntrepriseUncheckedCreateWithoutEmployesInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutEmployesInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutEmployesInput, EntrepriseUncheckedUpdateWithoutEmployesInput>
  }

  export type EntrepriseUpdateWithoutEmployesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUpdateManyWithoutEntrepriseNestedInput
    cyclesPaie?: CyclePaieUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutEmployesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutEntrepriseNestedInput
    cyclesPaie?: CyclePaieUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type BulletinPaieUpsertWithWhereUniqueWithoutEmployeInput = {
    where: BulletinPaieWhereUniqueInput
    update: XOR<BulletinPaieUpdateWithoutEmployeInput, BulletinPaieUncheckedUpdateWithoutEmployeInput>
    create: XOR<BulletinPaieCreateWithoutEmployeInput, BulletinPaieUncheckedCreateWithoutEmployeInput>
  }

  export type BulletinPaieUpdateWithWhereUniqueWithoutEmployeInput = {
    where: BulletinPaieWhereUniqueInput
    data: XOR<BulletinPaieUpdateWithoutEmployeInput, BulletinPaieUncheckedUpdateWithoutEmployeInput>
  }

  export type BulletinPaieUpdateManyWithWhereWithoutEmployeInput = {
    where: BulletinPaieScalarWhereInput
    data: XOR<BulletinPaieUpdateManyMutationInput, BulletinPaieUncheckedUpdateManyWithoutEmployeInput>
  }

  export type BulletinPaieScalarWhereInput = {
    AND?: BulletinPaieScalarWhereInput | BulletinPaieScalarWhereInput[]
    OR?: BulletinPaieScalarWhereInput[]
    NOT?: BulletinPaieScalarWhereInput | BulletinPaieScalarWhereInput[]
    id?: StringFilter<"BulletinPaie"> | string
    employeId?: StringFilter<"BulletinPaie"> | string
    cyclePaieId?: StringFilter<"BulletinPaie"> | string
    montantBrut?: FloatFilter<"BulletinPaie"> | number
    deductions?: FloatFilter<"BulletinPaie"> | number
    montantNet?: FloatFilter<"BulletinPaie"> | number
    joursTravailles?: IntNullableFilter<"BulletinPaie"> | number | null
    statut?: EnumPayslipStatusFilter<"BulletinPaie"> | $Enums.PayslipStatus
    creeLe?: DateTimeFilter<"BulletinPaie"> | Date | string
    misAJourLe?: DateTimeFilter<"BulletinPaie"> | Date | string
  }

  export type PointageUpsertWithWhereUniqueWithoutEmployeInput = {
    where: PointageWhereUniqueInput
    update: XOR<PointageUpdateWithoutEmployeInput, PointageUncheckedUpdateWithoutEmployeInput>
    create: XOR<PointageCreateWithoutEmployeInput, PointageUncheckedCreateWithoutEmployeInput>
  }

  export type PointageUpdateWithWhereUniqueWithoutEmployeInput = {
    where: PointageWhereUniqueInput
    data: XOR<PointageUpdateWithoutEmployeInput, PointageUncheckedUpdateWithoutEmployeInput>
  }

  export type PointageUpdateManyWithWhereWithoutEmployeInput = {
    where: PointageScalarWhereInput
    data: XOR<PointageUpdateManyMutationInput, PointageUncheckedUpdateManyWithoutEmployeInput>
  }

  export type PointageScalarWhereInput = {
    AND?: PointageScalarWhereInput | PointageScalarWhereInput[]
    OR?: PointageScalarWhereInput[]
    NOT?: PointageScalarWhereInput | PointageScalarWhereInput[]
    id?: StringFilter<"Pointage"> | string
    employeId?: StringFilter<"Pointage"> | string
    date?: DateTimeFilter<"Pointage"> | Date | string
    heureArrivee?: DateTimeNullableFilter<"Pointage"> | Date | string | null
    heureDepart?: DateTimeNullableFilter<"Pointage"> | Date | string | null
    isPresent?: BoolFilter<"Pointage"> | boolean
    heuresPrevues?: FloatNullableFilter<"Pointage"> | number | null
    heuresTravaillees?: FloatNullableFilter<"Pointage"> | number | null
    creeLe?: DateTimeFilter<"Pointage"> | Date | string
    misAJourLe?: DateTimeFilter<"Pointage"> | Date | string
  }

  export type PaiementUpsertWithWhereUniqueWithoutEmployeInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutEmployeInput, PaiementUncheckedUpdateWithoutEmployeInput>
    create: XOR<PaiementCreateWithoutEmployeInput, PaiementUncheckedCreateWithoutEmployeInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutEmployeInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutEmployeInput, PaiementUncheckedUpdateWithoutEmployeInput>
  }

  export type PaiementUpdateManyWithWhereWithoutEmployeInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutEmployeInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    id?: StringFilter<"Paiement"> | string
    bulletinPaieId?: StringNullableFilter<"Paiement"> | string | null
    employeId?: StringNullableFilter<"Paiement"> | string | null
    montant?: FloatFilter<"Paiement"> | number
    methode?: EnumPaymentMethodFilter<"Paiement"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"Paiement"> | string | null
    notes?: StringNullableFilter<"Paiement"> | string | null
    creeLe?: DateTimeFilter<"Paiement"> | Date | string
    misAJourLe?: DateTimeFilter<"Paiement"> | Date | string
  }

  export type EntrepriseCreateWithoutCyclesPaieInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    utilisateurs?: UtilisateurCreateNestedManyWithoutEntrepriseInput
    employes?: EmployeCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutCyclesPaieInput = {
    id?: string
    nom: string
    logo?: string | null
    adresse?: string | null
    devise?: string
    typePeriodePaie?: $Enums.PayPeriodType
    creeLe?: Date | string
    misAJourLe?: Date | string
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutEntrepriseInput
    employes?: EmployeUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutCyclesPaieInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutCyclesPaieInput, EntrepriseUncheckedCreateWithoutCyclesPaieInput>
  }

  export type BulletinPaieCreateWithoutCyclePaieInput = {
    id?: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    employe: EmployeCreateNestedOneWithoutBulletinsPaieInput
    paiements?: PaiementCreateNestedManyWithoutBulletinPaieInput
  }

  export type BulletinPaieUncheckedCreateWithoutCyclePaieInput = {
    id?: string
    employeId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutBulletinPaieInput
  }

  export type BulletinPaieCreateOrConnectWithoutCyclePaieInput = {
    where: BulletinPaieWhereUniqueInput
    create: XOR<BulletinPaieCreateWithoutCyclePaieInput, BulletinPaieUncheckedCreateWithoutCyclePaieInput>
  }

  export type BulletinPaieCreateManyCyclePaieInputEnvelope = {
    data: BulletinPaieCreateManyCyclePaieInput | BulletinPaieCreateManyCyclePaieInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithoutCyclesPaieInput = {
    update: XOR<EntrepriseUpdateWithoutCyclesPaieInput, EntrepriseUncheckedUpdateWithoutCyclesPaieInput>
    create: XOR<EntrepriseCreateWithoutCyclesPaieInput, EntrepriseUncheckedCreateWithoutCyclesPaieInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutCyclesPaieInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutCyclesPaieInput, EntrepriseUncheckedUpdateWithoutCyclesPaieInput>
  }

  export type EntrepriseUpdateWithoutCyclesPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUpdateManyWithoutEntrepriseNestedInput
    employes?: EmployeUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutCyclesPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    devise?: StringFieldUpdateOperationsInput | string
    typePeriodePaie?: EnumPayPeriodTypeFieldUpdateOperationsInput | $Enums.PayPeriodType
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutEntrepriseNestedInput
    employes?: EmployeUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type BulletinPaieUpsertWithWhereUniqueWithoutCyclePaieInput = {
    where: BulletinPaieWhereUniqueInput
    update: XOR<BulletinPaieUpdateWithoutCyclePaieInput, BulletinPaieUncheckedUpdateWithoutCyclePaieInput>
    create: XOR<BulletinPaieCreateWithoutCyclePaieInput, BulletinPaieUncheckedCreateWithoutCyclePaieInput>
  }

  export type BulletinPaieUpdateWithWhereUniqueWithoutCyclePaieInput = {
    where: BulletinPaieWhereUniqueInput
    data: XOR<BulletinPaieUpdateWithoutCyclePaieInput, BulletinPaieUncheckedUpdateWithoutCyclePaieInput>
  }

  export type BulletinPaieUpdateManyWithWhereWithoutCyclePaieInput = {
    where: BulletinPaieScalarWhereInput
    data: XOR<BulletinPaieUpdateManyMutationInput, BulletinPaieUncheckedUpdateManyWithoutCyclePaieInput>
  }

  export type EmployeCreateWithoutBulletinsPaieInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutEmployesInput
    pointages?: PointageCreateNestedManyWithoutEmployeInput
    paiements?: PaiementCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutBulletinsPaieInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    entrepriseId: string
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    pointages?: PointageUncheckedCreateNestedManyWithoutEmployeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutBulletinsPaieInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutBulletinsPaieInput, EmployeUncheckedCreateWithoutBulletinsPaieInput>
  }

  export type CyclePaieCreateWithoutBulletinsPaieInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutCyclesPaieInput
  }

  export type CyclePaieUncheckedCreateWithoutBulletinsPaieInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    entrepriseId: string
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type CyclePaieCreateOrConnectWithoutBulletinsPaieInput = {
    where: CyclePaieWhereUniqueInput
    create: XOR<CyclePaieCreateWithoutBulletinsPaieInput, CyclePaieUncheckedCreateWithoutBulletinsPaieInput>
  }

  export type PaiementCreateWithoutBulletinPaieInput = {
    id?: string
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
    employe?: EmployeCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateWithoutBulletinPaieInput = {
    id?: string
    employeId?: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PaiementCreateOrConnectWithoutBulletinPaieInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutBulletinPaieInput, PaiementUncheckedCreateWithoutBulletinPaieInput>
  }

  export type PaiementCreateManyBulletinPaieInputEnvelope = {
    data: PaiementCreateManyBulletinPaieInput | PaiementCreateManyBulletinPaieInput[]
    skipDuplicates?: boolean
  }

  export type EmployeUpsertWithoutBulletinsPaieInput = {
    update: XOR<EmployeUpdateWithoutBulletinsPaieInput, EmployeUncheckedUpdateWithoutBulletinsPaieInput>
    create: XOR<EmployeCreateWithoutBulletinsPaieInput, EmployeUncheckedCreateWithoutBulletinsPaieInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutBulletinsPaieInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutBulletinsPaieInput, EmployeUncheckedUpdateWithoutBulletinsPaieInput>
  }

  export type EmployeUpdateWithoutBulletinsPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutEmployesNestedInput
    pointages?: PointageUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutBulletinsPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: StringFieldUpdateOperationsInput | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    pointages?: PointageUncheckedUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type CyclePaieUpsertWithoutBulletinsPaieInput = {
    update: XOR<CyclePaieUpdateWithoutBulletinsPaieInput, CyclePaieUncheckedUpdateWithoutBulletinsPaieInput>
    create: XOR<CyclePaieCreateWithoutBulletinsPaieInput, CyclePaieUncheckedCreateWithoutBulletinsPaieInput>
    where?: CyclePaieWhereInput
  }

  export type CyclePaieUpdateToOneWithWhereWithoutBulletinsPaieInput = {
    where?: CyclePaieWhereInput
    data: XOR<CyclePaieUpdateWithoutBulletinsPaieInput, CyclePaieUncheckedUpdateWithoutBulletinsPaieInput>
  }

  export type CyclePaieUpdateWithoutBulletinsPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutCyclesPaieNestedInput
  }

  export type CyclePaieUncheckedUpdateWithoutBulletinsPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    entrepriseId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUpsertWithWhereUniqueWithoutBulletinPaieInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutBulletinPaieInput, PaiementUncheckedUpdateWithoutBulletinPaieInput>
    create: XOR<PaiementCreateWithoutBulletinPaieInput, PaiementUncheckedCreateWithoutBulletinPaieInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutBulletinPaieInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutBulletinPaieInput, PaiementUncheckedUpdateWithoutBulletinPaieInput>
  }

  export type PaiementUpdateManyWithWhereWithoutBulletinPaieInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutBulletinPaieInput>
  }

  export type BulletinPaieCreateWithoutPaiementsInput = {
    id?: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
    employe: EmployeCreateNestedOneWithoutBulletinsPaieInput
    cyclePaie: CyclePaieCreateNestedOneWithoutBulletinsPaieInput
  }

  export type BulletinPaieUncheckedCreateWithoutPaiementsInput = {
    id?: string
    employeId: string
    cyclePaieId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type BulletinPaieCreateOrConnectWithoutPaiementsInput = {
    where: BulletinPaieWhereUniqueInput
    create: XOR<BulletinPaieCreateWithoutPaiementsInput, BulletinPaieUncheckedCreateWithoutPaiementsInput>
  }

  export type EmployeCreateWithoutPaiementsInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutEmployesInput
    bulletinsPaie?: BulletinPaieCreateNestedManyWithoutEmployeInput
    pointages?: PointageCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutPaiementsInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    entrepriseId: string
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieUncheckedCreateNestedManyWithoutEmployeInput
    pointages?: PointageUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutPaiementsInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutPaiementsInput, EmployeUncheckedCreateWithoutPaiementsInput>
  }

  export type BulletinPaieUpsertWithoutPaiementsInput = {
    update: XOR<BulletinPaieUpdateWithoutPaiementsInput, BulletinPaieUncheckedUpdateWithoutPaiementsInput>
    create: XOR<BulletinPaieCreateWithoutPaiementsInput, BulletinPaieUncheckedCreateWithoutPaiementsInput>
    where?: BulletinPaieWhereInput
  }

  export type BulletinPaieUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: BulletinPaieWhereInput
    data: XOR<BulletinPaieUpdateWithoutPaiementsInput, BulletinPaieUncheckedUpdateWithoutPaiementsInput>
  }

  export type BulletinPaieUpdateWithoutPaiementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutBulletinsPaieNestedInput
    cyclePaie?: CyclePaieUpdateOneRequiredWithoutBulletinsPaieNestedInput
  }

  export type BulletinPaieUncheckedUpdateWithoutPaiementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    cyclePaieId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeUpsertWithoutPaiementsInput = {
    update: XOR<EmployeUpdateWithoutPaiementsInput, EmployeUncheckedUpdateWithoutPaiementsInput>
    create: XOR<EmployeCreateWithoutPaiementsInput, EmployeUncheckedCreateWithoutPaiementsInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutPaiementsInput, EmployeUncheckedUpdateWithoutPaiementsInput>
  }

  export type EmployeUpdateWithoutPaiementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutEmployesNestedInput
    bulletinsPaie?: BulletinPaieUpdateManyWithoutEmployeNestedInput
    pointages?: PointageUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutPaiementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: StringFieldUpdateOperationsInput | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUncheckedUpdateManyWithoutEmployeNestedInput
    pointages?: PointageUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeCreateWithoutPointagesInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutEmployesInput
    bulletinsPaie?: BulletinPaieCreateNestedManyWithoutEmployeInput
    paiements?: PaiementCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutPointagesInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    entrepriseId: string
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
    bulletinsPaie?: BulletinPaieUncheckedCreateNestedManyWithoutEmployeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutPointagesInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutPointagesInput, EmployeUncheckedCreateWithoutPointagesInput>
  }

  export type EmployeUpsertWithoutPointagesInput = {
    update: XOR<EmployeUpdateWithoutPointagesInput, EmployeUncheckedUpdateWithoutPointagesInput>
    create: XOR<EmployeCreateWithoutPointagesInput, EmployeUncheckedCreateWithoutPointagesInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutPointagesInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutPointagesInput, EmployeUncheckedUpdateWithoutPointagesInput>
  }

  export type EmployeUpdateWithoutPointagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutEmployesNestedInput
    bulletinsPaie?: BulletinPaieUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutPointagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: StringFieldUpdateOperationsInput | string
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUncheckedUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type UtilisateurCreateManyEntrepriseInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    role?: $Enums.Role
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type EmployeCreateManyEntrepriseInput = {
    id?: string
    prenom: string
    nom: string
    poste: string
    typeContrat?: $Enums.ContractType
    taux: number
    compteBancaire?: string | null
    nomBanque?: string | null
    estActif?: boolean
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type CyclePaieCreateManyEntrepriseInput = {
    id?: string
    nom: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.PayRunStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type UtilisateurUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUpdateManyWithoutEmployeNestedInput
    pointages?: PointageUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUncheckedUpdateManyWithoutEmployeNestedInput
    pointages?: PointageUncheckedUpdateManyWithoutEmployeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    taux?: FloatFieldUpdateOperationsInput | number
    compteBancaire?: NullableStringFieldUpdateOperationsInput | string | null
    nomBanque?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CyclePaieUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUpdateManyWithoutCyclePaieNestedInput
  }

  export type CyclePaieUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinsPaie?: BulletinPaieUncheckedUpdateManyWithoutCyclePaieNestedInput
  }

  export type CyclePaieUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumPayRunStatusFieldUpdateOperationsInput | $Enums.PayRunStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPaieCreateManyEmployeInput = {
    id?: string
    cyclePaieId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PointageCreateManyEmployeInput = {
    id?: string
    date: Date | string
    heureArrivee?: Date | string | null
    heureDepart?: Date | string | null
    isPresent?: boolean
    heuresPrevues?: number | null
    heuresTravaillees?: number | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PaiementCreateManyEmployeInput = {
    id?: string
    bulletinPaieId?: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type BulletinPaieUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    cyclePaie?: CyclePaieUpdateOneRequiredWithoutBulletinsPaieNestedInput
    paiements?: PaiementUpdateManyWithoutBulletinPaieNestedInput
  }

  export type BulletinPaieUncheckedUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyclePaieId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutBulletinPaieNestedInput
  }

  export type BulletinPaieUncheckedUpdateManyWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyclePaieId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointageUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointageUncheckedUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointageUncheckedUpdateManyWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heureArrivee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    heuresPrevues?: NullableFloatFieldUpdateOperationsInput | number | null
    heuresTravaillees?: NullableFloatFieldUpdateOperationsInput | number | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletinPaie?: BulletinPaieUpdateOneWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulletinPaieId?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulletinPaieId?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPaieCreateManyCyclePaieInput = {
    id?: string
    employeId: string
    montantBrut: number
    deductions?: number
    montantNet: number
    joursTravailles?: number | null
    statut?: $Enums.PayslipStatus
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type BulletinPaieUpdateWithoutCyclePaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutBulletinsPaieNestedInput
    paiements?: PaiementUpdateManyWithoutBulletinPaieNestedInput
  }

  export type BulletinPaieUncheckedUpdateWithoutCyclePaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutBulletinPaieNestedInput
  }

  export type BulletinPaieUncheckedUpdateManyWithoutCyclePaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: StringFieldUpdateOperationsInput | string
    montantBrut?: FloatFieldUpdateOperationsInput | number
    deductions?: FloatFieldUpdateOperationsInput | number
    montantNet?: FloatFieldUpdateOperationsInput | number
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateManyBulletinPaieInput = {
    id?: string
    employeId?: string | null
    montant: number
    methode: $Enums.PaymentMethod
    reference?: string | null
    notes?: string | null
    creeLe?: Date | string
    misAJourLe?: Date | string
  }

  export type PaiementUpdateWithoutBulletinPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateWithoutBulletinPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyWithoutBulletinPaieInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeId?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    misAJourLe?: DateTimeFieldUpdateOperationsInput | Date | string
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
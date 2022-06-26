/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Contact } from '../contacts/contact'
import { ContactAttribute } from '../contacts/contact_attribute'
import { ContactShare } from '../contacts/contact_share'
import { PendingContact } from '../contacts/pending_contact'
import { PendingContactAttribute } from '../contacts/pending_contact_attribute'

export interface State {
  contacts: Contact[]
  expiredContactIds: number[]
  contactAttributes: ContactAttribute[]
  expiredContactAttributeIds: number[]
  contactShares: ContactShare[]
  expiredContactShareIds: number[]
  pendingContacts: PendingContact[]
  expiredPendingContactIds: number[]
  pendingContactAttributes: PendingContactAttribute[]
  expiredPendingContactAttributeIds: number[]
}

function createBaseState(): State {
  return {
    contacts: [],
    expiredContactIds: [],
    contactAttributes: [],
    expiredContactAttributeIds: [],
    contactShares: [],
    expiredContactShareIds: [],
    pendingContacts: [],
    expiredPendingContactIds: [],
    pendingContactAttributes: [],
    expiredPendingContactAttributeIds: []
  }
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contacts) {
      Contact.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    writer.uint32(18).fork()
    for (const v of message.expiredContactIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.contactAttributes) {
      ContactAttribute.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    writer.uint32(34).fork()
    for (const v of message.expiredContactAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.contactShares) {
      ContactShare.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    writer.uint32(50).fork()
    for (const v of message.expiredContactShareIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingContacts) {
      PendingContact.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    writer.uint32(66).fork()
    for (const v of message.expiredPendingContactIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    for (const v of message.pendingContactAttributes) {
      PendingContactAttribute.encode(v!, writer.uint32(74).fork()).ldelim()
    }
    writer.uint32(82).fork()
    for (const v of message.expiredPendingContactAttributeIds) {
      writer.uint32(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.contacts.push(Contact.decode(reader, reader.uint32()))
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredContactIds.push(reader.uint32())
            }
          } else {
            message.expiredContactIds.push(reader.uint32())
          }
          break
        case 3:
          message.contactAttributes.push(
            ContactAttribute.decode(reader, reader.uint32())
          )
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredContactAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredContactAttributeIds.push(reader.uint32())
          }
          break
        case 5:
          message.contactShares.push(
            ContactShare.decode(reader, reader.uint32())
          )
          break
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredContactShareIds.push(reader.uint32())
            }
          } else {
            message.expiredContactShareIds.push(reader.uint32())
          }
          break
        case 7:
          message.pendingContacts.push(
            PendingContact.decode(reader, reader.uint32())
          )
          break
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingContactIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingContactIds.push(reader.uint32())
          }
          break
        case 9:
          message.pendingContactAttributes.push(
            PendingContactAttribute.decode(reader, reader.uint32())
          )
          break
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.expiredPendingContactAttributeIds.push(reader.uint32())
            }
          } else {
            message.expiredPendingContactAttributeIds.push(reader.uint32())
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): State {
    return {
      contacts: Array.isArray(object?.contacts)
        ? object.contacts.map((e: any) => Contact.fromJSON(e))
        : [],
      expiredContactIds: Array.isArray(object?.expiredContactIds)
        ? object.expiredContactIds.map((e: any) => Number(e))
        : [],
      contactAttributes: Array.isArray(object?.contactAttributes)
        ? object.contactAttributes.map((e: any) => ContactAttribute.fromJSON(e))
        : [],
      expiredContactAttributeIds: Array.isArray(
        object?.expiredContactAttributeIds
      )
        ? object.expiredContactAttributeIds.map((e: any) => Number(e))
        : [],
      contactShares: Array.isArray(object?.contactShares)
        ? object.contactShares.map((e: any) => ContactShare.fromJSON(e))
        : [],
      expiredContactShareIds: Array.isArray(object?.expiredContactShareIds)
        ? object.expiredContactShareIds.map((e: any) => Number(e))
        : [],
      pendingContacts: Array.isArray(object?.pendingContacts)
        ? object.pendingContacts.map((e: any) => PendingContact.fromJSON(e))
        : [],
      expiredPendingContactIds: Array.isArray(object?.expiredPendingContactIds)
        ? object.expiredPendingContactIds.map((e: any) => Number(e))
        : [],
      pendingContactAttributes: Array.isArray(object?.pendingContactAttributes)
        ? object.pendingContactAttributes.map((e: any) =>
            PendingContactAttribute.fromJSON(e)
          )
        : [],
      expiredPendingContactAttributeIds: Array.isArray(
        object?.expiredPendingContactAttributeIds
      )
        ? object.expiredPendingContactAttributeIds.map((e: any) => Number(e))
        : []
    }
  },

  toJSON(message: State): unknown {
    const obj: any = {}
    if (message.contacts) {
      obj.contacts = message.contacts.map((e) =>
        e ? Contact.toJSON(e) : undefined
      )
    } else {
      obj.contacts = []
    }
    if (message.expiredContactIds) {
      obj.expiredContactIds = message.expiredContactIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredContactIds = []
    }
    if (message.contactAttributes) {
      obj.contactAttributes = message.contactAttributes.map((e) =>
        e ? ContactAttribute.toJSON(e) : undefined
      )
    } else {
      obj.contactAttributes = []
    }
    if (message.expiredContactAttributeIds) {
      obj.expiredContactAttributeIds = message.expiredContactAttributeIds.map(
        (e) => Math.round(e)
      )
    } else {
      obj.expiredContactAttributeIds = []
    }
    if (message.contactShares) {
      obj.contactShares = message.contactShares.map((e) =>
        e ? ContactShare.toJSON(e) : undefined
      )
    } else {
      obj.contactShares = []
    }
    if (message.expiredContactShareIds) {
      obj.expiredContactShareIds = message.expiredContactShareIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredContactShareIds = []
    }
    if (message.pendingContacts) {
      obj.pendingContacts = message.pendingContacts.map((e) =>
        e ? PendingContact.toJSON(e) : undefined
      )
    } else {
      obj.pendingContacts = []
    }
    if (message.expiredPendingContactIds) {
      obj.expiredPendingContactIds = message.expiredPendingContactIds.map((e) =>
        Math.round(e)
      )
    } else {
      obj.expiredPendingContactIds = []
    }
    if (message.pendingContactAttributes) {
      obj.pendingContactAttributes = message.pendingContactAttributes.map((e) =>
        e ? PendingContactAttribute.toJSON(e) : undefined
      )
    } else {
      obj.pendingContactAttributes = []
    }
    if (message.expiredPendingContactAttributeIds) {
      obj.expiredPendingContactAttributeIds =
        message.expiredPendingContactAttributeIds.map((e) => Math.round(e))
    } else {
      obj.expiredPendingContactAttributeIds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState()
    message.contacts = object.contacts?.map((e) => Contact.fromPartial(e)) || []
    message.expiredContactIds = object.expiredContactIds?.map((e) => e) || []
    message.contactAttributes =
      object.contactAttributes?.map((e) => ContactAttribute.fromPartial(e)) ||
      []
    message.expiredContactAttributeIds =
      object.expiredContactAttributeIds?.map((e) => e) || []
    message.contactShares =
      object.contactShares?.map((e) => ContactShare.fromPartial(e)) || []
    message.expiredContactShareIds =
      object.expiredContactShareIds?.map((e) => e) || []
    message.pendingContacts =
      object.pendingContacts?.map((e) => PendingContact.fromPartial(e)) || []
    message.expiredPendingContactIds =
      object.expiredPendingContactIds?.map((e) => e) || []
    message.pendingContactAttributes =
      object.pendingContactAttributes?.map((e) =>
        PendingContactAttribute.fromPartial(e)
      ) || []
    message.expiredPendingContactAttributeIds =
      object.expiredPendingContactAttributeIds?.map((e) => e) || []
    return message
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
      $case: T['$case']
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

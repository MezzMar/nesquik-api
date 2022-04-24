import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import {
  Banner,
  Category,
  Coordinates,
  Market as MarketType,
  MarketImages,
  Schedule,
} from 'nesquik-types'
import { BannerSchema } from '../../shared/schemas/banners.schema'
import { SchemaOptions } from '../../shared/schemas/schemas-options'

export type MarketDocument = Market & Document

@Schema(SchemaOptions)
export class Market implements Partial<MarketType> {
  @Prop({ required: true, type: String })
  name: string

  @Prop({ type: String })
  address: string

  @Prop({})
  bikeDistance: number

  @Prop({
    type: {
      lat: { type: Number },
      lng: { type: Number },
      accuracy: { type: Number },
    },
  })
  coordinates: Coordinates

  @Prop({ type: String })
  email: string

  @Prop({ type: Number })
  estimatedTime: number

  @Prop({ type: Boolean })
  hasFreeDelivery: boolean

  @Prop({ type: Boolean })
  hasPromo: boolean

  @Prop({ type: Boolean })
  isDeliveryOnly: boolean

  @Prop({ type: Boolean })
  isOnlyQuik: boolean

  @Prop({ type: Boolean })
  isPremium: boolean

  @Prop({ required: true, type: String })
  logo: string

  @Prop({ type: String })
  marketID: string

  @Prop({ type: Number })
  maxDeliveryRange: number

  @Prop({ type: Number })
  radiusDistance: number

  @Prop({ default: 0, type: Number })
  order: number // ranking

  @Prop({ required: true })
  rating: number

  @Prop({
    type: [
      {
        initialTime: { type: String },
        onlyAllowMoto: { type: Boolean },
        statusInRange: { type: String },
        finalTime: { type: String },
        finalDeliveryTime: { type: Number },
        allowFree: { type: Boolean },
        statusOutOfRange: { type: String },
        initialDeliveryTime: { type: String },
        deliveryFactor: { type: Number },
      },
    ],
  })
  schedule: Schedule[]

  @Prop({ type: [BannerSchema] })
  marketing: Banner[]

  @Prop({
    type: [
      {
        profile: { type: String },
        header: { type: String },
        showcaseBackgroundImage: { type: String },
        backgroundImage: { type: String },
        marketing: { type: [String] },
        headerBackgroundColor: { type: String },
      },
    ],
  })
  images: MarketImages

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }])
  categories: Category[]
}

export const MarketSchema = SchemaFactory.createForClass(Market)
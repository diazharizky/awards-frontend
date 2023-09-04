export type Award = {
  name: string
  point: number
  type: string
}

export type AwardListFilter = {
  type?: string | null
  minPoint?: string | null
  maxPoint?: string | null
}

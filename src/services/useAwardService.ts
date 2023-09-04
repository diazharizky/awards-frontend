import axios from 'axios'
import { AwardListFilter, Award } from '../models'

interface IAwardService {
  list(filter: AwardListFilter): Promise<Award[]>
}

const useAwardService = (): IAwardService => {
  const list = async (params: AwardListFilter) => {
    const res = await axios.get<{ awards: Award[] }>('/api/awards', { params })

    return res.data.awards
  }

  return { list }
}

export { useAwardService }

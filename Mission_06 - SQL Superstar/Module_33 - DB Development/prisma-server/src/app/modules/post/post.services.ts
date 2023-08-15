import { PrismaClient, Post } from '@prisma/client'
import { IPaginationOptions } from '../../../interface/pagination'
import { calculatePagination } from '../../../helpers/paginationHelper'
import { IPostFilters } from './post.interface'
const prisma = new PrismaClient()

export const createPostService = async (data: Post): Promise<Post | null> => {
  const result = await prisma.post.create({
    data,
  })
  return result
}

export const getPostsService = async (
  paginationOptions: IPaginationOptions,
  filters: IPostFilters
): Promise<Post[] | null> => {
  const { limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions)
  const { searchTerm } = filters

  const result = await prisma.post.findMany({
    skip,
    take: limit,
    include: {
      author: true,
      category: true,
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
    where: {
      OR: [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { author: { name: { contains: searchTerm, mode: 'insensitive' } } },
      ],
    },
  })
  if (!result) {
    throw new Error(`Post retrive failed`)
  }

  return result
}

export const getPostService = async (id: number): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
  })

  if (!result) {
    throw new Error(`Post retrive failed`)
  }

  return result
}

export const updatePostService = async (
  id: number,
  data: Post
): Promise<Post | null> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data,
  })

  if (!result) {
    throw new Error(`Post udpate failed`)
  }

  return result
}

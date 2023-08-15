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
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions)
  const { searchTerm, ...filtersData } = filters

  // const andConditions = []

  // search on the filed
  // if (searchTerm) {
  //   andConditions.push({
  //     OR: postSearchableFields.map(field => ({
  //       [field]: {
  //         contains: searchTerm,
  //         mode: 'insensitive',
  //       },
  //     })),
  //   })
  // }

  console.log(page, limit, skip, searchTerm, filtersData)
  const result = await prisma.post.findMany({
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

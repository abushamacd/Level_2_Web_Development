import { PrismaClient, Post } from '@prisma/client'
const prisma = new PrismaClient()

export const createPostService = async (data: Post): Promise<Post | null> => {
  const result = await prisma.post.create({
    data,
  })
  return result
}

export const getPostsService = async (): Promise<Post[] | null> => {
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
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

import { PrismaClient, Category } from '@prisma/client'
const prisma = new PrismaClient()

export const createCategoryService = async (
  data: Category
): Promise<Category | null> => {
  const result = await prisma.category.create({
    data,
  })
  return result
}

export const getCategorysService = async (): Promise<Category[] | null> => {
  const result = await prisma.category.findMany()
  if (!result) {
    throw new Error(`Category retrive failed`)
  }

  return result
}

export const getCategoryService = async (
  id: number
): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  })

  if (!result) {
    throw new Error(`Category retrive failed`)
  }

  return result
}

export const updateCategoryService = async (
  id: number,
  data: Category
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: data.name,
    },
  })

  if (!result) {
    throw new Error(`Category udpate failed`)
  }

  return result
}

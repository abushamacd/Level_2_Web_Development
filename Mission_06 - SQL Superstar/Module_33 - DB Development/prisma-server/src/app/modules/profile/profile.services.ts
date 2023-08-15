import { PrismaClient, Profile } from '@prisma/client'
const prisma = new PrismaClient()

export const createProfileService = async (
  data: Profile
): Promise<Profile | null> => {
  const result = await prisma.profile.findUnique({
    where: {
      id: data.userId,
    },
  })

  if (!result) {
    const result = await prisma.profile.create({
      data,
    })
    return result
  }

  throw new Error(`Profile already exist`)
}

export const getProfilesService = async (): Promise<Profile[] | null> => {
  const result = await prisma.profile.findMany()
  if (!result) {
    throw new Error(`Profile retrive failed`)
  }

  return result
}

export const getProfileService = async (
  id: number
): Promise<Profile | null> => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
  })

  if (!result) {
    throw new Error(`Profile retrive failed`)
  }

  return result
}

export const updateProfileService = async (
  id: number,
  data: Profile
): Promise<Profile | null> => {
  const result = await prisma.profile.update({
    where: {
      id,
    },
    data: {
      bio: data.bio,
    },
  })

  if (!result) {
    throw new Error(`Profile udpate failed`)
  }

  return result
}

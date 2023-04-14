import type { User } from "@clerk/nextjs/dist/api";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    userName: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

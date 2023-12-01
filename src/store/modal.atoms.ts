import { atomWithReset } from 'jotai/utils'

/**,
 * Base atoms
 */
const openedAtom = atomWithReset<boolean>(false)
const loginAtom = atomWithReset<boolean>(false)

export const modalStore = {
    openedAtom,
    loginAtom,
}

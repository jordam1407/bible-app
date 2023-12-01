/* eslint-disable @typescript-eslint/no-explicit-any */
import { firebaseApp } from '@src/common/adapter/firebase.adapter'
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    User,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

const { auth } = firebaseApp

async function verifyEmail({ user }: { user: User }) {
    await sendEmailVerification(user)
}

async function signUp({ email, password }: { email: string; password: string }) {
    try {
        const signedUpUser = await createUserWithEmailAndPassword(auth, email, password)
        await verifyEmail(signedUpUser)
        return signedUpUser
    } catch (error: any) {
        const errorCode = error.code
        throw new Error(errorCode)
    }
}

async function signIn({ email, password }: { email: string; password: string }) {
    try {
        const signedInUser = await signInWithEmailAndPassword(auth, email, password)
        return signedInUser.user
    } catch (error: any) {
        const errorCode = error.code
        throw new Error(errorCode)
    }
}

async function signOutFunc() {
    try {
        await signOut(auth)
    } catch (error: any) {
        const errorCode = error.code
        throw new Error(errorCode)
    }
}

export const AuthService = { signUp, signIn, verifyEmail, signOutFunc }

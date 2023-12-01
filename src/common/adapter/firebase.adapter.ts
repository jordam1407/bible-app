/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { Firestore, initializeFirestore } from 'firebase/firestore'

import { env } from '../config/env.config'

export type FirebaseAppConfig = {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

class FirebaseAdapter {
    private static instance: FirebaseAdapter
    private firebaseApp: FirebaseApp
    protected firebaseConfig: FirebaseAppConfig
    public _auth: Auth
    public _firestore: Firestore

    private constructor(firebaseConfig: FirebaseAppConfig) {
        this.firebaseConfig = firebaseConfig
        this.firebaseApp = initializeApp(this.firebaseConfig)
        this._auth = initializeAuth(this.firebaseApp, {
            persistence: getReactNativePersistence(ReactNativeAsyncStorage),
        })
        this._firestore = initializeFirestore(this.firebaseApp, {
            experimentalForceLongPolling: true,
        })
    }

    static getInstance(firebaseConfig: FirebaseAppConfig): FirebaseAdapter {
        if (!FirebaseAdapter.instance) {
            FirebaseAdapter.instance = new FirebaseAdapter(firebaseConfig)
        }
        return FirebaseAdapter.instance
    }

    get auth(): Auth {
        return this._auth
    }

    get firestore(): Firestore {
        return this._firestore
    }
}

const firebaseConfig: FirebaseAppConfig = env

export const firebaseApp = FirebaseAdapter.getInstance(firebaseConfig)

import firebase from '../service/config';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState();

    const provider = new firebase.auth.GoogleAuthProvider();

    const authentication = async () => {
        try {
            const data = await firebase.auth()
                        .signInWithRedirect(provider);

            if(!data) {
                setUser(data);
            };
        }catch(error) {
            console.log(error);
        };
    };

    return (
        <UserContext.Provider
            value={{
                user,
                authentication,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}